import '../css/BurgerMenu.css'

function BurgerMenu() {

    return (
        <>
        <div className="burger-menu">
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
        </div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Update</a></li>
            </ul>
        </nav>
        </>
    )
}

export default BurgerMenu; 