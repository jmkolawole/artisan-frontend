import {camelCase} from 'lodash';

import * as Icons from './icons';

export const icons = {...Icons};

export const iconList = Object.keys(icons)
    .map((key) => camelCase(key))
    .sort();