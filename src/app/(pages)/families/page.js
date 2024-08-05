"use client";

import { useState, useEffect } from 'react';
import { Container, Title } from '@mantine/core';
import FamilyTable from '@/app/components/FamilyTable';
import AppHeader from '@/app/components/Header';
import AppFooter from '@/app/components/Footer';
import CenteredLoader from '@/app/components/Loader';

export default function FamiliesPage() {
    const [loading, setLoading] = useState(true);
    const [families, setFamilies] = useState([]);

    const fetchFamilies = async () => {
        const res = await fetch('/api/families');
        const data = await res.json();
        setFamilies(data);
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
            <div className='mb-14'>
                <Container mt="xl" mb={'xl'}>
                    <Title align="center" mb="lg">Admin - Manage Families</Title>
                    <FamilyTable families={families} />
                </Container>
            </div>
            <AppFooter />
        </div>
    );
}
