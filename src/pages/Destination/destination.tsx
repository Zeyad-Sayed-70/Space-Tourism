import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import data_json from '../../data.json';
import { DestinationProvider } from './style/destination.Styled';

const Destination = () => {
  const location = useLocation();
  const index = location.search[6] || '0';
  const data = data_json.destinations[parseInt(index)] || data_json.destinations[0];
  useEffect(()  => {
    document.body.classList.add('body-destination');
    return () => {
      document.body.classList.remove('body-destination');
    };
  });
  return (
    <DestinationProvider>
      <header className="header"><span>01</span> pick your destination</header>
      <article>
        <section className="image-container">
          <img src={data.images.png} alt="destination_image" />
        </section>
        <section className="info">
          <ul>
            <Link className={index === '0' ? 'active' : ''} to="/destination?dest=0"><li>moon</li></Link>
            <Link className={index === '1' ? 'active' : ''} to="/destination?dest=1"><li>mars</li></Link>
            <Link className={index === '2' ? 'active' : ''} to="/destination?dest=2"><li>europa</li></Link>
            <Link className={index === '3' ? 'active' : ''} to="/destination?dest=3"><li>titan</li></Link>
          </ul>
          <div>
            <h2>{data.name}</h2>
            <p className="paragraph">{data.description}</p>
            <hr />
            <div className="statics">
              <section>
                <span className="subheading-2">avg.distance</span>
                <h4 className="subheading-1">{data.distance}</h4>
              </section>
              <section>
                <span className="subheading-2">est, travel time</span>
                <h4 className="subheading-1">{data.travel}</h4>
              </section>
            </div>
          </div>
        </section>
      </article>
    </DestinationProvider>
  )
}

export default Destination