import React from 'react';
import * as S from './Sidebar.style';
import Text from '../Text/Text';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    location.assign('/login');
  };
  return (
    <S.SidebarContainer>
      <Text style={{ fontSize: '24px' }} weight={700} color="neutral.light">
        Contractors
      </Text>

      <S.SidebarContent>
        <S.SidebarMenu>
          {localStorage.getItem('is_admin') != 1 && (
            <Text
              color="neutral.light"
              onClick={() => navigate(`/`)}
              style={{ cursor: 'pointer' }}
            >
              Home
            </Text>
          )}

          {localStorage.getItem('is_admin') == 1 && (
            <Text
              color="neutral.light"
              onClick={() => navigate(`/dashboard`)}
              style={{ cursor: 'pointer' }}
            >
              Dashboard
            </Text>
          )}

          {localStorage.getItem('is_admin') != 1 && (
            <Text
              color="neutral.light"
              onClick={() => navigate(`/profile`)}
              style={{ cursor: 'pointer' }}
            >
              Profile
            </Text>
          )}

          {localStorage.getItem('is_admin') == 1 && (
            <Text
              color="neutral.light"
              onClick={() => navigate(`/categories`)}
              style={{ cursor: 'pointer' }}
            >
              Categories
            </Text>
          )}
        </S.SidebarMenu>

        <S.SidebarLogout>
          <Text color="neutral.light">{localStorage.getItem('email')}</Text>
          <Text
            color="neutral.light"
            onClick={handleLogout}
            style={{ cursor: 'pointer' }}
          >
            Logout
          </Text>
        </S.SidebarLogout>
      </S.SidebarContent>
    </S.SidebarContainer>
  );
};

export default Sidebar;
