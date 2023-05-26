import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout () {

    const location = useLocation()

    return (
        <div className="md:min-h-screen md:flex">
            <aside className="md:w-1/4 bg-blue-900 md:min-h-screen px-5 py-10">
                <h1 className="text-4xl text-center font-black text-white">
                    CRM - Clientes
                </h1>

                <nav className="mt-10">
                    <Link
                        className={`${
                            location.pathname === '/'
                                ? 'text-blue-300'
                                : 'text-white'
                        } text-2xl transition hover:text-blue-300 block`}
                        to="/"
                    >
                        Clientes
                    </Link>
                    <Link
                        className={`${
                            location.pathname === '/clientes/nuevo'
                                ? 'text-blue-300'
                                : 'text-white'
                        } text-2xl transition hover:text-blue-300 block`}
                        to="/clientes/nuevo"
                    >
                        Nuevo Cliente
                    </Link>
                </nav>
            </aside>
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>
    )

}

export default Layout
