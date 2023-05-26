/* eslint-disable no-useless-escape */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-control-regex */
// eslint-disable no-useless-escape
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { addCliente } from '../services/clientes'

export async function action ({ request }) {

    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const email = formData.get('email')

    const errores = []

    if (Object.values(data).includes('')) {

        errores.push('Todos los campos son obligatorios')

    }

    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

    if (!regex.test(email)) {

        errores.push('El email no es válido')

    }

    if (Object.keys(errores).length) {

        return errores

    }
    await addCliente(data)
    return redirect('/')

}

function NuevoCliente () {

    const navigate = useNavigate()
    const errores = useActionData()

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">
                Llena todos los campos para registrar un nuevo cliente
            </p>

            <div className="flex justify-end">
                <button
                    onClick={() => navigate(-1)}
                    className="transition bg-blue-600 hover:bg-blue-800 px-4 py-2 inline-block text-white rounded leading-none w-[88px]"
                >
                    Volver
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
                {errores?.length && errores.map((error, i) => (
                    <Error key={i}>{error}</Error>
                ))}
                <Form
                    method='POST'
                    noValidate
                >
                    <Formulario />
                    <input
                        type="submit"
                        className="transition bg-blue-600 hover:bg-blue-800 px-4 py-4 inline-block text-white rounded leading-none w-full mt-5 text-lg cursor-pointer"
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    )

}

export default NuevoCliente
