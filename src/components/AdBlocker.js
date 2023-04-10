import React, { useState } from 'react';

const AdBlocker = () => {
  const [enabled, setEnabled] = useState(true);
  const [rules, setRules] = useState([]);
  const [whitelist, setWhitelist] = useState([]);

  const toggleEnabled = () => {
    setEnabled(!enabled);
  };

  const addRule = (rule) => {
    setRules([...rules, rule]);
  };

  const removeRule = (rule) => {
    setRules(rules.filter((r) => r !== rule));
  };

  const addWhitelist = (site) => {
    setWhitelist([...whitelist, site]);
  };

  const removeWhitelist = (site) => {
    setWhitelist(whitelist.filter((s) => s !== site));
  };

  const handleRuleChange = (e) => {
    setRules(e.target.value.split('\n'));
  };

  const handleWhitelistChange = (e) => {
    setWhitelist(e.target.value.split('\n'));
  };

  return (
    <div>
      <h2>AdBlocker</h2>
      <label>
        <input type="checkbox" checked={enabled} onChange={toggleEnabled} />
        Enable ad-blocking
      </label>
      <br />
      <label>
        Custom rules:
        <textarea value={rules.join('\n')} onChange={handleRuleChange} />
      </label>
      <br />
      <label>
        Whitelist:
        <textarea
          value={whitelist.join('\n')}
          onChange={handleWhitelistChange}
        />
      </label>
    </div>
  );
};

export default AdBlocker;
