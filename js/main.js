
// estos dos son los principales objetos que voy a tener


class Cliente {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    };
};

class Productos {
    constructor(nombre, precio, categoria, especificaciones) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.especificaciones = especificaciones;
    };
};


// para poder comprar en mi aplicacion web la edad del usuario tiene que ser mayor a 21

const edad = parseFloat(prompt("Ingresar edad para saber si puede adquirir los productos"));


if (edad > 0 && edad < 21) {
    alert("No puede comprar en esta pagina");
} else if (edad > 17) {
    alert("Puede comprar en la pagina una vez que la identidad sea verificada");
} else {
    alert("Vuelve a la pagina cuando cumplas 21 :)")
}

// Calcular descuento ( va a ver descuento del 20 % cuando compren mas de 5 productos) 

const descuento = 0.20;

const calcularDescuento = (precio) => {
    const resultado = precio - (precio * descuento);
    return resultado;
}

total = 0;

do {
    subtotal = prompt('Ingrese precio de sus productos o ingrese FIN para terminar la carga');
    const subtotalParseado = parseInt(subtotal);

    if (subtotalParseado != 'FIN') {
    total = total + subtotalParseado;
    }
} while (numero != 'FIN');

alert('El total de su compra es : ' + total);

let cantiadadDeProductos;
cantiadadDeProductos = prompt('Ingrese los productos a llevar :');
if (cantiadadDeProductos > 5) {
    alert('Precio con descuento (' + 100 *descuento + '%): ' + calcularDescuento(total));
} else {
    alert('Precio no tiene descuento , su total es ' + total);
}



const productos = [
    {
        alias: 'gor',
        nombre: 'gorila blue',
        tipo: 'sativa',
        precio: 1000
    },
    {
        alias: 'lemon',
        nombre: 'lemon haze',
        tipo: 'sativa',
        precio: 1500
    },
    {
        alias: 'ak',
        nombre: 'ak47',
        tipo: 'indica',
        precio: 1200
    },
    {
        alias: 'purple',
        nombre: 'purple haze',
        tipo: 'indica',
        precio: 1600
    },
    {
        alias: 'cbd',
        nombre: 'ultra cbd',
        tipo: 'cbd',
        precio: 1200
    },
    {
        alias: 'hawai',
        nombre: 'hawai oil',
        tipo: 'oil',
        precio: 2000
    },

];


const usuarios = [
    {
        alias: 'sashimi',
        nombre: 'sasha',
        apellido: 'ibanez',
        nivel: 2,
        tipo: 'admin',
    },
    {
        alias: 'gon',
        nombre: 'gonza',
        apellido:'diaz',
        nivel: 3,
        tipo: 'user',
    },
    {
        alias: 'lea',
        nombre: 'leandro',
        apellido:'algarra',
        nivel: 4,
        tipo: 'user',
    },
    {
        alias: 'leo',
        nombre: 'lionel',
        apellido:'messi',
        nivel: 10,
        tipo: 'user',
    },
];


//Metodo de busca (find)

const encontrarUsuarios = usuarios.find((usuarios) => {
    return usuarios.tipo === 'admin';
});

const encontrarProductos = productos.find((productos) => {
    return productos.tipo = 'sativa';
});

console.log(encontrarUsuarios);
console.log(encontrarProductos);




// Metodo de filtros (filter)

const users = usuarios.filter((usuarios) => {
    return usuarios.tipo === 'user';
});

console.log(users);


const sativas = productos.filter((productos) => {
    return productos.tipo === 'sativa';
});

console.log(sativas)