import React from "react"
import { Link } from "gatsby"
import {
  Heading,
  Item,
} from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/styles"

const SearchResults = ({ results }) => {
  return results.length ? (
    <>
      <Heading as="h2">{results.length} documents found</Heading>
      <ul>
        {results.map((result) => (
          <Item key={result.slug}>
            <Link
              to={`${
                result.slug.endsWith("/")
                  ? result.slug.slice(0, -1)
                  : result.slug
              }`}
              dangerouslySetInnerHTML={{ __html: result.title }}
            />
          </Item>
        ))}
      </ul>
      {results.length && <hr />}
    </>
  ) : (
    <p>There is no results for this request, try something else.</p>
  )
}

export default SearchResults
