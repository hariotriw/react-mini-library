import React from 'react';
import { Link } from 'react-router-dom';

const ReturnBook = () => {

    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-12">
                    <div className="p-1 rounded">
                        <h4 className="text-center mb-5">Pengembalian Buku</h4>
                        <div className="row pb-3 justify-content-center">
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <h5>Pengembalian</h5>
                                    </div>
                                    <form method="post" action="/receipts/return/new">
                                        <div className="card-body py-5">
                                            <div className="mb-3 row">
                                                <label for="BookId" className="col-sm-3 col-form-label">Buku yang dikembalikan</label>
                                                <div className="col-sm-9">
                                                    <select name="BookId" className="form-select form-select-sm" aria-label=".form-select-sm example" required>
                                                        <option value="" selected disabled>Masukkan judul buku...</option>
                                                      </select>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="UserId" className="col-sm-3 col-form-label">Pelanggan yang mengembalikan</label>
                                                <div className="col-sm-9">
                                                    <select name="UserId" className="form-select form-select-sm" aria-label=".form-select-sm example" required>
                                                        <option value="" selected disabled>Masukkan nama pelanggan...</option>
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

export default ReturnBook