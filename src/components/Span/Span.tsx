import styled, { css } from 'styled-components';

export interface ISpan {
   fz?: string,
   lh?: string,
   fw?: 400 | 500 | 600,
   overflow?: boolean,
   color?: 'main' | 'secondary' | 'event',
   [i: string]: any
}

export const Span = styled.span<ISpan>`
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

export default Span;