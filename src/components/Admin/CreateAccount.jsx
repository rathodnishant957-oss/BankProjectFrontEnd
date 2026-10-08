import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {

  const navigate = useNavigate();

  const [account, setAccount] = useState({
    accountNo: "",
    userName:"",
    image:"",
    password: "",
    dob: "",
    contact: "",
    age: "",
    gender: "",
    accountType: "",
    balance: ""
  });


 const handleChange = (e) => {

  setAccount({
    ...account,
    [e.target.name]: e.target.value
  });

};

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:9191/admin/save",
        account
      );

      alert("Account Created Successfully");

      navigate("/admin/accounts");

    } catch (error) {

      console.log(error);

      alert("Account Creation Failed");

    }
  };


  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-body">

          <h2 className="text-center mb-4">
            Create Customer Account
          </h2>


          <form onSubmit={handleSubmit}>

            <div className="row">


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Account Number
                </label>

                <input
                  type="number"
                  name="accountNo"
                  className="form-control"
                  placeholder="Enter Account Number"
                  value={account.accountNo || ""}
                  onChange={handleChange}
                  required
                />

              </div>

              <label className="from-label">
                User Name
              </label>

              <input 
                type="text" 
                name="userName"
                className="form-control"
                placeholder="Enter UserName"
                value={account.userName || ""}
                onChange={handleChange}
                required
              />


              <label className="from-label">
                Image
              </label>

              <input 
                type="text" 
                name="image"
                className="form-control"
                placeholder="Enter Image URL"
                value={account.image || ""}
                onChange={handleChange}
                required
              />


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={account.password}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={account.dob}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Contact
                </label>

                <input
                  type="text"
                  name="contact"
                  className="form-control"
                  value={account.contact}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="col-md-4 mb-3">

                <label className="form-label">
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  className="form-control"
                  value={account.age}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="col-md-4 mb-3">

                <label className="form-label">
                  Gender
                </label>

                <select
                  name="gender"
                  className="form-select"
                  value={account.gender}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                </select>

              </div>


              <div className="col-md-4 mb-3">

                <label className="form-label">
                  Account Type
                </label>

                <select
                  name="accountType"
                  className="form-select"
                  value={account.accountType}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Type
                  </option>

                  <option value="saving">
                    Saving
                  </option>

                  <option value="current">
                    Current
                  </option>

                </select>

              </div>


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Initial Balance
                </label>

                <input
                  type="number"
                  name="balance"
                  className="form-control"
                  value={account.balance}
                  onChange={handleChange}
                  required
                />

              </div>


            </div>


            <button
              type="submit"
              className="btn btn-primary me-2"
            >
              Create Account
            </button>


            <Link
              to="/admin"
              className="btn btn-secondary"
            >
              Back
            </Link>

          </form>

        </div>

      </div>

    </div>
  );
}

export default CreateAccount;