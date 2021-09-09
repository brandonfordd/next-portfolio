import React from 'react';


export default function Resume() {
  return (
    <div id="resume" className="resume container mt-5">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Welcome to my resume! Below you&apos;ll find my previous work experience and knowledge! Enjoy and Contact me if you have any questions:)</p>
        </div>
        <div className="row rowResume">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Brandon Ford</h4>
              <p><em>
                Reliable, quality-focused construction technician/ upcoming Web Developer
                seeking opportunities to learn new skills and develop on the job experience in the
                technology industry. Through my work experience and personal interests, I am a
                quick study and can learn new skills with hands-on training. Looking forward to
                providing my skills in an environment where I can grow and make a difference.
              </em></p>
              <ul>
                <li>Ashbrun 20147, Virginia</li>
                <li>(571) 420-9520</li>
                <li>brandon.ford.617@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4> Advanced Javascript &amp; Front and Back End Web Design</h4>
              <h5>2021 - 2021</h5>
              <p><em>George Washington University, Ashburn , VA</em></p>
              <p> An online Bootcamp designed to teach advanced javascript skill to develop websites, build a career in web development, and learn technical skills in the Javascript language. </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Construction Technician </h4>
              <h5>2018 - 2021</h5>
              <p><em>Connor Construction, Arlington, VA </em></p>
              <ul>
                <li>Lead crew member for home improvement projects providing guidance, distribute work tasks, and inspect sites after completion.</li>
                <li>Interacts with customers and home-owners representing the company and providing excellent customers service.</li>
                <li>Gained practical hands-on knowledge of different aspects of home remodeling such as dry-wall, insulation, flooring, and other duties.</li>
                <li>Monitor worksite to ensure compliance with safety regulations.</li>
                <li> Earned a reputation as a trusted technician.</li>
                <li>Train new employees on proper handling of equipment and safety.</li>
                <li>Perform special duties for other projects and assist others when needed.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Front-Desk Assistant</h4>
              <h5>2017 - 2018</h5>
              <p><em>La Fitness, Leeseburg, VA</em></p>
              <ul>
                <li>Checked in guests looking to work out and made sure no one snuck in.</li>
                <li>Help sales by calling guests who had overdue payments and making sale calls for new memberships.</li>
                <li> Clear weights and sets at the end of each day.</li>
                <li>Helps guests who had issues with there memberships.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
