import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
import {
    RegisterPage,
    FormikBasicPage,
    FormikYupPage,
    FormikComponents,
    FormikAbstractation,
} from '../forms/pages/';

export const Navigation = () => {
    return (
        <Router>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React Logo' />
                    <ul>
                        <li>
                            <NavLink
                                to='/register'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Register Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/formik-basic'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Formik Basic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/formik-yup'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Formik Yup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/formik-components'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/formik-abstractation'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Formik Abstractation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/home'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/home' element={<h1>Home</h1>} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/formik-basic' element={<FormikBasicPage />} />
                    <Route path='/formik-yup' element={<FormikYupPage />} />
                    <Route path='/formik-components' element={<FormikComponents />} />
                    <Route path='/formik-abstractation' element={<FormikAbstractation />} />

                    <Route path='/*' element={<Navigate to='/home' replace />} />
                </Routes>
            </div>
        </Router>
    );
};
