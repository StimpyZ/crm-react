import { useLoaderData } from 'react-router-dom'
import Clientes from '../components/Clientes'
import { getClientes } from '../services/clientes'

export async function loader () {

    const clientes = await getClientes()

    return clientes

}

function Index () {

    const clientes = useLoaderData()
    return (
        <>
            {clientes.length > 0
                ? (
                    <>
                        <h1 className="text-4xl text-blue-900 font-black">Clientes</h1>
                        <p className="mt-5">Administra tus clientes</p>
                        <table className="table-auto shadow-md mt-10 w-full w-lg">
                            <thead className="bg-blue-800">
                                <tr className="text-white">
                                    <th className="p-2">Cliente</th>
                                    <th className="p-2">Empresa</th>
                                    <th className="p-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clientes.map(cliente => (
                                        <Clientes
                                            key={cliente.id}
                                            clientes={cliente}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
                )
                : (
                    <>
                        <h1 className="text-4xl text-blue-900 font-black">No hay Clientes</h1>
                        <p className="mt-5">Agregue uno para comenzar</p>
                    </>
                )}
        </>
    )

}

export default Index
