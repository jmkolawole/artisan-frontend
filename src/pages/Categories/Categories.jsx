import React, { useState } from 'react';
import * as S from './Categories.style';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useCategoriesQuery } from '../../api/queries/categories.query';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const fetchSuccess = (data) => {
    setCategories(data?.data?.data);
  };

  const { isLoading } = useCategoriesQuery(fetchSuccess, () => {});
  return (
    <S.CategoryWrapper>
      <S.HeaderSection>
        <Text style={{ fontSize: '24px' }} weight={700} color="neutral.dark">
          Categories
        </Text>
        <Button height="50px" width="100px" variant="primary">
          Create New
        </Button>
      </S.HeaderSection>

      <S.BodySection>
        <S.Header>
          <div style={{ width: '15%' }}>
            <Text style={{ fontSize: '16px' }} weight={600}>
              ID
            </Text>
          </div>
          <div style={{ width: '45%' }}>
            <Text style={{ fontSize: '16px' }} weight={600}>
              NAME
            </Text>
          </div>

          <div style={{ width: '40%' }}>
            <Text
              style={{
                fontSize: '16px',
                display: 'flex',
                justifyContent: 'center',
              }}
              weight={600}
            >
              FILES REQUIRED
            </Text>
          </div>
        </S.Header>

        <S.Body>
          {isLoading
            ? 'Loading...'
            : categories.map((category) => {
                return (
                  <S.Item key={category.id}>
                    <div style={{ width: '15%' }}>
                      <Text>{category.id}</Text>
                    </div>
                    <div style={{ width: '45%' }}>
                      <Text>{category.name}</Text>
                    </div>
                    <div
                      style={{
                        width: '40%',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Text>{category.file_required}</Text>
                    </div>
                  </S.Item>
                );
              })}
        </S.Body>
      </S.BodySection>
    </S.CategoryWrapper>
  );
};

export default Categories;
