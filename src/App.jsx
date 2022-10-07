import gitLogo from './img/git.svg'
import instagramLogo from './img/instagram.svg'
import fbLogo from './img/fb.svg'
import twitterLogo from './img/twitter.svg'
import avatar from './img/avatar.jpeg'
import email from './img/email.svg'
import linkedin from './img/linkedin.svg'

export default function App() {
  return (
    <div className="card--main">
      <div className="card--header">
        <img src={avatar} alt="avatar" />
        <h1>Mykola Rudnychenko</h1>
        <h4>frontend developer</h4>
        <a href='https://github.com/rudnichenko'>github.com/rudnichenko</a>
        <div className="card--header_buttons">
          <button className="emailButton"><img src={email} />Email</button>
          <button className="linkedinButton"><img src={linkedin} />Linkedin</button>
        </div>
      </div>
      <div className="card--body">
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3>Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
      <div className="card--footer-social">
        <a href="#"><img src={gitLogo} alt="git" /></a>
        <a href="#"><img src={instagramLogo} alt="instagram" /></a>
        <a href="#"><img src={fbLogo} alt="facebook" /></a>
        <a href="#"><img src={twitterLogo} alt="twitter" /></a>
      </div>
    </div>
  )
}