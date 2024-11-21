import { ButtonLink } from "@/components/ui/buttonLink";
import { Button, Title } from "@mantine/core/lib/components";
import { useFormStatus } from "react-dom";

export const FormInputsSignIn = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Title
        className="text-2xl font-medium"
      >Sign in</Title>
			<p className="text-sm text-foreground">
				Don't have an account?{" "}
				<ButtonLink
					className="text-foreground font-medium underline"
					href="/criar-conta"
				>
					Sign up
				</ButtonLink>
			</p>
			<div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
				<Label htmlFor="email">Email</Label>
				<Input name="email" placeholder="you@example.com" required />
				<div className="flex justify-between items-center">
					<Label htmlFor="password">Password</Label>
					<ButtonLink
						className="text-xs text-foreground underline"
						href="/alterar-senha"
					>
						Forgot Password?
					</ButtonLink>
				</div>
				<Input
					type="password"
					name="password"
					placeholder="Your password"
					required
				/>
				<Button
          type="submit"
          loading={pending}
        >
					Sign in
				</Button>
			</div>
    </>
  );
};