import { useContext } from 'react';
import UsersProvider from '../context/UsersProvider';

const useUsers = () => {
    return useContext(UsersProvider);
}

export default useUsers;