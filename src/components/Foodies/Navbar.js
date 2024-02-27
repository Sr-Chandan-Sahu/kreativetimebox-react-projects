import './Navbar.css';

const Navbar = ({handleSearch}) => {
    return (
        <div className='navbar'>
            <img src='https://source.unsplash.com/50x50/?zomato' alt='logo image' className='logo'/>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/products'>Products</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact Us</a></li>
            </ul>
            <div className='search-box'>
                <input type='search' placeholder='Search here' onChange={handleSearch}/>
            </div>
        </div>

    );
}

export default Navbar;