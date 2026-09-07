import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">TASTY BURGER</div>

        <nav>
          <a href="#about">ABOUT</a>
          <a href="#menu">OUR MENU</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <button className="cart">🛒</button>
      </header>

      <main>
        <section className="menu-section" id="menu">
          <h1>OUR CRAZY BURGERS</h1>

          <p className="intro">
            Delicious burgers made with fresh ingredients and packed with flavor.
          </p>

          <div className="burger-grid">
            <div className="burger-card">
              <div className="burger-image">🍔</div>
              <div className="rating">★★★★★</div>
              <h2>CLASSIC BURGER</h2>
              <p>Juicy beef patty with fresh vegetables and special sauce.</p>
              <span className="price">$8.99</span>
              <button className="heart">♡</button>
            </div>

            <div className="burger-card">
              <div className="burger-image">🍔</div>
              <div className="rating">★★★★★</div>
              <h2>CHEESE BURGER</h2>
              <p>Classic beef burger topped with delicious melted cheese.</p>
              <span className="price">$9.99</span>
              <button className="heart">♡</button>
            </div>

            <div className="burger-card">
              <div className="burger-image">🍔</div>
              <div className="rating">★★★★★</div>
              <h2>DOUBLE BURGER</h2>
              <p>Two juicy patties stacked together for extra flavor.</p>
              <span className="price">$11.99</span>
              <button className="heart">♡</button>
            </div>

            <div className="burger-card">
              <div className="burger-image">🍔</div>
              <div className="rating">★★★★★</div>
              <h2>SPICY BURGER</h2>
              <p>A flavorful burger with a delicious spicy kick.</p>
              <span className="price">$10.99</span>
              <button className="heart">♡</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App