import React from 'react';
import Image from 'next/image'
import { Icon } from '@iconify/react';
// images and gifs imports


export default function Projects() {
  return (
    <div className="container work-body" id="work">

      <h1 className="projectsTitle"><i className="fas fa-angle-double-right"></i> Projects</h1>

      <hr className="hrProjects"></hr>

      <div className="card customCard">
        <Image className="card-img-top main-img-height" src="/assets/images/pandorabox_screenshot.png" alt="patienttracker" layout="responsive" width={6} height={3.7} /> 
        <div className="card-body main-card-body d-flex flex-column">
          <h2 className="card-title"><ins>Pandoras Box</ins></h2>
          <p className="card-text h5">Full stack application foLLowing the M.E.R.N diagram. This application utilizes technology&apos;s like Next.js, React, and GraghQL to help the workflow and better the quality of the application all together. Below are the links for the GitHub repository and Vercel webpage!</p>
        </div>
        <div className="card-footer">
          <div className="text-center mt-auto">
            <a target="_blank" rel="noreferrer" href="https://github.com/AustinJoo97/Pandoras-Box" className="btn p-btn-color btn-lg  custom-length-pm" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
            <a target="_blank" rel="noreferrer" href="/" className="btn btn-secondary btn-lg  custom-length-sm" role="button" aria-pressed="true"><i className="fas fa-window-maximize"></i></a>
          </div>
        </div>
      </div>

      <div className="card customCard">
        <Image className="card-img-top main-img-height" src="/assets/gifs/patienttrackergif.gif" alt="patienttracker" layout="responsive" width={6} height={3.7} /> 
        <div className="card-body main-card-body d-flex flex-column">
          <h2 className="card-title"><ins>MVC Patient Tracker</ins></h2>
          <p className="card-text h5">Full stack application following MVC paradigm for creating, updating, sorting and deleting patient records. Below are the links for the GitHub repository and <b className="herkou">Heroku</b> webpage!</p>
        </div>
        <div className="card-footer">
          <div className="text-center mt-auto">
            <a target="_blank" rel="noreferrer" href="https://github.com/Captain63/patient-records-tracker" className="btn p-btn-color btn-lg  custom-length-pm" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
            <a target="_blank" rel="noreferrer" href="https://patient-records-tracker.herokuapp.com" className="btn btn-secondary btn-lg  custom-length-sm" role="button" aria-pressed="true"><i className="fas fa-window-maximize"></i></a>
          </div>
        </div>
      </div>

      <div className="card customCard">
        <Image className="card-img-top main-img-height" src="/assets/images/moivenight_screenshot.png" alt="moivenightdoneright" layout="responsive" width={6} height={3.7} />  
        <div className="card-body main-card-body d-flex flex-column">
          <h2 className="card-title"><ins>Movie Night.. Done Right</ins></h2>
          <p className="card-text h5">This assignment was my first group Project! Using <b className="html">html</b>, <b className="css">css</b>, and <b className="javascript">javascript</b> we made a movie catalog! Below are the links for the GitHub repository and <b className="herkou">Heroku</b> webpage!</p>
        </div>
        <div className="card-footer">
          <div className="text-center mt-auto">
            <a target="_blank" rel="noreferrer" href="https://github.com/AustinJoo97/MovieNightDoneRight" className="btn p-btn-color btn-lg  custom-length-pm" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
            <a target="_blank" rel="noreferrer" href="https://austinjoo97.github.io/MovieNightDoneRight/" className="btn btn-secondary btn-lg  custom-length-sm" role="button" aria-pressed="true"><i className="fas fa-window-maximize"></i></a>
          </div>
        </div>
      </div>

      <h1 className="assignmentsTitle" id="assignments">Assignments <i className="fas fa-angle-double-left"></i></h1>

      <hr className="hrAssignments"></hr>

      <div className="row row-cols-1 row-cols-md-3 g-4">

        <div className="col paddingTop">
          <div className="card h-100 customCard">
            <Image className="card-img-top main-img-height" src="/assets/gifs/mern.gif" alt="mern" layout="responsive" width={6} height={3.5} />  
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>M.E.R.N</ins></h3>
              <p className="card-text"> Full stack web application utilizing the mern work stack. Below is the link to the Github and <b className="herkou">Heroku</b> page</p>
            </div>
            <div className="card-footer">
            <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/mern-book-search" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://joli-vin-25718.herokuapp.com/" className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><Icon className="iconify" icon="simple-icons:heroku" data-inline="false"/></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/gifs/pwa.gif" alt="pwa" layout="responsive" width={6} height={3.5} />   
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>Progressive Web Application</ins></h3>
              <p className="card-text"> Full stack web application to track your spending&apos;s on the fly by utilizing webpack to run offline. Below is the link to the Github and <b className="herkou">Heroku</b> page</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/progressive-web-app" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://calm-crag-38234.herokuapp.com/" className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><Icon className="iconify" icon="simple-icons:heroku" data-inline="false"/></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/gifs/mdb_workout.gif" alt="mdb_workout" layout="responsive" width={6} height={3.5} />   
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>Workout Tracker/MongoDB</ins></h3>
              <p className="card-text"> Full stack web application to track workout&apos;s, utilizing MongoDB for the backend. Below is the link to the Github and <b className="herkou">Heroku</b> page</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/mvc_techblog" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://infinite-sands-02853.herokuapp.com/" className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><Icon className="iconify" icon="simple-icons:heroku" data-inline="false"/></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/images/regex-url.png" alt="regextutorial" layout="responsive" width={6} height={3.5} />  
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>Regex Tutorial</ins></h3>
              <p className="card-text"> This is a tutorial describing how the regex for matching a URL works. Below is the repository for the Gist on Github!</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://gist.github.com/brandonfordd/2fc4ca41dec6a856e25334ac65ba7dac" className="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub Gist </b><i className="fab fa-github-square"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/images/mvctech.png" alt="mvctech" layout="responsive" width={6} height={3.5} />   
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>MVC Techblog</ins></h3>
              <p className="card-text"> Building a full stack website for tech bloggers to post, update, and delete blogs! Below is the link to the Github and <b className="herkou">Heroku</b> page</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/mvc_techblog" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://immense-lake-51774.herokuapp.com/" className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><Icon className="iconify" icon="simple-icons:heroku" data-inline="false"/></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/gifs/sql_gif.gif" alt="mysqltracker" layout="responsive" width={6} height={3.5} />   
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>Employee Tracker</ins></h3>
              <p className="card-text">Using MySql we were task with designing a database for sorting and tracking employee! Below is the Github for more information</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/sql_employee_tracker" className="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/gifs/categories.gif" alt="ecommercebackend" layout="responsive" width={6} height={3.5} />   
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>E-Commerce Backend</ins></h3>
              <p className="card-text"> Using MySql we were task with building the back end for an e-commerce site using Express.js and Sequelize. Below is the GitHub repository for more information!</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/e_commerce_backend" className="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/gifs/notetaker_ppreview.gif" alt="notetaker" layout="responsive" width={6} height={3.5} />  
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>Express Note Taker</ins></h3>
              <p className="card-text">This is a Express Note taking application deployed on <b className="herkou">Heroku</b> to show backend server development! Below are the links for the GitHub repository and deploy <b className="herkou">Heroku</b> page!</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/notetaker" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://intense-retreat-13384.herokuapp.com/" className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><Icon className="iconify" icon="simple-icons:heroku" data-inline="false"/></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/gifs/readme_preview.gif" alt="readme_generator" layout="responsive" width={6} height={3.5} /> 
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>Readme Generator</ins></h3>
              <p className="card-text">Using <b className="node">node.js</b> and <b className="javascript">Javascript</b> you can generate custom readme files for any work flow. Below are the links for the GitHub repository for more information!</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/readme_generator" className="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/gifs/team_profile.gif" alt="teamcard_generator" layout="responsive" width={6} height={3.5} /> 
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>Team Profile Generator</ins></h3>
              <p className="card-text">Using <b className="node">node.js</b> and <b className="javascript">Javascript</b> you can generate custom Team Profile html file to fit any work flow. Below are the links for the GitHub repository for more information!</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/teamcard_generator" className="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard  ">
          <Image className="card-img-top main-img-height" src="/assets/images/screenshot-weatherapp.png" alt="weather_app" layout="responsive" width={6} height={3.5} /> 
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title"><ins>Weather Dashboard</ins></h3>
              <p className="card-text">This is a weather dashboard made with <b className="moment">OpenWeather Api</b>! Below are the links for the GitHub repository and webpage</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/weather_app" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/weather_app/" className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i className="fas fa-window-maximize"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/images/screenshot-passgen.png" alt="password_generator" layout="responsive" width={6} height={3.5} /> 
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title"><ins>Password Generator</ins></h3>
              <p className="card-text h">This is a password generator made with <b className="javascript">javascript</b>! Below are the links for the GitHub repository and webpage</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/password_generator" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/password_generator/" className="btn btn-secondary btn-lg  custom-length-ss" role="button" aria-pressed="true"><i className="fas fa-window-maximize"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/images/screenshot-javaquiz.png" alt="javascript_quiz" layout="responsive" width={6} height={3.5} /> 
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title"><ins>Javascript Quiz</ins></h3>
              <p className="card-text">This is a Javascript Quiz using only <b className="javascript">javascript</b>! Below are the links for the GitHub repository and webpage</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/javascript_quiz" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/javascript_quiz/" className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i className="fas fa-window-maximize"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/images/screenshot-dayplanner.png" alt="day_planner" layout="responsive" width={6} height={3.5} /> 
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title"><ins>Day Planner</ins></h3>
              <p className="card-text">This is a day planner using <b className="javascript">Javascript</b> and <b className="moment">moment.js</b>! Below are the links for the GitHub repository and webpage</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/day_planner" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/day_planner/" className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i className="fas fa-window-maximize"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col paddingTop">
          <div className="card h-100 customCard">
          <Image className="card-img-top main-img-height" src="/assets/images/horiseon_site.png" alt="horiseon_website" layout="responsive" width={6} height={3.5} /> 
            <div className="card-body group-card-body d-flex flex-column">
              <h3 className="card-title "><ins>Horison Site Refractment</ins></h3>
              <p className="card-text">This assignment was to <b className="refract">refract</b> a pre-made site called Horison! Below are the links for the GitHub repository and webpage!</p>
            </div>
            <div className="card-footer">
              <div className="text-center mt-auto">
                <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/horiseon_refactor" className="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i className="fab fa-github-square"></i></a>
                <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/horiseon_refactor/" className="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i className="fas fa-window-maximize"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr></hr>

    </div>
  );
}
