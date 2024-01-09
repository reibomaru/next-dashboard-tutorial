'use client';

import { Button } from '@chakra-ui/react';

export default function Page() {
  return (
    <>
      <h1>Customer page</h1>
      <Button onClick={() => alert('called')}>ボタン</Button>
    </>
  );
}
