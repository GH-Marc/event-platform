import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ofern801zd01z4g7t216jf/master",
  cache: new InMemoryCache()
});
