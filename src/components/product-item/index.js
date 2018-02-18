import glamorous from "glamorous";
import { Line } from "../line";
import FaHeartIcon from 'react-icons/lib/fa/heart-o'
import FaHeartIconFull from 'react-icons/lib/fa/heart'
import FaSquareO from 'react-icons/lib/fa/share-square-o'
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { actionToggleLike } from "../../stores/index";
import { addToCart } from "../../stores/cart";
import { toast } from "react-toastify";

let ProductItemBox = glamorous.div({
    border: '1px solid #ccc',
    background: '#fff',
    marginTop: '10px'
})

let ProductContent = glamorous.div({
    padding: '10px'
})

let ProductImage = glamorous.div({
    margin: '0px auto',
    textAlign: 'center',
    width: '100%'
})

let ProductTitle = glamorous.div({
    padding: '2px 0px 5px 0px'
})

let ProductPrice = glamorous.div({
    color: '#555',
    fontWeight: 'bold'
})

let ProductLikes = glamorous.small({
    color: '#555'
})

let ProductFooter = glamorous.div({
    padding: '10px',
    borderTop: '1px solid #eee'
})

let LinkIcon = glamorous.div({
    display: 'inline-block',
    marginLeft: '10px',
    cursor: 'pointer'
})

let ProductColors = glamorous.div({
    textAlign: 'right',
})

let Color = glamorous.span({
    fontSize: '0.7em',
    margin: '0px 3px 0px 3px',
    border: '1px solid #eee',
    width: '15px',
    height: '15px',
    display: 'inline-block'
}, ({color}) => ({
    background: color
}))

let FloatRight = glamorous.div({
    float: 'right'
})

let BuyButton = glamorous.button({
    background: 'orangered',
    padding: '5px',
    border: '0px',
    color: '#fff',
    fontWeight: 'bold',
    minWidth: '50px',
    cursor: 'pointer',
    outline: 'none'
})

export let ProductItem = observer( ({product}) => {

    let toggleLike = e => {
        actionToggleLike(product)
    }

    let addProduct = e => {
        addToCart(product)
    }

    return <ProductItemBox>
        <ProductContent>
            <ProductImage><img width="100%" src={product.imgUrl} alt={product.name}/></ProductImage>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductColors>{product.colors.map((c,i) => <Color color={c} key={i}></Color>)}</ProductColors>
            <Line/>
            <ProductLikes>
                {product.likes} orang menyukai ini
            </ProductLikes>
        </ProductContent>

        <ProductFooter>
            <LinkIcon onClick={toggleLike}>
                {product.liked ? <FaHeartIconFull style={{color: 'red'}}/> : <FaHeartIcon/>} suka
            </LinkIcon>
            <LinkIcon>
                <FaSquareO/> bagikan
            </LinkIcon>
            <FloatRight>
                <BuyButton onClick={addProduct}> Beli</BuyButton>
            </FloatRight>
        </ProductFooter>
    </ProductItemBox>
})