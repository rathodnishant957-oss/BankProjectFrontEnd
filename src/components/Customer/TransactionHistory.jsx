import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TransactionHistory() {

  const [transactions, setTransactions] = useState([]);

  const customer = JSON.parse(
    localStorage.getItem("customer")
  );

  const getTransactions = async () => {

    try {

      const response = await axios.get(
        `http://localhost:9191/customer/viewtransaction/${customer.accountNo}`
      );

      console.log("Transaction History:", response.data);

      setTransactions(response.data);

    } catch (error) {

      console.log("Transaction Error:", error);

    }

  };

  useEffect(() => {

    if (customer && customer.accountNo) {
      getTransactions();
    }

  }, []);

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2>
            Transaction History
          </h2>

          <p className="text-muted">
            Account No: <strong>{customer?.accountNo}</strong>
          </p>

        </div>

        <Link
          to="/customer"
          className="btn btn-primary"
        >
          Dashboard
        </Link>

      </div>

      <div className="table-responsive">

        <table className="table table-bordered table-striped">

          <thead className="table-dark">

            <tr>

              <th>Transaction ID</th>

              <th>Transaction Type</th>

              <th>Amount</th>

              <th>Date</th>

              <th>Time</th>

            </tr>

          </thead>

          <tbody>

            {transactions.length > 0 ? (

              transactions.map((transaction) => (

                <tr key={transaction.tId}>

                  <td>
                    {transaction.tId}
                  </td>

                  <td>

                    {transaction.traType === "deposit" ? (

                      <span className="badge bg-success">
                        Deposit
                      </span>

                    ) : (

                      <span className="badge bg-danger">
                        Withdraw
                      </span>

                    )}

                  </td>

                  <td>
                    ₹ {transaction.traAmount}
                  </td>

                  <td>
                    {transaction.traDate}
                  </td>

                  <td>
                    {transaction.traTime}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="text-center"
                >
                  No Transactions Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TransactionHistory;