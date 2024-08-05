"use client"

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container, Title } from '@mantine/core';
import AppHeader from '@/app/components/Header';
import AppFooter from '@/app/components/Footer';
import MembersTable from '@/app/components/MembersTable';
import CenteredLoader from '@/app/components/Loader';

export default function Lembaga() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const lembaga = pathname.split('/').pop();

  useEffect(() => {
    if (lembaga) {
      const fetchData = async () => {
        const res = await fetch(`/api/members?lembaga=${encodeURIComponent(lembaga)}`);
        const data = await res.json();
        setData(data);
        setLoading(false);
      };

      fetchData();
    }
  }, [pathname]);

  if (loading) {
    return <CenteredLoader />;
  }

  return (
    <div>
      <AppHeader />
      <div className='mb-14'>
        <Container mt="xl" mb={'xl'}>
          <Title align="center" mb="lg">{`Lembaga ${lembaga}`}</Title>
          <MembersTable title={`Daftar Anggota ${lembaga.toUpperCase()}`} members={data} />
        </Container>
      </div>
      <AppFooter />
    </div>
  );
}
