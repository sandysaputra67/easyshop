import { observable } from "mobx";

export let wishlistStore = observable({
    items: []
})

export let addToWishlist = (product) => {
    wishlistStore.items.unshift(product)
}

export let removeFromWishlist = (product) => {
    wishlistStore.items = wishlistStore.items.filter(p => p.id !== product.id)
}