import { useState } from "react";
import Modal from "./modal";
function Card({books}){
    const [item,setitem]=useState(false)
    const[booking,setbooks]=useState()
    return(
        books.map((book,index)=>{
            let thumb=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
            let amont=book.saleInfo.listPrice && book.saleInfo.listPrice.amount
            
            if (thumb!==undefined){
            return(
            <div key={index}>
            <div onClick={()=>{setitem(true);setbooks(book)}} className="card">
            <img src={thumb} alt=''/>
            <div className="bottom">
                <div className="title">
                    <h3>{book.volumeInfo.title}</h3>
                </div>
                <div className="amount">
                    <p>${amont}</p>
                </div>
            </div>
            </div>
            <Modal
            item1={item}
            book1={booking}
            onClose={()=>{setitem(false)}}
            />
        </div>
            )
            }
        else{
            return null
        }
        })
    )
    
    
}
export default Card