import { Link, useLocation } from 'react-router-dom';
import data_json from '../../data.json';
import { DestinationProvider } from './style/destination.Styled';

const Destination = () => {
  const location = useLocation();
  const index = location.search[6] || '0';
  const data = data_json.destinations[parseInt(index)];

  return (
    <DestinationProvider>
      <header><span>0{parseInt(index)+1}</span> pick your destination</header>
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
            <p>{data.description}</p>
            <hr />
            <div className="statics">
              <section>
                <span>avg.distance</span>
                <h4>{data.distance}</h4>
              </section>
              <section>
                <span>est, travel time</span>
                <h4>{data.travel}</h4>
              </section>
            </div>
          </div>
        </section>
      </article>
    </DestinationProvider>
  )
}

export default Destination