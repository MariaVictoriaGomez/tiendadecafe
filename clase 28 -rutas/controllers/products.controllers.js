import productsMock from '../db/products.mock.js'
import ProductsHelpers from '../helpers/products.helpers.js'
export default class ProductsControllers {

    constructor() {
        this.products = productsMock
        this.helpers = new ProductsHelpers ()
    }

    getProducts = (req, res) => {

        res.json(this.products)

    }

    getPrductsbyId= (req, res) => {
        const {id}= req.query
        const user = this.products.find(product => product.id === parseInt(id))
        res.json(product)

    }
    

    addProducts = (req, res) => {
        const newProduct = this.helpers.createProduct(req.body)
        this.products.push(newProduct)
        res.json(newProduct)


    }
    
    modifyProduct = (req, res) =>{
        let modifiedProduct = null
        this.products= this.products.map(product => {
            if(product.id === parseInt(req.body.id)){
                product = this.helpers.createProduct(req.body)
                modifiedProduct = product
            }
            return product
        })
res.json(modifiedProduct)
    }

    deleteProduct = (req,res)=> {
this.products = this.products.filter(product => product.id!== parseInt(req.params.id))
res.json(this.products)

    }
}