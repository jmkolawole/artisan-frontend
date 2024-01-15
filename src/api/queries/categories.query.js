import axios from 'axios';
import { useQuery } from 'react-query';
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