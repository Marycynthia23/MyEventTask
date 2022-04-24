export default function validateInfo(values) {
    let errors = {};
  
    //Firstname
    if (!values.firstname.trim()) {
      errors.firstname = " Firstname required";
    }
    //Lastname
    if (!values.lastname.trim()) {
      errors.lastname = " Lastname required";
    }
    //Email
    if (!values.email) {
      errors.email = "Email required";
    }
    //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}s/if.test(values.email))
    //   { errors.email = "Email address is invalid" }
  
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters of more";
    }
  
    //   if(!values.phonenumber)
  }
  