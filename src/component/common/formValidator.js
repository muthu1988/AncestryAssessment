export function username (username) {
    const length = username ? username.length : 0;
    if (length > 8) return 'success';
    else if (length > 0) return 'error';
    return null;
  };

  export function password (password) {
    const length = password ? password.length : 0;
    if (length > 8) return 'success';
    else if (length > 0) return 'error';
    return null;
  };

  export function name (name) {
    const length = name ? name.length : 0;
    if (length >= 1) return 'success';
    else if (length < 0) return 'error';
    return null;
  };

  export function email (email) {
    const re = /\S+@\S+\.\S+/;
    const length = email ? email.length : 0;
    if (length > 1 && re.test(email)) return 'success';
    else if (length > 1 && !re.test(email)) return 'error';
    else if (length > 0) return 'error'
    return null;
  };

  export function formValidation (type, formValues) {
    const form = formValues ? formValues : {};
    const validUserName = username(form.username) === 'success';
    const validPassword = password(form.password) === 'success';
    const validEmail = email(form.email) === 'success';
    const validFirstName = name(form.firstname) === 'success';
    const validLastName = name(form.lastname) === 'success';
    return (type === 'login' && validUserName && validPassword) ||
        (type === 'signup' && validUserName && validPassword && validEmail&& validFirstName && validLastName)
  };