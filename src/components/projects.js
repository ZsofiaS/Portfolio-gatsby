import React from "react";
import styles from "./projects.module.css";

export default function Projects () {
  return (
    <div>
    <section id="projects" className={styles.projects__main}>
      <h1 className={styles.projects__mainTitle}>some of my projects</h1>
      <div className={styles.project}>
        <div className={styles.project__image}>
          <a href="https://github.com/ZsofiaS/Blog-website" target="_blank" rel="noopener noreferrer"><img src="https://dl.dropboxusercontent.com/s/40914iaedsmzkfk/blog.png?dl=0" alt="blog"/></a>
        </div>
        <div className={styles.project__text}>
          <h2 className={styles.project__textTitle}>blog website</h2>
          <p className={styles.project__textContent}>A blog built from scratch, featuring login and new post section, comments, tags, and a contact form.</p>
          <div className={styles.project__textTags}>
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/html-5.png" alt="html5" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/css3.png" alt="css3" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/nodejs.png" alt="nodejs" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongodb" />
          </div>
          <div className={styles.project__textLink}>
            <a className="button button--dark" href="https://github.com/ZsofiaS/Blog-website" target="_blank" rel="noopener noreferrer" >Code</a>
            <a className="button button--dark" href="https://rocky-gorge-07324.herokuapp.com" target="_blank" rel="noopener noreferrer" >Demo</a>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.project__image}>
          <a href="https://github.com/ZsofiaS/Movie-App" target="_blank" rel="noopener noreferrer" ><img src="https://dl.dropboxusercontent.com/s/oo5ahu00gm1ooa1/movie.png?dl=0" alt="movie app"/></a>
        </div>
        <div className={styles.project__text}>
          <h2 className={styles.project__textTitle}>movie app</h2>
          <p className={styles.project__textContent}>A movie app that utilises the TMDB API, with search and filtering options.</p>
          <div className={styles.project__textTags}>
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/css3.png" alt="css3" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/api-settings.png" alt="api" />
          </div>
          <div className={styles.project__textLink}>
            <a className="button button--dark" href="https://github.com/ZsofiaS/Movie-App" target="_blank" rel="noopener noreferrer" >Code</a>
            <a className="button button--dark" href="http://tidy-passenger.surge.sh/" target="_blank" rel="noopener noreferrer" >Demo</a>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.project__image}>
          <a href="https://github.com/ZsofiaS/Weather-App" target="_blank" rel="noopener noreferrer" ><img src="https://dl.dropboxusercontent.com/s/mle2i5eicmy4e4b/weather.png?dl=0" alt="weather app"/></a>
        </div>
        <div className={styles.project__text}>
          <h2 className={styles.project__textTitle}>weather app</h2>
          <p className={styles.project__textContent}>A weather forecast app that utilises the Open Weather Map API, with search and detailed view.</p>
          <div className={styles.project__textTags}>
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/css3.png" alt="css3" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/api-settings.png" alt="api" />
          </div>
          <div className={styles.project__textLink}>
            <a className="button button--dark" href="https://github.com/ZsofiaS/Weather-App" target="_blank" rel="noopener noreferrer" >Code</a>
            <a className="button button--dark" href="http://seemly-toes.surge.sh/" target="_blank" rel="noopener noreferrer" >Demo</a>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.project__image}>
          <a href="https://codepen.io/zsofia-sz/full/VwLYrzJ" target="_blank" rel="noopener noreferrer" ><img src="https://dl.dropboxusercontent.com/s/idspxze44mf7vdm/memory2.png?dl=0" alt="weather app"/></a>
        </div>
        <div className={styles.project__text}>
          <h2 className={styles.project__textTitle}>memory game</h2>
          <p className={styles.project__textContent}>Time to play! A classic memory game with a Chinese New Year theme.</p>
          <div className={styles.project__textTags}>
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/html-5.png" alt="html5" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/css3.png" alt="css3" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript" />
          </div>
          <div className={styles.project__textLink}>
            <a className="button button--dark" href="https://codepen.io/zsofia-sz/full/VwLYrzJ" target="_blank" rel="noopener noreferrer" >Code & Demo</a>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.project__image}>
          <a href="https://github.com/ZsofiaS/Visit-Peru-website" target="_blank" rel="noopener noreferrer" ><img src="https://dl.dropboxusercontent.com/s/oznntumh4i9jlm5/website.png?dl=0" alt="peru website"/></a>
        </div>
        <div className={styles.project__text}>
          <h2 className={styles.project__textTitle}>responsive webpage</h2>
          <p className={styles.project__textContent}>A responsive travel website/template created using HTML, CSS and Javascript.</p>
          <div className={styles.project__textTags}>
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/html-5.png" alt="html5" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/css3.png" alt="css3" />
            <img className={styles.project__icons} src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript" />
          </div>
          <div className={styles.project__textLink}>
            <a className="button button--dark" href="https://github.com/ZsofiaS/Visit-Peru-website" target="_blank" rel="noopener noreferrer" >Code</a>
            <a className="button button--dark" href="https://zsofias.github.io/Visit-Peru-website" target="_blank" rel="noopener noreferrer" >Demo</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
};
