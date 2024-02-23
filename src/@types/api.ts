export type ItemsApiResponse<T extends object> = {
  items: T;
  totalCount: number;
};
