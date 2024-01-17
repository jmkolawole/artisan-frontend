import React, { useState } from 'react';
import * as S from './Profile.styles';
import Text from '../../components/Text/Text';
import TextInput from '../../components/TextInput/TextInput';
import SelectOptions from '../../components/Select/Select';
import { useNavigate } from 'react-router-dom';
import {
  useCategoriesQuery,
  useUpdateUser,
  useUserQuery,
} from '../../api/queries/categories.query';
import Button from '../../components/Button/Button';
import { useQueryClient } from 'react-query';

const Profile = () => {
  
  const [selectedValue, setSelectedValue] = useState([]);
  const [opts, setOpts] = useState([]);
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [image5, setImage5] = useState('');

  const queryClient = useQueryClient();
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [category, setsetCategory] = useState('');

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

  const fetchUser = (data) => {
    if (data.data.data.first_name) {
      setFirstName(data.data.data.first_name);
    }
    if (data.data.data.last_name) {
      setLastName(data.data.data.last_name);
    }
    if (data.data.data.email) {
      setEmail(data.data.data.email);
    }

    if (data.data.data.location) {
      setLocation(data.data.data.location);
    }

    if (data.data.data.phone) {
      setPhone(data.data.data.phone);
    }

    if (data.data.data.category_id) {
      const val = opts.find((item) => {
        return item.value == data.data.data.category_id;
      });

      setSelectedValue(val);
    }
  };

  const {} = useUserQuery(localStorage.getItem('user_id'), fetchUser, () => {});

  const updateSuccess = (data) => {
    navigate('/');
    queryClient.invalidateQueries({
      queryKey: ["user", localStorage.getItem('user_id')],
    });

    

  };

  const { mutate } = useUpdateUser(updateSuccess, () => {});

  const handleChange = (value) => {
    setImage1('');
    setImage2('');
    setImage3('');
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
    if (!selectedValue.req) {
      return;
    }
    if (selectedValue?.req == 3) {
      if (!image1 && !image2 && !image3) {
        setError('Please fill all fields and upload all documents');
        return;
      }
    }

    if (selectedValue?.req == 2) {
      if (!image1 && !image2) {
        setError('Please fill all fields and upload all documents');
        return;
      }
    }

    if (!first_name && !last_name && !email && !location && phone) {
      setError('Please fill all fields and upload all documents');
      return;
    }

    //Upload here
    let images;
    if (selectedValue?.req === 1) {
      images = { image1 };
    }
    if (selectedValue?.req === 2) {
      images = { image1, image2 };
    }
    if (selectedValue?.req === 3) {
      images = { image1, image2, image3 };
    }
    const user = {
      user_id: localStorage.getItem('user_id'),
      first_name,
      last_name,
      email,
      location,
      phone,
      category_id: selectedValue.value,
      ...images,
    };

    mutate(user);

    console.log(first_name, last_name, email, location, phone, selectedValue);
  };
  return (
    <S.ProfileWrapper>
      <div>
        <Text style={{ fontSize: '24px' }} weight={700} color="neutral.dark">
          Update your profile <span>{localStorage.getItem('email')}</span>
        </Text>
        {error && <Text color="error.50">{error}</Text>}
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
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
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
              disabled={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '50px' }}>
            <SelectOptions
              options={opts ? opts : []}
              placeholder="Job Role"
              onChange={handleChange}
              value={selectedValue}
              width={634}
              menuWidth={634}
            />
          </div>

          {selectedValue?.req && (
            <div>
              {selectedValue?.req == 1 && (
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

              {selectedValue?.req == 2 && (
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

              {selectedValue?.req == 3 && (
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

              {selectedValue?.req == 4 && (
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

              {selectedValue?.req == 4 && (
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

          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'right',
            }}
          >
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
