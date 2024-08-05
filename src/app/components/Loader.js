import React from 'react';
import { Loader } from '@mantine/core';

const CenteredLoader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Add a semi-transparent background
      zIndex: 9999, // Optional: Ensure the loader is on top of other elements
    }}>
      <Loader />
    </div>
  );
};

export default CenteredLoader;
