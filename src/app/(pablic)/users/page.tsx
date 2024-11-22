import React from 'react';
import {IUser} from "@/app/models/IUser";
import {getDataFromAPI} from "@/app/services/api.service";
import Link from "next/link";

const Page = async () => {

    const users: IUser[] = await getDataFromAPI.users.getUsers()

    return (
        <div>
            {
                users.map(user => <div key={user.id}><Link href={"/users/" + user.id}>{user.name}</Link></div>)
            }
        </div>
    );
};

export default Page;