"use client";

import { Anchor } from "@/components/ui/anchor";
import { Box, Input as MantineInput, Stack, Text, Title } from "@mantine/core";
import { useFormContext } from "@/components/form/formRoot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FormInputsForgotPassword = () => {
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
					<MantineInput.Wrapper label="E-mail" error={form.errors.email}>
						<Input
							type="text"
							key={form.key('email')}
        			{...form.getInputProps('email')}
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