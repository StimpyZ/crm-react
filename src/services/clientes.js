export async function getClientes () {

    try {

        const response = await fetch(import.meta.env.VITE_API_URL)
        const data = response.json()

        return data

    } catch (error) {

        throw new Error('No se pudo obtener los clientes')

    }

}

export async function getClienteById (id) {

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
        const data = response.json()

        return data

    } catch (error) {

        throw new Error('No se pudo obtener el cliente')

    }

}

export async function addCliente (data) {

    try {

        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json()

    } catch (error) {

        throw new Error('No se pudo agregar el cliente')

    }

}

export async function updateCliente (id, data) {

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await response.json()

    } catch (error) {

        throw new Error('No se pudo actualizar el cliente')

    }

}

export async function deleteCliente (id) {

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await response.json()

    } catch (error) {

        throw new Error('No se pudo eliminar el cliente')

    }

}
