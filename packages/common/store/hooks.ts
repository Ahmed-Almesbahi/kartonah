//@ts-ignore
import {useCallback} from 'react';
//@ts-ignore
import {useDispatch, useSelector} from 'react-redux';
import {setFilterOption} from './actions/filter';
import {CommonRootState} from './rootTypes';

type Fn<R = any> = (...args: any[]) => R;
function useAppAction<T extends Fn>(action: T): (...args: Parameters<T>) => ReturnType<T> {
    const dispatch = useDispatch();

    return useCallback((...args: Parameters<T>) => dispatch(action(...args)), []);
}

function useAppSelector<T extends (state: CommonRootState) => any>(selector: T): ReturnType<T> {
    return useSelector(selector);
}

/**
 * Selectors
 */
export const useCart = () => useAppSelector((state) => state.cart);
export const useProductFilter = () => useAppSelector((state) => state.productFilter);
export const useSearchFilter = () => useAppSelector((state) => state.searchFilter);
export const useFav = () => useAppSelector((state) => state.fav);
export const useAuth = () => useAppSelector((state) => state.auth);

/**
 * Actions
 */
export const useSetFilterOption = () => useAppAction(setFilterOption);
