function Header({ currentPage, handlePageChange }) {
    return (
        <div className="header">
            <h1>Tyrese King</h1>
            <nav>
                <ul>
                    <li><a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        
                    >
                        About
                    </a></li>
                    <li><a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        
                    >
                        Portofolio
                    </a></li>
                    <li><a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        
                    >
                        Resume
                    </a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;