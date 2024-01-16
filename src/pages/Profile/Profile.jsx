import React, { useState } from 'react';
import * as S from './Profile.styles';
import Text from '../../components/Text/Text';
import TextInput from '../../components/TextInput/TextInput';
import SelectOptions from '../../components/Select/Select';
import { useCategoriesQuery } from '../../api/queries/categories.query';
import Button from '../../components/Button/Button';

const Profile = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [opts, setOpts] = useState([]);
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [image5, setImage5] = useState('');

  const fetchCategories = (data) => {
    const values = data.data.data;

    const opts = values.map((item) => {
      return {
        value: item.id,
        label: item.name,
        req: item.file_required,
      };
    });

    setOpts(opts);
  };

  const { isLoading: catLoading } = useCategoriesQuery(
    fetchCategories,
    () => {},
  );
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'banana', label: 'Banana' },
  ];

  const handleChange = (value) => {
    console.log(value);
    setSelectedValue(value);
  };

  const getFileBase64 = (file, setBase64) => {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBase64(reader.result);
        resolve(reader.result);
      };
    });
  };

  const imageChange1 = (e) => {
    e.preventDefault();
    const fileUploaded = e.target.files[0];
    const avatarURL = URL.createObjectURL(fileUploaded);
    getFileBase64(fileUploaded, setImage1);
  };

  const imageChange2 = (e) => {
    e.preventDefault();
    const fileUploaded = e.target.files[0];
    const avatarURL = URL.createObjectURL(fileUploaded);
    getFileBase64(fileUploaded, setImage2);
  };

  const imageChange3 = (e) => {
    e.preventDefault();
    const fileUploaded = e.target.files[0];
    const avatarURL = URL.createObjectURL(fileUploaded);
    getFileBase64(fileUploaded, setImage3);
  };


  const handleSubmit = () => {
    console.log(image1);
    console.log(image2);
  }
  return (
    <S.ProfileWrapper>
      <div>
        <Text style={{ fontSize: '24px' }} weight={700} color="neutral.dark">
          Update your profile <span>{localStorage.getItem('username')}</span>
        </Text>
      </div>
      <S.ProfileContainer>
        <S.FormContainer>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'space-between',
              marginBottom: '40px',
            }}
          >
            <div style={{ width: 'calc(50% - 10px)' }}>
              <TextInput
                icon={{}}
                style={{ width: '100%' }}
                label="First Name"
                placeholder="First Name"
                size="md"
                type="text"
              />
            </div>

            <div style={{ width: 'calc(50% - 10px)' }}>
              <TextInput
                icon={{}}
                style={{ width: '100%' }}
                label="Last Name"
                placeholder="Last Name"
                size="md"
                type="text"
              />
            </div>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <TextInput
              icon={{}}
              style={{ width: '100%' }}
              label="Email"
              placeholder="Email"
              size="md"
              type="email"
            />
          </div>

          <div style={{ marginBottom: '40px' }}>
            <TextInput
              icon={{}}
              style={{ width: '100%' }}
              label="Location"
              placeholder="Location"
              size="md"
              type="text"
            />
          </div>

          <div style={{ marginBottom: '50px' }}>
            <TextInput
              icon={{}}
              style={{ width: '50%' }}
              label="Mobile No"
              placeholder="Mobile No"
              size="md"
              type="text"
            />
          </div>

          <div style={{ marginBottom: '50px' }}>
            <SelectOptions
              options={opts}
              placeholder="Job Role"
              onChange={handleChange}
              value={selectedValue}
              width={634}
              menuWidth={634}
            />
          </div>

          {selectedValue.req && (
            <div>
              {selectedValue.req == 1 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                  }}
                >
                  <input type="file" onChange={imageChange1}></input>
                </div>
              )}

              {selectedValue.req == 2 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                  }}
                >
                  <input type="file" onChange={imageChange1}></input>
                  <input type="file" onChange={imageChange2}></input>
                </div>
              )}

              {selectedValue.req == 3 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                  }}
                >
                  <input type="file" onChange={imageChange1}></input>
                  <input type="file" onChange={imageChange2}></input>
                  <input type="file" onChange={imageChange3}></input>
                </div>
              )}

              {selectedValue.req == 4 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                  }}
                >
                  <input type="file"></input>
                  <input type="file"></input>
                  <input type="file"></input>
                  <input type="file"></input>
                </div>
              )}

              {selectedValue.req == 4 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                  }}
                >
                  <input type="file"></input>
                  <input type="file"></input>
                  <input type="file"></input>
                  <input type="file"></input>
                  <input type="file"></input>
                </div>
              )}
            </div>
          )}

          <div>
            <Button
              height="50px"
              width="100px"
              variant="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </S.FormContainer>
      </S.ProfileContainer>
    </S.ProfileWrapper>
  );
};

export default Profile;
