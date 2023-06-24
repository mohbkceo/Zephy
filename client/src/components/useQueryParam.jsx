// Utility helper for getting query string values
const useQueryParam = (query) => {
    const { search } = window.location;
    const searchParameters = new URLSearchParams(search);
    return searchParameters.get(query);
  };
  
  export default useQueryParam;