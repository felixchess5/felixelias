import React from 'react'
import PropTypes from 'prop-types'

const Experience = ({ data, isActive, articleTimeout, onClose }) => {
  const close = <div className="close" onClick={onClose}></div>

  return (
    <article 
      id="experience" 
      className={`${isActive ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
      style={{display:'none'}}
    >
      <h2 className="major">{data.title}</h2>
      <p>{data.description}</p>
      
      <h2 className="major">{data.projects.title}</h2>
      {data.projects.items.map((project, index) => (
        <p key={index}>
          <b>{project.title}</b><br />
          {project.description}<br /><br />
          <b>Key Activities:</b>
          <ul>
            {project.keyActivities.map((activity, activityIndex) => (
              <li key={activityIndex}>{activity}</li>
            ))}
          </ul>
        </p>
      ))}
      
      <span className="image main">
        <img src={data.image.src} alt={data.image.alt} />
      </span>
      {close}
    </article>
  )
}

Experience.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projects: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keyActivities: PropTypes.arrayOf(PropTypes.string).isRequired
      })).isRequired
    }).isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Experience