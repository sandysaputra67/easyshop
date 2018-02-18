import { NarrowContainer, FullwidthContainer } from '../../layouts/container'
import glamorous from 'glamorous';
import FaBars from 'react-icons/lib/fa/bars'
import FaSearch from 'react-icons/lib/fa/search'
import HeartIcon from 'react-icons/lib/fa/heart-o'
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart'
import { Link } from 'react-router-dom'
import { BackHome } from '../back-home';
import { createHashHistory } from 'history'
import { openSidebar } from '../../stores/sidebar';
import { CartItems } from '../cart-items/index';
let hashHistory = createHashHistory()


let NavbarWrapper = glamorous.div({
    borderBottom: '1px solid #ccc',
    padding: '10px',
    background: '#fff',
    position: 'fixed',
    width: '100%',
    top: '0px'
})

let Logo = glamorous.div({
    display: 'inline',
    paddingLeft: '5px'
})

let NavBurgerMenu = glamorous.div({
    display: 'inline',
    paddingRight: '5px',
    borderRight: '1px solid #ccc',
    cursor: 'pointer'
})

let RightMenus = glamorous.div({
    float: 'right'
})

let NavIcon = glamorous.div({
    display: 'inline-block',
    padding: '0px 5px 0px 5px',
    cursor: 'pointer'
})

let SearchInput = glamorous.input({
    padding: '5px',
    marginTop: '-19px',
    width: '90%',
    outline: 'none'
})


let CategoryMenu = () => <Link to="/categories">
    <FaBars />
</Link>

let goSearch = (event) => {
    if(event.keyCode == 13 || event.keyCode == "13"){
        hashHistory.push('/search/' + event.target.value) 
    }
}

export let Navbar = ({ title = "EasyShop", leftIcon = <CategoryMenu />, search = false }) => {
    if(search){
        return <NavbarWrapper>
            <NarrowContainer>
                <BackHome/>
                <SearchInput onKeyDown={goSearch} placeholder={"Cari produk berkualitas"}/>
            </NarrowContainer>
        </NavbarWrapper>
    }
    return <NavbarWrapper>
        <NarrowContainer>
            {leftIcon}
            <Link to="/"><Logo>{title}</Logo></Link>
            <RightMenus>
                <NavIcon>
                    <Link to="/search/"><FaSearch /></Link>
                </NavIcon>
                <NavIcon>
                    <Link to="/wishlist"><HeartIcon /></Link>
                </NavIcon>
                <NavIcon onClick={e => openSidebar('Keranjang', <CartItems/>)}>
                    <FaShoppingCart />
                </NavIcon>
            </RightMenus>
        </NarrowContainer>
    </NavbarWrapper>
}