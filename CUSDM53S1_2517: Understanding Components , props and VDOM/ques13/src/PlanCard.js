import React from 'react';
import Button from './Button';

function PlanCard({ title, description, price, features, cta, highlighted }) {
  return (
    <div className={`plan-card ${highlighted ? 'highlighted-card' : ''}`}>
      <div className="plan-content">
        <h3 className="plan-title">{title}</h3>
        <p className="plan-description">{description}</p>
        <p className="plan-price">{price}</p>
        <ul className="plan-features">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-bullet">•</span> {feature}
            </li>
          ))}
        </ul>
        <Button highlighted={highlighted}>{cta}</Button>
      </div>
    </div>
  );
}

export default PlanCard;