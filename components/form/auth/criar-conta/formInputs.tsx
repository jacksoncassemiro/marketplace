"use client";

import { Anchor } from "@/components/ui/anchor";
import { Box, Input, Stack, Text, Title } from "@mantine/core";
import { useFormContext } from "@/components/form/formRoot";
import { Button } from "@/components/ui/button";
import { PasswordSecurityLevel } from "@/components/passwordSecurityLevel";

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
					<Input.Wrapper label="E-mail" error={form.errors.email}>
						<Input
							type="text"
							key={form.key('email')}
        			{...form.getInputProps('email')}
						/>
					</Input.Wrapper>
					<Input.Wrapper label="Senha">
						<PasswordSecurityLevel>
							<Input
								type="password"
								name="password"
								key={form.key('password')}
								{...form.getInputProps('password')}
							/>
						</PasswordSecurityLevel>
					</Input.Wrapper>
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