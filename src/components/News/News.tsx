import React, {useState} from "react";
// import s from'./News.module.scss'
type PlaceholderType={
    userId: number,
    id: number,
    title: string,
    completed: boolean

}
const News=(props:any)=>{
    let [data,setData]=useState([])
    const loadData=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }
    return(
        <div>
            <button onClick={loadData}>loadData</button>
            <button onClick={()=>setData([])}>clear</button>
            {data.map((el:PlaceholderType)=><li key={el.userId}> {el.userId}---{el.title}</li>)}
        </div>
    )
}
export default News