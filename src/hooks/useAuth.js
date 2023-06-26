import { json } from "react-router-dom"

function useAuth() {

    async function Login(email, password) {
        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        email, password
                    }
                )
            });

            const data = response.json()
            if (data.token !== '') {
                return data
            }
        } catch (error) {
            throw new Error("Error de conexión");
        }
    }

    async function Register(fullname, email, password, phone) {
       
        try {
            const response = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        fullname: fullname, email: email, password: password, phone: phone
                    }
                )
            });

            const data = await response.json()  
            console.log(data)
            return data

        } catch (error) {
            throw new Error("Error de conexión");
        }
    }

    return { Login, Register }
}

export { useAuth };