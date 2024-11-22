"use client";

import { Anchor } from "@/components/ui/anchor";
import { Button, Input, Text, Title } from "@mantine/core";
import { useFormStatus } from "react-dom";

export const FormInputsSignIn = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Title
        className="text-2xl font-medium"
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
			<div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
				<Input.Wrapper label="Email">
					<Input type="email" />
				</Input.Wrapper>
				<Input.Wrapper label="Senha">
					<Input
						type="password"
						name="password"
						placeholder="Your password"
						required
					/>
				</Input.Wrapper>
				<Button
          type="submit"
          loading={pending}
        >
					Entrar
				</Button>
				<div className="flex justify-between items-center">
					<Anchor
						className="text-xs text-foreground underline"
						href="/alterar-senha"
					>
						Esqueceu sua senha??
					</Anchor>
				</div>
			</div>
    </>
  );
};