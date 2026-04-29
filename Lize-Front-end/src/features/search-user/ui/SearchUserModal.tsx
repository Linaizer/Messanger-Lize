import { useState } from "react";
import axiosInstance from "../../../shared/api/axios";

interface SearchUserModalProps {
    onClose: ()=> void
    onSelectUser: (user:{id:number, name:string})=> void
}


const SearchUserModal = ({onClose, onSelectUser}:SearchUserModalProps) => {
    const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true)
        try {
            const response = await axiosInstance.get(`/api/users?search=${search}`);
            setUsers(response.data);
        } finally {

            setIsLoading(false)
        }
    };
    return (
        <div>
            {isLoading ? <div>Loading</div> : ''}
            <div>
                <input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
                {users.map((user) => (
                    <div key={user.id} onClick={()=>{onSelectUser(user); onClose()}} >{user.name}</div>
                ))}
            </div>
        </div>
    )
};

export default SearchUserModal;
