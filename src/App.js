import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import motor3 from './motor3.jpg';
import motor4 from './motor4.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <div className="container">
            <a href="#" className="navbar-logo">
              MotorShop
            </a>
            <ul className="navbar-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Header */}
        <header className="header">
          <div className="container">
            <h1>Welcome to MotorShop</h1>
            <p>Your destination for all things motorcycles.</p>
          </div>
        </header>

        {/* Motor Items */}
        <section className="motor-items">
          <div className="container">
            <div className="motor-item">
              <img src={motor1} alt="Motor 1" />
              <h3>Ninja 250R</h3>
              <p>Powerful and stylish motor for your adventure.</p>
              <button>Add to Cart</button>
            </div>
            <div className="motor-item">
              <img src={motor2} alt="Motor 2" />
              <h3>Ninja 250 Black Edition</h3>
              <p>Sleek design and advanced technology.</p>
              <button>Add to Cart</button>
            </div>
            <div className="motor-item">
              <img src={motor3} alt="Motor 3" />
              <h3>Ninja 250SL</h3>
              <p>Powerful and stylish motor for your adventure.</p>
              <button>Add to Cart</button>
            </div>
            <div className="motor-item">
              <img src={motor4} alt="Motor 4" />
              <h3>NInja 300</h3>
              <p>Sleek design, calm and advanced technology.</p>
              <button>Add to Cart</button>
            </div>
            {/* Add more motor items here */}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>&copy; 2023 MotorShop. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
