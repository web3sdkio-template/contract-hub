import React from "react";
import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import Web3sdkioGuideFooter from "../components/guide/Web3sdkioGuideFooter";
import Header from "../components/Header";
import Head from "next/head";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdkio Contract Example Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="web3sdkio Example Repository to Showcase How To Use web3sdkio's NFT contracts, Marketplace contracts, and token contracts. "
        />
        <meta
          name="keywords"
          content="web3sdkio nft contract example, web3sdkio nft tutorial, web3sdkio nft guide, web3sdkio marketplace, web3sdkio marketplace guide, web3sdkio token guide"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Web3sdkioGuideFooter />
    </Web3sdkioProvider>
  );
}

export default MyApp;
