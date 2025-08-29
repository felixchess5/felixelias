import React from 'react'
import PropTypes from 'prop-types'

import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Contact from './Contact'

// Default fallback data in case imports fail
const fallbackData = {
  about: {
    title: "About",
    paragraphs: ["Loading..."],
    image: { src: "", alt: "Loading" }
  },
  experience: {
    title: "Experience",
    description: "Loading...",
    projects: { title: "Loading...", items: [] },
    image: { src: "", alt: "Loading" }
  },
  education: {
    title: "Education",
    degrees: [],
    certifications: [],
    image: { src: "", alt: "Loading" }
  },
  skills: {
    title: "Skills & Expertise",
    categories: [],
    image: { src: "", alt: "Loading" }
  },
  contact: {
    title: "Contact",
    socialLinks: []
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentData: null,
      loading: true,
      error: null
    }
  }

  async componentDidMount() {
    try {
      // Dynamic import with error handling
      const contentModule = await import('../data/contentData')
      
      this.setState({
        contentData: {
          about: contentModule.aboutData || fallbackData.about,
          experience: contentModule.experienceData || fallbackData.experience,
          education: contentModule.educationData || fallbackData.education,
          skills: contentModule.skillsData || fallbackData.skills,
          contact: contentModule.contactData || fallbackData.contact
        },
        loading: false,
        error: null
      })
    } catch (error) {
      console.error('Failed to load content data:', error)
      // Use fallback data on error
      this.setState({
        contentData: fallbackData,
        loading: false,
        error: error.message
      })
    }
  }

  render() {
    const { contentData, loading, error } = this.state
    
    // Show loading state
    if (loading || !contentData) {
      return (
        <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', color: 'white'}}>
            Loading content...
          </div>
        </div>
      )
    }

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        {error && (
          <div style={{position: 'fixed', top: 0, left: 0, background: 'rgba(255,0,0,0.1)', padding: '10px', zIndex: 9999, fontSize: '12px'}}>
            Content loaded with fallback data
          </div>
        )}
        
        <About
          data={contentData.about}
          isActive={this.props.article === 'about'}
          articleTimeout={this.props.articleTimeout}
          onClose={this.props.onCloseArticle}
        />
        
        <Experience
          data={contentData.experience}
          isActive={this.props.article === 'experience'}
          articleTimeout={this.props.articleTimeout}
          onClose={this.props.onCloseArticle}
        />
        
        <Education
          data={contentData.education}
          isActive={this.props.article === 'education'}
          articleTimeout={this.props.articleTimeout}
          onClose={this.props.onCloseArticle}
        />
        
        <Skills
          data={contentData.skills}
          isActive={this.props.article === 'skills'}
          articleTimeout={this.props.articleTimeout}
          onClose={this.props.onCloseArticle}
        />
        
        <Contact
          data={contentData.contact}
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