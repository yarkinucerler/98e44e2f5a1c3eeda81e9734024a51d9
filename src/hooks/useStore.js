import { useMemo } from 'react';
import {makeStore} from "../store/store";

export function useStore(initialState) {
  return useMemo(() => makeStore(initialState), [initialState]);
}