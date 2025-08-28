import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/felixelias5/" className="icon fa fa-linkedin"><span className="label">Linkedin</span></a></li>
                        <li><a href="mailto:felixelias5@gmail.com" className="icon fa-envelope"><span className="label">Email</span></a></li>
                        <li><a href="https://github.com/felixchess5" className="icon fa-github"><span className="label">Github</span></a></li>
                    </ul>
                    <ul className="copyright" >
                        <li>&copy; {new Date().getFullYear()} Felix Elias <a id="felixeliasurl" href="http://www.felixelias.com/">felixelias.com</a></li>
                    </ul>
        </div>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer

// Original template designed - Dimension by HTML5 UP
// This template alteration has been authorized by The MIT License (MIT)