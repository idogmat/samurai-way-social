import React, {useState} from "react";
import { MyContext } from "../../App";
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
        <MyContext.Consumer>
            { (value)=>(
            <div>
                <p>{value}!!!</p>
                <button onClick={loadData}>loadData</button>
                <button onClick={() => setData([])}>clear</button>
                {data.map((el: PlaceholderType) => <li key={el.userId}> {el.userId}---{el.title}</li>)}

            </div>)
        }
        </MyContext.Consumer>
    )
}
export default News