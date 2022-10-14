import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [showNav, setShowNav] = useState(true);
    const [menuOpen,setMenuOpen] = useState(false);
    const [seeAll,setSeeAll] = useState(true);
    const [search,setSearch] = useState('');
    function menuToggle(){
        setMenuOpen(false);
    };
    // const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);

    return (
        <AuthContext.Provider value={{ auth, setAuth,showNav, setShowNav,menuOpen,setMenuOpen,menuToggle,search,setSearch,seeAll,setSeeAll}}>  
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext;