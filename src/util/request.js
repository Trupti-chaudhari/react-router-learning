const basepath = "https://jsonplaceholder.typicode.com/";

const request = async(url)=>{
    const response = await fetch(`${basepath}${url}`);
    const result = await response.json();
    return result;
}

export default request;