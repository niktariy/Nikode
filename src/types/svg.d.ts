/** Import SVG as React component using query parameter
 * @input
 * SVG file paths with .svg?react query parameter
 * @example 
 * `import LogoComponent from './logo.svg?react';`
 * @example Usage in JSX
 * ```<img src={logoUrl} alt="Logo" />
 * <Logo className="icon" />
 * <LogoComponent width={24} height={24} />```
 */

declare module '*.svg?react' {
  import React from 'react';
  const SVG: React.FC<React.ComponentProps<'svg'>>;
  export default SVG;
}