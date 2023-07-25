import { ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';

/**
 * Input component: generic input field, working with Formik.
 * Automaticaly trim the value of the input field if the value is a string.
 *
 * @param {String} placeholder: placeholder of the input field
 * @param {Object} field: field object of Formik
 * @param {Object} form: form object of Formik
 * @param {String} type: type of the input field
 * @param {String} label: label of the input field
 * @param {String} className: class of the input field
 * @param {Boolean} noError: if true, no error message is displayed *
 *
 * @example <Field type="email" name="email" placeholder="Email" component={ InsyInput } className='my-0'/>
 * @author Peter Mollet
 */
const Input = ({
    noError,
    className,
    type,
    field: { name },
    field,
    form: { errors, touched, setFieldValue },
    label,
    ...rest
}) => {
    return (
        <div className="relative w-full">
            {label && <span className="label">{label}</span>}
            <input
                id={name}
                name={name}
                type={type}
                onBlur={field.onBlur}
                onChange={(e) => {
                    const value =
                        typeof e.target.value === 'string'
                            ? e.target.value.trim()
                            : e.target.value;
                    setFieldValue(name, value);
                }}
                className={`input ${
                    errors[name] && touched[name] && 'input-error'
                } ${className} `}
                {...rest}
            />
            {!noError && (
                <ErrorMessage
                    name={field.name}
                    className="error-message"
                    component="small"
                />
            )}
        </div>
    );
};

export default Input;

Input.defaultProps = {
    type: 'text',
    noError: false,
    className: '',
};

Input.propTypes = {
    noError: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.string,
    field: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    form: PropTypes.shape({
        errors: PropTypes.object.isRequired,
        touched: PropTypes.object.isRequired,
        setFieldValue: PropTypes.func.isRequired,
    }).isRequired,
};
