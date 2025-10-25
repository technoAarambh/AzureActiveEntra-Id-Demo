export const msalConfig = {
  auth: {
    clientId: "6199a1fc-16e0-4985-9a17-d1e6043ae18a", // From Azure App Registration
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID", // Tenant ID
    redirectUri: "http://localhost:3000",
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // Example: request user profile data
};
