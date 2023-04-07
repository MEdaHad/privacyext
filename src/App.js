import React from 'react';
import './App.css';

function App() {
  const [adBlockEnabled, setAdBlockEnabled] = React.useState(false);
  const [cookieManagementEnabled, setCookieManagementEnabled] =
    React.useState(false);
  const [ipMaskingEnabled, setIpMaskingEnabled] = React.useState(false);
  const [antiTrackingEnabled, setAntiTrackingEnabled] = React.useState(false);
  const [customizationEnabled, setCustomizationEnabled] = React.useState(false);

  const toggleAdBlock = () => {
    setAdBlockEnabled(!adBlockEnabled);
  };

  const toggleCookieManagement = () => {
    setCookieManagementEnabled(!cookieManagementEnabled);
  };

  const toggleIpMasking = () => {
    setIpMaskingEnabled(!ipMaskingEnabled);
  };

  const toggleAntiTracking = () => {
    setAntiTrackingEnabled(!antiTrackingEnabled);
  };

  const toggleCustomization = () => {
    setCustomizationEnabled(!customizationEnabled);
  };

  const handleClearCookies = () => {
    document.cookie.split(';').forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, '')
        .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
  };

  const handleMaskIp = () => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => alert(`Your masked IP address is: ${data.ip}`))
      .catch((error) => console.error(error));
  };

  const handleBlockAds = () => {
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach((container) => (container.style.display = 'none'));
  };

  const handleAntiTracking = () => {
    const trackingScripts = document.querySelectorAll('script[src*=track]');
    trackingScripts.forEach((script) => script.remove());
  };

  const handleCustomize = () => {
    const body = document.querySelector('body');
    body.style.backgroundColor = '#f2f2f2';
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.fontSize = '16px';
    body.style.color = '#333';
  };
  return (
    <div className="privacy-extension">
      <h2 className="title">Privacy Extension</h2>
      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={adBlockEnabled}
            onChange={toggleAdBlock}
          />
          <span className="option-label">Ad-blocking</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={cookieManagementEnabled}
            onChange={toggleCookieManagement}
          />
          <span className="option-label">Cookie management</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={ipMaskingEnabled}
            onChange={toggleIpMasking}
          />
          <span className="option-label">IP masking</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={antiTrackingEnabled}
            onChange={toggleAntiTracking}
          />
          <span className="option-label">Anti-tracking</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={customizationEnabled}
            onChange={toggleCustomization}
          />
          <span className="option-label">Customization options</span>
        </label>
      </div>

      <button className="button" onClick={handleClearCookies}>
        Clear Cookies
      </button>
      <button className="button" onClick={handleMaskIp}>
        Mask IP
      </button>
      <button
        className="button"
        onClick={handleBlockAds}
        disabled={!adBlockEnabled}
      >
        Block Ads
      </button>
      <button
        className="button"
        onClick={handleAntiTracking}
        disabled={!antiTrackingEnabled}
      >
        Anti-tracking
      </button>
      <button
        className="button"
        onClick={handleCustomize}
        disabled={!customizationEnabled}
      >
        Customize
      </button>
    </div>
  );
}

export default App;
