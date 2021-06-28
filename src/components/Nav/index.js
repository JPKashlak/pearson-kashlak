import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="neonBase">
        <div id="titleBox">
            <h1 className="pinkSuit"><span id="title">Pears<span className="flicker">o</span>n Kashlak</span></h1>
        </div>

        <section id="suits">
                <div>
                    <Link to="/" className="blueSuit">
                        <h1>♤</h1>
                        <h2>Home</h2>
                    </Link>
                </div>
                <div>
                    <Link to="/dev"  className="purpleSuit">
                        <h1>♡</h1>
                        <h2>Developer</h2>
                    </Link>
                </div>
                <div>
                    <Link to="/theatre"  className="blueSuit">
                        <h1>♧</h1>
                        <h2>Theatre</h2>
                    </Link>
                </div>
                <div>
                    <Link to="/contact"  className="purpleSuit">   
                        <h1>♢</h1>
                        <h2>Contact</h2>
                    </Link>
                </div>
        </section>
    </nav>
  );
}

export default Nav;