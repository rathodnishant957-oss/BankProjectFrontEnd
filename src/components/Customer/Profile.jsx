import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Profile() {

  const { id } = useParams();

  const [account, setAccount] = useState(null);


  useEffect(() => {

    getProfile();

  }, [id]);


  const getProfile = async () => {

    try {

      const response = await axios.get(
        `http://localhost:9191/customer/viewprofile/${id}`
      );

      setAccount(response.data);

    } catch (error) {

      console.log(error);

    }

  };


  if (!account) {

    return (
      <div className="container mt-5">
        <h4>Loading Profile...</h4>
      </div>
    );

  }


  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-body">

          <h2 className="text-center mb-4">
            My Profile
          </h2>


          <div className="row">

            <div className="col-md-6 mb-3">

    <strong>Image:</strong>

    <p>
        {account.image ? (
            <img
                src={account.image}
                alt="Account"
                width="120"
                height="120"
                style={{
                    objectFit: "cover",
                    borderRadius: "10px"
                }}
            />
        ) : (
            "No Image"
        )}
    </p>

</div>

            <div className="col-md-6 mb-3">

              <strong>Account Number:</strong>

              <p>
                {account.accountNo}
              </p>

            </div>

            <div className="col-md-6 mb-3">

              <strong>User Name:</strong>

              <p>
                {account.userName}
              </p>

            </div>



            <div className="col-md-6 mb-3">

              <strong>Date of Birth:</strong>

              <p>
                {account.dob}
              </p>

            </div>


            <div className="col-md-6 mb-3">

              <strong>Contact:</strong>

              <p>
                {account.contact}
              </p>

            </div>


            <div className="col-md-6 mb-3">

              <strong>Age:</strong>

              <p>
                {account.age}
              </p>

            </div>


            <div className="col-md-6 mb-3">

              <strong>Gender:</strong>

              <p>
                {account.gender}
              </p>

            </div>


            <div className="col-md-6 mb-3">

              <strong>Account Type:</strong>

              <p>
                {account.accountType}
              </p>

            </div>


          </div>


          <Link
            to="/customer"
            className="btn btn-primary"
          >
            Back to Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Profile;