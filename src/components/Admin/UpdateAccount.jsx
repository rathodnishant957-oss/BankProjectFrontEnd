import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

function UpdateAccount() {

  const { id } = useParams();

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


  useEffect(() => {

    getAccount();

  }, [id]);


  const getAccount = async () => {

    try {

      const response = await axios.get(
        `http://localhost:9191/admin/get/${id}`
      );

      setAccount(response.data);

    } catch (error) {

      console.log(error);

    }

  };


  const handleChange = (e) => {

    setAccount({
      ...account,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:9191/admin/update/${id}`,
        account
      );

      alert("Account Updated Successfully");

      navigate("/admin/accounts");

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };


  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-body">

          <h2 className="text-center mb-4">
            Update Account
          </h2>


          <form onSubmit={handleSubmit}>

            <div className="row">


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Account Number
                </label>

                <input
                  type="number"
                  name="account"
                  className="form-control"
                  value={account.accountNo || ""}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Account Number
                </label>

                <input
                  type="text"
                  name="userName"
                  className="form-control"
                  value={account.userName || ""}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Account Number
                </label>

                <input
                  type="text"
                  name="image"
                  className="form-control"
                  value={account.image || ""}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={account.password || ""}
                  onChange={handleChange}
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
                  value={account.dob || ""}
                  onChange={handleChange}
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
                  value={account.contact || ""}
                  onChange={handleChange}
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
                  value={account.age || ""}
                  onChange={handleChange}
                />

              </div>


              <div className="col-md-4 mb-3">

                <label className="form-label">
                  Gender
                </label>

                <select
                  name="gender"
                  className="form-select"
                  value={account.gender || ""}
                  onChange={handleChange}
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
                  value={account.accountType || ""}
                  onChange={handleChange}
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
                  Balance
                </label>

                <input
                  type="number"
                  name="balance"
                  className="form-control"
                  value={account.balance || ""}
                  onChange={handleChange}
                />

              </div>

            </div>


            <button
              type="submit"
              className="btn btn-success me-2"
            >
              Update Account
            </button>


            <Link
              to="/admin/accounts"
              className="btn btn-secondary"
            >
              Cancel
            </Link>

          </form>

        </div>

      </div>

    </div>
  );
}

export default UpdateAccount;