function getTodo(id = 1) {
  //   const promiseOfResponse = fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1" + id
  //   );
  //   console.log("1.", promiseOfResponse);

  //   const promiseOfJSON = promiseOfResponse.then((response) => response.json());

  //   promiseOfJSON.then((payload) => {
  //     console.log(payload);
  //   });
  console.log("First");
  fetch("https://jsonplaceholder.typicode.com/todos/1" + id)
    .then((response) => response.json())
    .then((payload) => {
      console.log(payload);
    });

  console.log("Last");
}

export default getTodo;
