import { observable } from "mobx";
import { toast } from "react-toastify";
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart'

export let cartStore = observable({
    items: []
})

export let addToCart = (product) => {
    cartStore.items.unshift(product)
    toast(<div><FaShoppingCart style={{color: 'orangered'}}/>  Produk dimasukan ke keranjang!</div>, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true
    })
}

export let removeFromCart = (product) => {
    cartStore.items = cartStore.items.filter(p => p.id !== product.id)
}