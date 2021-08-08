import { deepMerge } from "grommet/utils";
import {hpe} from 'grommet-theme-hpe';

export const theme = deepMerge(hpe,{
  global:{
    colors:{
      brand: {
        dark:'red',
        light: '#ceaf2d'
      },
      primary: {
        dark: 'yellow',
        light: '#77de90'
      }
    }
  }
});

export const hexToRgb = (hex, alpha) => {
    hex = hex.replace('#', '')
    const r = parseInt(
      hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
      16
    )
    const g = parseInt(
      hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
      16
    )
    const b = parseInt(
      hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
      16
    )
    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')'
    }
  }