import "./sidebar.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setcats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setcats(res.data)
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://png.pngtree.com/thumb_back/fh260/background/20201110/pngtree-beautiful-natural-beauty-of-railroad-tracks-in-autumn-image_445241.jpg" alt="" />
                <p>
                Front-end developer with knowledge of Figma enjoying the best end-user interface and 
                interactivity. With knowledge of Javascript, CSS, React and react native. I am a
                professional with solid knowledge in SAP PP/MM and excel.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
