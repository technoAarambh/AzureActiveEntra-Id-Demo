export const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID", // From Azure App Registration
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID", // Tenant ID
    redirectUri: "http://localhost:3000",
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // Example: request user profile data
};
