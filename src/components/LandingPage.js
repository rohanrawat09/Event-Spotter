import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TournamentCard from './TournamentCard';
import './LandingPage.css';
import plate from './plate.png'
import body from './Body.png';

const LandingPage = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    // Fetch tournaments from the backend
    axios.get('/api/tournaments')
      .then(response => setTournaments(response.data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className='main-div'>
      <div className='page-1'>
       <div className='part-1'>
       <div id='sport'> Sports</div>
       <div id='quote'>
        "Winning & Loosing <br/>
          is part of <br/>
          Game"
        </div>
        <div id='text-1'>
         Find information about the
         Armwrestling,<br/> Bodybuilding and Powerlifting <br/>
          tournaments near you !
        </div>
        <div id='text-2'>
        Want to upload your poster?
        </div>
        <div id='upload-btn'>
          <button > Click here  </button>
        </div>
        <div id='plate'>
          <img src={plate} alt='Loading'></img>
        </div>
        </div> 
        <div className='part-2'> 
        <img src={body} alt='Loading'></img>
      </div>
      </div>
      <div className='page-2'>
        <div id='poster'>
          <div className='card'>
          {tournaments.map(tournament => (
          <TournamentCard key={tournament._id} tournament={tournament} />
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
