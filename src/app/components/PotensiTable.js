// components/PotensiTable.js
export default function PotensiTable({ data }) {
    console.log(data);

    return (
        <table class="table-auto border-separate border ">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Jumlah + Satuan</th>
                </tr>
            </thead>
            <tbody>
                {data.map(potensi => (
                    <tr key={potensi.id}>
                        <td>{potensi.nama}</td>
                        <td>{potensi.jumlah} {potensi.satuan}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
