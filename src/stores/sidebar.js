import { observable } from "mobx";
import glamorous from "glamorous";
import ChevronLeft from 'react-icons/lib/fa/chevron-left'
import { Line } from "../components/line";

export let sidebarStore = observable({
    open: false,
    title: '',
    content: <div/>
})

let SidebarWrapper = glamorous.div({
    height: '100%', 
    background: '#fff',
    width: '300px'
})

let SidebarNav = glamorous.div({
    padding: '5px 2px 0px 0px'
})

export let openSidebar = (title, content) => {
    sidebarStore.title = title 
    sidebarStore.content = <SidebarWrapper>
        <SidebarNav>
            <ChevronLeft style={{cursor: 'pointer'}} onClick={e => closeSidebar()}/> {title}
        </SidebarNav>
        <Line/>
        {content} 
    </SidebarWrapper>
    sidebarStore.open = true 
}

export let closeSidebar = () => sidebarStore.open = false 