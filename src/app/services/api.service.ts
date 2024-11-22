import {IUser} from "@/app/models/IUser";
import {baseUrl, endPoints} from "@/app/urls/urls";

export const getDataFromAPI = {
    users: {
        getUsers: async ():Promise<IUser[]> => {
            return await fetch(baseUrl + endPoints.users)
                .then(value => value.json())
        },
        getUserById: async (userId: string) => {
            return await fetch(`${baseUrl}${endPoints.users}/${userId}`)
                .then(value => value.json())
        }
    }
}