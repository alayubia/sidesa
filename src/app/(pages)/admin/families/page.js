"use client";

import { useState, useEffect } from 'react';
import { Container, Button, TextInput, Textarea, Title, Modal } from '@mantine/core';
import AdminFamilyTable from '@/app/components/Admin/FamilyTable';
import AdminHeader from '@/app/components/Admin/Header';
import AppFooter from '@/app/components/Footer';
import CenteredLoader from '@/app/components/Loader';

export default function FamiliesPage() {
    const [loading, setLoading] = useState(true);
    const [families, setFamilies] = useState([]);
    const [familyModalOpened, setFamilyModalOpened] = useState(false);
    const [newFamily, setNewFamily] = useState({ noKK: '', namaKepalaKeluarga: '', nik: '', linkFolder: '' });

    const fetchFamilies = async () => {
        const res = await fetch('/api/families');
        const data = await res.json();
        setFamilies(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchFamilies();
    }, []);

    const handleAddFamily = async () => {
        const method = newFamily.id ? 'PUT' : 'POST';
        await fetch('/api/families', {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...newFamily,
                nik: newFamily.nik.split('\n').map(nik => nik.trim()),
            }),
        });
        fetchFamilies();
        setNewFamily({ noKK: '', namaKepalaKeluarga: '', nik: '', linkFolder: '' }); // Reset newFamily
        setFamilyModalOpened(false);
    };

    const handleDeleteFamily = async (noKK) => {
        await fetch(`/api/families/${noKK}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ noKK }),
        });
        fetchFamilies();
    };

    const handleEditFamily = async (family) => {
        setNewFamily({
            ...family,
            nik: family.nik.join('\n')
        });
        setFamilyModalOpened(true);
    };

    if (loading) {
        return <CenteredLoader />;
    }

    return (
        <div>
            <AdminHeader />
            <div className='bg-white mb-14 px-6'>
                <div className='flex justify-between items-center mt-1'>
                    <Title align="center" mb="lg">Arsip Data</Title>
                    <Button onClick={() => setFamilyModalOpened(true)}>Tambah Data</Button>
                </div>
                <AdminFamilyTable families={families} onEdit={handleEditFamily} onDelete={handleDeleteFamily} />
                <Modal opened={familyModalOpened} onClose={() => setFamilyModalOpened(false)} title="Add/Edit Family">
                    <TextInput
                        label="No KK"
                        placeholder="No KK"
                        value={newFamily.noKK}
                        onChange={(e) => setNewFamily({ ...newFamily, noKK: e.currentTarget.value })}
                    />
                    <TextInput
                        label="Nama Kepala Keluarga"
                        placeholder="Nama Kepala Keluarga"
                        value={newFamily.namaKepalaKeluarga}
                        onChange={(e) => setNewFamily({ ...newFamily, namaKepalaKeluarga: e.currentTarget.value })}
                    />
                    <Textarea
                        label="NIK-NIK dari KK terkait"
                        placeholder="Masukkan NIK satu per baris"
                        value={newFamily.nik}
                        onChange={(e) => setNewFamily({ ...newFamily, nik: e.currentTarget.value })}
                    />
                    <TextInput
                        label="Link Folder"
                        placeholder="Link Folder"
                        value={newFamily.linkFolder}
                        onChange={(e) => setNewFamily({ ...newFamily, linkFolder: e.currentTarget.value })}
                    />
                    <Button onClick={handleAddFamily} fullWidth mt="md">{newFamily.id ? 'Update Family' : 'Add Family'}</Button>
                </Modal>
            </div>
            <AppFooter />
        </div>
    );
}
