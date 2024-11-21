import React, { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Title from "../../components/title/Title";
import classes from './index.module.scss';
import { getSingleDoc } from "../../utilities/api";

function About() {
  const [aboutData, setAboutData] = useState();
  const [aboutPhotoUrl, setAboutPhotoUrl] = useState('');
  const [isMobileSize, setIsMobileSize] = useState(false);

  const handleBackground = () => {
    const bg = document.getElementById("background");
    console.log(bg);
    bg.style.background = `linear-gradient(to right, rgba(255,255,255,0) 50%, var(--color-lighter)), url(${aboutPhotoUrl}) no-repeat`
    bg.style.backgroundSize = 'cover';
  };

  const setPageData = (data) => {
    setAboutData(data.aboutText);
    setAboutPhotoUrl(data.aboutPhoto);
  }

  const getPageData = async () => {
    const rtAboutData = await getSingleDoc('ABOUT', 'ABOUT_CONTENT');
    console.log(`useeffect rtData -> `, { rtAboutData });

    setPageData(rtAboutData);

    sessionStorage.setItem('ABOUT', JSON.stringify(rtAboutData))
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('ABOUT')
    storageData === null ? getPageData() : setPageData(JSON.parse(storageData));

    setIsMobileSize(window.innerWidth < 900);

    handleBackground();
  }, []);

  return (
    <div className={classes.pageContainer}>
      {!isMobileSize ? <Title textContent="About" fontSize="64" color="dark" wide="expand" isUnderline textAlign="start" /> : <Title textContent="About" fontSize="48" color="dark" wide="expand" isUnderline textAlign="center" />}
      {aboutData && aboutData.map((data, index) => (
        <Content contentType='string' textContent={data} fontSize='l' color='dark' isCenter={isMobileSize} key={index} />
      ))}

      <div id="background" className={classes.background}></div>
    </div>
  );
}

export default About;