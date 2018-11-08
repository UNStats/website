import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, StaticQuery, graphql } from "gatsby";
import { Head, Header, Provider } from "@undataforum/components";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            url
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description, siteUrl }
      }
    }) => (
      <Provider>
        <Fragment>
          <Head
            title={title}
            description={description}
            url={siteUrl}
            noRobots
          />
          <Header
            link={({ href, text }) => <Link to={href}>{text}</Link>}
            links={[
              {
                href: "/blog",
                text: "Blog"
              },
              {
                href: "/committee",
                text: "Committee"
              }
            ]}
          />
          {children}
        </Fragment>
      </Provider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
