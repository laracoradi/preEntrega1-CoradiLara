class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }

    get_datos() {
        console.log("<------------------------>");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }

    tiene_stock() {
        return this.stock > 0;
    }

    actualizar_stock(cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log("Compra realizada: " + cantidad + " unidades de " + this.nombre);
        } else {
            console.log("Producto sin stock suficiente");
        }
    }
}

let lista_productos = [];

for (let i = 0; i < 3; i++) {
    let nombre = prompt("Ingrese el nombre del producto");
    let precio = prompt("Ingrese el precio del producto");
    let stock = prompt("Ingrese el stock del producto");

    let producto = new Producto(nombre, precio, stock);
    lista_productos.push(producto);
}

for (let producto of lista_productos) {
    producto.get_datos();
}

let compra_usuario = prompt("Ingrese el nombre del producto que desea comprar");

let producto_comprado = lista_productos.find(producto => producto.nombre === compra_usuario);

if (producto_comprado) {
    if (producto_comprado.tiene_stock()) {
        let unidades = parseInt(prompt("¿Cuantas unidades quiere?"));
        producto_comprado.actualizar_stock(unidades);
    } else {
        console.log("Producto sin stock");
    }
} else {
    console.log("Producto no encontrado");
}

for (let producto of lista_productos) {
    producto.get_datos();
}