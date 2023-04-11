import * as Yup from 'yup';

import '../styles/styles.css';
import { Form, Formik, FormikValues } from 'formik';
import { MyTextInput } from '../components';

const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
};

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register formik page</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: FormikValues) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Name required').min(2).max(15),
                    email: Yup.string().required('Email required').email(),
                    password: Yup.string().required('Password required').min(6),
                    passwordConfirmation: Yup.string()
                        .required('Password confirmation required')
                        .min(6)
                        .oneOf([Yup.ref('password')], "Passwords don't match"),
                })}
            >
                {({ handleReset }) => (
                    <Form noValidate>
                        <MyTextInput
                            label='name'
                            name='name'
                            type='text'
                            placeholder='Insert your name'
                        />
                        <MyTextInput
                            label='email'
                            name='email'
                            type='email'
                            placeholder='Insert your email'
                        />
                        <MyTextInput
                            label='password'
                            name='password'
                            type='password'
                            placeholder='Insert your password'
                        />
                        <MyTextInput
                            label='Confirm password'
                            name='passwordConfirmation'
                            type='password'
                            placeholder='Repeat password'
                        />
                        <button onClick={handleReset}>Reset Form</button>
                        <button type='submit'>Create</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
