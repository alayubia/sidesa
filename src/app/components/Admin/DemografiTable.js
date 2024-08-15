import { MantineReactTable } from 'mantine-react-table';
import { Group, ActionIcon } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';

export default function DemografiTable({ demografi, onEdit, onDelete }) {
  const columns = [
    { accessorKey: 'id', header: 'ID', size: '10', enableColumnFilter: false, },
    { accessorKey: 'tanggal', header: 'Tanggal', size: '20', Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString() },
    { accessorKey: 'jumlah_laki_laki', header: 'Jumlah Laki-Laki', size: '20', mantineTableBodyCellProps: {
        align: 'center',
      }, },
    { accessorKey: 'jumlah_perempuan', header: 'Jumlah Perempuan', size: '20', mantineTableBodyCellProps: {
        align: 'center',
      }, },
    { accessorKey: 'jumlah_total', header: 'Jumlah Total', size: '20', mantineTableBodyCellProps: {
        align: 'center',
      }, },
    { accessorKey: 'jumlah_kk', header: 'Jumlah KK', size: '20', mantineTableBodyCellProps: {
        align: 'center',
      }, },
    { accessorKey: 'kepadatan_penduduk', header: 'Kepadatan Penduduk', size: '20', mantineTableBodyCellProps: {
        align: 'center',
      }, },
    {
      accessor: 'actions',
      header: 'Actions',
      size: '20',
      Cell: ({ row }) => (
        <Group spacing="sm">
          <ActionIcon onClick={() => onEdit(row.original)}><IconEdit size={16} /></ActionIcon>
          <ActionIcon onClick={() => onDelete(row.original.id)}><IconTrash size={16} /></ActionIcon>
        </Group>
      ),
    },
  ];

  return (
    <div className='mb-4'>
      <MantineReactTable columns={columns} data={demografi} enableColumnFilters={true}
        initialState={{ showColumnFilters: true, sorting: [
            {
              id: 'id',
              asc: true,
            },
          ], }}/>
    </div>
  );
}
