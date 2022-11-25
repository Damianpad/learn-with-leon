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
        let resultCount = 0

        titleArr = data.docs
        titleArr.forEach(element => {
            console.log(element.title);
            resultCount += 1
            
            // Create li of search results
            let el = document.createElement('li')
            el.innerHTML = element.title
            el.classList.add(`cell-wrapper${resultCount}`)
            document.querySelector(`.book-results`).appendChild(el) 

            // let bookInfo = document.createElement('span')
            // bookInfo = element.author_name
            // bookInfo.classList.add('book-info')
            // document.querySelector(`cell-wrapper${resultCount}`).appendChild(bookInfo)


            console.log(element.cover_i);
            let bookImg = document.createElement('img')
            if ( element.cover_i == undefined){
              bookImg.src = `https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg`
              bookImg.classList.add(`cell-image${resultCount}`)
              document.querySelector(`.cell-wrapper${resultCount}`).appendChild(bookImg)
            } else {
              bookImg.src = `https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg`
              bookImg.classList.add(`cell-image${resultCount}`)
              document.querySelector(`.cell-wrapper${resultCount}`).appendChild(bookImg)
            }



            document.querySelector(`.cell-wrapper${resultCount}`).classList.add('.cell-wrapper')

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


