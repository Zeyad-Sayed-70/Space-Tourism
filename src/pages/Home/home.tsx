import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { HomePorvider } from './style/home.Style'

const Home = () => {
  useEffect(()  => {
    document.body.classList.add('body-home');
    return () => {
      document.body.classList.remove('body-home');
    };
  });
  return (
    <HomePorvider>
      <section className='hero'>
        <span>so, you want to travel to</span>
        <h1>space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </section>
      <section className="explore">
        <Link to="/destination"><button>explore</button></Link>
      </section>
    </HomePorvider>
  )
}

export default Home