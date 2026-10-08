import React, { useEffect, useState } from "react";
import {
    Link,
    useNavigate
} from "react-router-dom";

function CustomerDashboard() {

    const navigate = useNavigate();

    const [customer, setCustomer] = useState(null);


    useEffect(() => {

        const customerData = localStorage.getItem("customer");

        if (!customerData) {

            navigate("/customer-login");

            return;
        }

        setCustomer(JSON.parse(customerData));

    }, [navigate]);


    const logout = () => {

        localStorage.removeItem("customer");

        navigate("/");

    };


    if (!customer) {

        return (
            <div className="container mt-5 text-center">

                <h4>
                    Loading...
                </h4>

            </div>
        );

    }


    return (
        <>

            {/* NAVBAR */}

            <nav className="navbar navbar-dark bg-primary">

                <div className="container">

                    <Link
                        to="/customer"
                        className="navbar-brand fw-bold"
                    >
                        Bank Management - Customer
                    </Link>

                    <button
                        onClick={logout}
                        className="btn btn-danger"
                    >
                        Logout
                    </button>

                </div>

            </nav>


            {/* DASHBOARD */}

            <div className="container mt-5">

                <div className="text-center mb-5">

                    <h2>
                        Customer Dashboard
                    </h2>

                    <p className="text-muted">

                        Welcome, Account No:{" "}

                        <strong>
                            {customer.accountNo}
                        </strong>

                    </p>

                </div>


                <div className="row">


                    {/* PROFILE */}

                    <div className="col-md-3 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center p-4">

                                <h4>
                                    Profile
                                </h4>

                                <p className="text-muted">
                                    View your profile details.
                                </p>

                                <Link
                                    to={`/customer/profile/${customer.id}`}
                                    className="btn btn-primary"
                                >
                                    Profile
                                </Link>

                            </div>

                        </div>

                    </div>


                    {/* BALANCE */}

                    <div className="col-md-3 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center p-4">

                                <h4>
                                    Balance
                                </h4>

                                <p className="text-muted">
                                    Check your account balance.
                                </p>

                                <Link
                                    to={`/customer/balance/${customer.id}`}
                                    className="btn btn-success"
                                >
                                    Balance
                                </Link>

                            </div>

                        </div>

                    </div>


                    {/* DEPOSIT */}

                    <div className="col-md-3 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center p-4">

                                <h4>
                                    Deposit
                                </h4>

                                <p className="text-muted">
                                    Deposit money into your account.
                                </p>

                                <Link
                                    to={`/customer/deposit/${customer.accountNo}`}
                                    className="btn btn-warning"
                                >
                                    Deposit
                                </Link>

                            </div>

                        </div>

                    </div>


                    {/* WITHDRAW */}

                    <div className="col-md-3 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center p-4">

                                <h4>
                                    Withdraw
                                </h4>

                                <p className="text-muted">
                                    Withdraw money from your account.
                                </p>

                                <Link
                                    to={`/customer/withdraw/${customer.accountNo}`}
                                    className="btn btn-danger"
                                >
                                    Withdraw
                                </Link>

                            </div>

                        </div>

                    </div>


                    {/* TRANSACTION HISTORY */}

                    <div className="col-md-4 mx-auto mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center p-4">

                                <h4>
                                    Transaction History
                                </h4>

                                <p className="text-muted">
                                    View your deposit and withdrawal history.
                                </p>

                                <Link
                                    to="/customer/transactions"
                                    className="btn btn-dark"
                                >
                                    Transaction History
                                </Link>

                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </>
    );
}

export default CustomerDashboard;