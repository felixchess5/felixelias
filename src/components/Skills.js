import React from 'react'
import PropTypes from 'prop-types'

const Skills = ({ data, isActive, articleTimeout, onClose }) => {
  const close = <div className="close" onClick={onClose}></div>

  return (
    <article 
      id="skills" 
      className={`${isActive ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
      style={{display:'none'}}
    >
      <h2 className="major">{data.title}</h2>
      {data.categories.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
      {close}
    </article>
  )
}

Skills.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      category: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired
    })).isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Skills