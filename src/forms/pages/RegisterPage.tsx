import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
    const { formData, onChange, name, password1, password2, email, resetForm, isValidEmail } =
        useForm({
            name: '',
            email: '',
            password1: '',
            password2: '',
        });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>Register page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={onChange}
                    name='name'
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>This field is required</span>}
                <input
                    type='email'
                    placeholder='Insert your email'
                    value={email}
                    onChange={onChange}
                    name='email'
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Not valid email</span>}
                <input
                    type='password'
                    placeholder='Password'
                    value={password1}
                    onChange={onChange}
                    name='password1'
                />
                {password1.trim().length <= 0 && <span>This field is required</span>}
                {password1.trim().length > 0 && password1.trim().length < 6 && (
                    <span>at 6 length characters required</span>
                )}
                <input
                    type='password'
                    placeholder='Repeat password'
                    value={password2}
                    onChange={onChange}
                    name='password2'
                />
                {password2.trim().length <= 0 && <span>This field is required</span>}
                {password2.trim().length > 0 && password2 !== password1 && (
                    <span>Passwords should be the same</span>
                )}
                <button type='submit'>Create</button>
                <button type='button' onClick={resetForm}>
                    Reset Form
                </button>
            </form>
        </div>
    );
};
