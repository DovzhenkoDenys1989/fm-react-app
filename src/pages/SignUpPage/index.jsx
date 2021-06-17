import React from 'react';
import SignUpForm from 'components/forms/SignUpForm';

export default function SignUpPage () {
  return (
    <section>
      <h1>SIGN UP</h1>
      <SignUpForm registerUser={() => {}} />
    </section>
  );
}