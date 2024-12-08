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
    if (!value || value.length < 8) {
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

export const validateCreateAccount = {
  ...validate,
  password: (value: string) => {
    if (!value) {
      return "Campo obrigatório";
    }

    const rules = [
      { re: /[0-9]/, label: "Inclui número" },
      { re: /[a-z]/, label: "Inclui letra minúscula" },
      { re: /[A-Z]/, label: "Inclui letra maiúscula" },
      { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Inclui símbolo especial" },
    ];

    // Verifica se o comprimento mínimo é atendido
    if (value.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres";
    }

    // Verifica cada regra
    const failedRules = rules.filter((rule) => !rule.re.test(value));
    if (failedRules.length > 0) {
      return failedRules.map((rule) => rule.label).join(", ");
    }

    return null;
  },
};

export const initialValuesCreateAccount = {
  ...initialValues
}

export type CreateAccountProps = typeof initialValuesCreateAccount;