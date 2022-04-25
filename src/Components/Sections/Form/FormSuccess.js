import React, { useState, useEffect } from "react";
import styles from './Form.module.css'
import QRCode from "react-qr-code";
// import { useNavigate } from "react-router";

const FormSuccess = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    seat: "",
    phonenumber: "",
    date: "",
    gender: "",

  });
  useEffect(() => {
    const formData = localStorage.getItem("form_data");
    console.log(formData);
    if (formData) {
      setValues(JSON.parse(formData));
    }
  }, []);

  let seatNumber = Math.floor(Math.random() * 100);
  // const navigate = useNavigate();


  // const logOut = () => {
  //   localStorage.removeItem("form_data");
  //   navigate("/");
  // };
  return (
    <div className={styles.SuccessCont}>
    <div className={styles.SuccessDetails}> 
    <div><QRCode  value={values} /></div>
      <div className={styles.deetailsContainer}>
        <div className="details-form">
          <h3 className="details-title">User Details</h3>
          <div className="colTwo">
            <div className="details" id="fname" name="firstname">
              {values.firstname}
            </div>
            <div className="details" id="lname" name="lastname">
              {values.lastname}
            </div>
          </div>
          <div className="details" id="password" name="password">
            {values.password}
          </div>
          <div className="details" id="seat" name="seat">
            {values.seat} Seat Number: {seatNumber}
          </div>
          <div className="details" id="gender" name="gender">
          {values.gender}
        </div>

          <div className="colTwo">
            <div className="details" id="lname" name="phonenumber">
              {values.phonenumber}
            </div>
            <div className="details" id="dob" name="dob">
              {values.date}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
    </div>
  );
};

export default FormSuccess;
