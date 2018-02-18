import glamorous from "glamorous";
import { Link } from 'react-router-dom'

let CategoryItem = glamorous.div({
    background: '#fff',
    borderBottom: '1px solid #eee',
    padding: '10px'
})

export let ProductCategories = ({categories}) => {
    return <div>
        {categories.map((category, index) => <CategoryItem key={index}><Link to={"/categories/" + category}>{category}</Link></CategoryItem>)}
    </div>
}