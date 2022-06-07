import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, NavLink, Link, Routes } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import './index.css'

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About },
    { path: '/contact', name: 'Contact', Component: Contact },
]

function Example() {
    return (
        <Router>
            <>
                <nav className="mx-auto">
                    {routes.map(route => (
                        <Link
                            key={route.path}
                            to={route.path}
                        >
                            {route.name}
                        </Link> 
                    ))}
                </nav>
                <Routes className="container">
                    {routes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<CSSTransition
                            in={path != null}
                            timeout={3000}
                            classNames="page"
                        >
                            <Component />
                        </CSSTransition>}>
                        </Route>
                    ))}
                </Routes>
            </>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();