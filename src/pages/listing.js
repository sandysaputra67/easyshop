import { NarrowContainer } from "../layouts/container";
import { Navbar } from "../components/navbar/index";
import { BackHome } from "../components/back-home";
import { ProductList } from "../components/product-list/index";
import { AppStore } from "../stores/index";


export let Listingpage = ({match}) => {
    return <div>
        <Navbar title={match.params.category_name} leftIcon={<BackHome/>}/>
        <NarrowContainer>
            <ProductList products={AppStore.products.filter(a => a.category.toLowerCase() == match.params.category_name.toLowerCase())}/>
        </NarrowContainer>
    </div>
}