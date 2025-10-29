import bookImg from './assets/img.jpg'

export function Book() {

  return (
    <div className="card" style={{ padding: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px", color: "#333", fontFamily: "Arial, sans-serif", textAlign: "center", width: "350px", height: "350px" }}>
      <img src={bookImg} width="200" height="200" alt="book Image" />
      <h3>Title:Physics</h3>
      <h4>Price: ₹341/-</h4>
      <button>Add to Cart</button>
    </div>
  )
}