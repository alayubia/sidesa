// components/MembersTable.js
import { useMemo } from 'react';
import {
    MantineReactTable,
} from 'mantine-react-table';

export default function MembersTable({ title, members }) {
    const columns = useMemo(
        () => [
            { accessorKey: 'id', header: 'No', size: '10' },
            { accessorKey: 'name', header: 'Nama' },
            { accessorKey: 'position', header: 'Jabatan', size: '100' },
            { accessorKey: 'address', header: 'Alamat' },
            { accessorKey: 'gender', header: 'Jenis Kelamin' }
        ], [],);

    return (
        <div className='my-4'>
            <MantineReactTable columns={columns} data={members} enableColumnActions={false}
                enableColumnFilters={false}
                enablePagination={false}
                enableSorting={false} enableBottomToolbar={false}/>
        </div>
    );
}
