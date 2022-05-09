import React from 'react'
import {
    Routes, 
    Route
} from 'react-router-dom';
import {
    HomePage, 
    Book, ListBooks, CreateBook, 
    User, ListUsers,CreateUser,
    Receipt, ListReceipts, CreateReceipt, CatalogueBooks, BorrowBook, ReturnBook
} from '../pages'

const Content = () => {
    return (
        <div className="contents">
            {/* <CreateBook/> */}

            <Routes>
                <Route path='/' element={
                    <HomePage></HomePage>
                }>
                </Route>
                <Route path='/books' element={<Book></Book>}>
                    <Route path='' element={<ListBooks></ListBooks>}></Route>
                    <Route path='create' element={<CreateBook></CreateBook>}></Route>
                </Route>
                <Route path='/users' element={<User></User>}>
                    <Route path='' element={<ListUsers></ListUsers>}></Route>
                    <Route path='create' element={<CreateUser></CreateUser>}></Route>
                </Route>
                <Route path='/receipts' element={<Receipt></Receipt>}>
                    <Route path='' element={<ListReceipts></ListReceipts>}></Route>
                    <Route path='create' element={<CreateReceipt></CreateReceipt>}></Route>
                    <Route path='catalogues' element={<CatalogueBooks></CatalogueBooks>}></Route>
                    <Route path='borrow-page' element={<BorrowBook></BorrowBook>}></Route>
                    <Route path='return-page' element={<ReturnBook></ReturnBook>}></Route>
                </Route>
            </Routes>

        </div>
    )
}

export default Content;