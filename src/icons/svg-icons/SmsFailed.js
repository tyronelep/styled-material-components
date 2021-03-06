import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const SmsFailedPath = () => [
  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" key='path0' />,
];

const SmsFailedIcon = styled(Icon).attrs({
  children: SmsFailedPath,
})``;

export default SmsFailedPath;
export { SmsFailedIcon };
