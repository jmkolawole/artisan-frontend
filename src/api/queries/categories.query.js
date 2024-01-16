import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
//import { apiUrl } from '..';
//const apiUrl = 'http://localhost:8000/api/v1';
const apiUrl = 'https://jimohkolawole.xyz/api/v1';
const fetchCategories = () => {
  const result = axios.get(`${apiUrl}/categories`);
  return result;
};

const fetchUsers = () => {
  const result = axios.get(`${apiUrl}/users`);
  return result;
}

const fetchUser = (id) => {
  const result = axios.get(`${apiUrl}/users/${id}`);
  return result;
}


export const useCategoriesQuery = (onSucess, onError) => {
  return useQuery('categories', fetchCategories, {
    onSuccess: onSucess,
    onError: onError,
    keepPreviousData: true,
    
  });
}


export const useUsersQuery = (onSucess, onError) => {
  return useQuery('users', fetchUsers, {
    onSuccess: onSucess,
    onError: onError,
    keepPreviousData: true,
  });
}

export const useUserQuery = (id, onSucess, onError) => {
  return useQuery(['user', id ], () => fetchUser(id), {
    onSuccess: onSucess,
    onError: onError,
    keepPreviousData: true,
  });
}

const updateUser = (user) => {
  console.log(JSON.stringify(user));
  const result = axios.post(`${apiUrl}/user/update/${user.user_id}`, user);
  return result;
};

export const useUpdateUser = (onSuccess, onError) => {
  return useMutation(updateUser, {
    onSuccess: onSuccess,
    onError: onError,
  });
};