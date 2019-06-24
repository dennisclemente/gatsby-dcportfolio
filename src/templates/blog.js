import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title}/>
      <p>{!props.data.contentfulBlogPost.publishedDate ? "---empty---" : props.data.contentfulBlogPost.publishedDate}</p>
      <p>{!props.data.contentfulBlogPost.body ? "---empty---" : documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </p>
      </Layout>
  )}
export default Blog
