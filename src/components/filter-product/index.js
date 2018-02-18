import glamorous from 'glamorous'
import { CirclePicker } from 'react-color'
import faker from 'faker'
import { Button } from '../button';
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';
import { addColorFilter, removeColorFilter, filterStore, applyFilter, clearFilter } from '../../stores/filter';
import { observer } from 'mobx-react';
import { Line } from '../line'
import { dummyColors } from '../../data/dummy-colors';

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

let FilterContent = glamorous.div({
    borderBottom: '1px solid #eee',
    padding: '10px'
})

let FilterTitle = glamorous.div({
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '10px'
})

let setPriceFilter = prices => {
    filterStore.minPrice = prices[0]
    filterStore.maxPrice = prices[1]
}


let FilterPrice = observer(() => {
    return <FilterContent>
        <FilterTitle>Rentang harga</FilterTitle>
        {filterStore.minPrice} s.d {filterStore.maxPrice == -1 ? 3000000 : filterStore.maxPrice} <br/>
        <Range value={[filterStore.minPrice, filterStore.maxPrice]} allowCross={false} step={25000} min={0} max={10000000} onChange={setPriceFilter} defaultValue={[0, 3000000]}/>
    </FilterContent>
})

let ColorBox = glamorous.span(({color}) => ({
    display: 'inline-block',
    background: color,
    width: '25px',
    height: '25px',
    marginLeft: '2px'
}))

let FilterColor = observer(() => {
    return <FilterContent>
        <FilterTitle>Pilih warna</FilterTitle>
        {filterStore.colors.map((c, index) => <ColorBox onClick={e => removeColorFilter(c)} key={index} color={c}/>)}
        <Line/>
        <CirclePicker colors={dummyColors} onChange={color => addColorFilter(color.hex)}/>
    </FilterContent>  
})

let FilterFooter = glamorous.div({
    position: 'absolute',
    background: '#eee',
    borderTop: '1px solid #ccc',
    padding: '5px',
    bottom: '0px',
    height: '40px',
    width: '100%'
})

let FiftyPercent = glamorous.div({
    width: '50%',
    float: 'left'
})

export let FilterProduct = observer(() => {
    return <div>
        <FilterPrice/>
        <FilterColor/>
        <FilterFooter>
            <FiftyPercent>
                <Button onClick={e => clearFilter()}> Reset</Button>
            </FiftyPercent>
            <FiftyPercent>
                <Button primary onClick={e => applyFilter()}>Filter</Button>                
            </FiftyPercent>
        </FilterFooter>
    </div>
})