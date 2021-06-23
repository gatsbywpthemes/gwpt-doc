import React from "react"
import { Link } from "gatsby"
import {
  Heading,
  Item,
} from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/styles"

const SearchResults = ({ results }) => {
  return results.length ? (
    <>
      <Heading as="h2">{results.length} documents trouvé(s)</Heading>
      <ul>
        {results.map((result) => (
          <Item key={result.slug}>
            <Link
              to={`${result.slug}`}
              dangerouslySetInnerHTML={{ __html: result.title }}
            />
          </Item>
        ))}
      </ul>
      {results.length && <hr />}
    </>
  ) : (
    <p>Aucun document ne correspond pas à la requête.</p>
  )
}

export default SearchResults
