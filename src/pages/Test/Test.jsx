import React, { useState } from 'react';
import { colors } from '../../utils';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import Icon from '../../components/Icon/Icon';
import TextInput from '../../components/TextInput/TextInput';
import Checkbox from '../../components/Checkbox/Checkbox';
import SelectOptions from '../../components/Select/Select';

const Test = () => {
  // React -select
  const [selectedValue, setSelectedValue] = useState([]);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'banana', label: 'Banana' },
  ];

  const handleClick = () => {
    console.log(selectedValue);
    setSelectedValue([]);
  }
  
  const handleChange = (value) => {
    setSelectedValue(value);
  }
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
      <Button height="30px" width="100px" variant="error">
        Kolawole
      </Button>
      <Text size="sm">Kolawole</Text>
      <Icon name="bell" weight={0} />
      <Icon name="message" weight={0} />

      <TextInput
        icon={{}}
        label="Input Label"
        placeholder="Placeholder"
        size="sm"
        type="text"
        width="150px"
      />

      <Checkbox checked={false} onCheck={() => {}} />
      <br />

      <div style={{ display: 'flex' }}>
        <SelectOptions options={options} placeholder="Industry" onChange={handleChange} value={selectedValue}/>
        <Button height="50px" width="100px" variant="primary" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Test;
