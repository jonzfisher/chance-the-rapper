import React from "react";
import Link from 'gatsby-link'

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
  }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="song-post-container"
       style={{margin: '0 auto', width:'30rem'}}
      >
      <Link to="/songs/">
        Back
      </Link>
      <div className="song-post">
        <h1>{frontmatter.title}</h1>
        <h2>Track {frontmatter.track}</h2>
        <div
          className="song-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query SongPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        track
        path
        title
      }
    }
  }
`;
