//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('li').remove
        subclassesArr = data.subclasses
        subclassesArr.forEach(element => {
            console.log(element.name);

            let el = document.createElement('li')
            el.innerHTML = element.name
            document.querySelector('ul').appendChild(el)

        });
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

