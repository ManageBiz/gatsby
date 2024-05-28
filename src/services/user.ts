import { get } from "../utils/api"
import { AxiosResponse } from 'axios';

interface User {
    id: string;
    name: string;
    email: string;
}

// export const fetchUserDetails = async (userId: string): Promise<AxiosResponse<User>> => {
//     return get<User>(`/users/${userId}`);
// };

export const fetchDetails = async (): Promise<AxiosResponse<User>> => {
    return get(`/users`);
};

