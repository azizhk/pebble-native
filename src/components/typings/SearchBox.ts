export interface SearchBoxProps {
  onQueryChange: (query: string) => void;
  results: any[];
  renderElement: (
    args: { item: any },
    props: SearchBoxProps
  ) => JSX.Element | string | number;
  placeholder: string;
  keyExtractor?: (item: any) => string | number;
  onSelect: (item: any) => void;
  rowLabelExtractor?: (item: any) => string | number;
  noResultsElement?: (queryValue: string) => any;
  onClose?: () => void;
  bottomSectionPlaceholder?: () => JSX.Element;
  loading?: boolean;
  testIdPrefix?: string;
  extraActionElement?: (query: string) => JSX.Element;
}

export interface SearchBoxState {
  queryValue: string;
}
