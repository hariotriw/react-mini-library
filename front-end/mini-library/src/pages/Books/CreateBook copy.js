import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const CreateBook = () => {

    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-12">
                    <div className="p-1 rounded">
                        <h4 className="text-center mb-5">Tambah Data Buku</h4>
                        <div className="row pb-3 justify-content-center">
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <h5>Buku baru</h5>
                                    </div>
                                    <form method="post" action="/books/create">
                                        <div className="card-body py-5">
                                            <div className="mb-3 row">
                                                <label for="title" className="col-sm-3 col-form-label">Judul</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" name="title" required/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="alt_title" className="col-sm-3 col-form-label">Judul Alternatif</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" name="alt_title" required/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="author" className="col-sm-3 col-form-label">Penulis</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" name="author" required/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="publisher" className="col-sm-3 col-form-label">Penerbit</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" name="publisher"/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="kategori" className="col-sm-3 col-form-label">Kategori</label>
                                                <div className="col-sm-9">
                                                    <select name="category" className="form-select form-select-sm" aria-label=".form-select-sm example" required>
                                                        <option value="" selected disabled>Masukkan kategori buku...</option>
                                                        <option value="1">Ensiklopedia</option>
                                                        <option value="2">Pelajaran</option>
                                                        <option value="3">Life Story / Biografi</option>
                                                        <option value="4">Kesehatan</option>
                                                        <option value="5">Keuangan</option>
                                                        <option value="6">Makanan Minuman</option>
                                                        <option value="7">Novel</option>
                                                        <option value="8">Komik</option>
                                                        <option value="9">Lainnya..</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="bookshelf_code" className="col-sm-3 col-form-label">Kode Rak Buku</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" name="bookshelf_code" required/>
                                                </div>
                                            </div>
                                            <div className="mb-1 row">
                                                <label for="stock" className="col-sm-3 col-form-label">Stock</label>
                                                <div className="col-sm-9">
                                                    <input type="number" className="form-control" name="stock" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-end">
                                            <button type="submit" className="btn btn-primary">submit</button>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateBook