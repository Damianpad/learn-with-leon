//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', checkList)

function checkList(){
  if (document.querySelector('li')) {
    resetResults()
  } else {
    getFetch()
  }
}


function getFetch(){

 
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `http://openlibrary.org/search.json?q=${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        let bookTitle = data.docs.title
        // document.querySelector('.book-cover').src = bookCover
        // document.querySelector('.book-title').innerText = bookTitle
        // console.log(data.docs[0])


        // document.querySelector('li').remove
        titleArr = data.docs
        titleArr.forEach(element => {
            console.log(element.title);
            
            // let bookCover = element.docs.covers_i
            
            // document.querySelector('.book-cover').src = bookCoverLink
            
            let el = document.createElement('li')
            el.innerHTML = element.title
            document.querySelector('.book-results').appendChild(el)

            console.log(element.cover_i);
            let bookImg = document.createElement('img')
            bookImg.src = `https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg`
            document.querySelector('.book-results').appendChild(bookImg)



        });

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function resetResults(){
  document.querySelector('li').innerHTML = ""
  getFetch()
}

