import Fade from 'react-reveal/Fade';

const About = ()=>{
return(
    <div className="about-container" id="about">
            <h1><Fade bottom cascade>About me</Fade></h1>
        <div className="about-content">
            <Fade bottom>
                <p className="about-description">Bilingual business management and finance professional with an international background having worked in three countries, more than
                eight years of working experience in analytical areas, project management, and stakeholder relations management. With an academic and personal passion for big data, 
                data analytics, and web development.
                </p>
            </Fade>
        <img src="/aboutImage.jpg" alt="image" className="about-image"/>
        </div>
        <h1><Fade bottom cascade>Technical Skills:</Fade></h1>
        <div className="list-container">
        <Fade bottom>
        <ul className="icon-horizontal-list">
          <li>
            <i className="fab fa-html5 fa-5x"></i>
          </li>
          <li>
          <i className="fab fa-css3-alt fa-5x"></i>
          </li>
          <li>
          <i className="fab fa-js-square fa-5x"></i>
          </li>
          <li>
          <i className="fab fa-python fa-5x"></i>
          </li>
          <li>
          <i className="fab fa-react fa-5x"></i>
          </li>
          <li>
          <i className="fab fa-node-js fa-5x"></i>
          </li>
          <li>
          <i className="fab fa-r-project fa-5x"></i>
          </li>
          <li>
          <i className="fas fa-database fa-5x"></i>
          </li>
          <li>
          <i className="fab fa-wordpress fa-5x"></i>
          </li>
          <li>
          <i className="fab fa-npm fa-5x"></i>
          </li>
        </ul>

        <h2>Also:</h2>
        <ul className="additional-skills-list">
          <li>
          <i className="fas fa-check"></i>
            MongoDB, Express, Tableau, and SQL</li>
          <li>
          <i className="fas fa-check"></i>
            Debugging &amp; cross-browser testing</li>
          <li>
          <i className="fas fa-check"></i>
            Cross-functional Teams</li>
          <li>
          <i className="fas fa-check"></i>
            Agile Development &amp; LSS</li>
        </ul>
        </Fade>
        </div>
        </div>
);
}

export default About;