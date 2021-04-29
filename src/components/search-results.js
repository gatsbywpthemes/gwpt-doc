import React from "react"
import { Link } from "gatsby"

const SearchResults = ({ results }) => {
  return results.length ? (
    <>
      <h2>{results.length} documents trouvé(s)</h2>
      <ul>
        {results.map(result => (
          <li key={result.slug}>
            <Link
              to={`${result.slug}`}
              dangerouslySetInnerHTML={{ __html: result.title }}
            />
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p>Aucun document ne correspond pas à la requête.</p>
  )
}

export default SearchResults
