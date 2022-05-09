import React from 'react'
import CardKatalogBuku from './index/CardKatalogBuku';
import CardKelolaBuku from './index/CardKelolaBuku';
import CardPeminjamanBuku from './index/CardPeminjamanBuku';
import CardPengembalianBuku from './index/CardPengembalianBuku';

const IndexServices = () => {
    return (
        <section className="services" id="available-apps">
            <div className="container py-5" >
                <div className="row justify-content-center">
                    <div className="col col-10">
                        <div className="p-1 rounded">
                            <h4 className="text-center mb-5">Pelayanan yang tersedia</h4>
                            <div className="row pb-3">
                                <CardKelolaBuku/>
                                <CardKatalogBuku/>
                                <CardPeminjamanBuku/>
                                <CardPengembalianBuku/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndexServices;