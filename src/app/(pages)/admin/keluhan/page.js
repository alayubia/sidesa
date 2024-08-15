"use client";

import { useState, useEffect } from 'react';
import { Grid, Card, Image, Text, Loader, Title, Space } from '@mantine/core';
import { MantineReactTable } from 'mantine-react-table';
import AdminHeader from '@/app/components/Admin/Header';
import AppFooter from '@/app/components/Footer';

export default function FormSubmissionsList() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSubmissions() {
            try {
                const response = await fetch('/api/keluhan');
                if (!response.ok) {
                    throw new Error('Failed to fetch submissions');
                }
                const data = await response.json();
                setSubmissions(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchSubmissions();
    }, []);

    const columns = [
        {
            accessorKey: 'nama',
            header: 'Nama',
        },
        {
            accessorKey: 'keluhan',
            header: 'Keluhan',
        },
        {
            accessorKey: 'url_gambar',
            header: 'Gambar',
            Cell: ({ cell }) => (
                <img src={cell.getValue()} alt="Gambar Keluhan" style={{ width: '100px', height: 'auto' }} />
            ),
            enableColumnFilter: false,
        },
    ];

    return (
        <div>
            <AdminHeader />
            <div className='bg-white mb-14 px-6'>
                <div className='flex justify-center items-center mt-1'>
                    <Title align="center" mb="xl">Daftar Keluhan Pengguna</Title>
                </div>
                <MantineReactTable
                    columns={columns}
                    data={submissions}
                    state={{ isLoading: loading }}
                    enableRowNumbers
                />
            </div>
            <AppFooter />
        </div>
    );
}
