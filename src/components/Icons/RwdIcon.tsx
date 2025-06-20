import React from 'react';
import type { IIconProps } from '../../types/common';

const RwdIcon: React.FC<IIconProps> = ({ color = 'currentColor', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 98 96" fill={color} xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M38.5 58a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 0-3h-7Z" />
    <path d="M56 74.5c.4 0 .78.16 1.06.44l6 6a1.49 1.49 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0l-5.56-5.56H28.62l-5.56 5.56a1.5 1.5 0 0 1-2.12-2.12l6-6A1.5 1.5 0 0 1 28 74.5h4.73l1.42-8.5H5a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h74a3 3 0 0 1 3 3v10h-3V13H5v40h58v3H5v7h58v3H49.85l1.42 8.5H56ZM46.81 66h-9.62l-1.42 8.5h12.46L46.81 66Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M69 26h26a3 3 0 0 1 3 3v50a3 3 0 0 1-3 3H69a3 3 0 0 1-3-3V29a3 3 0 0 1 3-3Zm0 53h26v-7H69v7Zm26-10H69V39h26v30ZM69 36h26v-7H69v7Z" />
    <path d="M78.5 34h7a1.5 1.5 0 0 0 0-3h-7a1.5 1.5 0 0 0 0 3Z" />
    <path d="m78.32 57.36 4.65-9.97 2.72 1.27-4.65 9.97z" />
    <path d="m89.17 58.94 4-5a1.5 1.5 0 0 0 0-1.88l-4-5-2.34 1.88L90.08 53l-3.25 4.06 2.34 1.88ZM74.83 58.94l2.34-1.88L73.92 53l3.25-4.06-2.34-1.88-4 5a1.5 1.5 0 0 0 0 1.88l4 5ZM82 77a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <path d="M13 28h12v3H13zM27 28h35v3H27zM13 35h21v3H13zM36 35h26v3H36zM13 42h21v3H13zM36 42h16v3H36zM13 21h3v3h-3zM18 21h3v3h-3zM23 21h3v3h-3z" />
  </svg>
);

export default RwdIcon;