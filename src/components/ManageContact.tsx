import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const initval: IContact = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
};

const {getNames} = require('country-list');



const ManageContact: React.FunctionComponent = () => {
  const createContact = (contact: IContact) => {
    if (contact) {
      const prev = JSON.parse(localStorage.getItem("contacts") || '[]');
      if(prev.some((c: IContact) => c.email === contact.email)) {
        alert("User with that email already exists.")
        return;
      }
      localStorage.setItem("contacts", JSON.stringify(prev.concat(contact)));
    }
  };
  const addContactSchema = Yup.object().shape({
    firstName: Yup.string()
    .required('First name is required'),
    lastName: Yup.string()
    .required('Last name is required'),
    email: Yup.string()
    .email('Enter a valid email')
    .required()
  });
  return (
    <div className="add-contact">
      <Formik
        initialValues={initval}
        onSubmit={(values: IContact) => {
          createContact(values);
        }}
        validationSchema={addContactSchema}
      >
        <Form>
          <Field id="firstName" 
            name="firstName"
            placeholder="Enter first name"
            type="text"
          />
          <br/>
          <br/>
          <Field id="lastName" name="lastName" placeholder="Doe" type="text" />
          <br/>
          <br/>
          <Field id="email" name="email" type="text" />
          <br/>
          <br/>
          <Field as="select" name="country">
            {getNames().map((x: string) => {
             return <option>{x}</option>;
            })};
          </Field>
          <br/>
          <br/>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ManageContact;
