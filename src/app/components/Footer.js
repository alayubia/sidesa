import { Container, Text } from '@mantine/core';

export default function AppFooter() {
  return (
    <footer className="bg-[#618264] fixed bottom-0 left-0 right-0 z-[-1] h-14">
      <Container className="py-4">
        <Text align="center" style={{color: 'white', fontWeight: 'bold'}}>© {new Date().getFullYear()} Sistem Informasi Desa Sitimerto</Text>
      </Container>
    </footer>
  );
}
