import { useEffect } from "react";
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


/**
 * Return first 2 letters of the words in a string
 * @param {string} text e.g Martin Luther
 * @return {string} e.g ML
 */
export const avatarText = (text) => {
  if (text && text.length > 1) {
    if (text.includes('+')) {
      return text;
    }
    const firstPart = text.split(' ')[0];
    let secondPart = text.substring(1, 2);

    if (text.split(' ').length > 1 && text.split(' ')[1].length > 0) {
      secondPart = text.split(' ')[1].substring(0, 1);
      secondPart = isNaN(parseInt(secondPart)) ?
        secondPart :
        text.substring(1, 2);
    }

    const shortText = `${firstPart.substring(0, 1)}${secondPart}`;

    return toUpper(shortText);
  }

  return '';
};



/**
 * Attach click event to outer/outside/exterior elements of an element
 * @param {RefObject<HTMLDivElement>} ref
 * @param {EventListener} func
 */
export const useClickOutside = (ref, func) => {
  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', func);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', func);
    };
  }, [ref, func]);
};