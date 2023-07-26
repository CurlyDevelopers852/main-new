import React, { FunctionComponent }  from "react";
import { OuterBox } from "@/components/outer-container";
import { HeadingTxt } from "@/components/title-txt";
import CardBg from "@/components/background/color";
import {
  Box,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
 
import RunawayButton from './runaway-btn';

const ExternalBox = styled(Box)({
  display: "flex",
  position: 'relative',
  flexDirection: "column",
  alignItems: "center",
  border: '2px solid white',
  background: 'rgba(255,255,255,0.2)',
  zIndex: 2,
  maxWidth: '1000px',
  boxSizing: 'border-box',
  padding: '42px',
  marginTop: 0,
  borderRadius: '41px',
  margin: '0 auto',
  userSelect: 'none',
});

const FormHeadingTxt = styled(Typography)({
  fontFamily: 'Avenir',
  fontSize: '28px',
  fontWeight: 800,
  lineHeight: '38px',
  letterSpacing: '0.05em',
  textAlign: 'center',    
  textTransform: 'uppercase',
  color: 'white',
  position: 'relative',
  zIndex: 2,
});

const BoxForm = styled(Box)({
  display: "block",
  alignItems: "center",
  lineHeight: '46px',
  fontSize: '34px',
});

const CustomTxt = styled(Typography)({
  position: 'relative',
  display: 'inline-block',
  fontSize: '22px',
});

const CustomInputs = styled(TextField)(({
  display: "inline-block",
  fontSize: "22px",
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputBase-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
      borderBottom: '1.2px solid white',
      borderRadius: 0,
    },
    '&:hover fieldset': {
      borderBottom: '1.2px solid white',
      borderRadius: 0,
    },
    '&.Mui-focused fieldset': {
      borderBottom: '1.2px solid white',
      borderRadius: 0,
    },
  },
}));

const SubmitBtnBox = styled(Box)({
  position: 'relative',
  display: 'block',
  width:'60%',
  height: '220px',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

const ContactSection: FunctionComponent = () => {

  return (
    <OuterBox id="contact" className="section-2">
      <CardBg bgcolor={"#1B1B1B"} />
      <HeadingTxt className="contact">CONTACT</HeadingTxt>

      <ExternalBox>
        <FormHeadingTxt className="get-started-now">GET STARTED NOW</FormHeadingTxt>
        <BoxForm>
          <CustomTxt variant="body1">
            Hey Curly Developers, my name is
          </CustomTxt>
          <CustomInputs
            InputLabelProps={{shrink: true}}
          />
          <CustomTxt variant="body1">and I want to discuss</CustomTxt>
          <CustomInputs
            InputLabelProps={{shrink: true}}
          />
          <CustomTxt variant="body1">
            with you. You can reach me via my email
          </CustomTxt>
          <CustomInputs 
            InputLabelProps={{shrink: true}}
          />
          <CustomTxt variant="body1">or phone</CustomTxt>
          <CustomInputs
            InputLabelProps={{shrink: true}}
          />
          <CustomTxt variant="body1">
            In a nutshell, here are some details about my project:
          </CustomTxt>
          <CustomInputs
            label="Project details"
            multiline
            rows={4}
            variant="outlined"
          />
          
        </BoxForm>

        <SubmitBtnBox>
          <RunawayButton
              endIcon={<SendIcon />}
              txt='Send'
              disabled={true} 
              onClick={() => console.log('Button clicked!')}
            />
        </SubmitBtnBox>

        
      </ExternalBox>
    </OuterBox>
  );
};

export default ContactSection;