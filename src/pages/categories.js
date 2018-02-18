import { NarrowContainer } from "../layouts/container";
import { Navbar } from "../components/navbar/index";
import { ProductCategories } from "../components/product-categories/index";
import { BackHome } from "../components/back-home";
import { AppStore } from "../stores/index";



export let Categoriespage = () => <div>
    <Navbar title="Kategori" leftIcon={<BackHome/>}/>
    <NarrowContainer>
        <ProductCategories categories={AppStore.categories}/>
    </NarrowContainer>
    </div>
