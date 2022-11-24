//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `http://openlibrary.org/search.json?q=${choice}`
  // const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let bookCover = `https://covers.openlibrary.org/b/id/${data.docs.covers_i}.jpg`
        let bookTitle = data.docs.title
        document.querySelector('.book-cover').src = bookCover
        document.querySelector('.book-title').innerText = bookTitle
        // console.log(data.docs[0])


        // document.querySelector('li').remove
        titleArr = data.docs
        titleArr.forEach(element => {
            console.log(element.title);


            let el = document.createElement('li')
            el.innerHTML = element.title
            document.querySelector('ul').appendChild(el)

        });

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

