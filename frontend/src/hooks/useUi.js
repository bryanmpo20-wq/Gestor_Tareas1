import { useContext } from 'react';
import { UiContext } from '../context/UiContext.jsx';

export function useUi() {
  return useContext(UiContext);
}
