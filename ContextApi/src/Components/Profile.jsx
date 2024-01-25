import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className=" fs-4 text-dark"> please Login</div>;
  return <div className="fs-4 text-dark">Wecome {user.username}</div>;
}

export default Profile;
