import './Footer.css'

function Footer(){

    const year = new Date().getFullYear()
    return(
        <>
        <footer>
            <p> copywrite © {year}</p>
        </footer>
        
        </>
    )
}

export default Footer