const {Router} = require('express')
const receiptRoutes = Router()
const {ReceiptController} = require('../controllers')

// ----- Manajement Receipt -----
receiptRoutes.get("/", ReceiptController.index)
receiptRoutes.post("/create", ReceiptController.store)
receiptRoutes.post("/update", ReceiptController.update)
receiptRoutes.get("/delete/:id", ReceiptController.destroy)

// ----- Library apps -----
receiptRoutes.get("/catalogues", ReceiptController.catalogPage)
receiptRoutes.post("/borrow/new", ReceiptController.borrowBook)
receiptRoutes.post("/return/new", ReceiptController.returnBook)

module.exports = receiptRoutes;
