import React, { useState } from "react";
import axios from "axios";
import {
  Link,
  useNavigate
} from "react-router-dom";

function CustomerLogin() {

  const navigate = useNavigate();

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


  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("Login clicked");
    console.log("Account:", account);

    try {

        const response = await axios.post(
            "http://localhost:9191/customer/login",
            account
        );

        console.log("Backend Response:", response.data);

        if (response.data) {

            localStorage.setItem(
                "customer",
                JSON.stringify(response.data)
            );

            alert("Login Successful!");

            navigate("/customer");
        }

    } catch (error) {

        console.log("Login Error:", error);

        setError("Invalid Account Number or Password");
    }
};


  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Customer Login
              </h2>


              {error && (

                <div className="alert alert-danger">
                  {error}
                </div>

              )}


              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Account Number
                  </label>

                  <input
                    type="text"
                    name="accountNo"
                    className="form-control"
                    placeholder="Enter account number"
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

export default CustomerLogin;