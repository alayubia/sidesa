// components/Admin/PotensiTable.js
import { Table, Button } from '@mantine/core';

export default function PotensiTable({ data, onEdit, onDelete }) {
    // console.log(data);

    return (
        <table class="table-auto border-separate border ">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Jumlah + Satuan</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map(potensi => (
                    <tr key={potensi.id}>
                        <td>{potensi.nama}</td>
                        <td>{potensi.jumlah} {potensi.satuan}</td>
                        <td>
                            <Button onClick={() => onEdit(potensi)}>Edit</Button>
                            <Button onClick={() => onDelete(potensi.id)} color="red">Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
