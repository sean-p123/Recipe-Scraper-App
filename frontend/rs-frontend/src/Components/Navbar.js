import {Link, useMatch, useResolvedPath} from "react-router-dom";
import {AiOutlinePlusCircle, AiOutlineSearch} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs'
//AiOutlineSearch  AiOutlinePlusCircle
export default function NavBar(){
    
    return (<nav className="nav">
        <Link to="/" className="site-title">Recipe Keeper</Link>
        <ul>
            <CustomLink to="/lecturer"><AiOutlinePlusCircle size={36}/></CustomLink>
            <CustomLink to="/student"><AiOutlineSearch size={36}/></CustomLink>
            <CustomLink to="/library"><BsBook size={36}/></CustomLink>
        </ul>
    </nav>)
}

function CustomLink({to, children, ...props}){
    
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true});
    return (
        <li className={isActive ? "active": ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}