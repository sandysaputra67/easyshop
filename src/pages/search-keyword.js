import { Navbar } from "../components/navbar/index";
import { NarrowContainer } from "../layouts/container";
import { ProductList } from "../components/product-list/index";
import { AppStore } from "../stores/index";

let findBasedOnKeyword = (keyword, product, index, products) => {
    return product.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
}

export let SearchKeyword = ({match}) => {
    let keyword = match.params.keyword 
    
    return <div>
        <Navbar/>
        <NarrowContainer>
            <ProductList products={AppStore.products.filter(findBasedOnKeyword.bind(null, keyword))}/>
        </NarrowContainer>
    </div>
}