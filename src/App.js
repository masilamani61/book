import React ,{ useState } from "react"
import Card from "./card"
import axios from 'axios'

function App(){
    const [search,setsearch]=useState()

    const [books,setbooks]=useState([])
    
    const handle=async()=>{    
        const res=await axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDlBmcl0WsCREsWOGuEdwB0h2wGQ21T9I0&maxResults=40')
        setbooks(res.data.items)
    }
    return (<>
        <div className="header grid grid-flow-row auto-rows-max md:auto-rows-min">
            <div className="header1">
            <div className="row1">
                <h1 className="text-5xl">A room without book like <br/>body without soul</h1>
            </div>
            </div>
            <div className="row2">S
                <h1>Find your books</h1>
                <div className="search1">
                    <div className="searchbar">
                    <input onChange={(event)=>{
                        setsearch(event.target.value)
                    }} type="text" placeholder="enter your book" value={search}/>
                    <button className="bg-red-500" onClick={handle} ><i className="fa fa-search" aria-hidden="true"></i></button>
                  </div>  
                </div>
                <img src="images/child image.png" alt=''/>
            
            </div>
            
            


      
        
        </div>
        <div className="container">
                <Card
            books={books}/>
                


















            </div>
    
        
    </>)
}
export default App