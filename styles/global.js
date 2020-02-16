import css from 'styled-jsx/css'

export default css.global`
  *{
      margin: 0;
  }
  body {
    font-size: 16px;
    background: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    overflow-x: hidden;
    z-index: 1;
    margin: 0;
    padding: 0;
  }

  header{
    font-size: 1em;
    font-weight: 400;
    margin-right: 50em;
  }

  .header-section{
    min-height:100vh;
    background: url("/headerimage.jpg");
    background-size: cover;
    width: 100%;
  }
  .intro-text{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 43px;
    text-align: left;
    line-height: 2;
  }
  nav{
    position:fixed;
    right: 0;
    z-index: 20;
  }

  nav li{
    display: inline-block;
  }
  .nav-link{
    cursor: pointer;
    text-decoration: none;
    color: black;
    opacity: .5;
    padding:1em;
  }
  .nav-link:hover{
    opacity: 1;
  }
  .about-container{
    min-height:100vh;
    background:white;
    background-size: cover;
  }
  .about-content{
    display: grid;
    grid-template-columns: auto 500px;
  }
  .about-description{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    text-align: left;
    display: inline-block;
    margin-top: 30px;
  }
  .about-image{
      display: inline-block;
      width: 500px;
      margin-top: 30px;
  }
  .icon-horizontal-list li{
    display: inline-block;
    margin-right: 5px;
  }
  .icon-horizontal-list li:hover{
    color: #0e4ba8;
  }
  .additional-skills-list{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    list-style: none;
  }
  .projects-section{
    background: url("/projectsimage.jpg");
    background-size: cover;
    width: 100%;
  }
  .projects-container{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .projects-card{
      padding: 10px 10px;
      margin: 15px 15px;
      background-color: white;
      border-radius:8px;
  }
  .project-image{
      object-fit:cover;
      width: 98%;
  }
  .fa-github:hover{
    color: #0e4ba8;
  }
  .fa-link:hover{
    color: #0e4ba8;
  }
  .fa-twitter:hover{
    color: #0e4ba8;
  }
  .fa-linkedin-in:hover{
    color: #0e4ba8;
  }
  .fa-reddit-alien:hover{
    color: #0e4ba8;
  }
  .contact-section{
    min-height:100vh;
    background: url("/contactimage.jpg");
    background-size: cover;
    width: 100%;
  }
  .contact-section h1{
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .contact-list-container{
    width: 100%;
    margin: 0 auto;
  }
`