import { Container, Text } from '@mantine/core';

export default function AppFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[$#618264] z-[-1] h-14">
      <Container className="py-4">
        <Text align="center" c={white}>© {new Date().getFullYear()} Sistem Informasi Desa Sitimerto</Text>
      </Container>
    </footer>
  );
}
