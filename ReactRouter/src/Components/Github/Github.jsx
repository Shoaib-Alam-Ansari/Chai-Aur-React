import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Github() {

     const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   });
  return (
    <>
      <div
        className=" d-flex justify-content-center my-5"
        style={{ height: "" }}
      >
        <div class="card" style={{ width: " 20rem" }}>
            <div className=" m-3">
            <img
              class="card-img-top rounded-circle shadow-lg p-3"
              src={data.avatar_url}
              alt="..."
            />
            </div>

          <div class="card-body">
            <h4 className="card-title">
                {data.name}
            </h4>
            <p class="card-text">{data.bio}</p>
            <p class="card-text">
              <Link  to="#" class="btn btn-outline-primary">
                    Followers: {data.followers}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;

 export const githubInfo = async () => {
   const response =  await fetch("https://api.github.com/users/hiteshchoudhary")
   return response.json();

}