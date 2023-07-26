import { FunctionComponent } from "react";
import { Grid, styled } from "@mui/material";
import SocialCard from "../../social-cards";
import { UserProps, Platform } from '@/types/users/userprops';


const MainGrid = styled(Grid)({
  backgroundColor: 'rgba(0,0,0,0)',
  marginLeft: "auto",
  marginRight: "auto",
  padding: 0,
  height: '100vh',
  width: '100vw',
  flexGrow: 1,
  position: 'relative',
  top: 0,
  left: 0,
  overflow: 'hidden',
  boxSizing: 'border-box',
  marginTop: 0,
});


const ItemGrid = styled(Grid)({
  marginLeft: "auto",
  marginRight: "auto",
  padding: 0,
  paddingLeft: 0,
  paddingRight: 0,
  height: '100vh',
  width: '50vw',
  flexGrow: 1,
});

const TheTeam: FunctionComponent = () => {


    const yaser: UserProps = {
        name: "Yaser Ibrahim",
        img: "https://yessur3808.github.io/webb00/img/profpic-removebg.png",
        position: 'Software Engineer',
        desc: "I'm a Full Stack Software Engineer, currently based in Hong Kong, that specializes in web development.",

        social: [
            {
                platform: Platform.twitter,
                link: 'curlycoffee3808',
              },
              {
                platform: Platform.linkedin,
                link: 'yaser-ibrahim-57963884',
              },
              {
                platform: Platform.email,
                link: 'yaser3808@gmail.com',
              },
              {
                platform: Platform.website,
                link: 'https://yaseribrahim3808.ml/',
              },
        ],
        bgcolor: '#00A1AB',
    };


    const ansh = {
        name: "Ansh Grey",
        img: "https://media.licdn.com/dms/image/C5603AQGAkclyqvmSGw/profile-displayphoto-shrink_800_800/0/1595171381599?e=2147483647&v=beta&t=6V9-W5M75jr834dmBfaBMaXnIaGaC4MxoK1q_U7Mr9Y",
        position: 'Lead Designer',
        desc: "text text text text text.",
        
        social: [
            {
                platform: Platform.twitter,
                link: "ansh_grey",
            },
            {
                platform: Platform.linkedin,
                link: "anshgrey",
            },
            {
                platform: Platform.email,
                link: "anshg59@gmail.com",
            },
            {
                platform: Platform.website,
                link: "https://anshgrey.com/",
            }
        ],
        bgcolor: '#FF008A',
    };


  return (
    <MainGrid id="team" container spacing={2}>
      <ItemGrid>
          <SocialCard user={yaser}/>
      </ItemGrid>
      <ItemGrid>
        <SocialCard user={ansh} />
      </ItemGrid>
    </MainGrid>
  );
};


export default TheTeam;