"use client"

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  hobbies: Yup.array().min(1, 'At least one hobby must be selected'),
  file: Yup.mixed().required('A file is required')
});

const CustomField = ({ label, ...props }) => (
  <div>
    <label>{label}</label>
    <Field {...props} />
    <ErrorMessage name={props.name} component="div" />
  </div>
);

const SignupForm1 = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        password: '',
        gender: '',
        hobbies: [],
        file: null
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <CustomField label="Username" name="username" type="text" />
          <CustomField label="Password" name="password" type="password" />

          <div>
            <label>Gender</label>
            <Field name="gender" as="select">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <ErrorMessage name="gender" component="div" />
          </div>

          <div>
            <label>Hobbies</label>
            <div>
              <label>
                <Field type="checkbox" name="hobbies" value="Reading" />
                Reading
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="Traveling" />
                Traveling
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="Cooking" />
                Cooking
              </label>
            </div>
            <ErrorMessage name="hobbies" component="div" />
          </div>

          <div>
            <label>Favorite Color</label>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="favoriteColor" value="red" />
                Red
              </label>
              <label>
                <Field type="radio" name="favoriteColor" value="green" />
                Green
              </label>
              <label>
                <Field type="radio" name="favoriteColor" value="blue" />
                Blue
              </label>
            </div>
            <ErrorMessage name="favoriteColor" component="div" />
          </div>

          <div>
            <label>File Upload</label>
            <input
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage name="file" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignupForm1;
