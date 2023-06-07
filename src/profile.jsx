import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve the user data from the cookie
    const cookieData = Cookies.get('userData');
    if (cookieData) {
      try {
        const parsedData = JSON.parse(cookieData);
        setUserData(parsedData);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }, []);

  return (
    <div>
      {userData && userData.email ? (
        <div>
          <h2>Profile</h2>
          <p>Email: {userData && userData.email}</p>
          {/* Render other user data properties */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Profile;
