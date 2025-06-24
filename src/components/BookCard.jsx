import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={book.image}
        alt={book.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {book.description?.substring(0, 60)}...
        </p>
        <p className="text-blue-700 font-bold mb-2">₹{book.price}</p>
        <Link
          to={`/book/${book.id}`}
          className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
