import {useCallback} from 'react';
import {useNavigation} from 'react-native-navigation-hooks';
import _debounce from 'lodash/debounce';

type Fn<R = any> = (...args: any[]) => R;

function useAppPushNavigation<T extends Fn>(action: T): (...args: Parameters<T>) => ReturnType<T> {
    const {push} = useNavigation();

    const debouncePush = useCallback(_debounce(push, 2000, {maxWait: 2000, leading: true, trailing: false}), []);

    return useCallback((...args: Parameters<T>) => debouncePush(...args), []);
}

export const usePush = () => useAppPushNavigation();
