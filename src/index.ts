//Generic Interface --> interface is used for determining the shape of object
// /users endpoint
// /products  endpoint

interface Result<T> {
  data: T | null,
  error: string | null
}
interface User {
  username: string;
}
interface Product {
  title: string;
}

// because result is generic , function should be generic too
function fetch<T>(url: string): Result<T>{
 return  {data: null, error:null}
}

fetch<User>("url");
fetch<Product>("url");