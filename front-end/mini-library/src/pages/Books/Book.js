import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import {CreateBook, IndexBook} from '../../components/books';
// import ListBooks from './ListBooks';
import { Outlet } from 'react-router-dom';

const Book = () => {

    return (
        <div className="content" id="available-apps" style={{ minHeight: "800px" }}>
            <div className="container py-5" >
                {/* <ListBooks/> */}
                <Outlet></Outlet>
            </div>
        </div>

    )
}

export default Book