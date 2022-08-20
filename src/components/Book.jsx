import { useState } from "react";

const Book = ({book, handleAddToFavorites, handleAddToCart, isFavorited}) => {
    const [isFav, setIsFav]= useState(isFavorited);

    const handleIsFavClick = (book) => {
        setIsFav(!isFav)
        handleAddToFavorites(book, isFav);
        
    }
    return(
        <div className="book">
            <button className="favorite" onClick={()=> handleIsFavClick(book)}>{isFav ? '❤️' : '💛'}</button>
            <img src={book?.image} alt={book?.title} ></img>
            <h4>{book?.title}</h4>
            <p>{book?.price}</p>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
           </div>
    );
}

export default Book;