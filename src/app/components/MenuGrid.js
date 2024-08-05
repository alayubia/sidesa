// components/MenuGrid.js
import { SimpleGrid, Card, Text } from '@mantine/core';
import Image from 'next/image';

const menuItems = [
  { title: 'Profil Desa', icon: 'https://via.placeholder.com/400' },
  { title: 'Demografi', icon: 'https://via.placeholder.com/400' },
  { title: 'Informasi Publik', icon: 'https://via.placeholder.com/400' },
  { title: 'Status IDM', icon: 'https://via.placeholder.com/400' },
  { title: 'Arsip Berita', icon: 'https://via.placeholder.com/400' },
  { title: 'Lapak', icon: 'https://via.placeholder.com/400' },
  { title: 'Pembangunan', icon: 'https://via.placeholder.com/400' },
  { title: 'Peta Desa', icon: 'https://via.placeholder.com/400' },
  { title: 'Pengaduan', icon: 'https://via.placeholder.com/400' },
];

export default function MenuGrid() {
  return (
    <SimpleGrid cols={3} spacing="lg" mt='xl' breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
      {menuItems.map((item) => (
        <Card shadow="sm" padding="lg" key={item.title}>
          <Image src={item.icon} alt={item.title} width={50} height={50} />
          <Text mt="sm" align="center">{item.title}</Text>
        </Card>
      ))}
    </SimpleGrid>
  );
}
