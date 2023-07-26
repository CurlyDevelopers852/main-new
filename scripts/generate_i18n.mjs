import axios from 'axios';
import papa from 'papaparse';
import fs from 'fs';

const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQymJDoWdbW5z7LBhgNLttYaqZDmai1CSDIUA_QNe2VBBGo6tRtE5sfhRA5M0w_9yrHDnzgxYhTlf9D/pub?gid=0&single=true&output=csv';

async function fetchSheet(csvURL) {
  const { data } = await axios.get(csvURL);
  return papa.parse(data).data;
}

async function parseSheetData(sheetData) {
  const locales = sheetData.shift().slice(1).map(locale => ({ locale, keys: {} }));

  sheetData
    .sort((a, b) => a[0] - b[0])
    .forEach(([key, ...values]) => {
      values.forEach((value, index) => {
        if (value && value.length > 0) {
          locales[index].keys[key] = value;
        }
      });
    });

  return locales;
}

async function saveToDisk(localDatas) {
  localDatas.forEach(({ locale, keys }) => {
    fs.writeFileSync(
      `./src/language/${locale}.json`,
      JSON.stringify(keys, null, 2)
    );
  });
}

async function main() {
  console.log('Fetching sheet...');
  const sheetData = await fetchSheet(SHEET_CSV_URL);
  console.log('Parsing sheet...');
  const parsedData = await parseSheetData(sheetData);
  await saveToDisk(parsedData);
  console.log('🍻 All set');
}

main();