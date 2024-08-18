// components/Admin/PotensiTable.js
import { Table, Button } from '@mantine/core';

export default function PotensiTable({ data = [], onEdit, onDelete }) {

    return (
        <table class="table-auto border-separate border w-full">
            <thead>
                <tr>
                    <th class="w-1/3 border">Nama</th>
                    <th class="w-1/3 border">Jumlah + Satuan</th>
                    <th class="w-1/3 border">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map(potensi => (
                    <tr key={potensi.id}>
                        <td class="w-1/3 border">{potensi.nama}</td>
                        <td class="w-1/3 border">{potensi.jumlah} {potensi.satuan}</td>
                        <td class="w-1/3 border text-center">
                            <Button onClick={() => onEdit(potensi)}>Edit</Button>
                            <Button onClick={() => onDelete(potensi.id)} color="red">Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
