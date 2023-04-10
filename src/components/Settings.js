import React, { useState } from 'react';

function Settings({
  adBlockingEnabled,
  cookieBlockingEnabled,
  antiTrackingEnabled,
  onAdBlockingToggle,
  onCookieBlockingToggle,
  onAntiTrackingToggle,
}) {
  const [customSettings, setCustomSettings] = useState(false);

  function handleCustomSettingsChange(event) {
    setCustomSettings(event.target.checked);
  }

  function handleAdBlockingToggle() {
    onAdBlockingToggle(!adBlockingEnabled);
  }

  function handleCookieBlockingToggle() {
    onCookieBlockingToggle(!cookieBlockingEnabled);
  }

  function handleAntiTrackingToggle() {
    onAntiTrackingToggle(!antiTrackingEnabled);
  }

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={adBlockingEnabled}
            onChange={handleAdBlockingToggle}
          />
          Enable ad-blocking
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={cookieBlockingEnabled}
            onChange={handleCookieBlockingToggle}
          />
          Enable cookie-blocking
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={antiTrackingEnabled}
            onChange={handleAntiTrackingToggle}
          />
          Enable anti-tracking
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={customSettings}
            onChange={handleCustomSettingsChange}
          />
          Show custom settings
        </label>
      </div>
      {customSettings && (
        <div>
          <h3>Custom settings</h3>
          {/* Add custom settings UI here */}
        </div>
      )}
    </div>
  );
}

export default Settings;
