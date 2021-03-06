
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
`;

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={{}}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}