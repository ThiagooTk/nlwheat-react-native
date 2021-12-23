/** "d" Typescrip entender que estamos 
 * sobreescrevendo a tipagem svg
 * Tratar o erro do import!
  */

declare module "*.svg" {
  import React from 'react';
  import {SvgProps} from 'react-native-svg'; 
  const content: React.Fc<SvgProps>
  export default content;
}