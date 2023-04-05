import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components Tutorial</h1>

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
                        <label htmlFor='firstName'>First Name</label>
                        {/* Field(input): Automaticamente maneja el onChange, onBlur, value */}
                        {/* ErrorMessage(text): Automaticamente maneja si isTouched and if it is an error */}
                        <Field name='firstName' type='text' />
                        <ErrorMessage name='firstName' component='span' />

                        <label htmlFor='lastName'>Last Name</label>
                        <Field name='lastName' type='text' />
                        <ErrorMessage name='lastName' component='span' />

                        <label htmlFor='email'>Email</label>
                        <Field name='email' type='text' />
                        <ErrorMessage name='email' component='span' />

                        <label htmlFor='jobType'>Job Type</label>
                        <Field name='jobType' as='select'>
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>IT Senior</option>
                            <option value='it-jr'>IT Jr.</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span' />

                        <label style={{ marginTop: '1rem' }}>
                            <Field name='terms' type='checkbox' />
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component='span' />

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
