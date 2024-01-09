import { useState } from 'react';
import userImage from '../images/user1.jpg';

// ...



const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const opentab = (event, tabname) => {
    event.preventDefault();
    setActiveTab(tabname);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
          <img src={userImage} alt="Suhan image" />

          </div>
          <div className="about-col-2">
            <h1>About ME</h1>
            <p>Desire to work in a challenging position in an innovative and forward-thinking company that will allow me to utilize
        my skills and experience in a new and exciting way.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-link ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={(event) => opentab(event, 'skills')}
              >
                Skills
              </p>
              
              <p
                className={`tab-link ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={(event) => opentab(event, 'education')}
              >
                Education
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li>
                  <span>Web Development</span>
                  <br />
                  MERN Stack
                </li>
                <li>
                  <span>Problem Solving</span>
                  <br />
                  DSA using Java
                </li>
                <li>
                  <span>3D Design</span>
                  <br />
                  SolidWorks
                </li>
              </ul>
            </div>
            
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li>
                  <span>2021 - Current</span>
                  <br />
                  BE Mechanical
                </li>
                <li>
                  <span>2020 - 2021</span>
                  <br />
                  HSC - 87%
                </li>
                <li>
                  <span>2018 - 2019</span>
                  <br />
                  SSLC - 88%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
