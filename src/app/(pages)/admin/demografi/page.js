"use client";

import { useState, useEffect } from 'react';
import { Container, Button, TextInput, NumberInput, Title, Modal } from '@mantine/core';
import DemografiTable from '@/app/components/Admin/DemografiTable';
import AdminHeader from '@/app/components/Admin/Header';
import AppFooter from '@/app/components/Footer';
import CenteredLoader from '@/app/components/Loader';

export default function DemografiPage() {
    const [loading, setLoading] = useState(true);
    const [demografi, setDemografi] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);
    const [newData, setNewData] = useState({ jumlah_laki_laki: '', jumlah_perempuan: '', jumlah_total: '', jumlah_kk: '', kepadatan_penduduk: '' });

    const fetchData = async () => {
        const res = await fetch('/api/demografi');
        const data = await res.json();
        setDemografi(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddOrUpdate = async () => {
        const method = newData.id ? 'PUT' : 'POST';
        await fetch('/api/demografi', {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });
        fetchData();
        setNewData({ jumlah_laki_laki: '', jumlah_perempuan: '', jumlah_total: '', jumlah_kk: '', kepadatan_penduduk: '' });
        setModalOpened(false);
    };

    const handleDelete = async (id) => {
        await fetch(`/api/demografi`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        fetchData();
    };

    const handleEdit = async (data) => {
        setNewData(data);
        setModalOpened(true);
    };

    if (loading) {
        return <CenteredLoader />;
    }

    return (
        <div>
            <AdminHeader />
            <div className='bg-white mb-14 py-4 px-6'>
                <div className='flex justify-between items-center mt-1'>
                    <Title align="center" mb="lg">Demografi</Title>
                    <Button onClick={() => setModalOpened(true)}>Tambah Data</Button>
                </div>
                <DemografiTable demografi={demografi} onEdit={handleEdit} onDelete={handleDelete} />
                <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Add/Edit Demografi">
                    <NumberInput
                        label="Jumlah Laki-Laki"
                        placeholder="Jumlah Laki-Laki"
                        value={newData.jumlah_laki_laki}
                        onChange={(value) => setNewData({ ...newData, jumlah_laki_laki: value })}
                    />
                    <NumberInput
                        label="Jumlah Perempuan"
                        placeholder="Jumlah Perempuan"
                        value={newData.jumlah_perempuan}
                        onChange={(value) => setNewData({ ...newData, jumlah_perempuan: value })}
                    />
                    <NumberInput
                        label="Jumlah Total"
                        placeholder="Jumlah Total"
                        value={newData.jumlah_total}
                        onChange={(value) => setNewData({ ...newData, jumlah_total: value })}
                    />
                    <NumberInput
                        label="Jumlah KK"
                        placeholder="Jumlah KK"
                        value={newData.jumlah_kk}
                        onChange={(value) => setNewData({ ...newData, jumlah_kk: value })}
                    />
                    <NumberInput
                        label="Kepadatan Penduduk"
                        placeholder="Kepadatan Penduduk"
                        precision={2}
                        value={newData.kepadatan_penduduk}
                        onChange={(value) => setNewData({ ...newData, kepadatan_penduduk: value })}
                    />
                    <Button onClick={handleAddOrUpdate} fullWidth mt="md">{newData.id ? 'Update Data' : 'Add Data'}</Button>
                </Modal>
            </div>
            <AppFooter />
        </div>
    );
}
