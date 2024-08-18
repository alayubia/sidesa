import { MantineReactTable } from 'mantine-react-table';

export default function DaftarAgamaTable({ agama }) {
  const columns = [
    { accessorKey: 'id', header: 'ID', size: '10', enableColumnFilter: false,},
    { accessorKey: 'tanggal', header: 'Tanggal', size: '20', Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString() },
    { accessorKey: 'agama', header: 'Agama' },
    { accessorKey: 'laki_laki', header: 'Laki-Laki', size: '20', mantineTableBodyCellProps: {
        align: 'center',
      }, },
    { accessorKey: 'perempuan', header: 'Perempuan', size: '20', mantineTableBodyCellProps: {
        align: 'center',
      }, },
    { accessorKey: 'jumlah', header: 'Jumlah', size: '20', mantineTableBodyCellProps: {
        align: 'center',
      }, },
  ];

  return (
    <div className='mb-4'>
      <MantineReactTable columns={columns} data={agama} enableColumnFilters={true}
        initialState={{ showColumnFilters: true, sorting: [
            {
              id: 'id',
              asc: true,
            },
          ], }} />
    </div>
  );
}
