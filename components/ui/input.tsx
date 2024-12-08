import { Input as MantineInput, InputProps, ElementProps } from "@mantine/core";
import { IMaskInput } from 'react-imask';

const masks = {
	telefone: '(00) 00000-0000',
	cep: '00000-000',
	cpf: '000.000.000-00',
	cnpj: '00.000.000/0000-00',
	rg: '00.000.000-0',
	data: '00/00/0000',
	dataHora: '00/00/0000 00:00',
	hora: '00:00',
} as const

type MasksType = keyof typeof masks;

interface MyButtonProps extends InputProps,
  Omit<ElementProps<'input', keyof InputProps>, "value">{}

export const Input = ({ ...props }: MyButtonProps & { mask?: MasksType }) => {
	const mask = props?.mask
	const maskValue = mask && mask in masks ? masks[mask] : undefined;
	return (
		<MantineInput
			{...props}
			component={IMaskInput}
			mask={maskValue}
		/>
	);
};
