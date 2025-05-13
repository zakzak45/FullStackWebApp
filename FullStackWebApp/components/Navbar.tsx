const Navbar = () => {
    return (
        <>
            <div className="cointainer">
                <h1>Home</h1>
                <h1>Tutors</h1>
                <div className="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Navbar;