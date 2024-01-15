import React, { useState } from 'react';
import * as S from './Dashboard.styles';
import Text from '../../components/Text/Text';
import { useCategoriesQuery, useUsersQuery } from '../../api/queries/categories.query';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  
  const fetchCategories = (data) => {
    setCategories(data.data.data);
  };

  const fetchUsers = (data) => {
   setUsers(data?.data?.data);
  }

  const { isLoading: catLoading } = useCategoriesQuery(fetchCategories, () => {});

  const { isLoading } = useUsersQuery(fetchUsers, () => {});

  

  

  return (
    <S.DashboardContainer>
      <S.LeftSection>
        <Text style={{ fontSize: '24px' }} weight={700} color="neutral.dark">
          Users
        </Text>
        <S.Header>
          <div style={{ width: '10%' }}>
            <Text style={{ fontSize: '16px' }} weight={600}>
              ID
            </Text>
          </div>
          <div style={{ width: '35%' }}>
            <Text style={{ fontSize: '16px' }} weight={600}>
              Name
            </Text>
          </div>
          <div style={{ width: '20%' }}>
            <Text style={{ fontSize: '16px' }} weight={600}>
              Category
            </Text>
          </div>
          <div style={{ width: '20%' }}>
            <Text style={{ fontSize: '16px' }} weight={600}>
              Files uploaded
            </Text>
          </div>
          <div style={{ width: '25%' }}>
            <Text style={{ fontSize: '16px' }} weight={600}>
              Status
            </Text>
          </div>
        </S.Header>

        <S.Body>
          {
            users.map((user, index) => {
              return <S.Item key={user.id}>
              <div style={{ width: '10%' }}>
                <Text style={{ fontSize: '14px' }} weight={400}>
                  {index + 1}
                </Text>
              </div>
              <div style={{ width: '35%' }}>
                <Text style={{ fontSize: '14px' }} weight={400}>
                  {`${user.first_name} ${user.last_name}`}
                </Text>
              </div>
              <div style={{ width: '20%' }}>
                <Text style={{ fontSize: '14px' }} weight={400}>
                  {user.category?.name}
                </Text>
              </div>
              <div style={{ width: '20%' }}>
                <Text style={{ fontSize: '14px' }} weight={400}>
                  {`${user.files.length} / ${user.category.file_required}`}
                </Text>
              </div>
              <div style={{ width: '25%' }}>
                <Text style={{ fontSize: '14px' }} weight={400}>
                  {user.files.length / user.category.file_required >= 1 ? <span>Complete</span> : <span>Incomplete</span>}
                </Text>
              </div>
              </S.Item>
            })
          }

        
        </S.Body>
      </S.LeftSection>
      <S.RightSection>
        <Text style={{ fontSize: '20px' }} weight={600} color="neutral.dark">
          Categories
        </Text>
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {categories.map((cat) => {
            return <div key={cat.id}>{cat.name}</div>;
          })}
        </div>
      </S.RightSection>
    </S.DashboardContainer>
  );
};

export default Dashboard;
