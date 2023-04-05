import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

import { MyTextInput, MySelect, MyCheckbox } from '../components';
export const FormikAbstractation = () => {
    return (
        <div>
            <h1>Formik Abstractation Tutorial</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                // tiene que llamarse igual con los initialValues
                // notOneOf: no puede ser uno de los valores que este dentro de el arrego
                // oneOf: puede ser uno de los valores que esta dentro del arreglo
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'it should have 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'it should have 15 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email').required('Required'),
                    terms: Yup.boolean().isTrue('You should accept terms and conditions'),

                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Invalid option')
                        .required('Required'),
                })}
            >
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label='First Name'
                            name='firstName'
                            placeholder='Insert name'
                        />
                        <MyTextInput
                            label='Last Name'
                            name='lastName'
                            placeholder='Insert last name'
                        />
                        <MyTextInput
                            label='Email Adress'
                            name='email'
                            type='email'
                            placeholder='Insert email'
                        />

                        <MySelect label='Job Type' name='jobType'>
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>IT Senior</option>
                            <option value='it-jr'>IT Jr.</option>
                        </MySelect>

                        <MyCheckbox label='Terms and conditions' name='terms' />

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
