import React from "react"
import { useTheme, Global } from "@emotion/react"
import GlobalStyle from "@rocketseat/gatsby-theme-docs/src/styles/global"

console.log(GlobalStyle)

const ExtendedGlobalStyles = () => {
  const theme = useTheme()
  return (
    <>
      <GlobalStyle />
      <Global
        styles={{
          html: {
            fontSize: "100%!important",
          },
          body: {
            fontFamily:
              "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          },
          "main p": {
            fontSize: "1.125rem",
            lineHeight: "1.5",
          },
          "main > div:first-of-type": {
            maxWidth: "max( calc(100% - 200px), 640px)",
          },
          "li p": {
            fontSize: "inherit",
          },
          a: {
            fontWeight: 500,
            textDecoration: "underline",
          },
          "a:hover": {
            textDecoration: "none",
          },
          "main h2": {
            borderBottom: "2px solid",
            paddingBottom: ".75rem",
            marginTop: "3rem",
          },
          hr: {
            margin: "2rem 0",
          },
          "pre.language-sh": {
            paddingTop: "1.5rem",
          },
          "pre.language-sh:before": {
            content: "none",
          },
          "code.inline-code:nth-of-type(n)": {
            fontSize: "100%",
            background: "transparent",
            color: theme.colors.code,
            padding: 0,
            lineHeight: "inherit",
            verticalAlign: "unset",
            textDecoration: "inherit",
          },
          ".gatsby-highlight .token-line:nth-of-type(n)": {
            fontSize: "unset",
          },
          ".steps > ul, .steps > ol": {
            padding: 0,
            listStylePosition: "inside",
          },
          ".steps > ol": {
            listStyle: "none",
            "& > li": {
              counterIncrement: "inst",
              position: "relative",
              paddingLeft: "2rem",
            },
            "& > li:before": {
              content: "counter(inst)",
              background: theme.colors.code,
              color: "white",
              borderRadius: "50%",
              width: "1.25rem",
              height: "1.25rem",
              display: "inline-block",
              textAlign: "center",
              lineHeight: "1.25rem",
              fontSize: "12px",
              fontWeight: "bold",
              position: "absolute",
              left: 0,
              top: ".25rem",
              opacity: 0.5,
            },
          },
          ".steps > ul > li, .steps > ol > li": {
            borderBottom: "1px solid #d6d6d6",
            marginBottom: ".5rem",
            paddingBottom: ".5rem",
          },
          ".gatsby-resp-image-wrapper": {
            margin: "1rem 0",
          },
          ".search-wrapper": {
            padding: "0 20px",
            marginBottom: "2rem",
            div: {
              position: "relative",
            },
            label: {
              display: "block",
              marginBottom: ".25rem",
              padding: 0,
            },
            input: {
              padding: ".5rem",
              fontSize: "1rem",
              width: "100%",
              background: `transparent`,
              border: `1px solid ${theme.colors.primary}`,
              fontFamily: "inherit",
              borderRadius: "4px",
            },
            "input::-webkit-search-cancel-button": {
              WebkitAppearance: "none",
            },
            "input::placeholder": {
              color: theme.colors.primary,
              opacity: 0.6,
            },
            button: {
              position: "absolute",
              right: "1px",
              top: "1px",
              bottom: "1px",
              padding: "0 .65rem",
              background: "rgb(222 209 230)",
              border: "none",
              WebkitAppearance: "none",
              borderRadius: "0 3px 3px 0",
            },
            h2: {
              padding: "0 0 0 10px",
            },
            ul: {
              listStyle: "none",
              padding: 0,
              li: {
                padding: 0,
              },
              "[aria-current='page']": {
                fontWeight: "bold",
              },
            },
          },
        }}
      />
    </>
  )
}

export default ExtendedGlobalStyles

/*
function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: ${theme.colors.background};
          text-rendering: optimizelegibility;
          -webkit-font-smoothing: antialiased;
          overflow-y: scroll;
        }

        h1 {
          font-size: 32px;
          color: ${theme.colors.title};
          font-weight: bold;
          margin-bottom: 24px;
        }

        h2 {
          font-size: 24px;
        }

        h3 {
          font-size: 18px;
        }

        h4 {
          font-size: 16px;
        }

        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.title};

          margin: 24px 0 16px 0;
          font-weight: bold;
        }

        p {
          color: ${theme.colors.text};
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 16px;
          font-weight: 400;
        }

        code.inline-code {
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          padding: 0.2em;
          background-color: #44475a;
          color: rgba(248, 248, 242);
          font-size: 14px;
          border-radius: 3px;
          font-feature-settings: 'clig' 0, 'calt' 0;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }

        h1 code.inline-code,
        h2 code.inline-code {
          font-size: calc(100% - 5px);
          padding: 4px;
        }

        a {
          color: ${theme.colors.text};
          font-weight: bold;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        blockquote {
          margin-bottom: 16px;
          width: 100%;

          p {
            padding: 1rem;
            border-radius: 5px;
            background: ${theme.colors.components.blockquote.background};
            color: ${theme.colors.components.blockquote.text};
            margin: 0;

            a {
              color: ${theme.colors.components.blockquote.text};
            }
          }
        }

        hr {
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        table {
          border-collapse: separate;
          border-spacing: 0 4px;
          margin-top: -4px;
          margin-bottom: 16px;
          width: 100%;

          th,
          td {
            margin: 0;
            color: ${theme.colors.text};
            background-color: ${theme.colors.shape};
            border: solid 1px ${theme.colors.shape};
            border-style: solid none;
            padding: 12px;

            :first-of-type {
              border-left-style: solid;
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
            }

            :last-child {
              border-right-style: solid;
              border-bottom-right-radius: 5px;
              border-top-right-radius: 5px;
            }
          }

          tr {
            th {
              color: ${theme.colors.title};
              text-align: left;
              font-weight: bold;
            }
          }
        }

        iframe {
          margin-bottom: 16px;
        }

        img {
          max-width: 100%;
        }

        ul,
        ol {
          color: ${theme.colors.text};
          padding-left: 15px;
          margin-bottom: 16px;

          li {
            line-height: 28px;
          }
        }

        li ul,
        li ol {
          margin-bottom: 0;
        }

        .gatsby-highlight {
          font-family: Hack, SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;

          position: relative;
          z-index: 0;
          margin: 0 0 16px 0;
          overflow: auto;

          .token {
            font-style: normal !important;
          }
        }

        pre[class*='language-'] code {
          font-family: inherit;
        }

        pre[class*='language-']::before {
          background: #d9d7e0;
          border-radius: 0 0 4px 4px;
          color: #232129;
          font-size: 12px;
          font-family: inherit;
          letter-spacing: 0.075em;
          line-height: 1;
          padding: 0.25rem 0.5rem;
          position: absolute;
          left: 1rem;
          text-align: right;
          text-transform: uppercase;
          top: 0;
        }

        pre[class~='language-js']::before,
        pre[class~='language-javascript']::before {
          content: 'js';
          background: #f7df1e;
        }

        pre[class~='language-jsx']::before {
          content: 'jsx';
          background: #61dafb;
        }

        pre[class~='language-typescript']::before,
        pre[class~='language-ts']::before {
          content: 'ts';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-tsx']::before {
          content: 'tsx';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-graphql']::before {
          content: 'GraphQL';
          background: #e10098;
          color: #fff;
        }

        pre[class~='language-html']::before {
          content: 'html';
          background: #005a9c;
          color: #fff;
        }

        pre[class~='language-css']::before {
          content: 'css';
          background: #ff9800;
          color: #fff;
        }

        pre[class~='language-mdx']::before {
          content: 'mdx';
          background: #f9ac00;
          color: #fff;
        }

        pre[class~='language-shell']::before {
          content: 'shell';
        }

        pre[class~='language-sh']::before {
          content: 'sh';
        }

        pre[class~='language-bash']::before {
          content: 'bash';
        }

        pre[class~='language-yaml']::before,
        pre[class~='language-yml']::before {
          content: 'yaml';
          background: #ffa8df;
        }

        pre[class~='language-markdown']::before {
          content: 'md';
        }

        pre[class~='language-json']::before,
        pre[class~='language-json5']::before {
          content: 'json';
          background: linen;
        }

        pre[class~='language-diff']::before {
          content: 'diff';
          background: #e6ffed;
        }

        pre[class~='language-text']::before {
          content: 'text';
          background: #fff;
        }

        pre[class~='language-flow']::before {
          content: 'flow';
          background: #e8bd36;
        }
      `}
    />
  );
}
*/
