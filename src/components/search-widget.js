import React, { useContext, useState } from "react"
import { Index } from "lunr"
import { graphql, useStaticQuery } from "gatsby"
import SearchResults from "./search-results"
import { SearchContext } from "../context"

const SearchWidget = () => {
  const { query, setQuery, results, setResults } = useContext(SearchContext)
  const [value, setValue] = useState(query)
  const { LunrIndex } = useStaticQuery(graphql`
    query {
      LunrIndex
    }
  `)
  const index = Index.load(LunrIndex.index)
  const { store } = LunrIndex
  const handleChange = (e) => {
    setValue(e.target.value)
    if (e.target.value === "") {
      handleSearchSubmit()
    }
  }
  const handleSearchSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }
    const query = e?.target.elements.search.value || ""
    setQuery(query)
    try {
      const search = index.search(query).map(({ ref }) => {
        return {
          slug: ref,
          ...store[ref]
        }
      })
      setResults(search)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="search-wrapper" mb="5">
      <form role="search" onSubmit={handleSearchSubmit} mb="5">
        <label htmlFor="search" className="visually-hidden">
          Que cherchez vous ?
        </label>
        <div position="relative">
          <input
            id="search"
            type="search"
            placeholder="ex. useState"
            value={value}
            onChange={handleChange}
          />
          <button type="submit" aria-label="Submit search form">
            <span role="img" aria-hidden={true}>
              🔎
            </span>
          </button>
        </div>
      </form>
      {query && <SearchResults results={results} />}
    </div>
  )
}
export default SearchWidget
