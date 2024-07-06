import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body.jsx'
import Sum from './components/Sum.jsx'
import Ref from './components/Ref.jsx'
import Counter from './components/Counter.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Body/>,
    },
    {
        path: '/sum',
        element: <Sum/>
    },
    {
        path:'/:id',
        element: <Ref/>
    },
    {
        path:'/counter',
        element: <Counter/>
    }
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
)
