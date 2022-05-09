import React from 'react';
import { Link } from 'react-router-dom';

const ListReceipts = () => {

    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-12">
                    <div className="p-1 rounded">
                        <h4 className="text-center mb-4">Kelola Data Buku</h4>
                        <div className="text-center mb-3">
                            <Link to="/receipts/borrow-page"><button className="btn btn-info text-center"> pinjam</button></Link>
                            <Link to="/receipts/create"><button className="btn btn-info text-center">tambah</button></Link>
                            <Link to="/receipts/return-page"><button className="btn btn-info text-center">kembalikan </button></Link>
                        </div>
                        <div className="row pb-3">
                            <table className="table table-light table-bordered table-hover mt-4">
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Judul Buku</th>
                                    <th>Peminjam</th>
                                    <th>Staff yang bertugas</th>
                                    <th>Mulai Meminjam</th>
                                    <th>Selesai Meminjam</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                    
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListReceipts