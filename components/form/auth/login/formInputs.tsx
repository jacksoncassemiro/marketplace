"use client";

import { Anchor } from "@/components/ui/anchor";
import { Box, Input as MantineInput, PasswordInput, Stack, Text, Title } from "@mantine/core";
import { useFormContext } from "@/components/form/formRoot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FormInputsSignIn = () => {
	const form = useFormContext();
  return (
    <>
      <Box>
				<Title
					order={2}
				>
					Entrar
				</Title>
				<Text
					size="sm"
				>
					Não tem uma conta?{" "}
					<Anchor
						className="text-foreground font-medium underline"
						href="/criar-conta"
					>
						Cadastrar-se
					</Anchor>
				</Text>
			</Box>
			<Stack
				gap="lg"
			>
				<Box className="flex flex-col gap-mantine-xs">
					<MantineInput.Wrapper label="E-mail" error={form.errors.email}>
						<Input
							type="text"
							key={form.key('email')}
        			{...form.getInputProps('email')}
						/>
					</MantineInput.Wrapper>
					<MantineInput.Wrapper label="Senha" error={form.errors.senha}>
						<PasswordInput
							name="senha"
							key={form.key('senha')}
        			{...form.getInputProps('senha')}
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
						Entrar
					</Button>
					<Anchor
						href="/alterar-senha"
						size="sm"
					>
						Esqueceu sua senha?
					</Anchor>
				</Stack>
			</Stack>
    </>
  );
};