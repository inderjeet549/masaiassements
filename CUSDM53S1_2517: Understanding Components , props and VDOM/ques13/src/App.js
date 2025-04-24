import React from 'react';
import Header from './Header';
import PricingPlans from './PricingPlans';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <PricingPlans />
    </div>
  );
}

export default App;