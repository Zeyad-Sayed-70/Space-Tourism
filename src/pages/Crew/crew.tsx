import React, { useEffect, useState } from 'react';
import { CrewProvider } from './style/crew.Styled';
import data_json from '../../data.json';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Crew = () => {
  const [fade, setFade] = useState<boolean>(true);
  const location = useLocation();
  const index = location.search[3] || '0';
  const data = data_json.crew[parseInt(index)] || data_json.crew[0];

  useEffect(()  => {
    document.body.classList.add('body-crew');
    return () => {
      document.body.classList.remove('body-crew');
    };
  });

  function onNavigate() {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 1)
  }

  return (
    <CrewProvider>
      <header className="header"><span>02</span> mmet your crew</header>
      <article className={fade ? 'fadeIn' : ''}>
        <section className="image-container">
          <img src={data.images.png} alt="crew-image" />
        </section>
        <hr />
        <section className="info-container">
          <nav>
            <Link onClick={onNavigate} className={index === '0' ? 'active' : ''} to="/crew?c=0"><span></span></Link>
            <Link onClick={onNavigate} className={index === '1' ? 'active' : ''} to="/crew?c=1"><span></span></Link>
            <Link onClick={onNavigate} className={index === '2' ? 'active' : ''} to="/crew?c=2"><span></span></Link>
            <Link onClick={onNavigate} className={index === '3' ? 'active' : ''} to="/crew?c=3"><span></span></Link>
          </nav>
          <section>
            <div>
              <span className="subheading-2">{data.role}</span>
              <h4 className="subheading-1">{data.name}</h4>
            </div>
            <p className="paragraph">{data.bio}</p>
          </section>
        </section>
      </article>
    </CrewProvider>
  )
}

export default Crew