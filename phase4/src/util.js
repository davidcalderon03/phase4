export const apiCaller = async (endpoint, options = {}) => {
    options.credentials = options.credentials || "include";
    options.headers = options.headers || {};
    options.headers["Content-Type"] =
    options.headers["Content-Type"] || "application/json";
    const response = await fetch("http://localhost:3000" + endpoint, options)
    .then(response => response.json());
    return response;
  };