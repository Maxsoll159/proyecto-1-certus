
export const Navbar = () =>{

    const esilosNav = {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "blue",
        alignItems: "center",
        color: "white"
    }

    return(
        <nav className="nav">
            <figure>
                <img src="https://www.certus.edu.pe/wp-content/uploads/2018/12/certus-logo-1-01-copy-3@2x.png" width={200} height={50} alt="Certus" />
            </figure>
            <p>Martin Rios</p>
        </nav>
    )
}