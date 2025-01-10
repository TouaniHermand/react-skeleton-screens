import { useEffect, useState } from "react";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => setProfile(data))
        .catch((err) => console.log(err));
    }, 5000);
  }, []);

  return (
    <div className="user">
      <h2>User Details</h2>
      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <div>loading...</div>}
    </div>
  );
};

export default User;
