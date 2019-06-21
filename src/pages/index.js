import React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    console.log('posts', posts);
    const albaniaPosts = posts.filter(p => p.node.fields.slug.includes('albania'))
    const siciliaPosts = posts.filter(p => p.node.fields.slug.includes('sicilia'))
    const calvadosPosts = posts.filter(p => p.node.fields.slug.includes("calvados"))

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <div>
          <p style={{ fontSize: "1.2rem" }}>
            Un modesto omaggio al grande maestro Camilleri.
          </p>
        </div>
        {calvadosPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
        <div>
          <p style={{fontSize: '1.2rem'}}>
            "Stato emotivo di carattere eccezionale."<br/>
            Così sono state recentemente concesse attenuanti ad un uomo che ha ucciso per gelosia la propria donna. <br/>
            Nei corridoi dei palazzi di giustizia italiani è tornato ad aggirarsi il fantasma dell'articolo 519 del codice penale. Il tradimento, in qualche modo, giustifica la violenza omicida di genere. <br/>
            Quelli che seguono sono due miei articoli scritti più di mezzo secolo fa. Oggi come allora onore non fa rima con amore.

          </p>
        </div>
        {siciliaPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
        <div>
          <p style={{fontSize: '1.2rem'}}>
            Questi articoli furono pubblicati nel 1967 dal <a target="__blank" href="https://gds.it/">Giornale di Sicilia</a>. Ero stato l'unico giornalista occidentale ad ottenere il visto d'ingresso in Albania che in quel periodo viveva la sua rivoluzione culturale di stile maoista. <br/> Questi stessi articoli sono stati ripresi nel mio primo libro "Memorie di un vecchio cronista".
          </p>
        </div>
        {albaniaPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
