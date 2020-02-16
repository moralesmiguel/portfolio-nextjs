import Fade from 'react-reveal/Fade';

const Header=()=>{
    return(
       <div className="header-section">
           <header>
               <h1 className="header-text"><Fade bottom cascade>Miguel Morales</Fade></h1>
           </header>
                <Fade bottom>
                    <p className="intro-text">MERN Fullstack Developer</p>
                    <p className="intro-text">Project Management and Planning</p>
                    <p className="intro-text">Business and Finance Expertise</p>
                </Fade>
       </div>
    )
}

export default Header;