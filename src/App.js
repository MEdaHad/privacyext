import React from 'react';
import './App.css';

function App() {
  const [adBlockEnabled, setAdBlockEnabled] = React.useState(false);
  const [cookieManagementEnabled, setCookieManagementEnabled] = React.useState(false);
  const [ipMaskingEnabled, setIpMaskingEnabled] = React.useState(false);
  const [antiTrackingEnabled, setAntiTrackingEnabled] = React.useState(false);
  const [customizationEnabled, setCustomizationEnabled] = React.useState(false);
  return (
    <div className="privacy-extension">
      <h2>Privacy Extension</h2>
      <div className="options">
        <label>
          <input type="checkbox" checked={adBlockEnabled} onChange={() => setAdBlockEnabled(!adBlockEnabled)} />
          Ad-blocking
        </label>
        <label>
          <input type="checkbox" checked={cookieManagementEnabled} onChange={() => setCookieManagementEnabled(!cookieManagementEnabled)} />
          Cookie management
        </label>
        <label>
          <input type="checkbox" checked={ipMaskingEnabled} onChange={() => setIpMaskingEnabled(!ipMaskingEnabled)} />
          IP masking
        </label>
        <label>
          <input type="checkbox" checked={antiTrackingEnabled} onChange={() => setAntiTrackingEnabled(!antiTrackingEnabled)} />
          Anti-tracking
        </label>
        <label>
          <input type="checkbox" checked={customizationEnabled} onChange={() => setCustomizationEnabled(!customizationEnabled)} />
          Customization options
        </label>
      </div>
    </div>
  );
}

export default App;
