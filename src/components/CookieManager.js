import React, { useState, useEffect } from 'react';

function CookieManager() {
  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    getCookies();
  }, []);

  function getCookies() {
    const cookiesList = document.cookie.split(';');
    const cookiesArr = cookiesList.map((cookie) => {
      const cookieArr = cookie.split('=');
      return {
        name: cookieArr[0].trim(),
        value: cookieArr[1],
        selected: false,
      };
    });
    setCookies(cookiesArr);
  }

  function deleteCookies() {
    cookies.forEach((cookie) => {
      if (cookie.selected) {
        document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    });
    getCookies();
  }

  function toggleSelected(index) {
    const updatedCookies = [...cookies];
    updatedCookies[index].selected = !updatedCookies[index].selected;
    setCookies(updatedCookies);
  }

  return (
    <div>
      <h2>Cookie Manager</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((cookie, index) => (
            <tr key={index}>
              <td>{cookie.name}</td>
              <td>{cookie.value}</td>
              <td>
                <input
                  type="checkbox"
                  checked={cookie.selected}
                  onChange={() => toggleSelected(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={deleteCookies}>Delete Selected Cookies</button>
    </div>
  );
}

export default CookieManager;
