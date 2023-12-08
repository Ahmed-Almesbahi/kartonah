export function setFilterOption(
  key: string,
  value: any,
  page: 'product' | 'search' | 'searchStock' | 'stock',
) {
  return {
    type:
      page === 'search'
        ? SET_SEARCH_FILTER_OPTION
        : page === 'searchStock'
        ? SET_SEARCH_STOCK_FILTER_OPTION
        : page === 'stock'
        ? SET_STOCK_FILTER_OPTION
        : SET_PRODUCT_FILTER_OPTION,
    key,
    value,
  };
}

export function setFilterOptions(
  data: any,
  page: 'product' | 'search' | 'searchStock' | 'stock',
) {
  return {
    type:
      page === 'search'
        ? SET_SEARCH_FILTER_OPTIONS
        : page === 'searchStock'
        ? SET_SEARCH_STOCK_FILTER_OPTIONS
        : page === 'stock'
        ? SET_STOCK_FILTER_OPTIONS
        : SET_PRODUCT_FILTER_OPTIONS,
    data,
  };
}

export function resetFilter(
  page: 'product' | 'search' | 'searchStock' | 'stock',
) {
  return {
    type:
      page === 'search'
        ? RESET_SEARCH_FILTER
        : page === 'searchStock'
        ? RESET_SEARCH_STOCK_FILTER
        : page === 'stock'
        ? RESET_STOCK_FILTER
        : RESET_PRODUCT_FILTER,
  };
}

export const SET_PRODUCT_FILTER_OPTION = 'SET_PRODUCT_FILTER_OPTION';
export const SET_PRODUCT_FILTER_OPTIONS = 'SET_PRODUCT_FILTER_OPTIONS';
export const RESET_PRODUCT_FILTER = 'RESET_PRODUCT_FILTER';

export const SET_STOCK_FILTER_OPTION = 'SET_STOCK_FILTER_OPTION';
export const SET_STOCK_FILTER_OPTIONS = 'SET_STOCK_FILTER_OPTIONS';
export const RESET_STOCK_FILTER = 'RESET_STOCK_FILTER';

export const SET_SEARCH_FILTER_OPTION = 'SET_SEARCH_FILTER_OPTION';
export const SET_SEARCH_FILTER_OPTIONS = 'SET_SEARCH_FILTER_OPTIONS';
export const RESET_SEARCH_FILTER = 'RESET_PRODUCT_FILTER';

export const SET_SEARCH_STOCK_FILTER_OPTION = 'SET_SEARCH_STOCK_FILTER_OPTION';
export const SET_SEARCH_STOCK_FILTER_OPTIONS =
  'SET_SEARCH_STOCK_FILTER_OPTIONS';
export const RESET_SEARCH_STOCK_FILTER = 'RESET_SEARCH_STOCK_FILTER';

export const initialFilterState = {
  offset: 0,
  limit: 10,
  sortBy: 'id',
  sortSign: 'desc',
  status: 1,
  isFeatured: 0,
  title: null,
  categoryId: null,
  categoriesIds: [],
  tagsIds: [],
  sizesIds: [],
  coloursIds: [],
  materialsIds: [],
  labelsIds: [],
  priceMin: 0,
  priceMax: 100,
  rating: [],
  search: '',
};
