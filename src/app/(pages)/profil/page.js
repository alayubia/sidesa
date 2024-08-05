// profil/page.js
'use client';

import { Container, Title, Text, Grid } from '@mantine/core';
import AppHeader from '../../components/Header';
import AppFooter from '../../components/Footer';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Profil() {
  return (
    <div>
      <AppHeader />
      <Container mt="xl">
        <Title align="center" mb="lg">Profil Desa Sitimerto</Title>
        <Grid>
          <Grid.Col span={6}>
            <Title order={3}>Kondisi Geografis</Title>
            <Text align="justify" mt="md">
              Desa Sitimerto terletak di Kecamatan Pagu, Kabupaten Kediri. Desa ini memiliki kondisi geografis yang bervariasi dengan sebagian besar wilayah berupa perbukitan dan dataran rendah. Letak geografis ini menjadikan Sitimerto sebagai daerah yang subur dan cocok untuk pertanian.
            </Text>
            <Title order={3} mt="lg">Kepadatan Penduduk</Title>
            <Text align="justify" mt="md">
              Desa ini memiliki luas kurang lebih 0,56 km² dengan jumlah penduduk sekitar 1.768 jiwa. Kepadatan penduduk di Desa Sitimerto adalah 3.157 jiwa/km². Kepala Keluarga di Desa Sitimerto berjumlah 610 KK.
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Map />
          </Grid.Col>
        </Grid>
      </Container>
      <AppFooter />
    </div>
  );
}
