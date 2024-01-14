import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import * as S from './Layout.style';
import { isLoggedIn } from '../../api/auth';

const Layout = () => {
  if (!isLoggedIn()) {
    location.assign('/login');
    return <></>;
  }
  return (
    <S.PageContainer>
      <Sidebar />
      <S.PageContent>
        <Outlet />
      </S.PageContent>
    </S.PageContainer>
  );
};

export default Layout;
