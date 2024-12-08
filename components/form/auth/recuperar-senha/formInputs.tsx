"use client";

import { Box, Input as MantineInput, PasswordInput, Stack, Text, Title } from "@mantine/core";
import { useFormContext } from "@/components/form/formRoot";
import { Button } from "@/components/ui/button";
import { PasswordSecurityLevel } from "@/components/passwordSecurityLevel";

export const FormInputsResetPassword = () => {
	const form = useFormContext();
  return (
    <>
      <Box>
				<Title
					order={2}
				>
					Redefinir senha
				</Title>
				<Text
					size="sm"
				>
					Por favor, digite sua nova senha abaixo.
				</Text>
			</Box>
			<Stack
				gap="lg"
			>
				<Box className="flex flex-col gap-mantine-xs">
					<MantineInput.Wrapper label="Senha">
						<PasswordSecurityLevel>
							<PasswordInput
								name="senha"
								key={form.key('senha')}
								{...form.getInputProps('senha')}
								error={form.getInputProps('senha').error && true}
							/>
						</PasswordSecurityLevel>
					</MantineInput.Wrapper>
					<MantineInput.Wrapper label="Confirmar senha">
						<PasswordInput
							name="confirmar_senha"
							key={form.key('confirmar_senha')}
							{...form.getInputProps('confirmar_senha')}
						/>
					</MantineInput.Wrapper>
				</Box>
				<Stack
					gap="xs"
					align="center"
				>
					<Button
						type="submit"
						fullWidth
					>
						Redefinir
					</Button>
				</Stack>
			</Stack>
    </>
  );
};