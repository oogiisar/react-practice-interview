export const fetchData = (searchTerm) => {
    console.log(searchTerm)
    return fetch(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyAYpiOi-yAzSH-YsuivzagJNVSoWkQDhec&maxResults=10&q=${searchTerm}`)
        .then(response => {
          //check if response is ok
          console.log('About to check for errors');
          if(!response.ok) {
            console.log('An error did occur, let\'s throw an error.');
            throw new Error('Something went wrong'); //throw an error
          }
          return response; //ok, so just continue
        })
        .then(response => response.json())
        .then(data => {
            return data.items
        })
        .catch(err => {
          //this catch handles the error condition
          console.log('Handling the error here.', err);
        });
}

export default fetchData;