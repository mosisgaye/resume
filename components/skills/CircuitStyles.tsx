
import React from 'react';

const CircuitStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      .circuit-card-border {
        position: relative;
        z-index: 0;
        border-radius: 1rem;
        overflow: visible;
      }
      
      .circuit-card-border::before {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: 1rem;
        padding: 2px;
        background: linear-gradient(to right, rgba(230, 177, 126, 0.5), rgba(215, 143, 59, 0.5));
        -webkit-mask: 
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        mask: 
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }
      
      /* Top horizontal line */
      .circuit-card-border::after {
        content: '';
        position: absolute;
        top: -2px;
        left: 10%;
        width: 80%;
        height: 2px; 
        background: rgba(230, 177, 126, 0.8);
        z-index: 1;
      }
      
      /* Animated pulses for each border edge */
      .circuit-card-border .top-pulse,
      .circuit-card-border .right-pulse,
      .circuit-card-border .bottom-pulse,
      .circuit-card-border .left-pulse {
        position: absolute;
        background: rgba(230, 177, 126, 0.8);
        z-index: 2;
      }
      
      /* Circuit pulse animations */
      @keyframes pulse-horizontal {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes pulse-vertical {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      
      /* Pulse elements */
      .circuit-card-border .top-pulse {
        top: -2px;
        left: 0;
        width: 30px;
        height: 2px;
        animation: pulse-horizontal 2s infinite;
      }
      
      .circuit-card-border .right-pulse {
        top: 0;
        right: -2px;
        width: 2px;
        height: 30px;
        animation: pulse-vertical 2s infinite 0.5s;
      }
      
      .circuit-card-border .bottom-pulse {
        bottom: -2px;
        right: 0;
        width: 30px;
        height: 2px;
        animation: pulse-horizontal 2s infinite 1s reverse;
      }
      
      .circuit-card-border .left-pulse {
        bottom: 0;
        left: -2px;
        width: 2px;
        height: 30px;
        animation: pulse-vertical 2s infinite 1.5s reverse;
      }
    `}} />
  );
};

export default CircuitStyles;
