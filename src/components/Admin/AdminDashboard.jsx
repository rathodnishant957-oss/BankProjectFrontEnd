import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("admin");

        navigate("/");

    };


    return (
        <>

            {/* Navbar */}

            <nav className="navbar navbar-dark bg-dark">

                <div className="container">

                    <Link
                        to="/admin"
                        className="navbar-brand fw-bold"
                    >
                        Bank Management - Admin
                    </Link>

                    <button
                        onClick={logout}
                        className="btn btn-danger"
                    >
                        Logout
                    </button>

                </div>

            </nav>


            {/* Dashboard */}

            <div className="container mt-5">

                <h2 className="text-center mb-5">
                    Admin Dashboard
                </h2>


                <div className="row">


                    {/* CREATE ACCOUNT */}

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center p-4">

                                <h4>
                                    Create Account
                                </h4>

                                <p className="text-muted">
                                    Create a new customer bank account.
                                </p>

                                <Link
                                    to="/admin/create-account"
                                    className="btn btn-primary"
                                >
                                    Create Account
                                </Link>

                            </div>

                        </div>

                    </div>


                    {/* GET ALL ACCOUNTS */}

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center p-4">

                                <h4>
                                    Get All Accounts
                                </h4>

                                <p className="text-muted">
                                    View all customer accounts.
                                </p>

                                <Link
                                    to="/admin/accounts"
                                    className="btn btn-success"
                                >
                                    Get All
                                </Link>

                            </div>

                        </div>

                    </div>


                    {/* GET SINGLE ACCOUNT */}

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center p-4">

                                <h4>
                                    Get Single Account
                                </h4>

                                <p className="text-muted">
                                    Search and view one customer account.
                                </p>

                                <Link
                                    to="/admin/get-account"
                                    className="btn btn-warning"
                                >
                                    Get Account
                                </Link>

                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </>
    );
}

export default AdminDashboard;