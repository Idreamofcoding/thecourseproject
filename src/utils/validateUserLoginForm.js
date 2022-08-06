export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 2) {
        errors.username = 'Must be at least 2 characters.';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 2) {
        errors.password = 'Must be at least 2 characters.';
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less';
    }

    // const reg = /^\d+$/;
    // if (!reg.test(values.phoneNum)) {
    //     errors.phoneNum = 'The phone number should contain only numbers.';
    // }

    // if (!values.email.includes('@')) {
    //     errors.email = 'Email should contain a @';
    // }

    return errors;
};