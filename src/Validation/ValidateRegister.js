function validateFile(file) {
  if (!file.type.match(/image\/(png|jpg|jpeg)$/)) {
    return "Only image files are allowed";
  }

  if (file.size > 5 * 1024 * 1024) {
    return "File size must be less than 5MB";
  }

  return "";
}

export default function validateForm(activeStep, formData) {
  const errors = {};

  if (activeStep == 0) {
    if (formData.name.length > 20) {
      errors.name = "Your name is too long";
    }
    if (formData.name.length == 0) {
      errors.name = "Your name is required";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (formData.avatar.length > 0) {
      if (validateFile(formData.avatar[0]).length > 0) {
        errors.avatar = validateFile(formData.avatar[0]);
      }
    }
  } else if (activeStep == 1) {
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-+]).{8,}$/.test(
        formData.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    }

    if (formData.password_confirmation !== formData.password) {
      errors.password_confirmation =
        "Password confirmation must match the password";
    }
  } else if (activeStep == 2) {
    if (formData.address.length == 0) {
      errors.address = "Your address is Required";
    }
    if (formData.phone.length == 0) {
      errors.phone = "Your Phone Number is Required";
    }
    if (formData.phone.length > 10 || formData.phone.length < 10) {
      errors.phone = "Your Phone Number should be 10 digits";
    }
    if (formData.kebelleId.length == 0) {
      errors.kebelleId = "Your Identification is Required";
    }
    if (formData.kebelleId.length > 0) {
      if (validateFile(formData.kebelleId[0]).length > 0) {
        errors.kebelleId = validateFile(formData.kebelleId[0]);
      }
    }
  } else {
    console.log("finally");
  }

  console.log(errors);
  return errors;
}

