import React from 'react'
import { Link } from 'react-router-dom'

const CardPengembalianBuku = () => {
    return (
        <div className="col-3">
            <div className="card ">
                <div className="card-header bg-cstgainsboro text-center">
                    <b>Pengembalian Buku</b>
                </div>
                <div className="card-body same-line bg-cstmincream py-3 fs-6">
                    <p className="text-justify">Halaman pengembalian buku untuk petugas perpustakaan yang berjaga dan menerima permintaan pelanggan yang ingin mengembalikan buku.</p>
                </div>
                <div className="card-footer p-0 text-end">
                    <Link className="no-link" to="/receipts/return-page">
                        <button className="btn bg-limegreen w-100">
                            <b>klik disini</b>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardPengembalianBuku