"use client";

import { Anchor } from "@/components/ui/anchor";
import { Box, Button, Input, LoadingOverlay, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useFormContext } from "@/components/form/formRoot";

export const FormInputsSignIn = () => {
	const form = useFormContext();
  const { pending } = useFormStatus();
	const [visible, { toggle }] = useDisclosure(true);
	useEffect(() => {
		toggle();
	}, [pending]);

  return (
    <>
			<LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
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
					<Input.Wrapper label="E-mail" error={form.errors.email} component={
						({ children }: { children: React.ReactNode }) => <button>{children}</button>
					}>
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