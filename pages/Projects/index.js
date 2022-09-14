import React from 'react';
import Image from 'next/image'
import { Icon } from '@iconify/react';
// images and gifs imports
// import {assignments} from '../../data/assignments.json';
// import {projects} from '../../data/projects.json';
import { Container, Col, Card } from "react-bootstrap";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from '../../styles/Carousel.module.css';

// https://react-slick.neostack.com/docs/api
// slider settings

const settingsProjects = {
  accessibility: true,
  dots: true,
  infinite: true,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  dotsClass: 'slick-dots',
  speed: 400,
  slidesToShow:2,
  slidesToScroll: 1,
  initialSlide: 1,
  responsive: [
      {
        breakpoint: 960,
        settings: {
            slidesToShow: 1,
        }
      }
  ]
};

const settingsAssignments = {
    accessibility: true,
    dots: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    dotsClass: 'slick-dots',
    speed: 400,
    slidesToShow:4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 3,
            }
        },
        {
          breakpoint: 980,
          settings: {
              slidesToShow: 2,
          }
        },
        {
          breakpoint: 750,
          settings: {
              slidesToShow: 1,
          }
        }
    ]
};


export default function Projects() {

  let assignments = require('../../data/assignments.json')
  let projects = require('../../data/projects.json')

  return (
    
    <div className="container work-body" id="work">
      
      <Container className="px-4">
        <Col>
          <div className="assignmentsTitleWrapper mb-5">
            <h1 className="projectsTitle">Projects</h1>
          </div>
          <Slider {...settingsProjects}>
              {projects &&
                projects.map((projects) => (
                  <Col key={projects.id} lg="3">
                    <Card className={styles.cardProjects}>
                      <div className="embed-responsive">
                        <Image className="card-img-top main-img-height" src={projects.img} alt={projects.name} layout="responsive" width={6} height={3.5} /> 
                      </div>
                      <Card.Body className= {styles.body}>
                          <h3><ins>{projects.title}</ins></h3>
                          <p className="card-text">{projects.disc}</p>
                      </Card.Body>
                      <Card.Footer className= {styles.footer} >
                      <div className="text-center mt-auto">
                          {projects.link
                            ? <a target="_blank" rel="noreferrer" href={projects.github} className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i  aria-hidden className="fab fa-github-square"></i></a>
                            : <a target="_blank" rel="noreferrer" href={projects.github} className="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i  aria-hidden className="fab fa-github-square"></i></a>
                          }
                          {projects.link
                            ? <a target="_blank" rel="noreferrer" href={projects.link} className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i  aria-hidden className="fas fa-external-link-alt"></i></a>
                            : <div></div>
                          }
                        </div>
                      </Card.Footer>
                    </Card>
                  </Col>
                  )
                )
              }
          </Slider>
        </Col>
      </Container>
      <hr className="hrProjects"></hr>
      <Container className="px-4">
        <Col >
          <div className="assignmentsTitleWrapper mb-5">
            <h1 className="assignmentsTitle" id="assignments">Assignments</h1>
          </div>
          <Slider {...settingsAssignments}>
              {assignments &&
                assignments.map((assignments) => (
                  <Col key={assignments.id} lg="3">
                    <Card className={styles.cardAssignments}>
                      <div className="embed-responsive">
                        <Image className="card-img-top main-img-height" src={assignments.img} alt={assignments.name} layout="responsive" width={6} height={3.5} /> 
                      </div>
                      <Card.Body className= {styles.body}>
                          <h3><ins>{assignments.title}</ins></h3>
                      </Card.Body>
                      <Card.Footer className= {styles.footer} >
                        <div className="text-center mt-auto">
                          {assignments.link
                            ? <a target="_blank" rel="noreferrer" href={assignments.github} className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i  aria-hidden className="fab fa-github-square"></i></a>
                            : <a target="_blank" rel="noreferrer" href={assignments.github} className="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i  aria-hidden className="fab fa-github-square"></i></a>
                          }
                          {assignments.link
                            ? <a target="_blank" rel="noreferrer" href={assignments.link} className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i  aria-hidden className="fas fa-external-link-alt"></i></a>
                            : <div></div>
                          }
                        </div>
                      </Card.Footer>
                    </Card>
                  </Col>
                  )
                )
              }
          </Slider>
        </Col>
      </Container>
      <hr className="hrAssignments"></hr>

    </div>
  );
}
