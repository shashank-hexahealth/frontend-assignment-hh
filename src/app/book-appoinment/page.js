"use client";
import React from "react";
import Card from "../components/Card";
import SubmissionSuccess from "../components/SubmissionSuccess";
import Spinner from "../components/Spinner";
import { DOCTOR, HOSPITAL } from "../utils/Constants";
import LinkButton from "../components/LinkButton";
import ErrorComponent from "../components/ErrorComponent";

export default function BookAppoinmentPage() {
  // State hooks to manage loading, form submission status, errors and form data
  const [loading, setLoading] = React.useState(false);
  const [isSubmissionSuccessfull, setIsSubmissionSuccessfull] =
    React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [formValues, setFormValues] = React.useState({
    userType: DOCTOR,
    name: "",
    email: "",
    mobile: "",
    experience: "",
    speciality: "",
    hospitalName: "",
    address: "",
    hospitalNumber: "",
    departments: "",
  });

  const [isStatusCode200, setIstatusCode200] = React.useState(true);

  // Function to validate form fields based on the userType (Doctor/Hospital)
  const validate = (values) => {
    const errors = {};

    // Validation for Doctor user type
    if (values.userType === DOCTOR) {
      if (!values.name) {
        errors.name = "Required field";
      }
      if (!values.email) {
        errors.email = "Required field";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.mobile) {
        errors.mobile = "Required field";
      } else if (!/^[6-9]\d{9}$/.test(values.mobile)) {
        errors.mobile =
          "Enter a valid 10-digit Mobile number starting with 6-9";
      } else if (/^(\d)\1{9}$/.test(values.mobile)) {
        errors.mobile = "Mobile number cannot have all digits the same";
      }
      if (!values.experience) {
        errors.experience = "Required field";
      }
      if (!values.speciality) {
        errors.speciality = "Required field";
      }
    }

    // Validation for Hospital user type
    else if (values.userType === HOSPITAL) {
      if (!values.hospitalName) {
        errors.hospitalName = "Required field";
      }
      if (!values.address) {
        errors.address = "Required field";
      }
      if (!values.hospitalNumber) {
        errors.hospitalNumber = "Required field";
      }
      if (!values.departments) {
        errors.departments = "Required field";
      }
    }
    return errors;
  };

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Clear any error messages when the user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Handle form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before submitting
    const validationErrors = validate(formValues);
    setErrors(validationErrors);

    // If no validation errors, proceed with form submission (generally for making API call)
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        if (isStatusCode200) {
          setLoading(false);
          setIsSubmissionSuccessfull(true);
          // Reset the form after successfull submission
          setFormValues({
            name: "",
            email: "",
            mobile: "",
            experience: "",
            speciality: "",
            hospitalName: "",
            address: "",
            hospitalNumber: "",
            departments: "",
          });
        } else {
          setLoading(false);
          setIstatusCode200(false)
        }
      }, 500);
    }
  };

  // Handle user type selection (Doctor or Hospital)
  const handleUserTypeChange = (e) => {
    const newUserType = e.target.value;
    setFormValues((prevFormData) => {
      const resetData =
        newUserType === DOCTOR
          ? {
              userType: newUserType,
              name: "",
              email: "",
              mobile: "",
              experience: "",
              speciality: "",
            }
          : {
              userType: newUserType,
              hospitalName: "",
              address: "",
              hospitalNumber: "",
              departments: "",
            };
      return { ...prevFormData, ...resetData };
    });
    setErrors({}); // Clear errors on user type change
  };

  return (
    <div>
      <div className="mt-4">
        <LinkButton navigateTo="/" label="Dashboard" />
      </div>
      <div className="flex gap-4 items-center justify-center mb-8">
        <Card>
          {isSubmissionSuccessfull ? (
            <SubmissionSuccess />
          ) : (
            <fieldset disabled={loading}>
              <ErrorComponent showError={isStatusCode200} closeLabel={setIstatusCode200}/>
              <form className="text-[18px]" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <select
                    name="userType"
                    onChange={handleUserTypeChange}
                    className="input-box !px-1"
                    value={formValues.userType}
                  >
                    <option value={DOCTOR}>Doctor</option>
                    <option value={HOSPITAL}>Hospital</option>
                  </select>
                </div>
                {formValues.userType === DOCTOR ? (
                  <div className="flex flex-col gap-4 w-full">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className="input-box"
                        value={formValues.name}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (/^[a-zA-Z\s]*$/.test(inputValue)) {
                            handleChange(e);
                          }
                        }}
                      />
                      {errors.name && (
                        <div className="error-msg">{errors.name}</div>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        className="input-box"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="error-msg">{errors.email}</div>
                      )}
                    </div>
                    <div className="flex justify-between items-center input-box">
                      <span className="bg-slate-200 text-base rounded p-0.5 mr-2">+91</span>
                      <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number*"
                        className="w-full outline-none"
                        value={formValues.mobile}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value) && value.length <= 10) {
                            handleChange(e);
                          }
                        }}
                      />
                      {errors.mobile && (
                        <div className="error-msg">{errors.mobile}</div>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="experience"
                        placeholder="Experience*"
                        className="input-box"
                        value={formValues.experience}
                        onChange={handleChange}
                      />
                      {errors.experience && (
                        <div className="error-msg">{errors.experience}</div>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="speciality"
                        placeholder="Speciality*"
                        className="input-box"
                        value={formValues.speciality}
                        onChange={handleChange}
                      />
                      {errors.speciality && (
                        <div className="error-msg">{errors.speciality}</div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 w-full">
                    <div>
                      <input
                        type="text"
                        name="hospitalName"
                        placeholder="Hospital Name*"
                        className="input-box"
                        value={formValues.hospitalName}
                        onChange={handleChange}
                      />
                      {errors.hospitalName && (
                        <div className="error-msg">{errors.hospitalName}</div>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="address"
                        placeholder="Hospital Address*"
                        className="input-box"
                        value={formValues.address}
                        onChange={handleChange}
                      />
                      {errors.address && (
                        <div className="error-msg">{errors.address}</div>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="hospitalNumber"
                        placeholder="Hospital Number*"
                        className="input-box"
                        value={formValues.hospitalNumber}
                        onChange={handleChange}
                      />
                      {errors.hospitalNumber && (
                        <div className="error-msg">{errors.hospitalNumber}</div>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="departments"
                        placeholder="Departments*"
                        className="input-box"
                        value={formValues.departments}
                        onChange={handleChange}
                      />
                      {errors.departments && (
                        <div className="error-msg">{errors.departments}</div>
                      )}
                    </div>
                  </div>
                )}
                <div>
                  <button
                    disabled={loading}
                    type="submit"
                    className={`w-96 rounded px-5 py-2.5 mt-4 ${
                      loading ? "bg-teal-300" : "bg-teal-400 hover:bg-teal-500"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {loading ? "Submitting..." : "Submit"}
                      {loading && <Spinner />}
                    </span>
                  </button>
                </div>
              </form>
            </fieldset>
          )}
        </Card>
      </div>
    </div>
  );
}
