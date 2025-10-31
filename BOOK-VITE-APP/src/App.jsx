import { useState } from 'react'
import { booksData } from './book.jsx'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || book.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📚 Book Store Dashboard</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Self-help">Self-help</option>
          <option value="Programming">Programming</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card shadow-md rounded-xl p-4 bg-white border hover:shadow-lg transition">
              <img src={`https://picsum.photos/seed/${book.id}/200/250`} alt={book.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{book.author}</p>
              <p className="text-blue-600 font-bold mt-2">₹{book.price}</p>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mt-3 inline-block">
                {book.category}
              </span>
              <button className="buy-btn mt-4 w-full py-2 rounded-md text-white font-semibold">
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">No books found 😞</p>
        )}
      </div>
    </div>
  );
}
export default App
