import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

const generateRandomSlotValue = () => {
  const symbols = ['Mercedes-Benz', 'Lamborghini', 'Ferrari', 'Supra', 'Bentley'];
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
};

const SlotMachine = () => {
  const initialSlots = Array.from({ length: 3 }, generateRandomSlotValue);
  const [slots, setSlots] = useState(initialSlots);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setSlots((prevSlots) =>
          prevSlots.map(() => generateRandomSlotValue())
        );
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setIsSpinning(false);
      }, 2000);
    }
  }, [isSpinning]);

  const handleSpin = () => {
    if (!isSpinning) {
      setSlots(initialSlots);
      setIsSpinning(true);
    }
  };

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const cardStyle = {
    margin: '10px',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minWidth: isSmallScreen ? '80px' : '100px',
    flex: '1 1 auto',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {slots.map((symbol, index) => (
          <div style={cardStyle} key={index}>
            <img
              src={`images/${symbol.toLowerCase()}.png`} 
              alt={symbol}
              style={{ height: isSmallScreen ? '40px' : '50px', marginBottom: '10px' }}
            />
            <div
              style={{
                fontSize: isSmallScreen ? '14px' : '18px',
                fontWeight: 'bold',
                color: '#333',
                textTransform: 'capitalize',
              }}
            >
              {symbol}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: isSmallScreen ? '14px' : '16px',
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          outline: 'none',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {isSpinning ? 'Spinning...' : 'Click Here'}
      </button>
    </div>
  );
};

export default SlotMachine;
