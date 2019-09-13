
import React from 'react'
import ReactDOM from 'react-dom'

import App from '../react/components/App'
import RedBox from 'redbox-react'

import ApolloClient from 'apollo-boost';
import  { ApolloProvider } from "@apollo/react-hooks";

export const client = new ApolloClient({});

document.addEventListener('DOMContentLoaded', () => {

  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        ReactDOM.render(
          <ApolloProvider client={client}>
          <App />
          </ApolloProvider>, reactElement)
      } catch (e) {
        ReactDOM.render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      ReactDOM.render(
        <ApolloProvider client={client}>
        <App />
        </ApolloProvider>, reactElement)
    }
  }
})