export default function CartItem({ item, removeFromcart }) {
  if (!item) return null; // ✅ Safe check

  return (
    <div className="flex justify-between items-center border p-3 rounded mb-3 shadow">
      <div>
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-sm text-gray-600">₹{item.price}</p>
      </div>
      <button
        onClick={removeFromcart}
        className="text-sm text-red-600 hover:text-red-800"
      >
        Remove
      </button>
    </div>
  );
}
