import React, { useState } from "react";
import { account } from "../config/Appwrite";
import { useNavigate } from "react-router-dom";
import { Mail, LockKeyhole } from "lucide-react";

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
        <div className="m-auto flex flex-col border p-5 rounded-[1rem] shadow-lg gap-[2rem] bg-[#ffff] w-1/2">
          <h2 className="text-2xl font-[nunito] m-auto font-[800]">Login</h2>

          <div className="w-full flex">
            <div className="p-2 border-2 rounded-md rounded-r-none border-[#e2e2e3] border-r-0">
              <label htmlFor="mail">
                <Mail size={28} strokeWidth={1.5} />
              </label>
            </div>
            <input
              type="email"
              className="border-2 border-l-2 rounded-l-none border-[#e2e2e3] rounded-md p-2 bg-[#fff] focus:outline-none w-[90%]"
              id="mail"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>

          <div className="flex ">
            <div className="p-2 border-2 rounded-md rounded-r-none border-[#e2e2e3] border-r-0">
              <label htmlFor="password">
                <LockKeyhole size={28} strokeWidth={1.5} />
              </label>
            </div>
            <input
              type="password"
              className="border-2 border-l-2 rounded-l-none border-[#e2e2e3] rounded-md p-2 bg-[#fff] focus:outline-none w-[90%]"
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
