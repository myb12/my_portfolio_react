import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .cv-btn {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Mohammad Yasin</span>
              </p>
              <h2 className="about__heading">A Web Developer</h2>
              <div className="about__info">
                <PText>
                  I'm Yasin, a web developer with deep knowledge and proficiency
                  in JavaScript, ReactJs, HTML, CSS, React Bootstrap, Material
                  UI, and mobile responsive website development, as well as a
                  strong ability to effectively design, efficient coding, and
                  debug application codes.
                  <br /> <br />
                  And with sound knowledge of NodeJs, ExpressJs, MongoDb, PHP,
                  Laravel, MySQL.
                  <br /> <br />
                  I love spending time on fixing little details and optimizing
                  web apps.
                  <br />
                  <br />
                  Also I like working in a team, you'll learn faster and much
                  more. As the saying goes: 'Two heads are better than one'.
                </PText>
              </div>
              <a
                className="cv-btn"
                target="_blank"
                href="https://drive.google.com/file/d/16XGZUfLvwOX8gTAvRQW_GIepzKxSsIA2/view?usp=sharing"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Halishahar Meher Afjal High School, Chattogram']}
              />
              <AboutInfoItem
                title="College"
                items={['BAF Shaheen College, Chittagong']}
              />
              <AboutInfoItem
                title="University"
                items={['University Of Science & Technology Chittagong']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['JavaScript', 'ReactJs', 'HTML', 'CSS']}
              />
              <AboutInfoItem
                title="follows"
                items={['React Bootstrap', 'Material UI', 'Tailwind CSS']}
              />
              <AboutInfoItem
                title="follows"
                items={['REST API', 'Axios', 'Firebase']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['NodeJs', 'ExpressJs', 'MongoDb']}
              />
              <AboutInfoItem
                title="follows"
                items={['PHP', 'Laravel', 'MySQL']}
              />
              <AboutInfoItem
                title="Design"
                items={['Figma', 'Illustrator', 'Photoshop']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="Oct, 2021 to Present"
                items={['Front-End Developer(React) at Tech Hack Canada']}
              />
              <AboutInfoItem
                title="Nov, 2020 to Sep, 2021"
                items={['Junior Web Developer(Laravel) at Softimize.Tech']}
              />
              <AboutInfoItem
                title="Aug, 2019 to Sep, 2020"
                items={['Junior Executive at Pacific Jeans']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

// Javascript, ReactJs, REST API, React Router, React Hook, Axios, HTML5, CSS3, Bootstrap, React Bootstrap,
//   Material UI, Tailwind css.
