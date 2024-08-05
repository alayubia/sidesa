// src/components/FamilyTable.js
import { MantineReactTable } from 'mantine-react-table';

export default function FamilyTable({ families, onEdit, onDelete }) {
  const columns = [
    { accessorKey: 'id', header: 'ID', size: '10', enableColumnFilter: false, },
    { accessorKey: 'noKK', header: 'No KK' },
    { accessorKey: 'namaKepalaKeluarga', header: 'Nama Kepala Keluarga' },
    { accessorKey: 'nik', 
      header: 'NIK', 
      Cell: ({ cell }) => cell.getValue().join(', '),
      filterFn: (row, id, filterValue) => {
        return row.getValue(id).some(nik => 
          nik.toLowerCase().includes(filterValue.toLowerCase())
        );
      } },
    { accessorKey: 'linkFolder', header: 'Link Folder', enableColumnFilter: false, Cell: ({ cell }) => <a href={cell.getValue()} target="_blank" rel="noopener noreferrer">Link</a> },
  ];

  return (
    <div className='my-4'>
      <MantineReactTable columns={columns} data={families} enableColumnFilters={true}
        initialState={{ showColumnFilters: true }}/>
    </div>
  );
}
