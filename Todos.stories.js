import Todos from './Todos'

export default {
    title: 'List',
    component:Todos
}

export const emptyList = ()=> <Todos todolist={[]}/>
export const defaultList = () => <Todos todolist= {[{title:'buy milk' , id:1}, {title:'prepare tea' , id:2}]}/>
export const fullList = () => <Todos todolist= {[{title:'buy milk' , id:1}, {title:'prepare tea' , id:2}, {title:'newTask' , id:3}]}/>
