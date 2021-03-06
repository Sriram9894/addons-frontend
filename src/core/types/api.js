/* @flow */

/*
 * A generic, paginated API response.
 *
 * See http://addons-server.readthedocs.io/en/latest/topics/api/overview.html#pagination
 */
export type PaginatedApiResponse<ResultType> = {|
  count: number,
  next?: string, // URL of the next page
  page_size: number,
  previous?: string, // URL of the previous page
  results: Array<ResultType>,
|};
