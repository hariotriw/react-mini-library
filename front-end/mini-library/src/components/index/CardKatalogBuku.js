import React from 'react'
import { Link } from 'react-router-dom'

const CardKatalogBuku = () => {
    return (
    <div className="col-3">
        <div className="card ">
            <div className="card-header bg-cstgainsboro text-center">
                <b>Katalog Buku</b>
            </div>
            <div className="card-body same-line bg-cstmincream py-3 fs-6">
                <p className="text-justify">Katalog buku berisi daftar buku yang terdaftar dalam perpustakaan ini. Pelanggan juga dapat melihat stok dan tata letak buku tersebut di dalam perpustakaan ini.</p>
            </div>
            <div className="card-footer p-0 text-end">
                <Link className="no-link" to="/receipts/catalogues/">
                    <button className="btn bg-limegreen w-100">
                        <b>klik disini</b>
                    </button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default CardKatalogBuku