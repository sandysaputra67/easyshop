import { observable, toJS } from "mobx";
import { AppStore } from "./index";
import { dummyProducts } from "../data/dummy-products";

export let filterStore = observable({
    colors: [],
    minPrice: 0,
    maxPrice: 3000000
})


export let clearFilter = () => {
    filterStore.colors = []
    filterStore.minPrice = 0
    filterStore.maxPrice = 3000000
    AppStore.products = dummyProducts
}

export let addColorFilter = color => filterStore.colors.indexOf(color) < 0 ? filterStore.colors.push(color) : null

export let removeColorFilter = color => filterStore.colors = filterStore.colors.filter(c => c !== color)

let byPrice = (product, index) => {
    return product.price > filterStore.minPrice && product.price < filterStore.maxPrice
}

let byColor = product => {
    if(!filterStore.colors.length){
        return true 
    }

    let intersection = product.colors.filter((color)=> {
        return filterStore.colors.indexOf(color) !== -1
    })

    return intersection.length
}

export let applyFilter = () => {
    AppStore.products = dummyProducts.filter(byPrice).filter(byColor)
}