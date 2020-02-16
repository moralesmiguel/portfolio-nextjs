import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const Projects = () =>{
    return(
        <div id="projects" className="projects-section">
        <Fade bottom>
        <h1>Projects</h1>
            <div className="projects-container">
            <div className="projects-card">
                <h1>iFavorites</h1>
                <p>App using React-Express-Node and iTunes Search API</p>
                <img src="/iTunes.png" className="project-image" />
                <Link href="https://serene-meadow-48919.herokuapp.com/"><a><i className="fas fa-link fa-3x"></i></a></Link>
                <Link href="https://github.com/moralesmiguel/iFavorites"><a><i className="fab fa-github fa-3x"></i></a></Link>
            </div>
            <div className="projects-card">
                <h1>MERN Car Database</h1>
                <p>App that provides an interface for CRUD operations on a MongoDB database</p>
                <img src="/merncar.png" className="project-image" />
                <Link href="https://github.com/moralesmiguel/MERN-Car-CRUD"><a><i className="fab fa-github fa-3x"></i></a></Link>
            </div>
            <div className="projects-card">
                <h1>MERN To-Do List</h1>
                <p>Built with the MERN stack. It has an admin panel and user authentication.</p>
                <img src="/todo.png" className="project-image" />
                <Link href="https://github.com/moralesmiguel/to-do-list-mern"><a><i className="fab fa-github fa-3x"></i></a></Link>
            </div>
            <div className="projects-card">
                <h1>Weather App</h1>
                <p>React app that displays the weather for a given city by using the OpenWeatherMap API</p>
                <img src="/weatherapp.png" className="project-image" />
                <Link href="https://github.com/moralesmiguel/react-assignment-weather-app"><a><i className="fab fa-github fa-3x"></i></a></Link>
            </div>
            <div className="projects-card">
                <h1>Currency Converter and Card Game</h1>
                <p>React app holding a currency converter and a guessing card game.</p>
                <img src="/cardgame.png" className="project-image" />
                <Link href="https://github.com/moralesmiguel/react-assignment-currencyconverter-cardgame"><a><i className="fab fa-github fa-3x"></i></a></Link>
            </div>
            <div className="projects-card">
                <h1>React Memory Card Game</h1>
                <p>Memory card game built with React</p>
                <img src="/memorycardgame.png" className="project-image" />
                <Link href="https://github.com/moralesmiguel/react-memory-card-game"><a><i className="fab fa-github fa-3x"></i></a></Link>
            </div>
            <div className="projects-card">
                <h1>Star Wars Next.js</h1>
                <p>Built using Next.js and the swapi API</p>
                <img src="/swapi.png" className="project-image" />
                <Link href="https://github.com/moralesmiguel/swapi-nextjs"><a><i className="fab fa-github fa-3x"></i></a></Link>
            </div>
            <div className="projects-card">
                <h1>React CV</h1>
                <p>CV built with React</p>
                <img src="/cvcover.png" className="project-image" />
                <Link href="https://github.com/moralesmiguel/react-cv"><a><i className="fab fa-github fa-3x"></i></a></Link>
            </div>
            </div>
        </Fade>
        </div>
    );
}

export default Projects;