export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

export default interface ICategories {
  status: string;
  copyright: string;
  num_results: number;
  results: [];
}

export default interface ICategory {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}
