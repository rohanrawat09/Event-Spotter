import React from 'react';

const TournamentCard = ({ tournament }) => {
  return (
    <div className="tournament-card">
      <img src={tournament.imageUrl} alt={tournament.title} />
      <h3>{tournament.title}</h3>
      <p>{tournament.selectedSport}</p>
      <p>{tournament.selectedState}</p>
      <p>{tournament.selectedCity}</p>
      <p>{tournament.timing}</p>
      <p>{tournament.venue}</p>
      <p>{tournament.prize}</p>
    </div>
    
  );
};

export default TournamentCard;
