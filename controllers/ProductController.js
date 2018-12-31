const Product = require("./../models/Product")

class ProductController {

    static findAll(req, res) {
        Product.find()
        .then(data => {
            res.send( data )
        })
        .catch(err => {
            res.send( err )
        })
    }

    static findOne(req, res) {
        Product.find( { 'name' : { '$regex' : req.body.keyword, '$options' : 'i' } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send( err )
        })
    }

    static insert(req, res) {

        let newData = {
            name:req.body.name,
            price:req.body.price,
            stock:req.body.stock,
            description:req.body.description,
        }

        Product.create( newData )
        .then(data => {
            res.send( data )
        })
        .catch(err => {
            res.send( err )
        })
    }

    static update(req, res) {
        // masih perlu dipertanyakan salah apa benar
        let condition = {
            id:req.body.id
        }
        let name = { name: req.body.name }
        let price = { price: req.body.price }
        let description = { description: req.body.price }
        let stock = { stock: req.body.stock }

        Product.updateOne(id,name,price,description,stock)
        .then(data => {
            res.rend(data)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete(req, res) {

        let productId = req.params.id

        Product.deleteOne({ _id: productId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })

    }

}

module.exports = ProductController