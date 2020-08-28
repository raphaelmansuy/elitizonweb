import React from "react"
import SEO from "react-seo-component"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

export const SiteSEO = (props) => {

  const {
    description,
    title,
    image,
    siteUrl,
    siteName,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata() 

  return (
    <SEO
    title={title}
    titleTemplate = {siteName}
    description={description || `nothin’`}
    image={`${siteUrl}${image}`}
    pathname={siteUrl}
    siteLanguage={siteLanguage}
    siteLocale={siteLocale}
    twitterUsername={twitterUsername}
   />
  )

}