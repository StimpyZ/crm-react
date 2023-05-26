import { Form, redirect, useNavigate } from 'react-router-dom'
import { deleteCliente } from '../services/clientes'

export async function action ({ params }) {

    await deleteCliente(params.id)
    return redirect('/')

}

function Clientes ({ clientes }) {

    const { nombre, telefono, email, empresa, id, notas } = clientes
    const navigate = useNavigate()

    return (
        <tr className='border-b'>
            <td className='p-6 space-y-1 text-center'>
                <p className="text-2xl">{nombre}</p>
                <p className="text-gray-600">{empresa}</p>
                <p className="text-gray-600">{notas}</p>
            </td>
            <td className='p-6 space-y-1 text-center'>
                <p className="text-2xl text-gray-700"><span className="uppercase text-black">Email: </span>{email}</p>
                <p className="text-2xl text-gray-700"><span className="uppercase text-black">Telefono: </span>{telefono}</p>
            </td>
            <td className='p-6'>
                <div className='flex justify-center gap-2'>
                    <Form
                        method='POST'
                        action={`/clientes/${id}/eliminar`}
                        onSubmit={(e) => {

                            if (!confirm('¿Estas seguro de eliminar el cliente?')) {

                                e.preventDefault()

                            }

                        }}
                    >
                        <button className="transition inline bg-red-500 hover:bg-red-600 px-4 py-2  text-white rounded leading-none w-[88px]"
                            type='submit'
                        >
                    Eliminar
                        </button>
                    </Form>
                    <button
                        onClick={() => navigate(`/clientes/${id}/editar`)}
                        className="transition inline bg-blue-600 hover:bg-blue-800 px-4 py-2  text-white rounded leading-none w-[88px]"
                    >
                    Editar
                    </button>
                </div>
            </td>
        </tr>
    )

}

export default Clientes
