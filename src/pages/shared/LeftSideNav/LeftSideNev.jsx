import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './LeftSideNav.css'

const LeftSideNev = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl font-bold mb-7"> All Caterogy </h2>
            <div className="space-y-7">
                {
                    categories.map(category => <NavLink 
                    className="block hover:bg-[#1111] hover:rounded-r-full pl-10 py-2"
                    to={`category${category.id}`}
                    key={category.id} >{category.name}</NavLink>  )
                }
            </div>
        </div>
    );
};

export default LeftSideNev;