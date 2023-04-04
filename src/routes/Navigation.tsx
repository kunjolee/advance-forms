import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <Router>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React Logo' />
                    <ul>
                        <li>
                            <NavLink
                                to='/home'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/users'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/home' element={<span>Home</span>} />
                    <Route path='/about' element={<span>About</span>} />
                    <Route path='/users' element={<span>Users</span>} />

                    <Route path='/*' element={<Navigate to='/home' replace />} />
                </Routes>
            </div>
        </Router>
    );
};
