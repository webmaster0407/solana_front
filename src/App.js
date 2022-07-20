import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Components
import Homepage from './Homepage';
import Stickers from './Stickers';
import Cheemsboy from './Cheemsboy';

const history = createBrowserHistory();
export default function App() {
     return (
          <Router history={history}>
               <Routes>
                    <Route
                         key='homepage'
                         element={<Homepage />}
                         exact
                         path={'/'}
                    />
                    <Route
                         key='stickers'
                         element={<Stickers />}
                         exact
                         path={'/stickers'}
                    />
                    <Route
                         key='cheemsboy'
                         element={<Cheemsboy />}
                         exact
                         path={'/Cheemni'}
                    />
               </Routes>
          </Router>
     );
}
