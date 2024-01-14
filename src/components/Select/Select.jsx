import React from 'react';
import Select, { components } from 'react-select';
import PropTypes from 'prop-types';
import { colors, sizes } from '../../utils';
import Icon from '../Icon/Icon';

const SelectOptions = ({
  options,
  onChange,
  value,
  placeholder = 'Select...',
  width = 200,
  menuWidth = 240,
  controlHeight = 50,
  maxMenuContainerHeight = 200,
  multi=false
}) => {
  const styles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      width: width,
      fontFamily: 'Raleway',
      fontSize: sizes.s14,
      color: colors.neutral[100],
      paddingLeft: '20px',
      paddingRight: '15px',
      height: controlHeight,
      backgroundColor: colors.neutral[300],
      border: isFocused
        ? `1px solid ${colors.neutral[100]}`
        : `1px solid ${colors.neutral[200]}`,
      borderRadius: '6px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: colors.neutral[100],
      },
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: '6px',
      marginTop: '15px',
    }),
    menuList: (styles) => ({
      ...styles,
      paddingTop: '0px',
      paddingBottom: '0px',
      maxHeight: maxMenuContainerHeight,
      overflowY: 'scroll',
      '& :last-of-type': {
        ':after': {
          borderBottom: 'unset',
        },
      },
      borderRadius: '6px',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      fontFamily: 'Raleway',
      fontSize: sizes.s14,
      color: colors.neutral[100],
      padding: '16px 31px 16px 41px',
      cursor: 'pointer',
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? colors.neutral[200]
          : isFocused
            ? colors.neutral[200]
            : undefined,
      ':after': {
        ...styles[':after'],
        content: '""',
        width: '100%',
        display: 'block',
        position: 'relative',
        marginLeft: '-10px',
        top: isFocused || isSelected ? '15px' : '16.8px',
        borderBottom: `${isFocused || isSelected ? '1px' : '1px'} solid ${
          colors.neutral[200]
        }`,
        backgroundColor: colors.neutral.light,
        '& :last-of-type': {
          borderBottom: 'unset',
        },
      },
      ':active': {
        ...styles[':active'],
        backgroundColor: 'white',
      },
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: 'none',
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: sizes.s14,
      color: colors.neutral[100],
      fontFamily: 'Raleway',
    }),
    valueContainer: (style) => ({
      ...style,
      gap: '8px',
      padding: 'unset'
    }),
    multiValue: (style) => ({
      ...style,
      backgroundColor: colors.primary[100],
      width: 'fit-content',
      padding: '8px 14px',
      borderRadius: '30px'
    }),
    multiValueRemove: (style) => ({
      ...style,
      backgroundColor: 'inherit',
      '&:hover': {
        backgroundColor: colors.error[50],
        color: colors.neutral.light
      }
    })
  };
  const DropdownIndicator = (props) => {
    const { menuIsOpen } = props.selectProps;
    return (
      <components.DropdownIndicator {...props}>
        <Icon
          name="ChevronDown"
          weight={0}
          style={{
            transform: menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </components.DropdownIndicator>
    );
  };

  return (
    <div style={{ width: menuWidth }}>
      <Select
        options={options}
        placeholder={placeholder}
        styles={styles}
        components={{ DropdownIndicator }}
        onChange={onChange}
        value={value}
        isMulti={multi}
      />
    </div>
  );
};

SelectOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
};

export default SelectOptions;
