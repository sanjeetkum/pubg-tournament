import React from 'react';
import './index.css';
import logo from '../../images/pubg.png';

function Home() {
  return (
    <div className="main-block">
      <img src={logo}></img>
      <div className="left-part">
        <h1>Register to the Tournament</h1>
        <p>
          We the Power Clan proudly presents a pubg tournament. Participate to
          win exciting prizes.
        </p>
      </div>
      <form action="mailto:sanjeet.kumar.engg@gmail.com">
        <div className="title">
          <i className="fas fa-pencil-alt"></i>
          <h2>Register here</h2>
        </div>
        <div className="info">
          <input
            className="fname"
            type="text"
            name="name"
            placeholder="Full name"
          />
          <input
            className="claneName"
            type="text"
            name="name"
            placeholder="Clan Name"
          />
          <input type="text" name="name" placeholder="Email" />
          <input type="text" name="name" placeholder="Phone number" />
        </div>

        <button type="submit" href="/">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
