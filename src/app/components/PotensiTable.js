// components/PotensiTable.js
export default function PotensiTable({ data }) {
    return (
        <table class="table-auto border-separate border w-full">
            <thead>
                <tr>
                    <th class="w-1/2 border">Nama</th>
                    <th class="w-1/2 border">Jumlah + Satuan</th>
                </tr>
            </thead>
            <tbody>
                {data.map(potensi => (
                    <tr key={potensi.id}>
                        <td class="w-1/2 border">{potensi.nama}</td>
                        <td class="w-1/2 border">{potensi.jumlah} {potensi.satuan}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
