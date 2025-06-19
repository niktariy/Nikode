import React from 'react';

interface DevelopmentIconProps {
  color?: string;
}

const DevelopmentIcon: React.FC<DevelopmentIconProps> = ({ color = 'currentColor' }) => (
  <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="48" y="43" width="11" height="3" fill={color} />
    <rect x="48" y="38" width="3" height="3" fill={color} />
    <rect x="53" y="38" width="3" height="3" fill={color} />
    <rect x="58" y="38" width="3" height="3" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M48 102V86C48 84.3431 49.3431 83 51 83H93C94.6569 83 96 84.3431 96 86V102C96 103.657 94.6569 105 93 105H51C49.3431 105 48 103.657 48 102ZM51 102H93V86H51V102Z" fill={color} />
    <rect x="65" y="90" width="16" height="3" fill={color} />
    <rect x="83" y="90" width="6" height="3" fill={color} />
    <rect x="55" y="90" width="8" height="3" fill={color} />
    <rect x="55" y="95" width="21" height="3" fill={color} />
    <rect x="78" y="95" width="11" height="3" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M58 57V73C58 74.6569 56.6569 76 55 76H27C25.3431 76 24 74.6569 24 73V57C24 55.3431 25.3431 54 27 54H55C56.6569 54 58 55.3431 58 57ZM55 57H27V73H55V57Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M41.9601 59.38L41.0001 61.44L37.3201 69.35L40.0401 70.62L41.0001 68.56L44.0001 62.11L44.6801 60.65L44.0001 60.33L41.9601 59.38Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M48.1701 59.0601L45.8301 60.9401L49.0801 65.0001L45.8301 69.0601L48.1701 70.9401L52.1701 65.9401C52.6115 65.3911 52.6115 64.609 52.1701 64.0601L48.1701 59.0601Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M33.8301 59.0601L29.8301 64.0601C29.3887 64.609 29.3887 65.3911 29.8301 65.9401L33.8301 70.9401L36.1701 69.0601L32.9201 65.0001L36.1701 60.9401L33.8301 59.0601Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M44 34H100V40H103V34C103 32.3431 101.657 31 100 31H44C42.3431 31 41 32.3431 41 34V51H44V34Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M100 110H44V79H41V110C41 111.657 42.3431 113 44 113H100C101.657 113 103 111.657 103 110V82H100V110Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M116 43H65C63.3431 43 62 44.3431 62 46V76C62 77.6569 63.3431 79 65 79H116C117.657 79 119 77.6569 119 76V46C119 44.3431 117.657 43 116 43ZM116 46V68.26L108.94 63.26C108.485 62.9459 107.895 62.9038 107.4 63.15L103 65.39L100 66.91L94.33 69.77L80.19 60.26C79.6917 59.9347 79.0483 59.9347 78.55 60.26L65 68.78V46H116ZM94.22 76H116V72L108 66.25L103 68.75L100 70.26L94.84 72.85C94.6329 72.9568 94.403 73.0117 94.17 73.01C93.8702 73.0098 93.5775 72.9192 93.33 72.75L79.33 63.3L65 72.3V76H94.22Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M103 59C102.137 59.6531 101.083 60.0044 100 60C97.2386 60 95 57.7615 95 55C95 52.2386 97.2386 50 100 50C101.083 49.9957 102.137 50.347 103 51C104.259 51.9443 105 53.4263 105 55C105 56.5738 104.259 58.0558 103 59ZM102 55C102 53.8955 101.105 53 100 53C98.8954 53 98 53.8955 98 55C98 56.1046 98.8954 57 100 57C101.105 57 102 56.1046 102 55Z" fill={color} />
  </svg>
);

export default DevelopmentIcon; 