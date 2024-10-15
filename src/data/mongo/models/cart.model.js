import { Schema, Types, model } from "mongoose";

// cada producto que el usuario agrega al carrito
// genera un documento cart
// con los datos del producto, los datos del usuario, la cantidad que compró, el precio y el estado del producto (reservado, pagado, enviado)
const collection = "carts"
const schema = new Schema({
    // product_id: { type: String, required: true }
    // product_id parece un string pero es un tipo especial: OBJECTID
    // la forma de referenciar un OBJECTID con una colección es pasando la propiedad ref
    // la propiedad ref SIEMPRE hace referencia (se relaciona) con el nombre de la coleccion!!!
    product_id: { type: Types.ObjectId, ref: "products", required: true },
    user_id: { type: Types.ObjectId, ref: "users", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    state: { type: String, default: "reserved", enum: ["reserved", "paid", "delivered"] }
})

// solo carts necesita poblar/transformar el objectid en datos
//lo haremos con el middleware de mongoose PRE
schema.pre(
    //metodo a popular
    "find",
    //callback (TRADICIONAL!!! no puede ser flecha) con las condiciones de populacion
    function () {
        this.populate("user_id", "email -_id")
        this.populate("product_id", "title photo category")
    }
)
schema.pre(
    "findOne",
    function () {
        this.populate("user_id", "email -_id")
        this.populate("product_id", "title photo category")
    }
)
schema.pre(
    "findOneAndUpdate",
    function () {
        this.populate("user_id", "email -_id")
        this.populate("product_id", "title photo category")
    }
)
schema.pre(
    "findOneAndDelete",
    function () {
        this.populate("user_id", "email -_id")
        this.populate("product_id", "title photo category")
    }
)

const Cart = model(collection, schema)
export default Cart