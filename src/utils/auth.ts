const emailRegExp = /[\w]@[\w]/;

export const validateEmail = (email: string) => {
  return emailRegExp.test(email);
};

export const validatePassword = (password: string) => {
  return password.length >= 8;
};
