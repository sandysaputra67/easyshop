import glamorous from "glamorous";
import { cartStore, removeFromCart } from "../../stores/cart";
import { observer } from "mobx-react";
import { List } from '../list'
import { Right } from '../right'

let CartItemsList = glamorous.div({

})

let CartItemsFooter = glamorous.div({
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    height: '100px',
    background: '#eee'
})

let ItemImage = glamorous.div({
    width: '30%',
    height: '100%',
    float: 'left'
})

let ItemDetail = glamorous.div({
    width: '65%',
    marginLeft: '5px',
    float: 'left',
    height: '100%'
})

let Delete = glamorous.div({
    textDecoration: 'underline',
    color: 'red',
    cursor: 'pointer'
})

let ItemList = observer(({items}) => {
    return <div>
        {items.map((item, index) => {
            return <div key={index} style={{height: '110px', paddingLeft: '10px'}}>
                <ItemImage>
                    <img width="100%" src={item.imgUrl}/>
                </ItemImage>
                <ItemDetail>
                    {item.name} <br/>
                    {item.price} <br/>
                    <Delete onClick={e => removeFromCart(item) }>hapus</Delete>
                </ItemDetail>
            </div>
        })}
    </div>
})


let PrimaryButton = glamorous.div({
    padding: '10px',
    fontSize: '1.2em',
    color: '#fff',
    background: 'orangered',
    textAlign: 'center',
    cursor: 'pointer'
})

let getSubtotal = items => items.reduce((prev, curr) => {return prev + curr.price}, 0)

export let CartItems = observer(() => {
    return <div>
        <CartItemsList>
            <ItemList items={cartStore.items}/>
            <br/>
            <br/>
            <List> Subtotal <Right>{getSubtotal(cartStore.items)}</Right> </List>
            <List> Ongkir <Right>Gratis!</Right></List>
        </CartItemsList>
        <CartItemsFooter>
            <List>Total belanja<Right>{getSubtotal(cartStore.items)}</Right></List>
            <div style={{padding: '10px'}}>
                <PrimaryButton>
                    Lanjut ke kasir
                </PrimaryButton>
            </div>
        </CartItemsFooter>
    </div>
})