"use client";

import { useState, useEffect } from 'react';
import { Container, Button, TextInput, NumberInput, Title, Modal } from '@mantine/core';
import PotensiTable from '@/app/components/Admin/PotensiTable';
import AdminHeader from '@/app/components/Admin/Header';
import AppFooter from '@/app/components/Footer';
import CenteredLoader from '@/app/components/Loader';

export default function PotensiPage() {
    const [loading, setLoading] = useState(true);
    const [potensi, setPotensi] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);
    const [newData, setNewData] = useState({ nama: '', jumlah: '', satuan: '', judul: '', sub_bab: '', bab: '' });

    const fetchData = async () => {
        const res = await fetch('/api/potensi');
        const data = await res.json();
        console.log(data);
        setPotensi(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
        // console.log(potensi);
    }, []);

    const handleAddOrUpdate = async () => {
        const method = newData.id ? 'PUT' : 'POST';
        await fetch('/api/potensi', {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });
        fetchData();
        setNewData({ nama: '', jumlah: '', satuan: '', judul: '', sub_bab: '', bab: '' });
        setModalOpened(false);
    };

    const handleDelete = async (id) => {
        await fetch(`/api/potensi?id=${id}`, {
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
            <AdminHeader />
            <div className='bg-white mb-14 py-4 px-6'>
                <div className='flex justify-between items-center mt-1'>
                    <Title align="" mb="lg">Daftar Potensi</Title>
                    <Button onClick={() => setModalOpened(true)}>Tambah Data</Button>
                </div>
                {Object.keys(groupedPotensis).map(bab => (
                    <div key={bab}>
                        <Title order={3}>{bab}</Title>
                        {Object.keys(groupedPotensis[bab]).map(sub_bab => (
                            <div key={sub_bab}>
                                <Title order={4}>{sub_bab}</Title>
                                {Object.keys(groupedPotensis[bab][sub_bab]).map(judul => (
                                    <div key={judul} className='mb-4'>
                                        <PotensiTable judul={judul} data={groupedPotensis[bab][sub_bab][judul]} onEdit={handleEdit} onDelete={handleDelete} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
                <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Add/Edit Potensi">
                    <TextInput
                        label="Nama"
                        placeholder="Nama"
                        value={newData.nama}
                        onChange={(e) => setNewData({ ...newData, nama: e.currentTarget.value })}
                    />
                    <TextInput
                        label="Jumlah"
                        placeholder="Jumlah"
                        value={newData.jumlah}
                        onChange={(e) => setNewData({ ...newData, jumlah: e.currentTarget.value })}
                    />
                    <TextInput
                        label="Satuan"
                        placeholder="Satuan"
                        value={newData.satuan}
                        onChange={(e) => setNewData({ ...newData, satuan: e.currentTarget.value })}
                    />
                    <TextInput
                        label="Judul"
                        placeholder="Judul"
                        value={newData.judul}
                        onChange={(e) => setNewData({ ...newData, judul: e.currentTarget.value })}
                    />
                    <TextInput
                        label="Sub Bab"
                        placeholder="Sub Bab"
                        value={newData.sub_bab}
                        onChange={(e) => setNewData({ ...newData, sub_bab: e.currentTarget.value })}
                    />
                    <TextInput
                        label="Bab"
                        placeholder="Bab"
                        value={newData.bab}
                        onChange={(e) => setNewData({ ...newData, bab: e.currentTarget.value })}
                    />
                    <Button onClick={handleAddOrUpdate} fullWidth mt="md">{newData.id ? 'Update Data' : 'Add Data'}</Button>
                </Modal>
            </div>
            <AppFooter />
        </div>
    );
}