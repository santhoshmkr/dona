import React, { useState } from "react";
import { account } from "../config/Appwrite";
import { useNavigate } from "react-router-dom";
// import { Mail, LockKeyhole } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const loginFunc = async () => {
    // APPWRITE CONFIGURATION
    try {
      await account.createEmailSession(userData.email, userData.password);
      navigate("/account");
    } catch {
      alert("someting wrong");
    }
  };

  return (
    <>
      <div className="w-full h-[88vh] flex bg-[#fff]">
        <div className="m-auto flex flex-col border p-5 rounded-[1rem] shadow-lg gap-[2rem] bg-[#ffff] w-[80%] md:w-1/2 lg:w-1/3 ">
          <h2 className="text-2xl font-[nunito] m-auto font-[800]">Login</h2>

          <div className="w-full flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="border-2 border-l-2 rounded-l-none border-[#e2e2e3] rounded-md p-2 bg-[#fff] focus:outline-none w-[100%]"
              id="mail"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="border-2  border-[#e2e2e3] rounded-md p-2 bg-[#fff] focus:outline-none w-[100%]"
              id="password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <button
            onClick={loginFunc}
            className="bg-[#161d2d] text-[#fff] p-3 rounded-lg text-md font-nunito font-[700] "
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
