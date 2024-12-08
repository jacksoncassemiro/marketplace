import { Check, X } from 'lucide-react';
import { Box, Center, Popover, Progress, Text } from '@mantine/core';
import { useFormContext } from "@/components/form/formRoot";
import { ReactNode, useState } from 'react';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text component="div" c={meets ? 'green' : 'red'} mt={5} size="sm">
      <Center inline>
        {meets ? <Check size={14} strokeWidth={1.5} /> : <X size={14} strokeWidth={1.5} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Inclui número' },
  { re: /[a-z]/, label: 'Inclui letra minúscula' },
  { re: /[A-Z]/, label: 'Inclui letra maiúscula' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Inclui símbolo especial' },
];

function getStrength(password: string) {
  let multiplier = password.length > 7 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

export const PasswordSecurityLevel = ({ children }:{ children: ReactNode }) => {
  const form = useFormContext();
	const [password, setPassword] = useState('');
	form.watch('senha', ({ value }) => {
		setPassword(value);
  });
  const [popoverOpened, setPopoverOpened] = useState(false);

  const strength = getStrength(password);
  const color = strength === 100 ? 'green' : strength > 50 ? 'yellow' : 'red';
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(password)} />
  ));

  return (
    <>
      <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            {children}
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} mb="xs" />
          <PasswordRequirement label="Ter pelo menos 8 caracteres" meets={password.length > 7} />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </>
  );
}