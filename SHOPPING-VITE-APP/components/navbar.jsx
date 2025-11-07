function Navbar(){
    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm">
            <ul className="max-w-6xl mx-auto flex gap-6 px-4 py-3 text-sm font-medium">
                <li><a className="text-gray-700 hover:text-green-600" href="/">Home</a></li>
                <li><a className="text-gray-700 hover:text-green-600" href="/products">Products</a></li>
                <li><a className="text-gray-700 hover:text-green-600" href="/order">Orders</a></li>
                <li><a className="text-gray-700 hover:text-green-600" href="/login">Login</a></li>
                <li><a className="text-gray-700 hover:text-green-600" href="/signup">Signup</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;