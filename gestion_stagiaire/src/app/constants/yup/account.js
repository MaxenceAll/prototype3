import * as Yup from 'yup';

/**
 * Schema for validating the user's forms
 *
 * @author Peter Mollet
 */

export const schemaFormLogin = Yup.object().shape({
    username: Yup.string().required('Required input'),
    password: Yup.string().required('Required input'),
});
