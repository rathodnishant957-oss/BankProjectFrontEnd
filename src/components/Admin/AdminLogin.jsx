import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin123";

  const [account, setAccount] = useState({
    accountNo: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setAccount({
      ...account,
      [e.target.name]: e.target.value
    });

    setError("");
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      account.accountNo === ADMIN_USERNAME &&
      account.password === ADMIN_PASSWORD
    ) {

      localStorage.setItem("admin", "true");

      navigate("/admin");

    } else {

      setError("Invalid Admin Username or Password");

    }
  };


  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Admin Login
              </h2>


              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}


              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Username
                  </label>

                  <input
                    type="text"
                    name="accountNo"
                    className="form-control"
                    placeholder="Enter admin username"
                    value={account.accountNo}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={account.password}
                    onChange={handleChange}
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>

              </form>


              <div className="text-center mt-3">

                <Link to="/">
                  Back to Home
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;