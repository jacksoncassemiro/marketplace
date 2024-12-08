"use client";

import { Anchor } from "@/components/ui/anchor";
import { Box, Input as MantineInput, PasswordInput, Stack, Text, Title } from "@mantine/core";
import { useFormContext } from "@/components/form/formRoot";
import { Button } from "@/components/ui/button";
import { PasswordSecurityLevel } from "@/components/passwordSecurityLevel";
import { Input } from "@/components/ui/input";

export const FormInputsSignUp = () => {
	const form = useFormContext();
  return (
    <>
      <Box>
				<Title
					order={2}
				>
					Cadastrar-se
				</Title>
				<Text
					size="sm"
				>
					Já tem uma conta?{" "}
					<Anchor
						className="text-foreground font-medium underline"
						href="/login"
					>
						Entrar
					</Anchor>
				</Text>
			</Box>
			<Stack
				gap="lg"
			>
				<Box className="flex flex-col gap-mantine-xs">
					<MantineInput.Wrapper label="Nome" error={form.errors.nome}>
						<Input
							type="text"
							key={form.key('nome')}
        			{...form.getInputProps('nome')}
						/>
					</MantineInput.Wrapper>
					<MantineInput.Wrapper label="Sobrenome" error={form.errors.sobrenome}>
						<Input
							type="text"
							key={form.key('sobrenome')}
        			{...form.getInputProps('sobrenome')}
						/>
					</MantineInput.Wrapper>
					<MantineInput.Wrapper label="Contato" error={form.errors.telefone}>
						<Input
							type="text"
							key={form.key('telefone')}
							mask="telefone"
        			{...form.getInputProps('telefone')}
						/>
					</MantineInput.Wrapper>
					<MantineInput.Wrapper label="E-mail" error={form.errors.email}>
						<Input
							type="text"
							key={form.key('email')}
        			{...form.getInputProps('email')}
						/>
					</MantineInput.Wrapper>
					<MantineInput.Wrapper label="Senha">
						<PasswordSecurityLevel>
							<PasswordInput
								name="senha"
								key={form.key('senha')}
								{...form.getInputProps('senha')}
							/>
						</PasswordSecurityLevel>
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
						Cadastrar
					</Button>
				</Stack>
			</Stack>
    </>
  );
};