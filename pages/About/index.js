import React from 'react';
import Image from 'next/image'


const styles = {
  skillbarOne: {
    width: '75%',
    backgroundColor: 'rgb(170, 55, 50)',
    animation: 'animated-borderSkillC 1.5s infinite',
  },
  skillbarTwo: {
    width: '60%',
    backgroundColor: 'rgb(170, 55, 50)',
    animation: 'animated-borderSkillC 1.5s infinite',
  },
  skillbarThree: {
    width: '90%',
    backgroundColor: 'rgb(170, 55, 50)',
    animation: 'animated-borderSkillC 1.5s infinite',
  },
  oneS: {
    width: '95%',
  },
  twoS: {
    width: '90%',
  },
  threeS: {
    width: '80%',
  },
  fourS: {
    width: '70%',
  },
  fiveS: {
    width: '45%',
  },
  sixS: {
    width: '90%',
  },
  sevenS: {
    width: '70%',
  },
  eightS: {
    width: '50%',
  },
  nineS: {
    width: '95%',
  },
  tenS: {
    width: '90%',
  },
  elevenS: {
    width: '80%',
  },
  twelveS: {
    width: '90%',
  },
};

export default function About() {
  return (
    <div className="container m-autoC" id="about-me">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="col-md-8 col-lg-10 aboutCard">
            <hr className="hrAbout"></hr>
            <div className="profile-card-4 text-center">
            <Image src="/assets/images/me.jpg" alt="me" width="535" height="510" />
              <div className="profile-content">
                <div className="profile-name" id="contacts">  Brandon Ford
                    <p>@brandonfordd</p>
                </div>
                <div className="profile-description  linear-wipe-big">
                  Hello! My name is Brandon Ford and this is my portfolio! I'm a beginner Software Engineer and Full Stack Web Developer based in the Northern Virginia area. Currently studying at a George Washington University bootcamp for Front-end and Back-end Web Development. Check below for some current projects!</div>
                  <div className="row">
                    <div className="col-12">
                      <div className="container p-1 pb-0">
                        <div className="containerIcons">
                          <a target="_blank" rel="noreferrer" className="btn btn-floating m-1 icons" href="https://github.com/brandonfordd" role="button"
                            ><i className="fab fa-github"></i>
                          </a>
                          <a target="_blank" rel="noreferrer" className="btn btn-floating m-1 icons" href="https://www.linkedin.com/in/brandon-ford617/" role="button"
                            ><i className="fab fa-linkedin"></i>
                            </a>
                          <a target="_blank" rel="noreferrer" className="btn btn-floating m-1 icons" href="https://www.instagram.com/brandonforddd/" role="button"
                            ><i className="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" rel="noreferrer" className="btn btn-floating m-1 icons" href="mailto:brandon.ford.617@gmail.com" role="button"
                            ><i className="fab fa-google"></i>
                          </a>
                          <a role="button" target="_blank" className="btn btn-floating m-1 resumePBtn noWrap " href="assets/downloads/brandonford_resume.pdf">Preview Resume <i className="far fa-file-pdf"></i></a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hrAbout"></hr>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 container skillsWrapper">
          <div className="container d-flex ">
            <h1 className="skillsTitle container"> Skills
              <i id="gear1" className="fa fa-5x fa-gear spin p-primary-color"></i>
              <i id="gear2" className="fa fa-5x fa-gear spin-back p-tertiary-color"></i>
              <i id="gear3" className="fa fa-5x fa-gear spin-back p-tertiary-color"></i>        
            </h1>   
          </div>
          <div className="col-12">
            <hr className="hrSkills"></hr>
            <div className="skillbar skillbarTop" data-percent="75%">
              <div className="skillbar-title noWrap"><i className="far fa-window-maximize"></i> Front End Web Development </div>
              <div className="skill-bar-percent">75%</div>
              <div className="skillbar-bar" style={styles.skillbarOne}></div>
            </div>
            <div className="skillbar" data-percent="95%">
              <div className="skillbar-title"><i className="fab fa-html5"></i> HTML  </div>
              <div className="skill-bar-percent">95%</div>
              <div className="skillbar-bar" style={styles.oneS}></div>
            </div>
            <div className="skillbar" data-percent="90%">
              <div className="skillbar-title"><i className="fab fa-css3-alt"></i> CSS Frameworks |<i> Bootstrap, Foundation</i></div>
              <div className="skill-bar-percent">90%</div>
              <div className="skillbar-bar" style={styles.twoS}></div>
            </div>
            <div className="skillbar" data-percent="80%">
              <div className="skillbar-title"><i className="fab fa-js-square"></i> JavaScript |<i> JQuery, Node, Moment</i></div>
              <div className="skill-bar-percent">80%</div>
              <div className="skillbar-bar" style={styles.threeS}></div>
            </div>
            <div className="skillbar" data-percent="70%">
              <div className="skillbar-title"><i className="fab fa-react"></i> React | <i> Next.js, Webpack, GraphQL</i> </div>
              <div className="skill-bar-percent">70%</div>
              <div className="skillbar-bar" style={styles.fourS}></div>
            </div>
          </div>
          <div className="col-12 ">
            <div className="skillbar" data-percent="60%">
              <div className="skillbar-title noWrap"><i className="fas fa-tools"></i> Back End Web Development </div>
              <div className="skill-bar-percent">60%</div>
              <div className="skillbar-bar" style={styles.skillbarTwo}></div>
            </div>
            <div className="skillbar" data-percent="45%">
              <div className="skillbar-title"><i className="fas fa-database"></i> Databases |<i> MySql, MongoDB </i></div>
              <div className="skill-bar-percent">45%</div>
              <div className="skillbar-bar" style={styles.fiveS}></div>
            </div>
            <div className="skillbar" data-percent="90%">
              <div className="skillbar-title"><i className="fas fa-wrench"></i> APIs </div>
              <div className="skill-bar-percent">90%</div>
              <div className="skillbar-bar" style={styles.sixS}></div>
            </div>
            <div className="skillbar" data-percent="70%">
              <div className="skillbar-title"><i className="fas fa-server"></i> Servers |<i> Heroku, Apollo, Express</i></div>
              <div className="skill-bar-percent">70%</div>
              <div className="skillbar-bar" style={styles.sevenS}></div>
            </div>
            <div className="skillbar" data-percent="50%">
              <div className="skillbar-title"><i className="fas fa-network-wired"> </i>Network <i></i></div>
              <div className="skill-bar-percent">50%</div>
              <div className="skillbar-bar" style={styles.eightS}></div>
            </div>
          </div>
          <div className="col-12">
            <div className="skillbar" data-percent="90%">
              <div className="skillbar-title"><i className="fab fa-pushed"></i> Software Development Life Cycle </div>
              <div className="skill-bar-percent">90%</div>
              <div className="skillbar-bar" style={styles.skillbarThree}></div>
            </div>
            <div className="skillbar" data-percent="95%">
              <div className="skillbar-title"><i className="fas fa-sitemap"></i> Development  | <i> Inspect, Insomia, Next.js </i></div>
              <div className="skill-bar-percent">95%</div>
              <div className="skillbar-bar" style={styles.nineS}></div>
            </div>
            <div className="skillbar" data-percent="90%">
              <div className="skillbar-title"><i className="fas fa-vial"></i> Testing </div>
              <div className="skill-bar-percent">90%</div>
              <div className="skillbar-bar" style={styles.tenS}></div>
            </div>
            <div className="skillbar" data-percent="80%">
              <div className="skillbar-title"><i className="fas fa-chart-bar"></i> Analysis </div>
              <div className="skill-bar-percent">80%</div>
              <div className="skillbar-bar" style={styles.elevenS}></div>
            </div>
            <div className="skillbar" data-percent="90%">
              <div className="skillbar-title"><i className="fas fa-clipboard-check"></i> Deployment | <i> Heroku, Vercel, Github </i></div>
              <div className="skill-bar-percent">90%</div>
              <div className="skillbar-bar" style={styles.twelveS}></div>
              <hr className="hrAbout"></hr>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
