import React, { useState } from "react";

import { account } from "../config/Appwrite";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const signupFunc = async () => {
    // APPWRITE CONFIGURATION
    const signPromise = account.create(
      userData.name,
      userData.email,
      userData.password,
      userData.name
    );
    signPromise.then(
      function (res) {
        navigate("/login");
        console.log(res);
      },
      function (err) {
        console.log(err);
      }
    );
  };

  return (
    <div className="w-full h-[88vh] flex bg-[#fff]">
      <div className="m-auto flex flex-col border p-5 rounded-[1rem] shadow-lg gap-[2rem] bg-[#ffff] w-[80%] md:w-1/2 lg:w-1/3 ">
        <h2 className="text-2xl font-[nunito] m-auto font-[800]">Signup</h2>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border-2 border-[#e2e2e3] rounded-md p-2 bg-[#fff] focus:outline-none"
            id="name"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mail">Email</label>
          <input
            type="email"
            className="border-2 border-[#e2e2e3] rounded-md p-2 bg-[#fff] focus:outline-none"
            id="mail"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pass">Password</label>
          <input
            type="text"
            className="border-2 border-[#e2e2e3] rounded-md p-2 bg-[#fff] focus:outline-none"
            id="pass"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <button onClick={signupFunc} className="bg-[#161d2d] text-[#fff] p-3 rounded-lg text-md font-nunito font-[700]">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
