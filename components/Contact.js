import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const Contact = ()=>{
return(
<div className="contact-section" id="contact">
  <h1>
    <Fade bottom cascade>Contact</Fade>
  </h1>
    <Fade bottom>
      <div className="contact-list-container">
        <ul className="icon-horizontal-list">
          <li>
            <Link href="https://twitter.com/dataandfinance"><a><i className="fab fa-twitter fa-5x"></i></a></Link>
          </li>
          <li>
            <Link href="https://github.com/moralesmiguel/"><a><i className="fab fa-github fa-5x"></i></a></Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/moralesmiquel/"><a><i className="fab fa-linkedin-in fa-5x"></i></a>
            </Link>
          </li>
          <li>
            <Link href="https://www.reddit.com/user/MorMql"><a><i className="fab fa-reddit-alien fa-5x"></i></a></Link>
          </li>
        </ul>
      </div>
    </Fade>
</div>

);
}

export default Contact;