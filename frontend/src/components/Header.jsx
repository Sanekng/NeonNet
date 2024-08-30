import './Header.css'

const Header = () => {
    return (
      <nav>
      <header>
        <div className="header-img">
        </div>
        <nav>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/newsets">
              <li>New Sets</li>
            </a>
            <a href="/cart">
              <li>Your cart</li>
            </a>
            <a href="/about">
              <li>About Us</li>
            </a>
            <a href="/contact-us">
              <li>Contact Us</li>
            </a>
            <a href="/login">
              <li>Log in</li>
            </a>
            <a href="/sign">
              <li>Sign Up</li>
            </a>
          </ul>
        </nav>
      </header>
    </nav>
    )
}

export default Header;