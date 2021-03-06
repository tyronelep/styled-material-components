import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const LocationOnPath = () => [
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" key='path0' />,
];

const LocationOnIcon = styled(Icon).attrs({
  children: LocationOnPath,
})``;

export default LocationOnPath;
export { LocationOnIcon };
