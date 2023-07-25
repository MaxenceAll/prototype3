import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';
import { Fragment, useCallback, useMemo } from 'react';

/**
 * InputSelect component: a generic select input with formik support, work as single select or multiple select.
 *
 * @param {Object} form: formik form object
 * @param {Object} field: formik field object
 * @param {Array} options: array of options. Each option is an object with label (what is displayed) and value (what is returned) properties.
 * @param {String} placeholder: placeholder text
 * @param {Boolean} multiple: if true, the select will be a multiple select
 * @param {Boolean} noError: if true, the error message will not be displayed
 * @param {String} label: label text (not required)
 *
 * @author Peter Mollet
 */
const InputSelect = ({ form, field, options, placeholder, multiple, noError, label }) => {
    const hasError = !noError && form.errors[field.name] && form.touched[field.name];
    const btnClassName = `input-select ${hasError ? 'input-select-error' : ''}`;

    const handleDelete = useCallback(
        (value) => {
            const index = field.value.findIndex((val) => val === value);
            if (index !== -1) {
                const newValue = [...field.value];
                newValue.splice(index, 1);
                form.setFieldValue(field.name, newValue);
            }
        },
        [form],
    );

    const labelBtn = useMemo(() => {
        if (multiple) {
            return field.value?.length <= 0
                ? placeholder
                : options
                      .filter((option) => field.value.includes(option.value))
                      .map((option) => (
                          <LabelChosed label={option.label} key={option.value} />
                      ));
        } else {
            if (field.value) {
                const index = options.findIndex((option) => option.value === field.value);
                return index === -1 ? placeholder : options[index].label;
            } else {
                return placeholder;
            }
        }
    }, [field.value, options, multiple, placeholder, handleDelete]);

    return (
        <Listbox
            value={field.value}
            onChange={(value) => form.setFieldValue(field.name, value)}
            multiple={multiple}
        >
            <div className="relative w-full">
                {label && <Listbox.Label className="label">{label}</Listbox.Label>}
                <Listbox.Button
                    className={`${btnClassName} text-gray-300 dark:border-gray-700 dark:bg-gray-600`}
                >
                    <div className={`flex flex-wrap gap-1 ${hasError && 'text-red-500'}`}>
                        {labelBtn}
                    </div>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options
                        className="absolute z-50 mt-1 max-h-60 w-full overflow-auto 
                        rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
                        dark:bg-gray-600 sm:text-sm"
                    >
                        {options.map((item, personIdx) => (
                            <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 
                                    ${active && 'bg-secondary-lighter dark:bg-secondary'}`
                                }
                                value={item.value}
                            >
                                {({ selected }) => {
                                    return (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? 'font-medium'
                                                        : 'font-normal'
                                                }`}
                                            >
                                                {item.label}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className="absolute inset-y-0 left-0 
                                                    flex items-center pl-3 text-secondary"
                                                >
                                                    <CheckIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    );
                                }}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
                {!noError && (
                    <ErrorMessage
                        name={field.name}
                        className={`absolute -bottom-4 right-0 text-xs text-red-500`}
                        component="small"
                    />
                )}
            </div>
        </Listbox>
    );
};

InputSelect.defaultProps = {
    multiple: false,
    noError: false,
};

InputSelect.propTypes = {
    form: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.any.isRequired,
        }),
    ),
    placeholder: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    noError: PropTypes.bool,
    label: PropTypes.string,
};

export default InputSelect;

/**
 * LabelChosed component: a label for a selected option in a multiple select.
 *
 * @param {string} label: label text
 */
const LabelChosed = ({ label }) => (
    <span className="relative">
        <span
            className="flex items-center rounded 
                bg-primary-lightest px-1 text-primary-darker"
        >
            {label}
        </span>
    </span>
);

LabelChosed.propTypes = {
    label: PropTypes.string.isRequired,
};
