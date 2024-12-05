"use client";

import { Anchor } from "@/components/ui/anchor";
import { Box, Button, Input, Stack, Text, Title } from "@mantine/core";
import { useFormStatus } from "react-dom";
import { useFormContext } from "@/components/form/formRoot";
import { LoadingState } from "@/components/loadingState";

export const FormInputsSignIn = () => {
	const form = useFormContext();
  const { pending } = useFormStatus();

  return (
    <>
			<LoadingState loading={pending} />
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
					<Input.Wrapper label="E-mail" error={form.errors.email}>
						<Input
							type="text"
							key={form.key('email')}
        			{...form.getInputProps('email')}
						/>
					</Input.Wrapper>
					<Input.Wrapper label="Senha" error={form.errors.password}>
						<Input
							type="password"
							name="password"
							key={form.key('password')}
        			{...form.getInputProps('password')}
						/>
					</Input.Wrapper>
				</Box>
				<Stack
					gap="xs"
					align="center"
				>
					<Button
						type="submit"
						loading={pending}
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