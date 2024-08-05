// components/MembersTable.js
import { useMemo } from 'react';
import { Group, ActionIcon } from '@mantine/core';
import {
    MantineReactTable,
} from 'mantine-react-table';
import { IconEdit, IconTrash } from '@tabler/icons-react';

export default function AdminMembersTable({ title, members, onEdit, onDelete }) {
    const columns = useMemo(
        () => [
            { accessorKey: 'id', header: 'No', size: '10', enableColumnFilter: false, },
            { accessorKey: 'name', header: 'Nama' },
            { accessorKey: 'position', header: 'Jabatan', size: '100' },
            { accessorKey: 'address', header: 'Alamat' },
            { accessorKey: 'gender', header: 'Jenis Kelamin' },
            {
                accessor: 'actions',
                header: 'Actions',
                Cell: ({ row }) => (
                  <Group spacing="sm">
                    <ActionIcon onClick={() => onEdit(row.original)}><IconEdit size={16} /></ActionIcon>
                    <ActionIcon onClick={() => onDelete(row.original.id)}><IconTrash size={16} /></ActionIcon>
                  </Group>
                ),
              },
        ], [],);

    return (
        <div className='my-4'>
            <MantineReactTable columns={columns} data={members} enableColumnFilters={true} initialState={{ showColumnFilters: true }}/>
        </div>
    );
}
