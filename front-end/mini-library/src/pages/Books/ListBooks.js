import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const ListBooks = () => {

    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-12">
                    <div className="p-1 rounded">
                        <h4 className="text-center mb-5">Kelola Data Buku</h4>
                        <div className="text-center">
                            <Link to="/books/create"><button className="btn btn-info text-center">+tambah</button></Link>
                        </div>
                        <div className="row pb-3">
                            <table className="table table-light table-bordered table-hover mt-4">
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Judul</th>
                                    <th>Penulis</th>
                                    <th>Penerbit</th>
                                    <th>Kategori</th>
                                    <th>Kode Rak</th>
                                    <th>Stok</th>
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

export default ListBooks