/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from "react-helmet"

import '../scss/application.scss'

const Layout = ({ metadata, children }) => {

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              siteName
              title
            }
          }
        }
      `}
      render={data => {
        // TODO: merge props.meta & defaults
        const pageMetadata = { ...data.site.siteMetadata, ...metadata }
        return (
          <>
            <Helmet
              htmlAttributes={{
                lang: 'en',
              }}
              title={pageMetadata.title}
              titleTemplate={`%s | ${pageMetadata.siteName}`}
              link={[
                { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'apple-touch-icon', href: '/webclip.jpg' },
                {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap',
                }
              ]}
              meta={[
                {
                  name: `description`,
                  content: pageMetadata.description,
                },
                {
                  property: `og:title`,
                  content: pageMetadata.title,
                },
                {
                  property: `og:description`,
                  content: pageMetadata.description,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: pageMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: pageMetadata.title,
                },
                {
                  name: `twitter:description`,
                  content: pageMetadata.description,
                },
              ]}
            />
            <div className="grid-container">
              <main>{children}</main>
            </div>
          </>
        )
      }}
    />
  )
} 

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  metadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    lang: PropTypes.string,
  }),
}
Layout.defaultProps = {
  metadata: {},
}


export default Layout
