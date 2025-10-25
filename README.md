# 🔐 Azure Active Directory (Microsoft Entra ID) Authentication with React App

This project demonstrates how to integrate **Azure Active Directory (now Microsoft Entra ID)** authentication into a **React application** using the **MSAL (Microsoft Authentication Library)**.

---

## 📘 Table of Contents

1. [What is Azure Active Directory (Entra ID)?](#what-is-azure-active-directory-entra-id)
2. [What is Identity and Identity Provider?](#what-is-identity-and-identity-provider)
3. [Prerequisites](#prerequisites)
4. [Azure Entra ID Setup Steps](#azure-entra-id-setup-steps)
5. [React App Setup](#react-app-setup)
6. [Project Structure](#project-structure)
7. [Run the App](#run-the-app)
8. [Output](#output)

---

## 🧠 What is Azure Active Directory (Entra ID)?

**Azure Active Directory (Azure AD)** — now known as **Microsoft Entra ID** — is a cloud-based **Identity and Access Management (IAM)** service by Microsoft.  
It helps secure access to applications and resources by providing features like authentication, single sign-on (SSO), and conditional access.

Key features:

- Authentication & Authorization
- Single Sign-On (SSO)
- App Registrations
- Role-based access control (RBAC)
- Integration with Microsoft 365 and third-party apps

---

## 🔑 What is Identity and Identity Provider?

### Identity:

An **identity** represents who you are in a digital system — like your email, username, or employee ID.  
**Example:** When you log into Gmail using your email address, that email acts as your identity.

### Identity Provider (IdP):

An **Identity Provider** is a service that verifies and manages identities and provides authentication services to other apps.  
**Example:** When you click "Login with Google" or "Login with Microsoft", Google or Microsoft acts as the **Identity Provider**.

In this project, **Azure Entra ID** is the **Identity Provider** for our React app.

---

## ⚙️ Prerequisites

- Azure Account with **Pay-As-You-Go** subscription (or Free Trial)
- Node.js (v18+ recommended)
- npm or yarn
- Basic understanding of React

---

## 🧩 Azure Entra ID Setup Steps

### 1. **Go to Azure Portal**

Login to [https://portal.azure.com](https://portal.azure.com).

### 2. **Open Microsoft Entra ID**

Search for **"Microsoft Entra ID"** in the top search bar and open it.

### 3. **Register a New Application**

- Go to **App registrations** → click **New registration**.
- Name: `ReactAuthDemo`
- Supported account types: **Accounts in this organizational directory only**
- Redirect URI: `http://localhost:3000`
- Click **Register**

### 4. **Copy Important IDs**

After registration, copy:

- **Application (client) ID**
- **Directory (tenant) ID**

### 5. **Configure Authentication**

- In your app → **Authentication** → click **Add a platform** → select **Single-page application (SPA)**.
- Add redirect URI: `http://localhost:3000`
- Under **Implicit grant and hybrid flows**, check:
  - ✅ Access tokens
  - ✅ ID tokens
- Save changes.

---

## ⚛️ React App Setup

### 1. **Create React App**

```bash
npx create-react-app react-entra-auth
cd react-entra-auth
```
