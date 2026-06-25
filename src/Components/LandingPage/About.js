import React from "react";
import makansingh from "../../assets/makkansingh.png";
import "../Styles/About.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaPhoneAlt,
  FaRoad,
  FaTint,
  FaIndustry,
  FaHeartbeat,
  FaUsers,
  FaBriefcase,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";

import { MdPlayCircleFilled, MdPhoto } from "react-icons/md";

import { GiVote } from "react-icons/gi";

import { MdAccountBalance } from "react-icons/md";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="container-fluid">
          <div className="row about-wrapper">
            {/* Left Side */}

            <div className="col-lg-8">
              <div className="left-container">
                {/* Content */}

                <div className="about-content">
                  <h5>ABOUT</h5>

                  <h1>
                    MAKKAN SINGH
                    <br />
                    RAJ THAKUR
                  </h1>

                  <h3>MLA, Ramagundam Constituency</h3>

                  <p className="quote">
                    Dedicated to People. Committed to Development.
                  </p>

                  <p>
                    A people's leader committed to the development of Ramagundam
                    through public service, worker welfare and inclusive growth.
                  </p>

                  <div className="about-tags">
                    <div className="tag">✔ People First</div>

                    <div className="tag">✔ Development Focused</div>

                    <div className="tag">✔ Dedicated Leadership</div>
                  </div>
                </div>

                {/* Image */}

                <div className="about-image">
                  <img src={makansingh} alt="Makkan Singh" />
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="col-lg-4">
              <div className="info-box">
                <h4>PERSONAL INFORMATION</h4>

                <div className="info-grid">
                  <div className="card-box">
                    <div className="icon">
                      <FaCalendarAlt />
                    </div>

                    <div className="icon-div">
                      <h6>Born</h6>
                      <p>1971</p>
                    </div>
                  </div>

                  <div className="card-box">
                    <div className="icon">
                      <FaMapMarkerAlt />
                    </div>

                    <div className="icon-div">
                      <h6>Birth Place</h6>
                      <p>Maddirala Village</p>
                    </div>
                  </div>

                  <div className="card-box">
                    <div className="icon">
                      <FaGraduationCap />
                    </div>

                    <div className="icon-div">
                      <h6>Education</h6>
                      <p>Intermediate</p>
                    </div>
                  </div>

                  <div className="card-box">
                    <div className="icon">
                      <GiVote />
                    </div>

                    <div className="icon-div">
                      <h6>Political Party</h6>
                      <p>Indian National Congress</p>
                    </div>
                  </div>

                  <div className="card-box">
                    <div className="icon">
                      <MdAccountBalance />
                    </div>

                    <div className="icon-div">
                      <h6>Current Position</h6>
                      <p>MLA, Ramagundam</p>
                    </div>
                  </div>

                  <div className="card-box">
                    <div className="icon">
                      <FaPhoneAlt />
                    </div>

                    <div  className="icon-div">
                      <h6>Contact</h6>
                      <p>9849004444</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <div className="container">
         <h5 className="achievement-grid-head">ACHIEVEMENTS & CONTRIBUTIONS</h5>

                <div className="achievement-grid">
                  <div>
                    <FaRoad /> Infrastructure
                  </div>

                  <div>
                    <FaTint /> Water
                  </div>

                  <div>
                    <FaIndustry /> Industrial
                  </div>

                  <div>
                    <FaGraduationCap /> Youth
                  </div>

                  <div>
                    <FaHeartbeat /> Healthcare
                  </div>

                  <div>
                    <FaUsers /> Social Welfare
                  </div>

                  <div>
                    <FaBriefcase /> Employment
                  </div>
                </div>

                <hr />  
       </div>

      <section className="about-dashboard">
        <div className="container-fluid">
          <div className="row g-3">
         

            <div className="col-lg-3">
              <div className="dashboard-card">
              

                <h5>LEADERSHIP MOMENTS</h5>

                <div className="gallery-grid">
                  <div className="gallery-box">
                    <MdPhoto />
                  </div>

                 

                  <div className="gallery-box">
                    <MdPhoto />
                  </div>

                  <div className="gallery-box">
                    <MdPhoto />
                  </div>

                  <div className="gallery-box">
                    <MdPhoto />
                  </div>
                </div>

                <button className="blue-btn">View Gallery</button>
              </div>
            </div>

            {/* Latest News */}

            <div className="col-lg-3">
              <div className="dashboard-card">
                <h5>LATEST NEWS</h5>

                <div className="news-card">
                  <h6>Development Project Reviews</h6>

                  <p>Reviewing ongoing infrastructure projects.</p>
                </div>

                <div className="news-card">
                  <h6>Worker Welfare Meetings</h6>

                  <p>Discussions for worker welfare.</p>
                </div>

                <div className="news-card">
                  <h6>Youth Programs</h6>

                  <p>Empowering youth through training.</p>
                </div>

                <div className="news-card">
                  <h6>Youth Programs</h6>

                  <p>Empowering youth through training.</p>
                </div>

                <button className="blue-btn">View All News</button>
              </div>
            </div>

            {/* Media */}

            <div className="col-lg-3">
              <div className="dashboard-card">
                <h5>MEDIA HIGHLIGHTS</h5>

                <div className="media-box">
                  <MdPlayCircleFilled />
                </div>

                <p className="media-text">
                  Stay connected through official channels.
                </p>

                <div className="social-icons">
                  <FaFacebook />

                  <FaInstagram />

                  <BsTwitterX />

                  <FaYoutube />
                </div>

                <button className="blue-btn">View Media</button>
              </div>
            </div>

            {/* Timeline */}

            <div className="col-lg-3">
              <div className="dashboard-card">
                <h5>POLITICAL JOURNEY TIMELINE</h5>

                <div className="timeline">
                  <div className="timeline-item">
                    <span></span>

                    <div>
                      <h6>Early 2000s</h6>

                      <p>Grassroots public service</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <span></span>

                    <div>
                      <h6>2018</h6>

                      <p>Assembly Election</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <span></span>

                    <div>
                      <h6>2023</h6>

                      <p>Won Ramagundam MLA</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <span></span>

                    <div>
                      <h6>2025</h6>

                      <p>Peddapalli DCC President</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Area */}

          <div className="focus-area">
            <h5>KEY FOCUS AREAS</h5>

            <div className="focus-grid">
              <div>Industrial Welfare</div>

              <div>Infrastructure</div>

              <div>Youth Empowerment</div>

              <div>Education</div>

              <div>Healthcare</div>

              <div>Clean Ramagundam</div>
            </div>
          </div>

          {/* Connect */}

          <div className="connect-box">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="contact-box-div">
                  <h2>Let's Connect</h2>

                <p>Always with the people.</p>

                <p>📞 9849004444</p>

                <p>📍 Ramagundam, Telangana</p>
                </div>
              </div>

              <div className="col-lg-9">
                <form className="contact-form">
                  <input type="text" placeholder="Your Name" />

                  <input type="text" placeholder="Phone Number" />

                  <textarea placeholder="Message"></textarea>
                </form>

                <button className="schedule-btn">
                  Schedule an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
