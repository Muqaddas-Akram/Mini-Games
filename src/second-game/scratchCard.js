import React, { useState } from 'react';
import ScratchCardImg from './img/card-image.jpg';
import ScratchCardComponent from 'react-scratchcard';
import { useMediaQuery } from '@mui/material';

function CustomScratchCard() {
  const generateRandomContent = () => {
    return Math.random() > 0.5 ? { content: 'Winner', color: 'green' } : { content: 'Loser', color: 'red' };
  };

  const [isGameCompleted, setGameCompleted] = useState(false);

  const settings = {
    width: 300,
    height: 152,
    image: ScratchCardImg,
    finishPercent: 50,
    onTouchMove: (e) => {
      e.preventDefault();
    },
    onComplete: () => {
      if (!isGameCompleted) {
        console.log('The card is now clear!');
        setGameCompleted(true);
      }
    },
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const cardStyle = {
    display: 'inline-block',
    margin: '10px',
  };

  // Generate content for each card once
  const generateInitialCards = () => [...Array(6)].map(() => generateRandomContent());
  const [cards, setCards] = useState(generateInitialCards);

  const handleNewGame = () => {
    // Reset cards and trigger a new game
    setCards(generateInitialCards);
    // Reload the page
    window.location.reload();
  };

  // Responsive breakpoints
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');

  // Adjust card size based on screen size
  const cardSettings = {
    width: isSmallScreen ? 200 : isMediumScreen ? 250 : 300,
    height: isSmallScreen ? 106 : isMediumScreen ? 152 : 152,
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#4caf50' }}>Scratch the Cards</h1>

      <div style={cardContainerStyle}>
        {cards.slice(0, 3).map((card, index) => (
          <div style={cardStyle} key={index}>
            <ScratchCardComponent {...settings} width={cardSettings.width} height={cardSettings.height}>
              <h1 style={{ textAlign: 'center', color: card.color }}>{card.content}</h1>
            </ScratchCardComponent>
          </div>
        ))}
      </div>

      <div style={cardContainerStyle}>
        {cards.slice(3).map((card, index) => (
          <div style={cardStyle} key={index + 3}>
            <ScratchCardComponent {...settings} width={cardSettings.width} height={cardSettings.height}>
              <h1 style={{ textAlign: 'center', color: card.color }}>{card.content}</h1>
            </ScratchCardComponent>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={handleNewGame}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '200px',
            margin: '0 auto',
          }}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default CustomScratchCard;
