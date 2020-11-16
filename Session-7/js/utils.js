export function checkInputWrapperValue($inputWrapper, condition, msg) {
    let value = $inputWrapper.value;
    if (condition(value)) {
        $inputWrapper.error = msg;
        return false;
    } else {
        $inputWrapper.error = ``;
        return true;
    }
}

export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validateStrongPassword(pwString) {
    var strength = 0;

    strength += /[A-Z]+/.test(pwString) ? 1 : 0;
    strength += /[a-z]+/.test(pwString) ? 1 : 0;
    strength += /[0-9]+/.test(pwString) ? 1 : 0;
    strength += /[\W]+/.test(pwString) ? 1 : 0;

    switch (strength) {
        case 3:
            // its's medium!
            break;
        case 4:
            // it's strong!
            break;
        default:
            // it's weak!
            break;
    }
    return strength >= 4;
}