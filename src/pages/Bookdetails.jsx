import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookDetails({ addToCart }) {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  return (
    book && (
      <div className="book-details">
        <img src={book.image} alt={book.title} />
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <p>Price: ₹{book.price}</p>
        <button onClick={() => addToCart(book)}>Add to Cart</button>
      </div>
    )
  );
}
