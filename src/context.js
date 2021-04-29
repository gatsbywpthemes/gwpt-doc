import React, { createContext, useState } from "react"

export const SearchContext = createContext()

const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState("")
  return (
    <SearchContext.Provider value={{ results, setResults, query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
