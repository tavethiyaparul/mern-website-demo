import React from 'react';
import Common from './common';
import web from '../Image/home1.jpg'

const About = () => {
  return (
    <>
     { < Common name=" Welcome To About Page" imgsrc={web} visit="./contact" btn="Contact Now"/>}
    </>
  );
};

export default About;
