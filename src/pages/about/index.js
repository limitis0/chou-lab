import React, { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import Title from "../../components/title/Title";
import classes from './index.module.scss';
import { getSingleDoc } from "../../utilities/api";


function About() {
  const [aboutData, setAboutData] = useState();
  const [isShowEnterScreen, setIsShowEnterScreen] = useState(true);

  const arrowSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M31.76 18.58L24 26.34L16.24 18.58C15.46 17.8 14.2 17.8 13.42 18.58C12.64 19.36 12.64 20.62 13.42 21.4L22.6 30.58C23.38 31.36 24.64 31.36 25.42 30.58L34.6 21.4C35.38 20.62 35.38 19.36 34.6 18.58C33.82 17.82 32.54 17.8 31.76 18.58Z" fill="white" />
  </svg>);

  const handleEnter = () => setIsShowEnterScreen(false);

  const getPageData = async () => {
    const rtAboutData = await getSingleDoc('ABOUT', 'ABOUT_CONTENT');
    setAboutData(rtAboutData.aboutText);

    localStorage.setItem('ABOUT', rtAboutData.aboutText)
  }

  useEffect(() => {
    const storageData = localStorage.getItem('ABOUT')
    storageData === null ? getPageData() : setAboutData(storageData);
  }, []);

  return (
    <div className={classes.pageContainer}>
      <div className={`${classes.enterScreenContainer} ${!isShowEnterScreen && classes.hide}`} onClick={() => handleEnter()}>
        <Title textContent="Chou Lab" fontSize="72" color="light" wide="fit" isUnderline={false} />
        <Title textContent="Behavioral ecology and Evolution of Animal Communication" fontSize="32" color="light" wide="fit" isUnderline={false} />
        <div className={classes.arrowDown}>
          {arrowSVG()}
        </div>
      </div>
      <Title textContent="About" fontSize="64" color="dark" wide="expand" isUnderline textAlign="start" />
      {aboutData && <Content textContent={aboutData} fontSize='l' color='dark' />}

      <div className={classes.background}></div>
    </div>
  );
}

export default About;