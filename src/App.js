import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import { SiFacebook, SiInstagram, SiTwitter, SiLinkedin, SiTiktok, SiGithub, SiYoutube, SiGmail, SiTelegram } from "react-icons/si";
import { FiPhoneIncoming, FiMessageCircle } from "react-icons/fi";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="avatar.jpg" className="App-logo" alt="logo" />
        <p>
          Mình là <code>Bùi Tấn An</code> <br />
          Mình đam mê lập trình, khoa học công nghệ và nghệ thuật
        </p>
        <Container className="socialIcons">
          <Row>
            <Col><a href="https://facebook.com/buitanan" target="_blank"><SiFacebook /></a></Col>
            <Col><a href="https://instagram.com/buitanan" target="_blank"><SiInstagram /></a></Col>
            <Col><a href="https://twitter.com/buitanan" target="_blank"><SiTwitter /></a></Col>
            <Col><a href="https://linkedin.com/buitanan" target="_blank"><SiLinkedin /></a></Col>
            <Col><a href="https://tiktok.com/@buitanan" target="_blank"><SiTiktok /></a></Col>
            <Col><a href="https://github.com/buitanan" target="_blank"><SiGithub /></a></Col>
            <Col><a href="https://youtube.com/buitanan" target="_blank"><SiYoutube /></a></Col>
            <Col><a href="https://t.me/buitanan" target="_blank"><SiTelegram /></a></Col>
          </Row>
          <br />
          <Row>
            <a href="tel:84903976741"><FiPhoneIncoming /> <FiMessageCircle /> +84 903 976 741</a>
          </Row>
          <Row>
            <a href="mailto:buitananit@gmail.com"><SiGmail />&nbsp;&nbsp;&nbsp;&nbsp; buitananit@gmail.com</a>
          </Row>
        </Container>
      </header>
    </div >
  );
}

export default App;
