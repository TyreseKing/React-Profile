function Header({ currentPage, handlePageChange }) {
    return (
        <div className="header">
            <h1>Tyrese King</h1>
            <nav>
                <ul>
                    <li><a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About'}
                    >
                        About
                    </a></li>
                    <li><a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio'}
                    >
                        Portofolio
                    </a></li>
                    <li><a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact'}
                    >
                        Contact
                    </a></li>
                    <li><a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume'}
                    >
                        Resume
                    </a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;