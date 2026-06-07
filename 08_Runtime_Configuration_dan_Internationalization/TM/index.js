import 'dotenv/config';

async function run() {

    try {

        const response = await fetch(process.env.BASE_API);
        const data = await response.json();

        const nilaiUji = [25000, 50000, 100000];

        const tanggal = new Intl.DateTimeFormat('id-ID', {
            dateStyle: 'full'
        }).format(new Date());

        for (let i = 0; i < nilaiUji.length; i++) {

            const rupiah = nilaiUji[i];

            const cnh = rupiah * data.idr.cnh;
            const eur = rupiah * data.idr.eur;

            const formatRupiah = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
            });

            console.log(
                `Kurs ${formatRupiah.format(rupiah)} pada ${tanggal} adalah CNH ${cnh.toFixed(2)} dan EUR ${eur.toFixed(2)}`
            );
        }

    } catch (err) {

        console.log('Terjadi error:', err.message);

    }

}

run();