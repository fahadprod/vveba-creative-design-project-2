// components/ROICalculator.js
import { useState } from 'react';

const ROICalculator = () => {
  const [monthlyAdSpend, setMonthlyAdSpend] = useState(5000);
  const [conversionRate, setConversionRate] = useState(2);
  const [averageValue, setAverageValue] = useState(100);

  const calculatedROI = (monthlyAdSpend * (conversionRate / 100) * averageValue) - monthlyAdSpend;
  const roiPercentage = monthlyAdSpend > 0 ? (calculatedROI / monthlyAdSpend) * 100 : 0;

  return (
    <>
     <h1 className="section-heading">ROI Calculator</h1>
    <div className="roi-calculator">
      <h3 className="roi-calculator-title">Calculate Your Potential ROI</h3>
      
      <div className="roi-calculator-input">
        <label>
          <span className="roi-calculator-label">Monthly Ad Spend:</span>
          <span className="roi-calculator-value">${monthlyAdSpend.toLocaleString()}</span>
        </label>
        <input
          type="range"
          min="500"
          max="50000"
          step="500"
          value={monthlyAdSpend}
          onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
          className="roi-calculator-slider"
        />
        <div className="roi-calculator-range">
          <span>$500</span>
          <span>$50,000</span>
        </div>
      </div>

      <div className="roi-calculator-input">
        <label>
          <span className="roi-calculator-label">Current Conversion Rate:</span>
          <span className="roi-calculator-value">{conversionRate}%</span>
        </label>
        <input
          type="range"
          min="0.5"
          max="10"
          step="0.1"
          value={conversionRate}
          onChange={(e) => setConversionRate(Number(e.target.value))}
          className="roi-calculator-slider"
        />
        <div className="roi-calculator-range">
          <span>0.5%</span>
          <span>10%</span>
        </div>
      </div>

      <div className="roi-calculator-input">
        <label>
          <span className="roi-calculator-label">Average Customer Value:</span>
          <span className="roi-calculator-value">${averageValue.toLocaleString()}</span>
        </label>
        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          value={averageValue}
          onChange={(e) => setAverageValue(Number(e.target.value))}
          className="roi-calculator-slider"
        />
        <div className="roi-calculator-range">
          <span>$10</span>
          <span>$1,000</span>
        </div>
      </div>

      <div className="roi-calculator-result">
        <h4>Estimated Monthly ROI:</h4>
        <div className={`roi-calculator-amount ${calculatedROI >= 0 ? 'roi-calculator-positive' : 'roi-calculator-negative'}`}>
          ${calculatedROI.toLocaleString()}
        </div>
        <div className="roi-calculator-percentage">
          ROI: {roiPercentage >= 0 ? '+' : ''}{roiPercentage.toFixed(1)}%
        </div>
      </div>

      <button className="roi-calculator-cta-button">Get Your Custom Proposal</button>

    </div>
    </>
  );
};

export default ROICalculator;