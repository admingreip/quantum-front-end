import { UtlIsNumeric } from '../utils/isNumeric.util';


export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Requerido',
            'invalidCreditCard': 'número de tarjeta de crédito inválida',
            'invalidEmailAddress': 'email inválido',
            'invalidPassword': 'contraseña inválida. Debe tener entre 6 y 20 caracteres, contener un número y {_}',
            'minlength': 'longitud mínima ' + validatorValue.requiredLength,
            'invalidDecimal': 'Valor incorrecto',
            'invalidLogin': 'login inválido, Debe tener entre 3 y 15 caracteres entre letras y números'
        };

        return config[validatorName];
    }

    static decimalValidator(control) {
        let value = !control.value ? "" : control.value;

        let isValid = UtlIsNumeric(value);
        if (isValid) {
            return null;
        } else {
            return { 'invalidDecimal': true };
        }
    }

    static loginValidator(control) {
        // Match characters and symbols in the list, a-z, 0-9, underscore
        //Length at least 3 characters and maximum length of 15
        let value = !control.value ? "" : control.value + "";
        if (value.length > 0) {
            if (value.match(/^[a-z0-9_]{3,15}$/)) {
                return null;
            } else {
                return { 'invalidLogin': true };
            }
        } else
            return null;
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        let value = !control.value ? "" : control.value + "";
        if (value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        let value = !control.value ? "" : control.value + "";
        if (value.length > 0) {
            if (value.match(/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/)) {
                return null;
            } else {
                return { 'invalidEmailAddress': true };
            }
        } else
            return null;
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 20 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        let value = !control.value ? "" : control.value + "";
        if (value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,20}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static fileValidator(control) {
        return control.value == null || control.value.length == 0 ? { "required": true } : null;
    }
}