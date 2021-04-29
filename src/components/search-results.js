import React from "react"
import { Link } from "gatsby"
import {
  Container,
  LogoContainer,
  List,
  Heading,
  Item,
  SubItem
} from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/styles"

const SearchResults = ({ results }) => {
  return results.length ? (
    <>
      <Heading as="h2">{results.length} documents trouvé(s)</Heading>
      <List>
        {results.map((result) => (
          <li key={result.slug}>
            <Link
              to={`${result.slug}`}
              dangerouslySetInnerHTML={{ __html: result.title }}
            />
          </li>
        ))}
      </List>
    </>
  ) : (
    <p>Aucun document ne correspond pas à la requête.</p>
  )
}

export default SearchResults
