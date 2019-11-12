import React from 'react'
import PropTypes from 'prop-types'

import me from '../images/Me.jpg'
import work from '../images/work.jpg'
import universities from '../images/Universities.webp'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <p>Felix is a Technology Consulting Manager based out of the New York area. He has more than 5 years industry experience, with more than 3 years experience in the Intelligent Automation space. He also has experience in other areas such as Artificial Intelligence, Business Intelligence, Data Bases, and Software Development.</p>
          <p>During his free time, he enjoys traveling and playing chess both recreational and competitive. He also enjoys programming and working on personal projects. He is very passionate about latest technology trends and enjoys trying new technology devices.</p>
          <span className="image main"><img src={me} alt="Myself" /></span>
          {close}
        </article>

        <article id="experience" className={`${this.props.article === 'experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Experience</h2>
          <p>Felix Elias is a Technology Consulting Manager at Accenture. He is part of the Financial Services Industry from the Regulatory &amp; Compliance Practice. He specializes in Intelligent Automation and technology.</p>
          <h2 className="major">Projects</h2>
          <p><b>Robotic Process Automation (RPA) Delivery Lead - UiPath</b> <br /> In charge of the design and delivery of bots by following best practices<br /><br /> <b>Key Activities:</b>
              <ul>
                  <li>Manage the creation and delivery of RPA Bots using UiPath</li>
                  <li>Create and deliver bot documentation</li>
                  <li>Manage Off-Shore resources for the implementation</li>
                  <li>Setup best practices for CoE</li>
                  <li>Provide recommendations for roles and segregation of duties</li>
              </ul> 
          </p>

          <p><b>Intelligent Automation Assessment - RPA SME </b> <br /> We performed an assessment of processes to determine automation potential.<br /><br /> <b>Key Activities:</b>
              <ul>
                  <li>Analyzed over 200 applications</li>
                  <li>Determined automation potential and shortlist applications</li>
                  <li>Created a pipeline of implementation and a roadmap</li>
                  <li>Estimated implementation ROIs, and calculated 3Y and 5Y PNLs</li>
              </ul> 
          </p>
          <p><b>Robotic Process Automation (RPA) - UiPath Architect and Lead Developer</b> <br /> We analyzed the current infrastructure of an international bank and prepared it for Robotic Process Automation using UiPath. We also developed their first robot and created a factory readiness.<br /><br /> <b>Key Activities:</b>
              <ul>
                  <li>Infrastructure analysis to deliver a new RPA solution</li>
                  <li>Work with client leadership to deliver a successful RPA Proof of Concept</li>
                  <li>Deliver software solution in a version short timeframe window</li>
                  <li>Train personnel in RPA for basic troubleshooting and handling of the robot</li>
              </ul> 
          </p>

          <p><b>Robotic Process Automation (RPA) - Blue Prism Business Analyst and Developer</b> <br /> We created the first Proof of Concept for an international bank. After a successful PoC, we also created a factory to automate their pipeline.<br /><br /> <b>Key Activities:</b>
              <ul>
                  <li>Managed a small team of on-shore and off-shore resources</li>
                  <li>Direct communication with senior Stakeholders</li>
                  <li>Work with the client lead to manage the pipeline and deliver processes</li>
                  <li>Gather user requirements and synthetize them into RPA solutions</li>
                  <li>Implement RPA solutions that would satisfy those requirements</li>
                  <li>Analyze and solve complex infrastructure issues</li>
                  <li>Integrate SharePoint solutions into RPA</li>
              </ul> 
          </p>

          <p><b>Credit Risk Data Warehouse – Business Analyst and Developer</b> <br /> We worked hand to hand with one of the biggest European banks to create and manage a Credit Risk Data Warehouse.<br /><br /> <b>Key Activities:</b>
              <ul>
                  <li>Data Quality analysis and validation in different environments</li>
                  <li>Design, implement, and test interfaces for US local and external feeders</li>
                  <li>Validation and testing of ETL solutions using Informatica tools.</li>
                  <li>Analysis and maintenance of batch scripts</li>
                  <li>Creation and alteration of Database schemas to match them to business requirements</li>
                  <li>Analysis of complex solutions and their implementation to ensure QA</li>
              </ul> 
          </p>
          <span className="image main"><img src={work} alt="work" /></span>
          {close}
        </article>

        <article id="education" className={`${this.props.article === 'education' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Education</h2>
          <p><b>Master of Science in Computer Information Systems</b> <br /> Concentration in Security, Business Intelligence and Databases <br /> Boston University, Boston, MA <br /> Graduated in September 2017</p> 
          <p><b>Bachelor of Science in Computer Engineering</b> <br /> Universidad del Turabo, Gurabo, PR <br /> Graduated in June 2014</p>
          <span className="image main"> <img src={universities} alt="Universities" /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/felixelias5@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="Name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" name="submit" value="submit" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
              <li><a href="https://www.linkedin.com/in/felixelias5/" className="icon fa fa-linkedin"><span className="label">Linkedin</span></a></li>
              <li><a href="https://twitter.com/felixchess5" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="https://github.com/felixchess5" className="icon fa-github"><span className="label">Github</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main