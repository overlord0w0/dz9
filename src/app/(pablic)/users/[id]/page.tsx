import React from 'react';
import {IUser} from "@/app/models/IUser";
import {getDataFromAPI} from "@/app/services/api.service";

type Params = {
    id: string
}

const Page = async ({params} : {params : Params}) => {

    const user: IUser= await getDataFromAPI.users.getUserById(params.id)

    return (
        <div>
            <h3>Номер платника податків:{user.id}</h3>
            <h3>Im'я Прізвище:{user.name}</h3>
            <h3>Кличка пса:{user.username}</h3>
            <h3>Емеіл:{user.email}</h3>
        </div>
    );
};

export default Page;