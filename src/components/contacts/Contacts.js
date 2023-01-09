import PageFooter from '../footer/Footer.js';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  MyForm,
  ButtonSubmit,
  Textarea,
  Input,
  LabelText,
} from './Contacts.styled';

const style = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(30, 'Too Long!'),

  message: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(300, 'Too Long!'),
  email: Yup.string().required('Required').email('Invalid email'),
});

const Contacts = () => (
  <>
    <div style={style}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <MyForm>
            <h1>Напишіть нам</h1>
            <label>
              <LabelText>Ім'я</LabelText>
              <Input placeholder="Ім'я" name="name" required />
            </label>

            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label>
              <LabelText>Ваша електронна пошта</LabelText>
              <Input placeholder="Email" name="email" type="email" required />
            </label>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label>
              <LabelText>Повідомлення</LabelText>
              <Textarea placeholder="Введіть текст" name="message" required />
            </label>
            {errors.message && touched.message ? (
              <div>{errors.message}</div>
            ) : null}
            <ButtonSubmit type="submit">Відправити</ButtonSubmit>
          </MyForm>
        )}
      </Formik>
    </div>
    <PageFooter />
  </>
);

export default Contacts;
