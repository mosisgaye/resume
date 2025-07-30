
import React from 'react';

const ServiceCardStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      .service-card-border {
        position: relative;
        z-index: 0;
        border-radius: 1rem;
        overflow: visible;
      }
      
      .service-card-border::before {
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
      
      /* Side line styles */
      .service-card-border::after {
        content: '';
        position: absolute;
        top: 10%;
        right: -2px;
        width: 2px;
        height: 80%;
        background: rgba(230, 177, 126, 0.8);
        z-index: 1;
      }
      
      /* Animated pulses for each border edge */
      .service-card-border .top-pulse,
      .service-card-border .right-pulse,
      .service-card-border .bottom-pulse,
      .service-card-border .left-pulse {
        position: absolute;
        background: rgba(230, 177, 126, 0.8);
        z-index: 2;
      }
      
      /* Pulse elements */
      .service-card-border .top-pulse {
        top: -2px;
        right: 0;
        width: 30px;
        height: 2px;
        animation: pulse-horizontal 2s infinite 0.5s reverse;
      }
      
      .service-card-border .right-pulse {
        top: 0;
        right: -2px;
        width: 2px;
        height: 30px;
        animation: pulse-vertical 2s infinite;
      }
      
      .service-card-border .bottom-pulse {
        bottom: -2px;
        left: 0;
        width: 30px;
        height: 2px;
        animation: pulse-horizontal 2s infinite;
      }
      
      .service-card-border .left-pulse {
        bottom: 0;
        left: -2px;
        width: 2px;
        height: 30px;
        animation: pulse-vertical 2s infinite 1.5s reverse;
      }
    `}} />
  );
};

export default ServiceCardStyles;
