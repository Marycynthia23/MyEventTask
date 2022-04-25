import React from 'react'
import styles from './Form.module.css'
import validate from './Validate'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


export const Form = (submitForm) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    seat: "",
    phonenumber: "",
    date: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const formData = localStorage.getItem("form_data");
//     console.log(formData);
//     if (formData) {
//       //todo: redirect to profile page
//       navigate("/profile");
//     }
//   }, []);

  // update values whenever i change something
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("checking form name", name);
    console.log("checking form values", values);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    persistData(values);
    console.log("uuuuiii");
  };

  const persistData = (data) => {
    if (typeof data === "object") {
      data = JSON.stringify(data); //serialize
    }
    localStorage.setItem("form_data", data);
    navigate("/profile");
  };
  

  return (
    <div id="register" className={styles.FormCont}>
    <div className={styles.UsersForm}>
    <h3 className={styles.Title}>Reservations</h3>
    <p className={styles.SubTitle}>
      Kindly register to get a seat.
    </p>
    <form
      className={styles.Form}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className={styles.ColTwo}>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="First name"
          value={values.firstname}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Last name"
          value={values.lastname}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />

      <div className={styles.ColTwo}>
      <div>
          <label for="Chair" className={styles.Dropdown}>Choose a Seat:</label>

          <select name="seat" id="seat" className={styles.selectSeat} value={values.seat}onChange={(e) => {
            handleChange(e);
          }}>
            <option >Select seat</option>
            <option value="Roll one">Roll one</option>
            <option value="Roll Two">Roll Two</option>
            <option value="Roll Three">Roll Three</option>
            <option value="Roll Four">Roll Four</option>
          </select>
      </div>
      <div className={styles.ColTwo}>
          <p className={styles.Gender}>  Gender: &nbsp;</p>
           <p className={styles.male}>Male: &nbsp;<input type="radio" id="male" name="male" value="Male"/> </p>
           <p className={styles.female}>Female &nbsp;<input type="radio" id="female" name="female" value="Female"/></p> 
      </div>
      <div>
      <label for="dob" className={styles.DOB}>Date of Birth:</label>
      <input type="date" id="dob" name="dob" value="dob" className={styles.dateOfBirth} />
      </div>
      </div>
      

            <div className={styles.ColTwo}>
        <input
          type="number"
          id="lname"
          name="phonenumber"
          placeholder="Phone number"
          value={values.phonenumber}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
    </div>
  )
}
