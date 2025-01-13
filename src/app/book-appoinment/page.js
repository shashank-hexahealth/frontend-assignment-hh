"use client";
import React from "react";
import Link from "next/link";
import Card from "../components/Card";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../components/Spinner";

export default function BookAppoinmentPage() {
  const [userType, setUserType] = React.useState("doctor");
  const [loading, setLoading] = React.useState(false);

  const validate = (values) => {
    const errors = {};
    if (userType === "doctor") {
      if (!values.name) {
        errors.name = "Please enter name";
      }
      if (!values.email) {
        errors.email = "Email required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.mobile) {
        errors.mobile = "Mobile number is required";
      } else if (!/^[6-9]\d{9}$/.test(values.mobile)) {
        errors.mobile =
          "Enter a valid 10-digit Mobile number starting with 6-9";
      } else if (/^(\d)\1{9}$/.test(values.mobile)) {
        // Check for repeated digits like 1111111111
        errors.mobile =
          "Mobile number cannot have all digits the same";
      } 
      if (!values.experience) {
        errors.experience = "Please enter experience";
      }
      if (!values.speciality) {
        errors.speciality = "Please enter speciality";
      }
    } else if (userType === "hospital") {
      if (!values.hospitalName) {
        errors.hospitalName = "Please enter hospital name";
      }
      if (!values.address) {
        errors.address = "Please enter address";
      }
      if (!values.hospitalNumber) {
        errors.hospitalNumber = "Please enter hospital number";
      }
      if (!values.departments) {
        errors.departments = "Please enter department";
      }
    }
    return errors;
  };

  return (
    <div>
      <Link href="/">Dashboard</Link>
      <div className="flex gap-4 items-center justify-center mb-8">
        <div>
          <Card>
            {loading ? (
              <Spinner />
            ) : (
              <Formik
                initialValues={
                  userType === "doctor"
                    ? {
                        name: "",
                        email: "",
                        mobile: "",
                        experience: "",
                        speciality: "",
                      }
                    : {
                        hospitalName: "",
                        address: "",
                        hospitalNumber: "",
                        departments: "",
                      }
                }
                enableReinitialize={true}
                validate={validate}
                onSubmit={(values) => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    toast.success("Form Successfully Submitted");
                  }, 500);
                }}
              >
                {({ setFieldValue, setErrors, handleChange }) => (
                  <Form className="text-[18px]">
                    <div className="mb-4">
                      <Field
                        as="select"
                        name="userType"
                        onChange={(e) => {
                          setUserType(e.target.value);
                          setErrors({});
                        }}
                        className="input-box !px-1"
                      >
                        <option value="doctor">Doctor</option>
                        <option value="hospital">Hospital</option>
                      </Field>
                    </div>
                    {userType === "doctor" ? (
                      <div className="flex flex-col gap-4 w-full">
                        <div>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input-box"
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              if (/^[a-zA-Z\s]*$/.test(inputValue)) {
                                handleChange(e);
                              }
                            }}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="error-msg"
                          />
                        </div>
                        <div>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input-box"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error-msg"
                          />
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="mobile"
                            placeholder="Mobile Number"
                            className="input-box"
                            onChange={(e) => {
                              const value = e.target.value;
                              if (/^\d*$/.test(value) && value.length <= 10) {
                                handleChange(e);
                              }
                            }}
                          />
                          <ErrorMessage
                            name="mobile"
                            component="div"
                            className="error-msg"
                          />
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="experience"
                            placeholder="Experience"
                            className="input-box"
                          />
                          <ErrorMessage
                            name="experience"
                            component="div"
                            className="error-msg"
                          />
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="speciality"
                            placeholder="Speciality"
                            className="input-box"
                          />
                          <ErrorMessage
                            name="speciality"
                            component="div"
                            className="error-msg"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 w-full">
                        <div>
                          <Field
                            type="text"
                            name="hospitalName"
                            placeholder="Hospital Name"
                            className="input-box"
                          />
                          <ErrorMessage
                            name="hospitalName"
                            component="div"
                            className="error-msg"
                          />
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="address"
                            placeholder="Hospital Address"
                            className="input-box"
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="error-msg"
                          />
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="hospitalNumber"
                            placeholder="Hospital Number"
                            className="input-box"
                          />
                          <ErrorMessage
                            name="hospitalNumber"
                            component="div"
                            className="error-msg"
                          />
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="departments"
                            placeholder="departments"
                            className="input-box"
                          />
                          <ErrorMessage
                            name="departments"
                            component="div"
                            className="error-msg"
                          />
                        </div>
                      </div>
                    )}
                    <div>
                      <button
                        type="submit"
                        className="w-96 bg-teal-400 rounded p-2 mt-4"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </Card>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
