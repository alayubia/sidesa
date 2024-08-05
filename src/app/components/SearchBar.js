// components/SearchBar.js
import { Input, Container } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export default function SearchBar() {
  return (
    <Container size="sm" mt="lg">
      <Input
        icon={<IconSearch />}
        placeholder="Cari..."
        radius="md"
        size="md"
      />
    </Container>
  );
}
