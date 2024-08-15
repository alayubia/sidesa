"use client";

import { useState, useEffect } from 'react';
import { Container, Button, TextInput, NumberInput, Title, Modal } from '@mantine/core';
import MataPencaharianPokokTable from '@/app/components/Admin/MataPencaharianTable';
import AdminHeader from '@/app/components/Admin/Header';
import AppFooter from '@/app/components/Footer';
import CenteredLoader from '@/app/components/Loader';

export default function MataPencaharianPokokPage() {
    const [loading, setLoading] = useState(true);
    const [mataPencaharian, setMataPencaharian] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);
    const [newData, setNewData] = useState({ jenis_pekerjaan: '', laki_laki: '', perempuan: '', jumlah: '' });

    const fetchData = async () => {
        const res = await fetch('/api/mata_pencaharian_pokok');
        const data = await res.json();
        setMataPencaharian(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddOrUpdate = async () => {
        const method = newData.id ? 'PUT' : 'POST';
        await fetch('/api/mata_pencaharian_pokok', {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });
        fetchData();
        setNewData({ jenis_pekerjaan: '', laki_laki: '', perempuan: '', jumlah: '' });
        setModalOpened(false);
    };

    const handleDelete = async (id) => {
        await fetch(`/api/mata_pencaharian_pokok`, {
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
                    <Title align="center" mb="lg">Mata Pencaharian Pokok</Title>
                    <Button onClick={() => setModalOpened(true)}>Tambah Data</Button>
                </div>
                <MataPencaharianPokokTable mataPencaharian={mataPencaharian} onEdit={handleEdit} onDelete={handleDelete} />
                <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Add/Edit Mata Pencaharian Pokok">
                    <TextInput
                        label="Jenis Pekerjaan"
                        placeholder="Jenis Pekerjaan"
                        value={newData.jenis_pekerjaan}
                        onChange={(e) => setNewData({ ...newData, jenis_pekerjaan: e.currentTarget.value })}
                    />
                    <NumberInput
                        label="Laki-Laki"
                        placeholder="Laki-Laki"
                        value={newData.laki_laki}
                        onChange={(value) => setNewData({ ...newData, laki_laki: value })}
                    />
                    <NumberInput
                        label="Perempuan"
                        placeholder="Perempuan"
                        value={newData.perempuan}
                        onChange={(value) => setNewData({ ...newData, perempuan: value })}
                    />
                    <NumberInput
                        label="Jumlah"
                        placeholder="Jumlah"
                        value={newData.jumlah}
                        onChange={(value) => setNewData({ ...newData, jumlah: value })}
                    />
                    <Button onClick={handleAddOrUpdate} fullWidth mt="md">{newData.id ? 'Update Data' : 'Add Data'}</Button>
                </Modal>
            </div>
            <AppFooter />
        </div>
    );
}
