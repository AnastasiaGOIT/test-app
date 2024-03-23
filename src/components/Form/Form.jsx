// import { Button } from '../Button';
// import css from './Form.module.css';

// export const Form = () => {
//   return (
//     <div className={css.container}>
//       <form className={css.form}>
//         <h3 className={css.title}>Book your campervan now</h3>
//         <p className={css.text}>
//           Stay connected! We are always ready to help you.
//         </p>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           className={css.input}
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           className={css.input}
//         />
//         <input
//           type="text"
//           name="date"
//           placeholder="Booking Date"
//           className={css.input}
//         />
//         <textarea
//           name="comment"
//           placeholder="Comment"
//           className={css.textarea}
//         ></textarea>
//         <Button children={'Send'} />
//       </form>
//     </div>
//   );
// };

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button';
import css from './Form.module.css';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
        <input
          type="text"
          {...register('name', { required: true })}
          placeholder="Name"
          className={css.input}
        />
        {errors.name && <p className={css.error}>Name is required</p>}
        <input
          type="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className={css.input}
        />
        {errors.email && (
          <p className={css.error}>Please enter a valid email address</p>
        )}
        <input
          type="date"
          {...register('date', { required: true })}
          placeholder="Booking Date"
          className={css.input}
        />
        {errors.date && <p className={css.error}>Booking Date is required</p>}
        <textarea
          {...register('comment')}
          placeholder="Comment"
          className={css.textarea}
        ></textarea>
        <button type="submit" className={css.button}>
          Send
        </button>
      </form>
    </div>
  );
};
