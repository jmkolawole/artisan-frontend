import React, { useState } from 'react';
import { colors } from '../../utils';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import Icon from '../../components/Icon/Icon';
import TextInput from '../../components/TextInput/TextInput';
import Checkbox from '../../components/Checkbox/Checkbox';
import SelectOptions from '../../components/Select/Select';
import Avatar from '../../components/Avatar/Avatar';
import Tag from '../../components/Tag/Tag';
import Menu from '../../components/Menu/Menu';
import RegularModal from '../../components/Modals/RegularModal';

const Test = () => {
  // React -select
  const [selectedValue, setSelectedValue] = useState([]);

  // Menu
  const [showMenu, setShowMenu] = useState(false);

  //Modal
  const [showModal, setShowModal] = useState(false);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'banana', label: 'Banana' },
  ];

  const handleClick = () => {
    console.log(selectedValue);
    setSelectedValue([]);
  };

  const handleChange = (value) => {
    console.log(value);
    setSelectedValue(value);
  };
  return (
    <div style={{ padding: '20px' }}>
      {/* Colors */}
      <div
        style={{
          backgroundColor: 'pink',
          paddingBottom: '20px',
          marginBottom: '20px',
        }}
      >
        <div>
          <h4>Neutral</h4>
          <div style={{ display: 'flex', width: '100%' }}>
            {Object.entries(colors.neutral).map((item) => {
              return (
                <div
                  key={item}
                  style={{
                    width: '200px',
                    backgroundColor: item[1],
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'green',
                  }}
                >
                  {item[0]} ({item[1]})
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h4>Primary</h4>
          <div style={{ display: 'flex', width: '100%' }}>
            {Object.entries(colors.primary).map((item) => {
              return (
                <div
                  key={item}
                  style={{
                    width: '200px',
                    backgroundColor: item[1],
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'green',
                  }}
                >
                  {item[0]} ({item[1]})
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h4>Error</h4>
          <div style={{ display: 'flex', width: '100%' }}>
            {Object.entries(colors.error).map((item) => {
              return (
                <div
                  key={item}
                  style={{
                    width: '200px',
                    backgroundColor: item[1],
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'green',
                  }}
                >
                  {item[0]} ({item[1]})
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Button height="30px" width="100px" variant="primary" outline={true}>
        Kolawole
      </Button>
      <Text size="sm">Kolawole</Text>
      <br />
      <Icon name="link" weight={0} />
      <Menu show={showMenu} setShow={setShowMenu}>
        <div
          style={{ backgroundColor: 'red', width: '200px', height: '300px' }}
        >
          <Text>Hello</Text>
        </div>
      </Menu>
      <Icon name="chat" weight={0} onClick={() => setShowMenu(!showMenu)} />

      <TextInput
        icon={{}}
        label="Input Label"
        placeholder="Placeholder"
        size="md"
        type="text"
        width="150px"
        action={true}
        actionTitle='Send'
        buttonClicked={() => alert('hiuuu')}
      />

      <Checkbox checked={false} onCheck={() => {}} />
      <br />

      <div style={{ display: 'flex' }}>
        <SelectOptions
          options={options}
          placeholder="Industry"
          onChange={handleChange}
          value={selectedValue}
          width={400}
          menuWidth={500}
        />
        <Button
          height="50px"
          width="100px"
          variant="primary"
          onClick={handleClick}
        >
          Reset
        </Button>
      </div>
      <br />
      <div>
        <Avatar resource="https://i.pravatar.cc" size="24x24" type="photo" />
      </div>
      <br />
      <Tag write bg="primary.200" height="40px" hPadding={12} style={{display: 'flex', gap: '10px'}}>
        <Text size="xs2" weight={400} color="neutral.light">
          Product Management
        </Text>
        <Icon
          name="x"
          size="10x10"
          color="neutral.light"
          style={{ cursor: 'pointer' }}
        />
      </Tag>

      <br />

      <Button
        height="50px"
        width="100px"
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </Button>

      <div>
        <RegularModal
          buttonVariant="primary"
          confirmButtonWidth="231px"
          cancelButtonWidth="130px"
          cancelAction={() => {
            setShowModal(false);
          }}
          cancelText="Not Yet"
          confirmAction={() => {}}
          confirmText={
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}
            >
              <Icon name="key" weight={0} color="neutral.light" />
              <Text color="neutral.light" size="sm">
                Ask for verification
              </Text>
            </div>
          }
          height={592}
          show={showModal}
          showButtons={true}
          title="Modal Title"
          width={680}
        >
          <div
            style={{
              paddingTop: '24px',
              paddingRight: '28px',
              paddingLeft: '28px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Icon
                name="x"
                size="12x12"
                color="neutral.200"
                onClick={() => {
                  setShowModal(false);
                }}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div>
              <Text size="sm" weight={600}>
                Add a verifier
              </Text>

              <Text size="sm" style={{ marginTop: '12px' }}>
                Ask a co-worker or someone you have worked with to verify your
                work
              </Text>
            </div>
          </div>
        </RegularModal>
      </div>
    </div>
  );
};

export default Test;
