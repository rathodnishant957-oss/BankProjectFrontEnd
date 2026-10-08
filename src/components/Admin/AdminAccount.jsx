import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminAccounts() {

  const [accounts, setAccounts] = useState([]);


  const getAllAccounts = async () => {

    try {

      const response = await axios.get(
        "http://localhost:9191/admin/getall"
      );

      setAccounts(response.data);

    } catch (error) {

      console.log(error);

    }
  };


  useEffect(() => {

    getAllAccounts();

  }, []);


  const deleteAccount = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this account?"
    );

    if (!confirmDelete) {
      return;
    }


    try {

      await axios.delete(
        `http://localhost:9191/admin/delete/${id}`
      );

      alert("Account Deleted Successfully");

      getAllAccounts();

    } catch (error) {

      console.log(error);

      alert("Delete Failed");

    }

  };


  return (
    <div className="container-fluid mt-4">

      <div className="d-flex justify-content-between mb-3">

        <h2>
          All Customer Accounts
        </h2>

        <div>

          <Link
            to="/admin/create-account"
            className="btn btn-primary me-2"
          >
            Create Account
          </Link>

          <Link
            to="/admin"
            className="btn btn-secondary"
          >
            Dashboard
          </Link>

        </div>

      </div>


      <div className="table-responsive">

        <table className="table table-bordered table-striped table-hover">

          <thead className="table-dark">

            <tr>
              
              <th>Image</th>
              <th>ID</th>
              <th>Account No</th>
              <th>UserName</th>
              <th>Contact</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Account Type</th>
              <th>Balance</th>
              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {accounts.length > 0 ? (

              accounts.map((acc) => (

                <tr key={acc.id}>

                  <td>
                    {acc.image ? (
                      <img
                        src={acc.image}
                        alt="Profile"
                        width="60"
                        height="60"
                        style={{
                              objectFit: "cover",
                              borderRadius: "50%"
                            }}
                          />
                        ) : (
                      "No Image"
                    )}
                  </td>

                  <td>{acc.id}</td>

                  <td>{acc.accountNo}</td>

                  <td>{acc.userName}</td>

                  <td>{acc.contact}</td>

                  <td>{acc.age}</td>

                  <td>{acc.gender}</td>

                  <td>{acc.accountType}</td>

                  <td>₹ {acc.balance}</td>

                  <td>

                    <Link
                      to={`/admin/update-account/${acc.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => deleteAccount(acc.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="8"
                  className="text-center"
                >
                  No Accounts Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminAccounts;