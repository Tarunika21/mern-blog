import React from "react";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { listUsersAPI } from "../../APIServices/users/usersAPI";
import { useQuery } from "@tanstack/react-query";
//Dummy users data
const users = [
    {id:1, name:"Tarunika", isBlocked:false},
];


const UsersList = () =>{
    const {data, isError, isLoading, } = useQuery({
        queryKey:['users'],
        queryFn:listUsersAPI,
    });

    return(
        <div className = "container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Users List</h2>
            <div className="space-y-3">
                {data.map((user)=>(
                    <div
                     key = {user.id}
                     className = "flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                    >
                        <span className="font-medium">{user.username}-{user.accountType}</span>
                        <button className={`flex items-center gap-2 p-2 rounded text-white ${user.isBlocked? "bg-red-500" : "bg-green-500"}`}>
                            {user.isBlocked? (
                                <FiUserX className="text-xl"/>
                            ):(
                                <FiUserCheck className = "text-xl"/>
                            )}
                            {user.isBlocked? "Unblock":"Block"}
        
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsersList;