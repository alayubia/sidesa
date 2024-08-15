// src/components/FamilyTable.js
import { MantineReactTable } from 'mantine-react-table';
import { Group, ActionIcon, Button } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';

export default function AdminFamilyTable({ families, onEdit, onDelete }) {
  const columns = [
    { accessorKey: 'id', header: 'ID', size: '10', enableColumnFilter: false, },
    {
      accessorKey: 'noKK', header: 'No KK', size: '20'
    },
    { accessorKey: 'namaKepalaKeluarga', header: 'Nama Kepala Keluarga' },
    {
      accessorKey: 'nik',
      header: 'NIK',
      Cell: ({ cell }) => cell.getValue().join(', '),
      filterFn: (row, id, filterValue) => {
        return row.getValue(id).some(nik =>
          nik.toLowerCase().includes(filterValue.toLowerCase())
        );
      }
    },
    { accessorKey: 'linkFolder', header: 'Link Folder', enableColumnFilter: false, Cell: ({ cell }) => <a href={cell.getValue()} target="_blank" rel="noopener noreferrer"><Button>Link</Button></a> },
    {
      accessor: 'actions',
      header: 'Actions',
      Cell: ({ row }) => (
        <Group spacing="sm">
          <ActionIcon onClick={() => onEdit(row.original)}><IconEdit size={16} /></ActionIcon>
          <ActionIcon onClick={() => onDelete(row.original.noKK)}><IconTrash size={16} /></ActionIcon>
        </Group>
      ),
    },
  ];

  return (
    <div className='mb-4'>
      <MantineReactTable columns={columns} data={families} enableColumnFilters={true}
        initialState={{
          showColumnFilters: true, sorting: [
            {
              id: 'id',
              asc: true,
            },
          ],
        }} />
    </div>
  );
}
