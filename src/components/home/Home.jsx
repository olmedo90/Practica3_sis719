import React from 'react';
import PropTypes from 'prop-types';
import Style from './Home.module.scss';
import me from '../../img/perfil.jpg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import {Container} from "@mui/material";
export default function Home({ primary, backgroundColor, label, ...props }) {

   return (
      <Container type="button"
      className={['storybook-button']}
      style={backgroundColor && { backgroundColor }}
      {...props}>
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.90rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, webkitBackgroundClip: 'text', webkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map(bio => (
                  <EmojiBullet emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map(social => (
                  <SocialIcon link={social.link} icon={social.icon} />
               ))}
            </Box>
         </Box>
      </Box>
      </Container>
   )
}



Home.propTypes = {
   /**
    * Is this the principal call to action on the page?
    */
   ControlBaground: PropTypes.bool,
   /**
    * What background color to use
    */
   backgroundColor: PropTypes.string,
   /**
    * How large should the button be?
    */
   
   /**
    * Button contents
    */
   label: PropTypes.string.isRequired,
   /**
    * Optional click handler
    */
   onClick: PropTypes.func,
 };
 
 Home.defaultProps = {
   backgroundColor: null,
   primary: false,
   
   onClick: undefined,
 };
 