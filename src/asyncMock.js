import Ele from './components/assets/Img/Budismo/ele.jpg'
import Tasas from './components/assets/Img/Norteño/tasas.jpg'
import Cascada from './components/assets/Img/sahumerio/cascada.jpg'

const products = [
    {
        id:"1",
        name:"Elefante Blanco",
        price: 3200,
        img: Ele,
        stock:25,
        category:'budismo',
        descripcion:'Un Elefante Blanco'    
    },
    {
        id:"2",
        name:"Tasas",
        price: 3200,
        img: Tasas,
        stock:25,
        category:'norteño',
        descripcion:'Tasas de ceramica, artesania norteña'    
    },
    {
        id:"3",
        name:"Cascada",
        price: 3200,
        img: Cascada,
        stock:25,
        category:'sahumerio',
        descripcion:'Cascada Aromatica, con bomba.'    
    },

]

export const getProducts=()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}

