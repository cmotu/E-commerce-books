import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Book from "./components/Book";

function App() {
  const[data, setData] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);


  const fetchData = () => {
   fetch('https://api.itbook.store/1.0/new')
     .then(res => res.json())
     .then(data => setData(data.books))
 }
useEffect(fetchData, [])


const handleAddToFavorites = (book) =>{
  const foundBook = favoriteBooks.find(b => b.isbn13 === book.isbn13);

  if(foundBook){
    setFavoriteBooks(favoriteBooks.filter(b => b.isbn13 !== book.isbn13))
  } else {
    setFavoriteBooks([...favoriteBooks, book])
  }
}

  return (
  <div className="App">
    <Navbar></Navbar>
    <h1>Books Available</h1>
    <div className="book-list">{data.map(el => <Book book={el} handleAddToFavorites={handleAddToFavorites} />)}</div>
    <Book />
  </div>
  );
}

export default App;
