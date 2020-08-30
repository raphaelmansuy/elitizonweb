import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import tw from "twin.macro"
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts"
import SEO from "../components/misc/seo"
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import Header from "../components/headers/light.js"
import Footer from "../components/footers/FiveColumnWithInputForm.js"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const PostContent = tw.div``


export default ({ data }) => {
  const {
    image,
    siteUrl,
    siteName,
    titleSeparator,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata()
  const { frontmatter, body, fields, excerpt } = data.mdx
  const { title, date, cover } = frontmatter

  const publishedDate = new Date(date).toISOString()

  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteName}
        titleSeparator={titleSeparator}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={publishedDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <AnimationRevealPage>
        <Header noanimation />
        <Container noanimation>
          <ContentWithPaddingXl>
            <PostContent className="markdown">
              <MDXRenderer>{body}</MDXRenderer>
            </PostContent>
          </ContentWithPaddingXl>
        </Container>
        <Footer noanimation />
      </AnimationRevealPage>
    </>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date
        cover {
          publicURL
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`
