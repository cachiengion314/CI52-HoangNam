export function checkInputWrapperValue($inputWrapper, condition, msg) {
    let value = $inputWrapper.value;
    if (condition(value)) {
        $inputWrapper.error = msg;
    } else {
        $inputWrapper.error = ``;
    }
}