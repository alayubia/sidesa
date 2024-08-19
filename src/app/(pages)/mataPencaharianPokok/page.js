"use client";

import { useState, useEffect } from 'react';
import { Container, Title } from '@mantine/core';
import MataPencaharianTable from '@/app/components/MataPencaharianTable';
import AppHeader from '@/app/components/Header';
import AppFooter from '@/app/components/Footer';
import CenteredLoader from '@/app/components/Loader';

export default function FamiliesPage() {
    const [loading, setLoading] = useState(true);
    const [families, setFamilies] = useState([]);

    const fetchFamilies = async () => {
        const res = await fetch('/api/mata_pencaharian_pokok');
        const data = await res.json();
        setFamilies(data);
        setLoading(false);
        console.log(data);
        
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
                    <Title align="center" mb="lg">Mata Pencaharian Pokok</Title>
                    <MataPencaharianTable mataPencaharian={families} />
                </Container>
            </div>
            <AppFooter />
        </div>
    );
}
