import {BackHome} from '../components/back-home'
import {NarrowContainer} from '../layouts/container'
import { Navbar } from "../components/navbar/index";
import {ProductList} from '../components/product-list'
import { observer } from "mobx-react";
import { wishlistStore } from '../stores/wishlist';

export let Wishlistpage = observer(() => {

    return <div>
        <Navbar title="Whislist" leftIcon={<BackHome/>}/>
        <NarrowContainer>
            <ProductList emptyMessage="Wishlist masih kosong." products={wishlistStore.items}/>
        </NarrowContainer>
    </div>
})