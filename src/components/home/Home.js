import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { fadeIn } from 'react-animations';
import asset1 from "../../img/me.png";
import project1 from "../../img/ranker-portfolio.jpg";
export default class Home extends Component {
    render() {
        return (

          <div className="home">
            <section className="intro">
              <div className="vertical-center">
                <Container>
                  <Row className="d-flex align-items-center">
                    <Col xs="12" sm="6">
                      <img className="profile" src={asset1} alt="UX Designer"/>
                    </Col>
                    <Col xs="12" sm="6">
                      <div>
                        <h1>Hello, I'm Ana Karen Aguirre</h1>
                        <h3>A UX | UI designer & developer</h3>
                        <div className="cont-p">
                          <p>I would describe myself as a rare hybrid between a UI / UX designer and developer. I work with HTML, CSS and JavaScript libraries such as React JS. 
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </section>
            <section className="about-me">
              <Container>
                <Row className="d-flex">
                  <Col xs="12" sm="6">
                    <h3> Work </h3>
                    <div className="experience">
                      <span className="organization"> Shelfish Software</span>
                      <div class="line"></div>
                      <span className="position"> UI / UX Chief</span>
                      <p> March 2019 - Present </p>
                      <p> 
                        My main responsabilities are UX research, 
                        UI Design, creating user flows, establishing
                        a design language (UI Guidelines), testing and prototyping.
                      </p>
                    </div>
                    <div className="experience">
                      <span className="organization">Appeal Digital Solutions</span>
                      <div class="line"></div>
                      <span className="position"> Co-founder | Design Lead</span>
                      <p> August 2017 - Present </p>
                      <p> My main responsabilities are project management, 
                          architecture of wireframes, UI design, User Interaction, 
                          UX consultancy.
                      </p>
                    </div>
                    <div className="experience">
                      <span className="organization"> Part Design </span>
                      <div class="line"></div>
                      <span className="position"> Creative Director </span>
                      <p> October 2016 - July 2017 </p>
                      <p> 
                        I was the head of the creative department 
                        in a boutique design agency, in charge of web design, 
                        content creation and branding.
                      </p>
                    </div>
                    <div className="experience">
                      <span className="organization"> Woorx</span>
                      <div class="line"></div>
                      <span className="position"> Web Designer</span>
                      <p> January 2015 - September 2016 </p>
                      <p> 
                        Front-End Development for websites and applications, 
                        art direction, creating advertising material (P.O.P, BTL, ATL), 
                        branding. 
                      </p>
                    </div>
                    <div className="experience">
                      <span className="organization"> MRK Integral</span>
                      <div class="line"></div>
                      <span className="position"> Graphic Designer</span>
                      <p> January 2014 - December 2014 </p>
                      <p> 
                        My main responsabilities are UX research, 
                        UI Design, creating user flows, establishing 
                        a design language (UI Guidelines), testing and prototyping.
                      </p>
                    </div>
                  </Col>
                  <Col xs="12" sm="4" className="offset-md-2 edu-teach">
                      <h3> Education </h3>
                      <h5> Universidad Anáhuac Querétaro</h5>
                      <p>
                        Universidad Anáhuac Querétaro<br/>
                        Bachelor in Graphic Design<br/>
                        August 2010 - August 2014
                      </p>
                      <h3>Teaching</h3>
                      <h5> Universidad Anáhuac Querétaro</h5>
                      <p>
                        Universidad Anáhuac Querétaro<br/>
                        Web Design University Class<br/>
                        January 13 2019 - Present
                      </p>
                      <h3> Speaking </h3>
                      <h5> Universidad Autónoma De Querétaro</h5>
                      <p>
                        What’s the difference between a good UX and bad UX?<br/>
                        January 13 2019 - Present
                      </p>  
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="skills">
              <Container>
                <Row>
                  <Col xs="12">
                    <h3> Skills </h3>
                  </Col>
                  <Col xs="12" sm="4">
                    <h5> Disciplines </h5>
                    <ul>
                      <li>
                        UI Design
                      </li>
                      <li>
                      UX Research
                      </li>
                      <li>
                      UX Design
                      </li>
                      <li>
                      Wireframing
                      </li>
                      <li>
                      Mobile Design
                      </li>
                      <li>
                      Brand research
                      </li>
                      <li>
                      Front-end development
                      </li>
                      <li>
                      Prototyping
                      </li>
                      <li>
                      Mobile development
                      </li>
                      <li>
                      UX Testing
                      </li>
                    </ul>
                  </Col>
                  <Col xs="12" sm="4">
                    <h5> Technical Abilities </h5>
                    <ul>
                      <li>
                      Adobe Creative Suite
                      </li>
                      <li>
                      Sketch
                      </li>
                      <li>
                      Zeplin
                      </li>
                      <li>
                      Git control version
                      </li>
                      <li>
                      SCRUM Methodology
                      </li>
                      <li>
                      HTML
                      </li>
                      <li>
                      CSS
                      </li>
                      <li>
                      Bootstrap 4
                      </li>
                      <li>
                      CSS Grid
                      </li>
                      <li>
                      JavaScript
                      </li>
                      <li>
                      React Native
                      </li>
                    </ul>
                  </Col>
                  <Col xs="12" sm="4">
                    <h5> Human Abilities </h5>
                    <ul>
                      <li>
                      Team Work
                      </li>
                      <li>
                      Project Management
                      </li>
                      <li>
                      Entrepreneurship
                      </li>
                      <li>
                      Emotional Intelligence
                      </li>
                      <li>
                      Positive Feedback
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>

            </section>
            
          </div>
        )
    }
}
