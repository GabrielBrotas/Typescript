interface TechObject {
    title: string;
    experience: number
}

interface CreateUserData {
    name?: string; // como após o name tem uma interrogação significa que é opcional
    email: string; // Obrigatório
    password?: string; // Obrigatório
    techs: Array<string | TechObject> // array de strings ou obje
}

export default function createUser({name = '', email, password}: CreateUserData) {
    const user = {
        name, 
        email,
        password,
    }

    return user
}