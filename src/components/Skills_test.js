import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import '../styles/Skills.css'; // Créez un fichier CSS pour styliser vos composants

const SkillsComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  const handleScroll = () => {
    let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight + window.innerHeight;
    let progressHeight = (window.pageYOffset / totalHeight) * 28.1;
    progress.style.display = 'revert';
    progress.style.height = progressHeight + "%";

    let flowBar1 = document.getElementById('htBar');
    let flowBar2 = document.getElementById('csBar');

    if (progressHeight > 5) {
      flowBar1.style.animationName = 'animateskillbar11';
      flowBar2.style.animationName = 'animateskillbar22';
    } else {
      flowBar1.style.animationName = 'animateskillbar1';
      flowBar2.style.animationName = 'animateskillbar2';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="skillbox">
          <p className="sk">HTML</p>
          <div className="container" data-aos="fade-right">
            <div className="htmlbar bars" id="htBar">90%</div>
            <div className="progress-line1 html">
              <span></span>
            </div>
          </div>

          <p className="sk">CSS</p>
          <div className="container" data-aos="fade-right">
            <div className="cssbar bars" id="csBar">80%</div>
            <div className="progress-line2 css">
              <span></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
