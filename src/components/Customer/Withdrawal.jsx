import React, { useState } from "react";
import axios from "axios";
import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

function Withdrawal() {

  const { accountNo } = useParams();

  const navigate = useNavigate();

  const [amount, setAmount] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();


    if (amount <= 0) {

        

            alert("Enter valid amount");

            return;
        

    }


    try {

      const response = await axios.post(
        `http://localhost:9191/customer/withdrawal/${accountNo}/${amount}`
      );

      alert(
        "Amount Withdrawn Successfully. New Balance: ₹"
        + response.data
      );

      navigate("/customer");

    } catch (error) {

      console.log(error);

      alert("Withdrawal Failed");

    }

  };


  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Withdraw Money
              </h2>


              <div className="mb-3">

                <label className="form-label">
                  Account Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={accountNo}
                  readOnly
                />

              </div>


              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Amount
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) =>
                      setAmount(e.target.value)
                    }
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="btn btn-danger w-100"
                >
                  Withdraw
                </button>

              </form>


              <Link
                to="/customer"
                className="btn btn-secondary w-100 mt-2"
              >
                Back
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Withdrawal;