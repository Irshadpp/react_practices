import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body.jsx'
import Sum from './components/Sum.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Body/>,
    },
    {
        path: '/sum',
        element: <Sum/>
    }
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
)
