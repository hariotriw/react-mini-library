import React from 'react';

const CreateUsers = () => {

    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-12">
                    <div className="p-1 rounded">
                        <h4 className="text-center mb-5">Tambah Data Pelanggan</h4>
                        <div className="row pb-3 justify-content-center">
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <h5>Pelanggan baru</h5>
                                    </div>
                                    <form method="post" action="/users/create">
                                        <div className="card-body pt-5 pb-2">
                                            <div className="mb-3 row">
                                                <label for="fullname" className="col-sm-3 col-form-label">Nama</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" name="fullname" required/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="id_card" className="col-sm-3 col-form-label">Kartu Id</label>
                                                <div className="col-sm-9">
                                                    <input type="number" className="form-control" name="id_card" required/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="type_card" className="col-sm-3 col-form-label">Tipe Kartu</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" name="type_card" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer bg-white text-end">
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

export default CreateUsers