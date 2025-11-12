import Header from "./header.jsx";
import Navbar from "./navbar.jsx";

function Home() {
    return (
        <div>
            <Header />
            <h1 className="text-3xl font-bold mb-6 text-green-700">🛒 Shopping Card</h1>
            {/* Add your shopping dashboard content here */}
            <Navbar />
        </div>
    );
}

export default Home;
