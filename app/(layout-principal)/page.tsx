import { Button } from '@mantine/core';

export default async function Index() {
  return (
    <>
      <div className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Página inicial</h2>
        <Button variant="filled">Button</Button>
      </div>
    </>
  );
}
