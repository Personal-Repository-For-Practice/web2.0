import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
    <>
        <nav className="nav">
            <div className="siteTitleWrapper">
                <Link to="/" className="site-title">
                    Portfolio
                </Link>
            </div>
            <div className="nav-content">
                <ul>
                    <CustomLink to="/"> Home</CustomLink>
                    <CustomLink to="/about"> About</CustomLink>
                    <CustomLink to="/projects"> Projects</CustomLink>
                </ul>
            </div>
        </nav>
    </> 
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return(
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
    </li>
    )
}