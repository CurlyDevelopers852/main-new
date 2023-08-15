import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState('en');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel id="language-switcher-label">Language</InputLabel>
        <Select
          labelId="language-switcher-label"
          id="language-switcher"
          value={language}
          onChange={handleChange}
          label="Language"
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Español</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
