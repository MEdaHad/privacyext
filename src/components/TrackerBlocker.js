import React, { useState } from 'react';

const TrackerBlocker = () => {
  const [isBlockingEnabled, setIsBlockingEnabled] = useState(false);
  const [blockList, setBlockList] = useState([]);

  const toggleBlocking = () => {
    setIsBlockingEnabled(!isBlockingEnabled);
  };

  const handleBlockListChange = (e) => {
    setBlockList(e.target.value.split('\n'));
  };

  return (
    <div>
      <h2>Tracker Blocker</h2>
      <div>
        <input
          type="checkbox"
          checked={isBlockingEnabled}
          onChange={toggleBlocking}
        />
        <label>Block trackers</label>
      </div>
      <div>
        <textarea
          value={blockList.join('\n')}
          onChange={handleBlockListChange}
        />
      </div>
    </div>
  );
};

export default TrackerBlocker;
