export const validate = {
	email: (value: string) => {
		if (!value) {
			return "Campo obrigatório.";
		}
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
			return "Email inválido.";
		}
		return null;
	},
	senha: (value: string) => {
		if (!value || value.length < 8) {
			return "Campo obrigatório.";
		}
		return null;
	},
};

export const initialValues = {
	email: "",
	senha: "",
};

export type AuthTypes = typeof initialValues;

export const validateCreateAccount = {
	email: validate.email,
	nome: (value: string) => {
		if (!value) {
			return "Campo obrigatório.";
		}
		return null;
	},
	sobrenome: (value: string) => {
		if (!value) {
			return "Campo obrigatório.";
		}
		return null;
	},
	telefone: (value: string) => {
		if (!value) {
			return "Campo obrigatório.";
		}
		if (!/^\(?\d{2}\)?[\s-]?9?\d{4}-?\d{4}$/.test(value)) {
			return "Número inválido.";
		}
		return null;
	},
	senha: (value: string) => {
		if (!value) {
			return "Campo obrigatório.";
		}

		const rules = [
			{ re: /[0-9]/, label: "Inclui número." },
			{ re: /[a-z]/, label: "Inclui letra minúscula." },
			{ re: /[A-Z]/, label: "Inclui letra maiúscula." },
			{ re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Inclui símbolo especial." },
		];

		if (value.length < 8) {
			return "A senha deve ter pelo menos 8 caracteres.";
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
	...initialValues,
	nome: "",
	sobrenome: "",
	telefone: "",
};

export type CreateAccountTypes = typeof initialValuesCreateAccount;

export const validateForgotPassword = {
	senha: validateCreateAccount.senha,
	confirmar_senha: (value: string, { senha }: { senha: string }) => {
		if (!value) {
			return "Campo obrigatório.";
		}

		if (value !== senha) {
			return "As senhas nao correspondem.";
		}
		return null;
	},
}

export const initialValuesForgotPassword = {
	senha: "",
	confirmar_senha: "",
}

export type ForgotPasswordTypes = typeof initialValuesForgotPassword;