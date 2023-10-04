const method = "GET";
const url = "https://jsonplaceholder.typicode.com/posts ";

const ajax = new XMLHttpRequest();
ajax.open(method, url);
ajax.send();

const getPosts = (method, url, callback) => {
    return new Promise((resolve, reject) => {
      ajax.onreadystatechange = () => {
        if (ajax.status === 200) {
          const result = JSON.parse(ajax.responseText);
          resolve(result);
        } else {
          const error = "terjadi error bro....";
          reject(error);
        }
      };
    });
  };
  
  getPosts(method, url)
    .then((result) => {
      result.map((item) => {
        console.log(item.title);
      });
    })
    .catch((err) => {
      console.log(err);
    });