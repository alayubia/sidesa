// sejarah/page.js
"use client"

import { Container, Title, Text } from '@mantine/core';
import AppHeader from '../../components/Header';
import AppFooter from '../../components/Footer';

export default function Sejarah() {
    return (
        <div>
            <AppHeader />
            <Container mt="xl">
                <Title align="center" mb="lg">Sejarah Desa</Title>
                <Text align="justify">
                    Sitimerto adalah sebuah desa di Kecamatan Pagu, Kabupaten Kediri. Di Desa Sitimerto, banyak masyarakat yang hidup dengan bertani. Desa Sitimerto hanya mempunyai satu dusun yaitu Dusun Sitimerto. Dengan kearifan masyarakat para tetua pada saat itu, desa-desa tersebut menjadi satu, yaitu Desa Sitimerto. Tentu saja terdapat banyak versi yang berbeda-beda, namun inilah asal muasal Desa Sitimerto menurut pandangan banyak sesepuh desa. Menurut sesepuh desa, dahulu kala Sitimerto merupakan tempat yang tidak berpenghuni, kawasan tersebut dikelilingi pepohonan lebat dan beriklim dingin. Dari sinilah para pengungsi perang kerajaan Mataram saat itu sedang melawan pemerintah kolonial Belanda yang dipimpin oleh salah seorang Punggawa Kerajaan yang merupakan raja Aging Selo, mereka memindahkan tanah tersebut ke cagar alam yang akhirnya dikembangkan. kawasan pemukiman dan lahan pertanian, kemudian menjadi kelompok masyarakat.
                    Menurut cerita, nama Desa Sitimerto sendiri berasal dari cerita bahwa tempat tersebut merupakan tempat berkumpul dan tinggalnya gajah, sehingga mirip dengan bahasa Kawi bahwa Siti dan gajah adalah tanah atau kelemahannya. Bahasanya Merto karena kalau kita campur tanah tempat berkumpulnya gajah atau tanah gajah dalam bahasa jawa kuno adalah SITIMERTO. Sejak saat itu, penandaan ini, dapat disembunyikan sebagai tetenger (tanda) untuk memberi nama desa Sitimerto.
                </Text>
            </Container>
            <AppFooter />
        </div>
    );
}
