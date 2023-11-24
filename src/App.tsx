import { Provider } from 'react-redux'
import './App.css'
import { NavBar } from './components/NavBar'
import { TableHome } from './components/TableHome'
import { store } from './store'



function App() {
  

  return (
    <Provider store={store}>
    <NavBar/>
    <TableHome/>
    </Provider>
  )
}

export default App
