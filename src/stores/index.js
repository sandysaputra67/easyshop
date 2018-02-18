import { observable } from 'mobx'
import { dummyProducts } from '../data/dummy-products';
import { dummyCategories } from '../data/dummy-categories';
import { addToWishlist, removeFromWishlist } from './wishlist';
import { toast } from 'react-toastify';
import FaHeart from 'react-icons/lib/fa/heart'

export let AppStore = observable({
    products: dummyProducts,
    categories: dummyCategories
})

export let actionToggleLike = (product) => {
    AppStore.products = AppStore.products.map( p => {
        if(p.id == product.id){
            p.liked = p.liked ? 0 : 1

            if(p.liked){
                toast(<div><FaHeart style={{color: 'red'}}/>  Produk ditambahkan ke wishlist!</div>, {
                    position: toast.POSITION.TOP_RIGHT,
                    hideProgressBar: true
                })
                addToWishlist(product)
                p.likes = p.likes + 1
            } else {
                removeFromWishlist(product)
                p.likes = p.likes - 1
            }
        }
        return p
    })
}