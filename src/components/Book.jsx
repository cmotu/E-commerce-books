import { useState } from "react";

const Book = ({book, handleAddToFavorites}) => {
    const [isFav, setIsFav]= useState(false);

    const handleIsFavClick = (book) => {
        setIsFav(!isFav)
        handleAddToFavorites(book, isFav);
        
    }
    return(
        <div>
            <button className="favorite" onClick={()=> handleIsFavClick(book)}>{isFav ? '❤️' : '💛'}</button>
            <img src={book?.image} alt={book?.title} ></img>
            <h4>{book?.title}</h4>
            <p>{book?.price}</p>
           </div>
    );
}

export default Book;