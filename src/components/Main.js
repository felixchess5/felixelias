import React from 'react'
import PropTypes from 'prop-types'

import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Contact from './Contact'

import { aboutData, experienceData, educationData, skillsData, contactData } from '../data/contentData'

class Main extends React.Component {
  render() {
    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <About
          data={aboutData}
          isActive={this.props.article === 'about'}
          articleTimeout={this.props.articleTimeout}
          onClose={this.props.onCloseArticle}
        />
        
        <Experience
          data={experienceData}
          isActive={this.props.article === 'experience'}
          articleTimeout={this.props.articleTimeout}
          onClose={this.props.onCloseArticle}
        />
        
        <Education
          data={educationData}
          isActive={this.props.article === 'education'}
          articleTimeout={this.props.articleTimeout}
          onClose={this.props.onCloseArticle}
        />
        
        <Skills
          data={skillsData}
          isActive={this.props.article === 'skills'}
          articleTimeout={this.props.articleTimeout}
          onClose={this.props.onCloseArticle}
        />
        
        <Contact
          data={contactData}
          isActive={this.props.article === 'contact'}
          articleTimeout={this.props.articleTimeout}
          onClose={this.props.onCloseArticle}
        />
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