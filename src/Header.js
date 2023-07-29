import logo from './Images/logo.jpg'
import './Header.css'

function Header(){
    return(
        <>
        <div className="header">
            <img className='image' src={logo} alt="" height='60' width='50' />
            <h1>Google Notes</h1>
        </div>
        
        </>
    )
}

export default Header