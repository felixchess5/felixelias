import React from 'react'
import PropTypes from 'prop-types'

const About = ({ data, isActive, articleTimeout, onClose }) => {
  const close = <div className="close" onClick={onClose}></div>

  return (
    <article 
      id="about" 
      className={`${isActive ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
      style={{display:'none'}}
    >
      <h2 className="major">{data.title}</h2>
      {data.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <span className="image main">
        <img src={data.image.src} alt={data.image.alt} />
      </span>
      {close}
    </article>
  )
}

About.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default About