import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Index, { loader as ClientesLoader } from './pages/Index'
import NuevoCliente, { action as NuevoClienteAction } from './pages/NuevoCliente'
import ErrorPage from './components/ErrorPage'
import EditarCliente, { action as EditarClienteAction, loader as EditarClientesLoader } from './pages/EditarCliente'
import { action as DeleteClienteAction } from './components/Clientes'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />,
                loader: ClientesLoader,
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente />,
                action: NuevoClienteAction,
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/:id/editar',
                element: <EditarCliente />,
                action: EditarClienteAction,
                loader: EditarClientesLoader,
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/:id/eliminar',
                action: DeleteClienteAction
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
