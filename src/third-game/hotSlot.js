import React from 'react';
import SlotMachine from './SlotMachine';
import { useMediaQuery } from '@mui/material';

const HotSlotGame = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div
      style={{
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: isSmallScreen ? '10px' : '20px',
      }}
    >
      <h1
        style={{
          color: '#4caf50',
          marginBottom: '30px',
          fontSize: isSmallScreen ? '28px' : '36px',
        }}
      >
        Hot Slot Game
      </h1>
      <SlotMachine />
    </div>
  );
};

export default HotSlotGame;
