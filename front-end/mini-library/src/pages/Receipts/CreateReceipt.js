import React from 'react';

const CreateReceipt = () => {

    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-12">
                    <div className="p-1 rounded">
                        <h4 className="text-center mb-5">Tambah Data Peminjaman</h4>
                        <div className="row pb-3 justify-content-center">
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <h5>Peminjaman baru</h5>
                                    </div>
                                    <form method="post" action="/receipts/create">
                                        <div className="card-body py-5">
                                            <div className="mb-3 row">
                                                <label for="BookId" className="col-sm-3 col-form-label">Judul Buku</label>
                                                <div className="col-sm-9">
                                                    <select name="BookId" className="form-select form-select-sm" aria-label=".form-select-sm example" required>
                                                        <option value="" selected disabled>Masukkan judul buku...</option>
                                                      </select>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="UserId" className="col-sm-3 col-form-label">Peminjam</label>
                                                <div className="col-sm-9">
                                                    <select name="UserId" className="form-select form-select-sm" aria-label=".form-select-sm example" required>
                                                        <option value="" selected disabled>Masukkan nama pelanggan...</option>
                                                        
                                                      </select>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="staff_in_charge" className="col-sm-3 col-form-label">Staff yang bertugas</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" name="staff_in_charge"/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="start_borrowing" className="col-sm-3 col-form-label">Tanggal Peminjaman</label>
                                                <div className="col-sm-9">
                                                    <input type="date" className="form-control" name="start_borrowing"/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="end_borrowing" className="col-sm-3 col-form-label">Tanggal Pengembalian</label>
                                                <div className="col-sm-9">
                                                    <input type="date" className="form-control" name="end_borrowing"/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="status" className="col-sm-3 col-form-label">Status</label>
                                                <div className="col-sm-9">
                                                    <select name="status" className="form-select form-select-sm" aria-label=".form-select-sm example" required>
                                                        <option value="" selected disabled>Masukkan status...</option>
                                                        <option value="dipinjam" >Peminjaman buku</option>
                                                        <option value="dikembalikan" >Pengembalian buku</option>
                                                    </select>
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

export default CreateReceipt