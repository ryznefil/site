import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
    const q_data = useStaticQuery(
        graphql`
            query {
                site {
                siteMetadata {
                    title
                }
                }
            }
        `
    )

    return (
        <title>{title} || q_data.site.siteMetadata.title </title>
    )
}

export default Seo