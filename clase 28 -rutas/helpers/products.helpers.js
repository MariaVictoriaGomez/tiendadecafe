import Product from '../models/Product.js'

export default class ProductsHelpers{

    createProduct(newData){
const {id,name,stock} = newData
const product= new Product(id,name,stock)
return product
    }
}