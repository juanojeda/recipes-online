import React from "react";
import App from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Juan's recipes</title>
          <meta name="theme-color" content="#ffffff" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
