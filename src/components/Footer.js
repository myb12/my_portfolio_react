import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  .project-icons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    a {
      width: 2rem;
      margin-right: 1rem;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Mohammmad Yasin</h1>
          <PText>
            I'm Yasin, a web developer with sound knowledge of front-end and
            back-end techniques. I love structure and order and I also stand for
            quality.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
              {
                type: '',
                title: 'Download My Resume',
                path:
                  'https://drive.google.com/file/d/1u9zOjVLaKTsCI_FEadB22GWDEAE0ym5i/view?usp=sharing',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+8801674687835',
                path: 'tel:+8801674687835',
              },
              {
                title: 'mohammadyasinbappy@gmail.com',
                path: 'mailto:mohammadyasinbappy@gmail.com',
              },
              {
                title: 'Farmgate, Dhaka, Bangladesh',
                path: 'https://goo.gl/maps/QMCoUvc1BFgTvP1M8',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/myb12',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/mohammad-yasin-bappy/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/mybappy12',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            <div className="project-icons">
              © 2021 - Mohammad Yasin |{'  '}
              <a
                href="https://github.com/myb12"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-yasin-bappy/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin style={{ '&:hover': { color: 'red' } }} />
              </a>
              <a
                href="https://twitter.com/mybappy12"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
            </div>
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
