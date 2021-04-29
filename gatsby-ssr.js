import React from "react"
import SearchProvider from "./src/context"

export const wrapRootElement = ({ element }) => {
  return <SearchProvider>{element}</SearchProvider>
}
