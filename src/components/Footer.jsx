import React from "react"

function Footer() {
    const year = new Date().getFullYear()

    return <footer><p>Coded by Dawid Alisterek Zd, {year}</p></footer>
}

export default Footer