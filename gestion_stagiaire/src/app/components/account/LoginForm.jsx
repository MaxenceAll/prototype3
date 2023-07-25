import { LockClosedIcon } from '@heroicons/react/24/solid';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { authenticate } from '../../store/accountSlice';
import { defaulValuesLogin } from './../../constants/form/account';
import { schemaFormLogin } from './../../constants/yup/account';
import ErrorMessSmall from './../lib/form/ErrorMessSmall';
import Input from './../lib/form/Input';
import { Checkbox } from './../lib/form/InputChoices';
import Spinner from './../lib/utils/Spinner';

/**
 * LoginForm component: login form. redirect to URL_APP when succesfull
 *
 * @author Peter Mollet
 */
const LoginForm = () => {
    const navigate = useNavigate();
    const [errorLog, setErrorLog] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = (values, { setSubmitting }) => {
        dispatch(authenticate(values))
            .unwrap()
            .then((res) => {
                if (res.accessToken) navigate('/app');
            })
            .catch(() => {
                setSubmitting(false);
                setErrorLog('Email or password is incorrect');
            });
    };

    return (
        <Layout>
            <Formik
                initialValues={defaulValuesLogin}
                onSubmit={handleLogin}
                validationSchema={schemaFormLogin}
            >
                {({ isSubmitting }) => (
                    <Form className="relative mt-8 space-y-6">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <Field
                                type="text"
                                name="username"
                                placeholder="Login"
                                autoComplete="username"
                                component={Input}
                                className="rounded-none rounded-t-md"
                                noError
                            />
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                component={Input}
                                className="rounded-none rounded-b-md"
                                noError
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Field
                                name="rememberMe"
                                label="Remember me"
                                component={Checkbox}
                                value={true}
                            />
                            <div className="text-sm">
                                <Link to="/forgot-password">
                                    <span className="cursor-pointer font-medium text-primary-dark hover:text-primary">
                                        Forgot your password?
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div>
                            {isSubmitting ? (
                                <Spinner />
                            ) : (
                                <button
                                    type="submit"
                                    className="btn btn-primary group relative w-full"
                                    disabled={isSubmitting}
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon
                                            className="h-5 w-5 text-primary-dark group-hover:text-primary-light"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    Sign in
                                </button>
                            )}
                        </div>
                        {errorLog && (
                            <div className="absolute -bottom-6">
                                <ErrorMessSmall
                                    middle
                                    message="Login/Password incorrect(s)"
                                />
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </Layout>
    );
};

export default LoginForm;

const Layout = ({ children }) => {
    return (
        <div className="w-full max-w-md space-y-8 rounded-md bg-white px-4 py-8 shadow sm:px-6 lg:px-8">
            <div>
                <div className="flex justify-center">
                    <img
                        className="h-12 w-auto cursor-pointer sm:h-10"
                        src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
                        alt=""
                        width={200}
                        height={60}
                    />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
                    Sign in to your account
                </h2>
            </div>

            <hr />
            {children}
        </div>
    );
};
