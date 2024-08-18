"use client";

import { useState, useEffect } from 'react';
import { Container, Button, TextInput, NumberInput, Title, Modal } from '@mantine/core';
import PotensiTable from '@/app/components/PotensiTable';
import AppHeader from '@/app/components/Header';
import AppFooter from '@/app/components/Footer';
import CenteredLoader from '@/app/components/Loader';

export default function PotensiPage() {
    const [loading, setLoading] = useState(true);
    const [potensi, setPotensi] = useState([]);

    const fetchData = async () => {
        const res = await fetch('/api/potensi');
        const data = await res.json();
        setPotensi(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
        console.log(potensi);
    }, []);

    if (loading) {
        return <CenteredLoader />;
    }

    const groupedPotensis = potensi.reduce((acc, potensi) => {
        if (!acc[potensi.bab]) {
            acc[potensi.bab] = {};
        }
        if (!acc[potensi.bab][potensi.sub_bab]) {
            acc[potensi.bab][potensi.sub_bab] = [];
        }
        if (!acc[potensi.bab][potensi.sub_bab][potensi.judul]) {
            acc[potensi.bab][potensi.sub_bab][potensi.judul] = [];
        }
        acc[potensi.bab][potensi.sub_bab][potensi.judul].push(potensi);
        return acc;

    }, {});

    return (
        <div>
            <AppHeader />
            <div className='mb-14 px-8'>
                <Title align="center" mb="lg">Daftar Potensi</Title>
                {Object.keys(groupedPotensis).map(bab => (
                    <div key={bab}>
                        <Title order={3}>{bab}</Title>
                        {Object.keys(groupedPotensis[bab]).map(sub_bab => (
                            <div key={sub_bab}>
                                <Title order={4}>{sub_bab}</Title>
                                {Object.keys(groupedPotensis[bab][sub_bab]).map(judul => (
                                    <div key={judul} className='mb-4'>
                                        <PotensiTable judul={judul} data={groupedPotensis[bab][sub_bab][judul]} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <AppFooter />
        </div>
    );
}