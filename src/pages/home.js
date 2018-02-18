import { NarrowContainer } from "../layouts/container";
import { Navbar } from "../components/navbar/index";
import { ProductList } from "../components/product-list/index";
import { AppStore } from "../stores/index";
import FaFilter from 'react-icons/lib/fa/filter'
import { Line } from "../components/line";
import { observer } from "mobx-react";
import { openSidebar } from "../stores/sidebar";
import { FilterProduct } from "../components/filter-product/index";
import { Right } from "../components/right";

let FilterButton = props => <div style={{cursor: 'pointer'}} {...props}><FaFilter/> Filter</div>

export let Homepage = observer(() => <div>
    <Navbar/>
    <NarrowContainer>
        <Right>
            <FilterButton onClick={e => openSidebar('Filter produk', <FilterProduct/> )}/>  
        </Right>
        <br/>
        <Line/>
        <ProductList products={AppStore.products}/>
    </NarrowContainer>
</div>)