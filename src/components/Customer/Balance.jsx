import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Balance() {

  const { id } = useParams();

  const [balance, setBalance] = useState(0);


  useEffect(() => {

    getBalance();

  }, [id]);


  const getBalance = async () => {

    try {

      const response = await axios.get(
        `http://localhost:9191/customer/balance/${id}`
      );

      setBalance(response.data);

    } catch (error) {

      console.log(error);

    }

  };


  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow text-center">

            <div className="card-body p-5">

              <h2>
                Available Balance
              </h2>

              <h1 className="text-success mt-4">
                ₹ {balance}
              </h1>


              <Link
                to="/customer"
                className="btn btn-primary mt-4"
              >
                Back to Dashboard
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Balance;