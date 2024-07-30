import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TournamentCard from './TournamentCard';

const LandingPage = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    // Fetch tournaments from the backend
    axios.get('/api/tournaments')
      .then(response => setTournaments(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="landing-page">
      <h2>Tournaments</h2>
      <div className="tournament-list">
        {tournaments.map(tournament => (
          <TournamentCard key={tournament._id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
