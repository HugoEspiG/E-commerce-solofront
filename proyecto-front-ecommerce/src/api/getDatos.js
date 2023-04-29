
export class getDatos {

    static getSala(data) {
        const user = {
            nombre: data.nombre,
            Nsala: data.Nsala
        }
        return fetch(`http://localhost:8085/api/Hall/${user.Nsala}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            bodyType: 'json'
        })

    }

    static getUsers(Nsala){
        return fetch(`http://localhost:8085/${Nsala}/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            bodyType: 'json'
        })
    }

}