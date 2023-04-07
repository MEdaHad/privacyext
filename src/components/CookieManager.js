import React, { useState, useEffect } from 'react';

function CookieManager() {
  const [cookies, setCookies] = useState([]);

  // Get cookies for the current domain
  useEffect(() => {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
    setCookies(cookies);
  }, []);

  // Remove a specific cookie
  function removeCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    setCookies(cookies.filter((cookie) => cookie.split('=')[0] !== cookieName));
  }

  return (
    <div>
      <h2>Cookie Manager</h2>
      <p>View and manage cookies for this website.</p>
      {cookies.length > 0 ? (
        <ul>
          {cookies.map((cookie) => (
            <li key={cookie}>
              {cookie}
              <button onClick={() => removeCookie(cookie.split('=')[0])}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cookies found for this website.</p>
      )}
    </div>
  );
}

export default CookieManager;
