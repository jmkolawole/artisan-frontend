import { colors } from "./colors";
import {camelCase, trim} from 'lodash';
/**
 * Convert css style object or string to jsx style object
 * @param {{[key: string]: string} | string} style
 * @return {{[key: string]: string}}
 */
export const cssStyleToJsx = (style) => {
  const jsxStyle = {};

  if (typeof style === 'string') {
    style.split(';').forEach((value) => {
      const styleAttr = value.split(':');
      jsxStyle[camelCase(styleAttr[0])] = trim(styleAttr[1]);
    });
  } else {
    Object.keys(style).forEach((key) => {
      jsxStyle[camelCase(key)] = style[key];
    });
  }

  return jsxStyle;
};

/**
 * Get color using pallete string (eg. neutral.500 will return #ADB5BD)
 * @param {string.string} color
 * @return {string}
 */
export const strToColor = (color) => {
  const colorParts = color.split('.');
  const title = colorParts[0];
  const value = colorParts[1];

  return colors[title][value];
};


/**
 * Random key
 * @param {number} length
 */
export const generateKey = (length = 10) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = length; i > 0; --i) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
};