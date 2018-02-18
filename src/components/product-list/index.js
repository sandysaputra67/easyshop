import { ProductItem } from "../product-item/index";
import { Paper } from "../paper";
import { observer } from "mobx-react";

export let ProductList = observer(({products, emptyMessage = "Tidak ada produk ditemukan."}) => {
    if(!products.length){
        return <Paper> {emptyMessage} </Paper>
    }
    return <div>{products.map((product, index) => 
        <ProductItem key={index} product={product}/>)}</div>
})