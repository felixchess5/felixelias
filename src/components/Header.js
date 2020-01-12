import React from 'react'
import PropTypes from 'prop-types'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa fa-code"></span>
        </div>
        
        <div className="content">
            <div className="inner">
                <h1>Felix Elias</h1>
                <p>Online Portfolio</p>
<<<<<<< HEAD
                <p>Click <a href='https://felixelias.com/documents/Felix_Elias_Portfolio.docx'>here</a> for a download version</p> 
=======
                <p>Click <a href='https://felixelias.com/documents/Felix_Elias_Resume.docx'>here</a> for a download version</p>
>>>>>>> f0e1947d1e7a7161e5b03acaf7494bfe9d3935bc
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('experience')}}>Experience</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('education')}}>Education</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

<<<<<<< HEAD
export default Header
=======
export default Header
>>>>>>> f0e1947d1e7a7161e5b03acaf7494bfe9d3935bc
