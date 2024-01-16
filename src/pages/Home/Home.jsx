import React, { useState } from 'react';
import { useUserQuery } from '../../api/queries/categories.query';
import Text from '../../components/Text/Text';

const apiUrl = 'http://localhost:8000/api/v1';
//const apiUrl = 'https://jimohkolawole.xyz/api/v1';

const Home = () => {
  const [files, setFiles] = useState([]);
  const fetchUser = (data) => {
    if (data?.data?.data?.files) {
      setFiles(data.data.data.files);
    }
  };

  const {} = useUserQuery(localStorage.getItem('user_id'), fetchUser, () => {});

  return (
    <div>

      <Text style={{ fontSize: '24px', marginLeft: '30px', marginTop: '40px' }} weight={700} color="neutral.dark">
        Welcome {localStorage.getItem('email')}
      </Text>

      <div style={{ marginTop: '60px', padding: '40px 30px' }}>
        <h4 style={{borderBottom: '1px solid #ccc', paddingBottom: '5px'}}>Uploaded Files</h4>
        {files.length  > 0 && (
          <div
            style={{
              display: 'flex',
              width: '100%',
              gap: '40px',
              marginTop: '10px',
              paddingTop: '30px',
            }}
          >
            {files.map((file) => {
              let path = file.image.split('/');
              path = path[1];

              return (
                <img
                  style={{ width: '300px', height: '200px' }}
                  alt={'My files'}
                  src={`${apiUrl}/image/${path}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
