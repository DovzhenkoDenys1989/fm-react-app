import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_IN_SCHEMA } from 'utils/validationSchemas';

const initialValues = {
  email: '',
  password: '',
};

function SignInForm () {
  return (
    <Formik initialValues={initialValues} validationSchema={SIGN_IN_SCHEMA}>
      {formikProps => {
        console.log(formikProps);
        return (
          <Form>
            <Field name='email' />
            <ErrorMessage name='email' component='span' />
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='span' />
            <Field type='submit' value='Submit' />
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;
