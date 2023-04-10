import React, { useState, useEffect } from 'react';

const IPMasker = () => {
  const [fakeIP, setFakeIP] = useState(null);
  const [isIPMasked, setIsIPMasked] = useState(false);

  const fetchIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();
      const realIP = data.ip;
      const fakeIP = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(
        Math.random() * 255
      )}`;
      setFakeIP(fakeIP);
      setIsIPMasked(true);
      console.log(`Real IP: ${realIP}`);
      console.log(`Fake IP: ${fakeIP}`);
    } catch (err) {
      console.log(err);
    }
  };

  const unmaskIP = () => {
    setIsIPMasked(false);
  };

  useEffect(() => {
    fetchIP();
  }, []);

  return (
    <div>
      {isIPMasked ? (
        <p>
          Your IP address has been masked. Your current IP address is {fakeIP}.
          <button onClick={unmaskIP}>Unmask IP</button>
        </p>
      ) : (
        <p>Your IP address is not masked. Click below to mask your IP:</p>
      )}
      <button onClick={fetchIP}>Mask IP</button>
    </div>
  );
};

export default IPMasker;
