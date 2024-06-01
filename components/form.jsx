import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormComponent = ({ config }) => {
  const initialValues = {};
  const validationSchema = {};

  config.forEach(field => {
    initialValues[field.name] = field.type === 'checkbox' ? [] : '';

    if (field.required || field.regex) {
      validationSchema[field.name] = Yup.string();
      if (field.required) {
        validationSchema[field.name] = validationSchema[field.name].required('This field is required');
      }
      if (field.regex) {
        validationSchema[field.name] = validationSchema[field.name].matches(new RegExp(field.regex), 'Invalid format');
      }
    }
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={(values) => {
        console.log('Form Submitted:', values);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          {config.map(field => (
            <div key={field.id}>
              <label>{field.name}</label>
              {field.type === 'text' && (
                <Field type="text" name={field.name} />
              )}
              {field.type === 'password' && (
                <Field type="password" name={field.name} />
              )}
              {field.type === 'select' && (
                <Field as="select" name={field.name} multiple={field.multipleSelect}>
                  {field.options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </Field>
              )}
              {field.type === 'radio' && (
                field.options.map(option => (
                  <label key={option.value}>
                    <Field type="radio" name={field.name} value={option.value} />
                    {option.label}
                  </label>
                ))
              )}
              {field.type === 'checkbox' && (
                field.options.map(option => (
                  <label key={option.value}>
                    <Field type="checkbox" name={field.name} value={option.value} />
                    {option.label}
                  </label>
                ))
              )}
              {field.type === 'file' && (
                <input
                  type="file"
                  name={field.name}
                  accept={field.fileFormatSupported.join(',')}
                  onChange={(event) => {
                    setFieldValue(field.name, event.currentTarget.files[0]);
                  }}
                />
              )}
              <ErrorMessage name={field.name} component="div" />
            </div>
          ))}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
