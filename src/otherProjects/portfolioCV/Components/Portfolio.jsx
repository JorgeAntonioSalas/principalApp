/* eslint-disable react/no-unknown-property */
import "./styles.css";
import images from "../assets/images";
import { Link } from "react-router-dom";
import { useState } from "react";
import Document from '../downloads/JORGE SALAS.pdf';

let menuVisible = false;
// Funcion para ocultar o mostrar menu
let showOrHideMenu = () => {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
};

//ocultar el menu, una vez seleccionada la opcion
let selection = () => {
  document.getElementById("nav").classList = "";
  menuVisible = false;
};
//Funcion que aplica las animaciones a las habilidades
function skillsEffect() {
  var skills = document.getElementById("skills");
  var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distance_skills >= 300) {
    let abilitys = document.getElementsByClassName("progress");
    abilitys[0].classList.add("javascript");
    abilitys[1].classList.add("htmlcss");
    abilitys[2].classList.add("react");
    abilitys[3].classList.add("nodejs");
    abilitys[4].classList.add("sql");
    abilitys[5].classList.add("comunication");
    abilitys[6].classList.add("teamwork");
    abilitys[7].classList.add("creative");
    abilitys[8].classList.add("dedicated");
    abilitys[9].classList.add("projectmanage");
  }
}

// detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function () {
  skillsEffect();
};






const Portfolio = () => {

// estados para guardar la informacion de los inputs
  const [name,setName] = useState('');
  const [phone ,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');

  const sendData = (e) => {
    //mantener datos
    e.preventDefault();
    alert('message sent successfully')
    const newOffer = {
      id: Date.now(),
      name:name,
      phone:phone,
      email:email,
      subject:subject,
      message:message,
    } 
    console.log(newOffer);
  }



  return (
    <div>
      <div>
        {/* <!--MENU ENCABEZADO--> */}
        <div className="header-container">
          <header>
            <div className="logo">
              <a href="#">Jorge</a>
            </div>
            <nav id="nav">
              <ul>
                <li>
                  <a href="#inicio" onClick={selection}>
                    INICIO
                  </a>
                </li>
                <li>
                  <a href="#aboutme" onClick={selection}>
                    SOBRE MI
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={selection}>
                    HABILIDADES
                  </a>
                </li>
                <li>
                  <a href="#cv" onClick={selection}>
                    CURRICULUM
                  </a>
                </li>
                <li>
                  <a href="#archive" onClick={selection}>
                    PORTAFOLIO
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={selection}>
                    CONTACTO
                  </a>
                </li>
              </ul>
            </nav>
            <div
              className="nav-responsive skill-button"
              onClick={showOrHideMenu}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
          </header>
        </div>

        {/* <!-- SECCION INICIO--> */}
        <section id="inicio" className="inicio">
          <div className="banner-container">
            <div className="img-container">
              <img src={images.profile} alt="" />
            </div>
            <h1>JORGE SALAS</h1>
            <h2>
              Ing. de Redes y Comunicaciones - Desarrollador React - Experto en
              UI/UX
            </h2>
            <div className="redes">
              <a href="https://www.facebook.com/DejameSalvateTu">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/DejameSalvateTu">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://t.me/Esmiculpa">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="https://www.linkedin.com/in/jorgeantoniosalas/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/JorgeAntonioSalas">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        {/* <!-- SECCION SOBRE MI--> */}
        <section id="aboutme" className="aboutme">
          <div className="seccion-container">
            <h2>Sobre Mí</h2>
            <p>
              <span>Hola, Soy Jorge Salas</span>. Amante de la programación,
              egresado de ACADEMLO como Desarrollador FullStack. Mejorando los
              conocimientos que tengo a través de la documentación y la
              práctica. Entusiasmado en aprender nuevas tecnologías.
            </p>

            <div className="arrow">
              {/* <!-- informacion personal--> */}
              <div className="col">
                <h3>Datos Personales</h3>
                <ul>
                  <li>
                    <strong>Email</strong>
                    jorgesalas@jbdreamdevelopers.com
                  </li>
                  <li>
                    <strong>Linkedin</strong>
                    https://www.linkedin.com/in/jorgeantoniosalas/
                  </li>
                  <li>
                    <strong>Estado Civil</strong>
                    En una relación <i className="fa-solid fa-heart"></i>
                  </li>
                  <li>
                    <strong>Localización</strong>
                    Lima - Perú
                  </li>
                  <li>
                    <strong>Cargo</strong>
                    <span>FREELANCE</span>
                  </li>
                </ul>
              </div>

              {/* <!-- INTERESES--> */}
              <div className="col">
                <h3>Intereses</h3>
                <div className="interests-container">
                  <div className="interests">
                    <i className="fa-solid fa-gamepad"></i>
                    <span>JUEGOS</span>
                  </div>
                  <div className="interests">
                    <i className="fa-solid fa-headphones"></i>
                    <span>MÚSICA</span>
                  </div>
                  <div className="interests">
                    <i className="fa-solid fa-plane"></i>
                    <span>VIAJAR</span>
                  </div>
                  <div className="interests">
                    <i className="fa-brands fa-apple"></i>
                    <span>MAC OS</span>
                  </div>
                  <div className="interests">
                    <i className="fa-solid fa-person-hiking"></i>
                    <span>DEPORTE</span>
                  </div>
                  <div className="interests">
                    <i className="fa-solid fa-book"></i>
                    <span>LIBROS</span>
                  </div>
                  <div className="interests">
                    <i className="fa-solid fa-car"></i>
                    <span>AUTOS</span>
                  </div>
                  <div className="interests">
                    <i className="fa-solid fa-camera"></i>
                    <span>FOTOS</span>
                  </div>
                </div>
              </div>
            </div>
            <button><a className="document" href={Document} download>
              Descargar CV <i className="fa-solid fa-download"></i>
              <span className="overlay"></span>
              </a>
            </button>
          </div>
        </section>

        {/* <!-- SECCION HABILIDADES--> */}
        <section className="skills" id="skills">
          <div className="seccion-container">
            <h2>Habilidades</h2>
            <div className="arrow">
              {/* <!-- HABILIDADES TECNICAS--> */}
              <div className="col">
                <h3>Habilidades Técnicas</h3>
                <div className="skill">
                  <span>Javascript</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>85%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <span>HTML & CSS</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>85%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <span>React</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>95%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <span>NodeJS</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>80%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <span>PostgreSQL - MySQL</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- HABILIDADES PROFESIONALES--> */}
              <div className="col">
                <h3>Habilidades Profesionales</h3>
                <div className="skill">
                  <span>Comunicación</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>95%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <span>Trabajo en Equipo</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>100%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <span>Creatividad</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>99%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <span>Dedicación</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>100%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <span>Manejo de Proyectos</span>
                  <div className="skill-bar">
                    <div className="progress">
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- SECCION CURRICULUM--> */}
        <section id="cv" className="cv">
          <div className="seccion-container">
            <h2>Hoja de Vida</h2>
            <div className="arrow">
              <div className="col left">
                <h3>Educación</h3>
                <div className="item le">
                  <h4>Ing. de Redes y Comunicaciones</h4>
                  <span className="house">
                    Universidad Peruana de Ciencias Aplicadas
                  </span>
                  <span className="date">2015 - 2021</span>
                  <p>
                    Egresado de la carrera de Ingeniería de Redes y
                    Comunicaciones, potenciado en conocimientos de redes,
                    programación y manejo de base de datos.
                  </p>
                  <div className="leconnector">
                    <div className="lecircle"></div>
                  </div>
                </div>
                <div className="item le">
                  <h4>Back-End with NodeJS</h4>
                  <span className="house">
                    ACADEMLO - School of Technology and Computer Science
                  </span>
                  <span className="date">2022</span>
                  <p>
                    Potenciado en NodeJS, Arquitectura MVC y bases de datos, Api
                    Rest con Node y Express
                  </p>
                  <div className="leconnector">
                    <div className="lecircle"></div>
                  </div>
                </div>
                <div className="item le">
                  <h4>Front-End with React - javascript, HTML & CSS</h4>
                  <span className="house">
                    ACADEMLO - School of Technology and Computer Science
                  </span>
                  <span className="date">2022</span>
                  <p>
                    Especialista en React, dominio en el uso de componentes,
                    useState, useEffect, customHooks, Formularios, CRUDs, React
                    Router y Redux{" "}
                  </p>
                  <div className="leconnector">
                    <div className="lecircle"></div>
                  </div>
                </div>
              </div>

              <div className="col right">
                <h3>Experiencia de trabajo</h3>
                <div className="item ri">
                  <h4>Desarrollo de Proyectos en Academlo</h4>
                  <span className="house">Desarrollador Full Stack</span>
                  <span className="date">2022</span>
                  <p>
                    Durante mi etapa de preparación en Academlo desarrollé
                    diferentes proyectos donde exploto las habilidades que he
                    adquirido, principalmente utilizando React para el Front-End
                    y NodeJS para el Back-End. Estos serán visibles en la
                    sección Portafolio
                  </p>
                  <div className="riconnector">
                    <div className="ricircle"></div>
                  </div>
                </div>
                <div className="item ri">
                  <h4>Monitor de Calidad - Call Center</h4>
                  <span className="house">Dynamicall - WEBHELP</span>
                  <span className="date">2019 - 2022</span>
                  <p>
                    Evaluación de personal antiguo, nuevo y evaluaciones
                    cruzadas. - Feedbacks personalizados por asesor. - Feedbacks
                    grupales continuos para actualizaciones o modificaciones en
                    el proceso de atención. - Seguimiento y manejo de
                    indicadores de Equipos de gestión de 18 a 22 miembros. -
                    Charlas introductorias para agentes nuevos durante su
                    proceso inicial de capacitación - Elaboración de informes
                    sobre errores reincidentes.
                  </p>
                  <div className="riconnector">
                    <div className="ricircle"></div>
                  </div>
                </div>
                {/* <!-- <div className="item ri">
                        <h4>Front Developer</h4>
                        <span className="house">Nombre de Compañía</span>
                        <span className="date">2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="riconnector">
                            <div className="ricircle"></div>
                        </div>
                    </div> --> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- SECCION PORTAFOLIO--> */}
        <section id="archive" className="archive">
          <div className="seccion-container">
            <h2>PORTAFOLIO</h2>
            <div className="gallery">
              <Link to="/weatherApp">
                <div className="project">
                  <img src={images.p1} alt="" />
                  <div className="overlay">
                    <h3>WeatherApp</h3>
                    <p>HTML - JavaScript - CSS - React - Axios</p>
                  </div>
                </div>
              </Link>
              <Link to="/rickandmortyApp">
                <div className="project">
                  <img src={images.p2} alt="" />
                  <div className="overlay">
                    <h3>RickandMortyAPP</h3>
                    <p>HTML - JavaScript - CSS - React - Axios - Props</p>
                  </div>
                </div>
              </Link>
              <Link to="https://pokedexapp-by-jorgesalas.netlify.app/#/">
                <div className="project">
                  <img src={images.p4} alt="" />
                  <div className="overlay">
                    <h3>PokedexApp</h3>
                    <p>Html - JavaScript - CSS - React - Vite - Axios - Redux</p>
                  </div>
                </div>
              </Link>
              <Link to="https://ecommerce-app-by-jorgesalas.netlify.app/#/">
                <div className="project">
                  <img src={images.p3} alt="" />
                  <div className="overlay">
                    <h3>EcommerceApp</h3>
                    <p>Html - JavaScript - CSS - React - Vite - Axios - Redux - Bootstrap</p>
                  </div>
                </div>
              </Link>
              <div className="project">
                <img src={images.p5} alt="" />
                <div className="overlay">
                  <h3>Diseño Creativo</h3>
                  <p>Fotografía</p>
                </div>
              </div>
              <div className="project">
                <img src={images.p6} alt="" />
                <div className="overlay">
                  <h3>Diseño Creativo</h3>
                  <p>Fotografía</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- SECCION CONTACTO--> */}
        <section id="contact" className="contact">
          <div className="seccion-container">
            <h2>CONTACTO</h2>
            <div className="arrow">
              {/* <!-- formulario--> */}
              <div className="col">
                <form>
                <input 
                type="text" 
                placeholder="Tú Nombre"
                id='name'
                value={name} 
                onChange={e=> setName(e.target.value) }
                />
                <input 
                type="text" 
                placeholder="Número telefónico" 
                id='phone'
                value={phone} 
                onChange={e=> setPhone(e.target.value) }
                />
                <input 
                type="text" 
                placeholder="Dirección de correo" 
                id='email'
                value={email} 
                onChange={e=> setEmail(e.target.value) }

                />
                <input 
                type="text" 
                placeholder="Asunto" 
                id='subject'
                value={subject} 
                onChange={e=> setSubject(e.target.value) }
                />
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  value={message} 
                  onChange={e=> setMessage(e.target.value) }
                ></textarea>
                <button onClick={sendData}>
                  Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                  <span className="overlay"></span>
                </button>
                </form>
              </div>
              {/* <!-- MAP--> */}
              <div className="col">
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.2572643396245!2d-77.0069742232953!3d-12.097687848836127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d9b04bcd91%3A0x4039dd66529ed98b!2sJr.%20Fray%20Luis%20de%20Le%C3%B3n%20324%2C%20San%20Borja%2015036!5e0!3m2!1ses!2spe!4v1694009046777!5m2!1ses!2spe" width="600" height="450" allowFullScreen="" loading="lazy" ></iframe>
                <div className="info">
                  <ul>
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      Lima, Perú
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      Email: jorgesalas@jbdreamdevelopers.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--FOOTER--> */}
        <footer>
          <a href="#inicio" className="up">
            <i className="fa-solid fa-angles-up"></i>
          </a>
          <div className="redes">
            <a href="https://www.facebook.com/DejameSalvateTu">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/DejameSalvateTu">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://t.me/Esmiculpa">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://www.linkedin.com/in/jorgeantoniosalas/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/JorgeAntonioSalas">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </footer>

        <script src="script.js"></script>
      </div>
    </div>
  );
};

export default Portfolio;
