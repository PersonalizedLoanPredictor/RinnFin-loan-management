---
# RinnFin: AI-Based Loan Finance App

[![RinnFin Logo](src/Assets/RinnFin.png)]

![React](https://img.shields.io/badge/React-v19.0-blue.svg) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg) ![CSS](https://img.shields.io/badge/CSS-Responsive-green.svg) ![Node.js](https://img.shields.io/badge/Node.js-Backend-red.svg) ![MongoDB](https://img.shields.io/badge/MongoDB-Database-green.svg) ![Machine Learning](https://img.shields.io/badge/AI-ML-orange.svg)

**RinnFin** is an AI-powered loan finance web application designed to bridge the gap between financial institutions and borrowers. The platform has two interfaces:
1. **Banks**: List their loan offerings and use AI-based recommendations to evaluate loan applications.
2. **Users**: Apply for loans and receive AI-driven predictions on loan approval probability before submission.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

## Features

### 1. **User Authentication:**
   - **Login and Signup Page:** Secure authentication for banks and users.
   - **Role-Based Access:** Separate dashboards for banks and users.

### 2. **Bank Dashboard:**
   - **List Loan Offers:** Banks can create and manage loan offers.
   - **AI-Based Loan Evaluation:** AI model analyzes borrower applications and recommends approval or rejection.
   - **Application Management:** View and process loan applications.
   
   ![Bank Dashboard](https://via.placeholder.com/800x400)

### 3. **User Dashboard:**
   - **Apply for Loans:** Users can apply for loans listed by banks.
   - **AI-Based Loan Prediction:** AI model predicts the probability of loan approval before submission.
   - **Track Loan Status:** Users can monitor the progress of their applications.
   
   ![User Dashboard](https://via.placeholder.com/800x400)

### 4. **AI/ML-Based Loan Processing:**
   - **Loan Approval Prediction Model:** Analyzes user financial history, credit score, and other parameters to predict loan approval chances.
   - **Automated Risk Analysis:** AI flags high-risk applications for manual review.
   
   ![AI Loan Processing](https://via.placeholder.com/800x400)

### 5. **Secure Transactions:**
   - **Encryption & Data Protection:** Secure storage of financial and personal data.
   - **Bank Integration:** APIs for seamless integration with financial institutions.

---

## **🚀 Tech Stack**

| **Technology**       | **Description**                                       |
|-----------------------|-------------------------------------------------------|
| **React.js**          | Frontend framework for user interface.                |
| **Node.js**          | Backend runtime environment for APIs.                  |
| **Express.js**       | Backend framework for building RESTful APIs.           |
| **MongoDB**         | Database for storing user and bank information.        |
| **Machine Learning** | AI model for loan approval prediction.                 |
| **JWT Authentication** | Secure user authentication and authorization.        |

---

## **📂 Project Structure**

```
src/
│
├── components/          # Reusable React components
├── pages/               # Dashboard, Login, Signup, Loan Application
├── backend/             # Node.js & Express API for handling logic
├── models/              # MongoDB models for users, loans, and banks
├── routes/              # API routes for authentication and loan management
├── AI_model/            # Machine learning model for loan prediction
├── styles/              # CSS styles for responsive design
├── App.js               # Main app component with routing
└── index.js             # Entry point of the app
```

---

## **💻 Installation and Setup**

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RinnFin-Team/RinnFin-WebApp.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd RinnFin-WebApp
   ```

3. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

4. **Install backend dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

5. **Run the backend server**:
   ```bash
   npm start
   ```

6. **Run the frontend server**:
   ```bash
   cd ../frontend
   npm start
   ```

7. **Access the app**:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## **🛠️ Features in Action**

| Page         | Description                                                   |
|--------------|---------------------------------------------------------------|
| **Login**    | Secure login for banks and users.                             |
| **Signup**   | Role-based registration for banks and users.                  |
| **Dashboard**| Separate dashboards for banks and users.                      |
| **Loan Apply** | Users can apply for loans with AI-based prediction.         |
| **Loan Management** | Banks can review and process applications.             |

---

