import { validateName } from './validateName';
import { validateEmail } from './validateEmail';
import { validatePassword } from './validatePassword';

export const validateAuthFormField = (name: string, value: string): string => {
  switch (name) {
    case "email":
      return validateEmail(value);
    case "password":
      return validatePassword(value);
    case "name":
      return validateName(value);
    default:
      return "";
  }
};