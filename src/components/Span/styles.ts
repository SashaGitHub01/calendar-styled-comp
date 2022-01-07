import styled, { css } from 'styled-components';
import { ISpan } from './Span';

export const SpanStyled = styled.span<ISpan>`
${({ overflow }) => overflow
      && css`
white-space:nowrap;
overflow: hidden;
text-overflow: ellipsis;
`}

color: ${({ color, theme }) => (color && theme.font[color]) || theme.font.main};
font-size: ${({ fz, theme }) => fz || theme.fontSize};
line-height: ${({ lh }) => lh || 1};
font-weight: ${({ fw }) => fw || 400};
`