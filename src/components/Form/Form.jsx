import * as React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './Form.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  bookingDate: Yup.date().required('Booking date is required'),
});

export const FormBook = () => {
  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <h3 className={css.title}>Book your campervan now</h3>
            <p className={css.text}>
              Stay connected! We are always ready to help you.
            </p>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={
                errors.name && touched.name
                  ? `${css.input} ${css.error}`
                  : css.input
              }
            />
            {errors.name && touched.name && (
              <div className={css.errorText}>{errors.name}</div>
            )}
            <Field
              type="text"
              name="email"
              placeholder="Email"
              className={
                errors.email && touched.email
                  ? `${css.input} ${css.error}`
                  : css.input
              }
            />
            {errors.email && touched.email && (
              <div className={css.errorText}>{errors.email}</div>
            )}
            <Field
              type="text"
              name="date"
              placeholder="Booking Date"
              className={
                errors.bookingDate && touched.bookingDate
                  ? `${css.input} ${css.error}`
                  : css.input
              }
            />
            {errors.bookingDate && touched.bookingDate && (
              <div className={css.errorText}>{errors.bookingDate}</div>
            )}
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={css.textarea}
            />
            <button className={css.button} children={'Send'} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
