import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { 
    container, 
    title,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const q_data = useStaticQuery(
        graphql`
            query MQ {
                site {
                    siteMetadata {
                        title
                }
                }
            }
        `
    )
    return (
        <div className={container}>
            <header className={siteTitle}>{q_data.site.siteMetadata.title}</header>
            <main>
                <h1 className={title}>{pageTitle}</h1>
                {children}
            </main>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout