import React, { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Title from "../../components/title/Title";
import classes from './index.module.scss';
import { getSingleDoc } from "../../utilities/api";

function About() {
  const [aboutData, setAboutData] = useState();
  const [isMobileSize, setIsMobileSize] = useState(false);

  const getPageData = async () => {
    const rtAboutData = await getSingleDoc('ABOUT', 'ABOUT_CONTENT');
    // console.log(`useeffect rtData -> `, { rtAboutData });

    setAboutData(rtAboutData.aboutText);

    sessionStorage.setItem('ABOUT', JSON.stringify(rtAboutData.aboutText))
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('ABOUT')
    storageData === null ? getPageData() : setAboutData(JSON.parse(storageData));

    setIsMobileSize(window.innerWidth < 900);
  }, []);

  return (
    <div className={classes.pageContainer}>
      {!isMobileSize ? <Title textContent="About" fontSize="64" color="dark" wide="expand" isUnderline textAlign="start" /> : <Title textContent="About" fontSize="48" color="dark" wide="expand" isUnderline textAlign="center" />}
      {aboutData && aboutData.map((data, index) => (
        <Content contentType='string' textContent={data} fontSize='l' color='dark' isCenter={isMobileSize} key={index} />
      ))}

      <div className={classes.background}></div>
    </div>
  );
}

export default About;