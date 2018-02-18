import faker from 'faker'
import { dummyCategories } from './dummy-categories';
import { dummyColors } from './dummy-colors'
faker.locale = 'id_ID'

// export let dummyProducts = Array.from({length: 30}).map((v, index) => {
//     let name = faker.lorem.words()
//     let category = dummyCategories[Math.floor(Math.random() * dummyCategories.length + 0)]
//     let initialName = name.split(' ').map(a => a[0]).join('').toUpperCase()

//     return {
//         id: index,
//         // liked: Math.floor(Math.random() * 2 + 0),
//         liked: 0,
//         imgUrl: "https://dummyimage.com/500x600/"+faker.internet.color().replace('#','')+"/ffffff?text=" + category + ' ' + initialName,
//         name: category + ' ' + initialName,
//         price: faker.commerce.price() * 100,
//         likes: faker.random.number(),
//         category: category,
//         colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
//     }
// })

export let dummyProducts = [
    {
        id: 0,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/notebook.jpg",
        name: 'Notebook Simple',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'notes',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 1,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/kemeja-1.jpg",
        name: 'Kemeja 1',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'kemeja',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 2,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/sepatu-1.jpg",
        name: 'Sepatu 1',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'sepatu',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 1,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/tas-1.jpg",
        name: 'Tas 1',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'tas',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 4,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/kemeja-2.jpg",
        name: 'Kemeja 2',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'kemeja',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 5,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/tas-2.jpg",
        name: 'Tas 2',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'tas',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 19,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/jaket-1.jpg",
        name: 'Jaket Bomber Camo',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'jaket',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 6,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/tas-3.jpg",
        name: 'Tas 3',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'tas',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 7,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/kemeja-4.jpg",
        name: 'Kemeja 3',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'kemeja',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 8,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/sepatu-2.jpg",
        name: 'Sepatu wanita',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'sepatu',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 71,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/jaket-2.jpg",
        name: 'Jaket TNI AD',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'jaket',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    },
    {
        id: 9,
        liked: 0,
        imgUrl: "http://localhost:8000/assets/products/sepatu-3.jpg",
        name: 'Sepatu outdoor',
        price: faker.commerce.price() * 100,
        likes: faker.random.number(),
        category: 'sepatu',
        colors: Array.from({length: Math.floor(Math.random() * 5 + 1)}).map((v, i) => dummyColors[Math.floor(Math.random() * dummyColors.length)])
    }

]

console.log(dummyProducts, 'prods')