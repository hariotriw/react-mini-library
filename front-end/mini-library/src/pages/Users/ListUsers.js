import React from 'react';
import { Link } from 'react-router-dom';

const ListUsers = () => {

    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-10">
                    <div className="p-1 rounded">
                        <h4 className="text-center mb-5">Kelola Data Pelanggan</h4>
                        <div className="text-center">
                            <Link to="/users/create"><button className="btn btn-info text-center">tambah</button></Link>
                        </div>
                        <div className="row pb-3">
                            <table className="table table-light table-bordered table-hover mt-4">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Kartu Id</th>
                                        <th>Tipe Kartu</th>
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

export default ListUsers