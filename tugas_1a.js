const method = "GET";
const url = "https://jsonplaceholder.typicode.com/posts";

const ajax = new XMLHttpRequest();
ajax.open(method, url);
ajax.send();

const getPosts = (method, url, callback) => {
    ajax.onreadystatechange = () => {
      if (ajax.status === 200) {
        const result = JSON.parse(ajax.responseText);
        callback(result);
      } else {
        const error = "terjadi error bro....";
        console.log(error);
      }
    };
  };

getPosts(method, url, (result) => {
    result.map((item) => {
        console.log(item.title);
    });
});