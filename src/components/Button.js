import styled, { css } from 'styled-components';
import elevation, { elevationTransition } from '../mixins/elevation';
import ripple from '../mixins/ripple';

const ButtonComponent = props => (
  <button className={`${props.className} smc-button`}>{props.children}</button>
);

const primary = css`
  color: ${props => props.theme.primary};
`;

const accent = css`
  color: ${props => props.theme.accent};
`;

const raised = css`
  ${elevation(2)};
  &:active {
    ${elevation(8)};
  }
  ${props => props.accent && `
    color: white;
    background-color: ${props.theme.accent};
    &:before {
      color: black;
    }
  `}
  ${props => props.primary && `
    color: white;
    background-color: ${props.theme.primary};
    &:before {
      color: black;
    }
  `}
  fieldset:disabled &, &:disabled {
    ${elevation(0)};
    background-color: rgba(0, 0, 0, .12);
    pointer-events: none;
  }
`;

const Button = styled(ButtonComponent)`
  display: inline-block;
  position: relative;
  min-width: 88px;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 2px;
  outline: none;
  background: transparent;
  font-size: 14px; // Override font to specifically be px as spec defined pt
  font-weight: 500;
  line-height: 36px; // Override line-height so text aligns centered
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  vertical-align: middle;
  user-select: none;
  box-sizing: border-box;
  -webkit-appearance: none;
  ${elevationTransition}

  &:active {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  fieldset:disabled &, &:disabled {
    color: rgba(0, 0, 0, .26);
    cursor: default;
    pointer-events: none;
  }

  ${ripple()}

  ${props => props.accent && accent}
  ${props => props.primary && primary}
  ${props => props.raised && raised}
  ${props => props.compact && `padding: 0 8px;`}
  ${props => props.dense && `
    height: 32px;
    font-size: .8125rem;
    line-height: 32px;
  `}
`;

export default Button;