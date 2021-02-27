import GlobalStyle from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Main from './pages/Main'
import Details from './pages/Details'

import light from './styles/themes/light';
import dark from './styles/themes/dark';   

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header changeTheme={toggleTheme} theme={theme.title}/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/country/:name" component={Details}/>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
