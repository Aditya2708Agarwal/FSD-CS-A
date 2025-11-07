function Header(){
    return (
        <header className="bg-green-600 text-white p-4 shadow">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <h1 className="text-xl font-semibold">Shopping App</h1>
                <span className="text-sm opacity-90">Best deals everyday</span>
            </div>
        </header>
    );
}

export default Header;