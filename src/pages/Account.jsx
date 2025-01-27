import React, { useEffect, useState } from "react";
import { account } from "../config/Appwrite";

const Account = () => {
  const [userinfo, setUserinfo] = useState();

  useEffect(() => {
    const infoPromise = account.get();
    infoPromise.then(
      function (res) {
        setUserinfo(res);
      },
      function (err) {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      <div>Account</div>
      {userinfo ? <i>{userinfo.name}</i> : "Loading..."}
    </>
  );
};

export default Account;
