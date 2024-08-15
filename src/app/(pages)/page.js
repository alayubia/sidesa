"use client"

import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { Container, Title, Text, Image, Input, Button, Textarea } from '@mantine/core';
import AppHeader from '@/app/components/Header';
import AppFooter from '../components/Footer';
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
  const [files, setFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (files.length === 0) {
      alert('Silakan pilih file terlebih dahulu');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('nama', event.target.nama.value);
    formData.append('keluhan', event.target.keluhan.value);
    
    try {
      const response = await fetch('/api/keluhan', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Upload gambar gagal');
      }
      
      // const data = await response.json();
      // console.log('Upload berhasil:', data);
      
      // Reset form dan state files
      event.target.reset();
      setFiles([]);
      
      // Tambahkan kode di sini untuk menangani respons sukses (misalnya, menampilkan pesan sukses)
      alert('Form berhasil dikirim!');
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengunggah. Silakan coba lagi.');
    }
  };

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
          <Container className='border rounded shadow pb-6'>
            <Title align="center" mt="md" mb="lg">Form Keluhan</Title>
            <form encType="multipart/form-data" className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <Input name="nama" placeholder="Nama" required size='md' />
              <Textarea name="keluhan" placeholder="Keluhan Anda" required size='md' mt="md" />
              <Dropzone
                onDrop={handleDrop}
                accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]}
                multiple={false}
                mt="md"
              >
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  {files.length === 0 ? (
                    <>
                      <p>Seret & lepaskan file di sini atau klik untuk menambahkan foto</p>
                      <p>(Hanya file PNG, JPEG, dan SVG yang diizinkan)</p>
                    </>
                  ) : (
                    <p>{files[0].name}</p>
                  )}
                </div>
              </Dropzone>
              <Button type="submit" fullWidth mt="md">Kirim</Button>
            </form>
          </Container>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
