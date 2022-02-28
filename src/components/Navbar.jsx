import React from 'react'

function Navbar({ isBmi, setIsBmi }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">HealthCare</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className={isBmi ? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="#" onClick={() => setIsBmi(true)}>BMI</a>
                    </li>
                    <li className={!isBmi ? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="#" onClick={() => setIsBmi(false)}>Chẩn đoán</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar