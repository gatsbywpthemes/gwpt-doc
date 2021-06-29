const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const marked = require("marked")
const striptags = require(`striptags`)
const lunr = require(`lunr`)
const { GraphQLJSONObject } = require("graphql-type-json")

exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (source, args, context, info) => {
          const mdNodes = context.nodeModel.getAllNodes({
            type: `Mdx`,
          })
          const type = info.schema.getType(`Mdx`)
          return createIndex(mdNodes, type, cache)
        },
      },
    },
  })
}

const createIndex = async (mdNodes, type, cache) => {
  const cacheKey = `IndexLunr`
  const cached = await cache.get(cacheKey)
  if (cached) {
    return cached
  }
  const documents = []
  const store = {}
  // iterate over all nodes
  for (const node of mdNodes) {
    const { rawBody } = node
    const { slug } = node.fields
    const { title } = node.frontmatter
    //const slug = await type.getFields().slug.resolve(node)
    //const html = await type.getFields().html.resolve(node)
    // once html is resolved, add a slug-content object to the documents array
    documents.push({
      slug,
      title,
      content: striptags(marked(rawBody)).replace(/&quot;/g, ""),
    })
    console.log(title, slug)
    store[slug] = {
      title,
    }
  }
  const index = lunr(function () {
    this.ref("slug")
    this.field("content")
    for (const doc of documents) {
      this.add(doc)
    }
  })

  const json = { index: index.toJSON(), store }
  await cache.set(cacheKey, json)
  return json
}
