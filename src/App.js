import React from 'react';
import { BodyBlock } from './components/bodyBlocks';
import './scss/App.scss';

function App() {

  let whoIAmArray = ["father/husband", "tck", "developer", "blogger"];
  let skillsArray =  ["html5 / css3", "js", "php", "adobe ps, ai, id, xd, pr, ae, au"];
  let thingsILikeArray = ["film enthusiast", "gaming aficionado", "music pundit", "haribo addict"];

  let phoneLink = <a href="tel:6167172423" data-rel="external">phone:616.717.2423</a>;
  let mailLink = <a href="mailto=taeyongkim.95@gmail.com" data-rel="external">email:taeyongkim.95@gmail.com</a>;

  return (
    <div>

      <section className="hero-container">

        <div className="absolute-centering-container">
          <h1 className="clip-text">taeyong.kim</h1>
        </div>

      </section>

      <section className="body-container">

        <BodyBlock title="who i am" 
                   lines={ whoIAmArray }/>
        
        <BodyBlock title="skills i have" 
                   lines={ skillsArray }/>

        <BodyBlock title="things i like" 
                   lines={ thingsILikeArray }/>

        <BodyBlock title="how to reach me" 
                   lines={ [phoneLink, mailLink] }/>

      </section>

    </div>
  );
}

export default App;
