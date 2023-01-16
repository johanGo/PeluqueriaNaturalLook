
const productos=[
    //geles
    {
        id:"gel-01",
        titulo:"Gel 1",
        descripcion:"este es el primer producto",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel1.webp"
    },
    
    {
        id:"gel-02",
        titulo:"Gel 2",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel2.webp"
    },

    {
        id:"gel-03",
        titulo:"Gel 3",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel3.png"
    },

    {
        id:"gel-04",
        titulo:"Gel 4",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel4.webp"
    },

    {
        id:"gel-05",
        titulo:"Gel 5",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel5.png"
    },
    
    {
        id:"gel-06",
        titulo:"Gel 6",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel6.png"
    },

    {
        id:"gel-07",
        titulo:"Gel 7",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel7.png"
    },

    {
        id:"gel-08",
        titulo:"Gel 8",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel8.png"
    },

    {
        id:"gel-01",
        titulo:"Gel 1",
        descripcion:"este es el primer producto",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel1.webp"
    },
    
    {
        id:"gel-02",
        titulo:"Gel 2",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel2.webp"
    },

    {
        id:"gel-03",
        titulo:"Gel 3",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel3.png"
    },

    {
        id:"gel-04",
        titulo:"Gel 4",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel4.webp"
    },

    {
        id:"gel-05",
        titulo:"Gel 5",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel5.png"
    },
    
    {
        id:"gel-06",
        titulo:"Gel 6",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel6.png"
    },

    {
        id:"gel-07",
        titulo:"Gel 7",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/Gel7.png"
    },

    {
        id:"gel-08",
        titulo:"Gel 8",
        descripcion:"",
        categoria:{
            nombre:"Geles",
            id:"geles"
        },
        precio:4500,
        imagen:"/images/Geles/81.jpeg"
    }
]

const contenedorProductos=document.getElementById("contenedor-productos");
const botonesCategorias= document.querySelectorAll(".boton-categoria");

function cargarProductos(){

    productos.forEach(card => {

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML=`
            <div class="face face1">
                <h2 class="producto-titulo">${card.titulo}</h2>
                <p class="producto-descripcion">${card.descripcion}</p>
                <div class="wrapper-price">
                    <button class="producto-carrito"><i class="bi bi-cart"></i></button>
                    <div class="producto-precio">$${card.precio}</div>
                </div>
            </div>                    
            <div class="face face2">
                <img class="gel1" src="${card.imagen}">
            </div>
        `;

        contenedorProductos.append(div);
    })

}
cargarProductos();

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click",(e) =>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active")        
    })
})

let i =0;
let number=10;

 for (i; i<number; i--){    
    console.log(i[number])
 }
console.log(5)




