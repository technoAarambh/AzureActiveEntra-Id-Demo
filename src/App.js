import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

function App() {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  const handleLogout = () => {
    instance.logoutPopup().catch((e) => {
      console.error(e);
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Azure Entra ID Authentication Demo</h1>
      {accounts.length > 0 ? (
        <>
          <h2>Welcome, {accounts[0].username}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login with Microsoft</button>
      )}
    </div>
  );
}

export default App;
