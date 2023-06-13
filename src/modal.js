function Modal({item1,book1,onClose}){
    if (item1){
        let thumb=book1.volumeInfo.imageLinks && book1.volumeInfo.imageLinks.smallThumbnail;
    return <div>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" on onClick={onClose}><i className="fa fa-times" aria-hidden="true"></i></button>
                <div className="inner-box">
                <img src={thumb} alt=''/>
                    <div className="info">
                        <h1>{book1.volumeInfo.title}</h1>
                        <h3>{book1.volumeInfo.author}</h3>
                        <h4>{book1.volumeInfo.publisher}</h4>
                        <a href={book1.volumeInfo.previewLink}><button>more</button></a>
                    </div>

                </div>
                <h4 className="description">{book1.volumeInfo.description}</h4>
            </div>
        </div>
    </div>
}}

export default Modal