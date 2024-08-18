"use client";

import { useState, useEffect } from 'react';
import { Container, Title } from '@mantine/core';
import DaftarAgamaTable from '@/app/components/DaftarAgamaTable';
import AppHeader from '@/app/components/Header';
import AppFooter from '@/app/components/Footer';
import CenteredLoader from '@/app/components/Loader';

export default function FamiliesPage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchFamilies = async () => {
        const res = await fetch('/api/daftar_agama');
        const data = await res.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchFamilies();
    }, []);

    if (loading) {
        return <CenteredLoader />;
    }

    return (
        <div>
            <AppHeader />
            <div className='bg-white mb-14'>
                <Container mt="xl" mb={'xl'}>
                    <Title align="center" mb="lg">Agama</Title>
                    <DaftarAgamaTable agama={data} />
                </Container>
            </div>
            <AppFooter />
        </div>
    );
}
