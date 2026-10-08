import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./components/Home";

// Admin
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import CreateAccount from "./components/Admin/CreateAccount";
import AdminAccount from "./components/Admin/AdminAccount";
import UpdateAccount from "./components/Admin/UpdateAccount";

// Customer
import CustomerLogin from "./components/Customer/CustomerLogin";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import Profile from "./components/Customer/Profile";
import Balance from "./components/Customer/Balance";
import Deposit from "./components/Customer/Deposit";
import Withdrawal from "./components/Customer/Withdrawal";
import TransactionHistory from "./components/Customer/TransactionHistory";
import GetSingleAccount from "./components/Admin/GetSingleAccount";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ADMIN */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route
          path="/admin/create-account"
          element={<CreateAccount />}
        />

        <Route
          path="/admin/accounts"
          element={<AdminAccount />}
        />

        <Route
          path="/admin/update-account/:id"
          element={<UpdateAccount />}
        />

        <Route
    path="/admin/get-account"
    element={<GetSingleAccount />}
/>

        {/* CUSTOMER */}
        <Route
          path="/customer-login"
          element={<CustomerLogin />}
        />

        <Route
          path="/customer"
          element={<CustomerDashboard />}
        />

        <Route
          path="/customer/profile/:id"
          element={<Profile />}
        />

        <Route
          path="/customer/balance/:id"
          element={<Balance />}
        />

        <Route
          path="/customer/deposit/:accountNo"
          element={<Deposit />}
        />

        <Route
          path="/customer/withdraw/:accountNo"
          element={<Withdrawal />}
        />

        <Route
          path="/customer/transactions"
          element={<TransactionHistory />}
        />

        {/* WRONG URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;