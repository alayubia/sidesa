// components/Admin/PotensiTable.js
import { Table, Button } from '@mantine/core';

export default function PotensiTable({ judul, data = [], onEdit, onDelete }) {

    return (
        <table class="table-auto border w-full">
            <thead class="bg-slate-400">
                <tr>
                    <th className="border border-black text-left px-2" colSpan="3">{judul}</th>
                </tr>
                <tr>
                    <th class="border border-black">Nama</th>
                    <th class="border border-black">Jumlah + Satuan</th>
                    <th class="border border-black">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map(potensi => (
                    <tr key={potensi.id}>
                        <td class="w-2/5 border border-black px-2">{potensi.nama}</td>
                        <td class="w-2/5 border border-black px-2">{potensi.jumlah} {potensi.satuan}</td>
                        <td class="w-1/5 border border-black text-center">
                            <Button onClick={() => onEdit(potensi)}>Edit</Button>
                            <Button className='ms-1' onClick={() => onDelete(potensi.id)} color="red">Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
