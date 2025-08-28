import React from 'react'
import PropTypes from 'prop-types'

const Education = ({ data, isActive, articleTimeout, onClose }) => {
  const close = <div className="close" onClick={onClose}></div>

  return (
    <article 
      id="education" 
      className={`${isActive ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
      style={{display:'none'}}
    >
      <h2 className="major">{data.title}</h2>
      {data.degrees.map((degree, index) => (
        <p key={index}>
          <b>{degree.degree}</b><br />
          {degree.concentration && (
            <span>{degree.concentration}<br /></span>
          )}
          {degree.institution}<br />
          {degree.graduationDate}
        </p>
      ))}
      
      {data.certifications && (
        <>
          <h3>Professional Certifications</h3>
          {data.certifications.map((cert, index) => (
            <div key={index}>
              <p>
                <b>{cert.certification}</b><br />
                {cert.provider} - {cert.date}
              </p>
              {cert.details && (
                <ul>
                  {cert.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </>
      )}
      
      <span className="image main">
        <img src={data.image.src} alt={data.image.alt} />
      </span>
      {close}
    </article>
  )
}

Education.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    degrees: PropTypes.arrayOf(PropTypes.shape({
      degree: PropTypes.string.isRequired,
      concentration: PropTypes.string,
      institution: PropTypes.string.isRequired,
      graduationDate: PropTypes.string.isRequired
    })).isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Education