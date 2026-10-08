import React, { useState } from "react";
import axios from "axios";

function GetSingleAccount() {

    const [id, setId] = useState("");
    const [account, setAccount] = useState(null);
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.get(
                `http://localhost:9191/admin/get/${id}`
            );

            console.log("Account:", response.data);

            setAccount(response.data);
            setError("");

        } catch (error) {

            console.log(error);

            setAccount(null);
            setError("Account not found");

        }
    };


    return (
        <div className="container mt-5">

            <h2 className="text-center mb-4">
                Get Single Account
            </h2>


            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow p-4">

                        <form onSubmit={handleSubmit}>

                            <label className="form-label">
                                Account ID
                            </label>

                            <input
                                type="number"
                                className="form-control mb-3"
                                placeholder="Enter Account ID"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                required
                            />

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Get Account
                            </button>

                        </form>


                        {error && (
                            <div className="alert alert-danger mt-3">
                                {error}
                            </div>
                        )}


                        {account && (

                            <div className="card mt-4">

                                <div className="card-body">

                                    <h4 className="mb-3">
                                        Account Details
                                    </h4>

                                    <p>
                                        <strong>ID:</strong>{" "}
                                        {account.id}
                                    </p>

                                    <p>
                                        <strong>Account Number:</strong>{" "}
                                        {account.accountNo}
                                    </p>

                                    <p>
                                        <strong>User Name:</strong>{" "}
                                        {account.userName}
                                    </p>

                                    <p>
                                        <strong>Image:</strong>{" "}
                                            {account.image ? (
                                                <img
                                                    src={account.image}
                                                    alt="Account"
                                                    width="100"
                                                    height="100"
                                                        style={{
                                                            objectFit: "cover",
                                                            borderRadius: "50%",
                                                            marginLeft: "10px"
                                                        }}
                                                />
                                                ) : (
                                                    "No Image"
                                            )}
                                    </p>

                                    <p>
                                        <strong>Contact:</strong>{" "}
                                        {account.contact}
                                    </p>

                                    <p>
                                        <strong>Age:</strong>{" "}
                                        {account.age}
                                    </p>

                                    <p>
                                        <strong>Gender:</strong>{" "}
                                        {account.gender}
                                    </p>

                                    <p>
                                        <strong>Account Type:</strong>{" "}
                                        {account.accountType}
                                    </p>

                                    <p>
                                        <strong>Balance:</strong>{" "}
                                        ₹{account.balance}
                                    </p>

                                </div>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default GetSingleAccount;