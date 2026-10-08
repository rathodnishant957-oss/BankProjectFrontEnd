import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <>

      {/* NAVBAR */}

      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          <Link
            to="/"
            className="navbar-brand fw-bold"
          >
            Bank Management
          </Link>

          <div>

            <Link
              to="/customer-login"
              className="btn btn-outline-light me-2"
            >
              Customer Login
            </Link>

            <Link
              to="/admin-login"
              className="btn btn-primary"
            >
              Admin Login
            </Link>

          </div>

        </div>
      </nav>


      {/* HOME */}

      <div className="container mt-5">

        <div className="text-center">

          <h1 className="fw-bold">
            Welcome to Bank Management System
          </h1>

          <p className="text-muted">
            Secure and simple banking management system
          </p>

        </div>


        <div className="row justify-content-center mt-5">

          {/* CUSTOMER */}

          <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

              <div className="card-body text-center p-4">

                <h3 className="text-primary">
                  Customer
                </h3>

                <p>
                  Login to access your bank account.
                </p>

                <Link
                  to="/customer-login"
                  className="btn btn-primary"
                >
                  Customer Login
                </Link>

              </div>

            </div>

          </div>


          {/* ADMIN */}

          <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

              <div className="card-body text-center p-4">

                <h3 className="text-success">
                  Admin
                </h3>

                <p>
                  Manage customer bank accounts.
                </p>

                <Link
                  to="/admin-login"
                  className="btn btn-success"
                >
                  Admin Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Home;