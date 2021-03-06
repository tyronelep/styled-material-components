import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const SkipNextPath = () => [
  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" key='path0' />,
];

const SkipNextIcon = styled(Icon).attrs({
  children: SkipNextPath,
})``;

export default SkipNextPath;
export { SkipNextIcon };
