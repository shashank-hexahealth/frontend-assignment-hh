"use client";
import React from "react";
import Link from "next/link";
import Card from "../components/Card";
import SubmissionSuccess from "../components/SubmissionSuccess";
import Spinner from "../components/Spinner";

export default function BookAppoinmentPage() {
  const [loading, setLoading] = React.useState(false);
  const [isSubmissionSuccessfull, setIsSubmissionSuccessfull] =
    React.useState(false);
  const [formValues, setFormValues] = React.useState({
    userType: "doctor",
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
  const [errors, setErrors] = React.useState({});

  const validate = (values) => {
    const errors = {};
    if (values.userType === "doctor") {
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
        // Check for repeated digits like 1111111111
        errors.mobile = "Mobile number cannot have all digits the same";
      }
      if (!values.experience) {
        errors.experience = "Required field";
      }
      if (!values.speciality) {
        errors.speciality = "Required field";
      }
    } else if (values.userType === "hospital") {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsSubmissionSuccessfull(true);
      }, 500);
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
    }
  };

  const handleUserTypeChange = (e) => {
    const newUserType = e.target.value;
    setFormValues((prevFormData) => {
      const resetData =
        newUserType === "doctor"
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
    setErrors({});
  };

  return (
    <div>
      <div className="mt-4">
        <Link
          href="/"
          className="bg-red-100 hover:bg-red-200 px-5 py-2.5 rounded-lg"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-center mb-8">
        <Card>
          {isSubmissionSuccessfull ? (
            <SubmissionSuccess />
          ) : (
            <fieldset disabled={loading}>
              <form className="text-[18px]" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <select
                    name="userType"
                    onChange={handleUserTypeChange}
                    className="input-box !px-1"
                    value={formValues.userType}
                  >
                    <option value="doctor">Doctor</option>
                    <option value="hospital">Hospital</option>
                  </select>
                </div>
                {formValues.userType === "doctor" ? (
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
                    <div>
                      <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number*"
                        className="input-box"
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
                      loading ? "bg-teal-300" : "bg-teal-400"
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
