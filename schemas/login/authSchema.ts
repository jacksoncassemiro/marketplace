export const validate = {
  email: (value: string) => {
    if (!value) {
      return "Campo obrigatório";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return "Email inválido";
    }
    return null;
  },
  password: (value: string) => {
    if (!value) {
      return "Campo obrigatório";
    }
    return null;
  },
};

export const initialValues = {
  email: "",
  password: "",
}

export type AuthProps = typeof initialValues;