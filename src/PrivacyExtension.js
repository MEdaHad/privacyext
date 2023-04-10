import React, { useState } from 'react';
import AdBlocker from './components/AdBlocker';
import CookieManager from './components/CookieManager';
import IpMasker from './components/IpMasker';
import Settings from './components/Settings';
import TrackerBlocker from './components/TrackerBlocker';

function PrivacyExtension() {
  const [activeTab, setActiveTab] = useState('adblocker');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 'adblocker' ? 'active' : ''}
          onClick={() => handleTabChange('adblocker')}
        >
          Ad Blocker
        </button>
        <button
          className={activeTab === 'cookiemanager' ? 'active' : ''}
          onClick={() => handleTabChange('cookiemanager')}
        >
          Cookie Manager
        </button>
        <button
          className={activeTab === 'ipmasker' ? 'active' : ''}
          onClick={() => handleTabChange('ipmasker')}
        >
          IP Masker
        </button>
        <button
          className={activeTab === 'trackerblocker' ? 'active' : ''}
          onClick={() => handleTabChange('trackerblocker')}
        >
          Tracker Blocker
        </button>
        <button
          className={activeTab === 'settings' ? 'active' : ''}
          onClick={() => handleTabChange('settings')}
        >
          Settings
        </button>
      </div>
      {activeTab === 'adblocker' && <AdBlocker />}
      {activeTab === 'cookiemanager' && <CookieManager />}
      {activeTab === 'ipmasker' && <IpMasker />}
      {activeTab === 'trackerblocker' && <TrackerBlocker />}
      {activeTab === 'settings' && <Settings />}
    </div>
  );
}

export default PrivacyExtension;
