"use client"

import { Carousel } from '@mantine/carousel';
import { Container, SimpleGrid, Title, Text, Image, Input, Button, Textarea } from '@mantine/core';
import AppHeader from '@/app/components/Header';
import AppFooter from '../components/Footer';
import SearchBar from '../components/SearchBar';
import MenuGrid from '../components/MenuGrid';
import styles from '../styles/Home.module.css';

const articles = [
  { image: 'IMG-20240804-WA0011.jpg' },
  { image: 'IMG-20240804-WA0015.jpg' },
  { image: 'IMG-20240804-WA0013.jpg' },
  { image: 'IMG-20240804-WA0012.jpg' },
  { image: 'IMG-20240804-WA0014.jpg' },
  { image: 'IMG-20240804-WA0016.jpg' },
];

export default function Home() {
  return (
    <div>
      <AppHeader />
      <div className='bg-white mb-14'>
        <div className={styles.hero}>
          <Container >
            <Image
              mr='auto'
              ml='auto'
              radius="md"
              h={140}
              w="auto"
              src="logo.png"
            />
            <Title order={1}>Desa Sitimerto</Title>
            <Title order={2}>Kec. Pagu Kab. Kediri</Title>
          </Container>
          {/* <MenuGrid /> */}
        </div>
        <Title align="center" mt="md" mb="lg">Galeri</Title>
        <div style={{ height: 'screen', display: 'flex' }}>
          <Carousel withIndicators height="100%" style={{ flex: 1 }} slideSize="70%" slideGap="md" loop>
            {articles.map((article, index) => (
              <Carousel.Slide key={index}>
                <Image src={article.image} fit="" />
                <Text weight={500} c="blue" align="center">{article.title}</Text>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>

        <div className='flex px-14 pt-4 pb-12 justify-center'>
          {/* <div>
            <Image
              src="/5191999.jpg"
              height={120}
              width={120}
              layout="fixed"
              objectFit="cover"
              alt="Designed by Freepik"
            />
            <a href="http://www.freepik.com">Designed by Freepik</a>
          </div> */}
          <div>
            <Title align="center" mt="md" mb="lg">Form Keluhan</Title>
            <form className="max-w-md mx-auto">
              <Input placeholder="Nama" required size='md' />
              <Textarea placeholder="Keluhan Anda" required mt="md" size='md' />
              <Button type="submit" fullWidth mt="md">Kirim</Button>
            </form>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
