import React from "react";



function Footer(){
    const year = new Date().getFullYear();

    return (
    <footer>

    <p><strong>Copyright &copy; Evans {year}</strong></p> 

    </footer> 
    );
}

export default Footer;