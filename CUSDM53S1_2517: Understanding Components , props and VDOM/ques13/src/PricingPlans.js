import React from 'react';
import PlanCard from './PlanCard';

function PricingPlans() {
  const plans = [
    {
      title: 'Starter',
      description: 'Lorem, ipsum dolor',
      price: 'Free',
      features: ['1 lorem ipsum', 'Monthly Updates'],
      cta: 'Get Started',
      highlighted: false
    },
    {
      title: 'Lorem Plus',
      description: 'Lorem, ipsum dolor',
      price: '$32.00',
      features: ['1 lorem ipsum', 'Monthly Updates'],
      cta: 'Get Started',
      highlighted: true
    },
    {
      title: 'Lorem Pro',
      description: 'Lorem, ipsum dolor',
      price: '$50.00',
      features: ['1 lorem ipsum', 'Monthly Updates'],
      cta: 'Get Started',
      highlighted: false
    }
  ];

  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <PlanCard key={index} {...plan} />
      ))}
    </div>
  );
}

export default PricingPlans;