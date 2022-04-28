import React from 'react'
import styles from './Form.module.css'
// import validate from './Validate'
import { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from 'formik';


const validate = values => {
    const errors = {}
    
    if(!values.firstname){
        errors.firstname='first name is required'
    }else if (values.firstname.length > 15 || values.firstname.length < 3) {
        errors.firstname = 'Must be minimum of 3 and maximum of 15 characters';
    }

    if (!values.lastname) {
        errors.lastname = 'Last name is required';
    } else if (values.lastname.length > 20) {
        errors.lastname = 'Must be 20 characters or less';
    }
    
    if (!values.email) {
        errors.email = 'Email field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.phonenumber) {
        errors.phonenumber = 'Phone number is required';
    } else if (!/^[+]?\d{9,11}$/i.test(values.phonenumber)) {
        errors.phonenumber = 'Must be between 9 - 11 digits';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i.test(values.password)) {
        errors.password = 'password should be 8-18 characters and include at least 1 letter, 1 number and 1 special character';
    }
    
    return errors;
}

export const Form = (submitForm) => {
    const formik = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            phonenumber:'',
            password:'',
            seat:'',
            gender:'',
            dob:'',
        },
        validate,
        onSubmit: values => {
            setIsSubmitting(true);
            persistData(values)
        }
    })


  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    //   onSubmit={(e) => {
    //     handleSubmit(e);
    //   }}
    onSubmit={formik.handleSubmit}
    >
      <div >
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Enter First name"
        //   value={values.firstname}
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}        
        />
        {formik.touched.firstname && formik.errors.firstname ? (
            <div style={{color:'white'}}>{formik.errors.firstname}</div>
            ) : null
        }
        
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Last name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
        />
        {formik.touched.lastname && formik.errors.lastname ? (
            <div style={{color:'white'}}>{formik.errors.lastname}</div>
            ) : null
        }
      </div>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
            <div style={{color:'white'}}>{formik.errors.email}</div>
            ) : null
        }
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
            <div style={{color:'white'}}>{formik.errors.password}</div>
            ) : null
        }
      <br />

      <div className={styles.ColTwo}>
      <div>
          <label htmlFor="Chair" className={styles.Dropdown}>Choose a Seat:</label>

          <select name="seat" id="seat" className={styles.selectSeat} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.seat}
          >
            <option disabled defaultValue className={styles.bgColor}>Select seat</option>
            <option value="1">Roll one</option>
            <option value="2">Roll Two</option>
            <option value="3">Roll Three</option>
            <option value="4">Roll Four</option>
          </select>
      </div>
      <div className={styles.ColTwoLit} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.gender}
        // onChange={(e) => {
        // handleChange(e);
        // }}
      >
          <p className={styles.Gender}>  Gender: &nbsp;</p>
           <p className={styles.male}>Male: &nbsp;<input type="radio" id="male" name="gender" value="Male"/> </p>
           <p className={styles.female}>Female &nbsp;<input type="radio" id="female" name="gender" value="Female"/></p> 
      </div>
      <div>
      <label htmlFor="dob" className={styles.DOB}>Date of Birth:</label>
      <input type="date" id="dob" name="dob"  
      className={styles.dateOfBirth}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.dob}
      />
      </div>
      </div>
      

            <div className={styles.ColTwo}>
        <input
          type="number"
          id="number"
          name="phonenumber"
          placeholder="Phone number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phonenumber}
        />
        {formik.touched.phonenumber && formik.errors.phonenumber ? (
            <div style={{color:'white'}}>{formik.errors.phonenumber}</div>
            ) : null
        }
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
    </div>
  )
}
