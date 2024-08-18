// components/PotensiTable.js
export default function PotensiTable({ judul, data = [] }) {
    return (
        <table class="table-auto border w-full">
            <thead class="bg-slate-400">
                <tr>
                    <th className="border border-black text-left px-2" colSpan="2">{judul}</th>
                </tr>
                <tr>
                    <th class="border border-black">Nama</th>
                    <th class="border border-black">Jumlah + Satuan</th>
                </tr>
            </thead>
            <tbody>
                {data.map(potensi => (
                    <tr key={potensi.id}>
                        <td class="w-1/2 border border-black px-2">{potensi.nama}</td>
                        <td class="w-1/2 border border-black px-2">{potensi.jumlah} {potensi.satuan}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
