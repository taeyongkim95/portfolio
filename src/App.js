import React from 'react';
import './scss/App.scss';

function App() {
  return (
    <div>

      <section className="hero-container">

        <div className="absolute-centering-container">
          <h1 className="clip-text">taeyong.kim</h1>
        </div>

      </section>

      <section className="body-container">

        <div className="body-blocks">
          <h2 className="traits">who i am</h2>
          <ul className="lines">
            <li>father / husband</li>
            <li>tck</li>
            <li>developer</li>
            <li>blogger</li>
          </ul>
        </div>

        <div className="body-blocks">
          <h2 className="traits">skills i have</h2>
          <ul className="lines">
            <li>html5 / css3</li>
            <li>js</li>
            <li>php</li>
            <li>adobe ps, ai, id, xd, pr, ae, au</li>
            <li></li>
          </ul>
        </div>

        <div className="body-blocks">
          <h2 className="traits">things i like</h2>
          <ul className="lines">
            <li>film enthusiast</li>
            <li>gaming aficionado</li>
            <li>music pundit</li>
            <li>haribo addict</li>
          </ul>
        </div>

        <div className="body-blocks">
          <h3 className="traits">how to reach me</h3>
          <ul className="lines">
            <li><a href="tel:6167172423">phone:616.717.2423</a></li>
            <li><a href="mailto=taeyongkim.95@gmail.com">email:taeyongkim.95@gmail.com</a></li>
          </ul>
        </div>

      </section>

    </div>
  );
}

export default App;
