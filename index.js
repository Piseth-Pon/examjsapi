
async function getAllCharacters() {
  let url = `https://rickandmortyapi.com/api/character`

  const response = await fetch(url)
  const data = await response.json()
  return data.results
}

function displayChracters(chracters) {
  const charactersWrapper = document.querySelector(".charactersWrapper")
  charactersWrapper.innerHTML = ``
  for (let i = 0; i < chracters.length; i++) {
    charactersWrapper.innerHTML = charactersWrapper.innerHTML + `
    <div class="character">
        <div class="cover">
          <img src="${chracters[i].image}" alt="">
        </div>
        <div class="detail">
          <h4>${chracters[i].name}</h4>
          <p>${chracters[i].status} - ${chracters[i].species}</p>
          <div class="loc">
            <p class="label">Last known location</p>
            <p><a href="#">${chracters[i].location.name}</a></p>
          </div>
          <div class="origin">
            <p class="label">First seen in</p>
            <p><a href="#">${chracters[i].origin.name}</a></p>
          </div>
          <div class="eps">
            <p class="label">Episodes</p>
            <p>${chracters[i].episode.length}</p>
          </div>
        </div>
      </div>

    `
  }
} 

async function getAllEpisodes() {
  let url = `https://rickandmortyapi.com/api/episode`

  const response = await fetch(url)
  const data = await response.json()

  return data.results
}

function displayAllEpisodes(episodes) {
  const episodesWrapper = document.querySelector('.episodesWrapper')
  episodesWrapper.innerHTML = ``
  for (let i = 0; i < episodes.length; i++) {
    episodesWrapper.innerHTML = episodesWrapper.innerHTML + `
    <div class="episode">
        <h3>Episode Number: ${episodes[i].episode}</h3>
        <h2>Name: ${episodes[i].name}</h2>
        <h4>Aired Date: ${episodes[i].air_date}</h4>
      </div>
    `
  }
}

async function getAllLocations() {
  let url = `https://rickandmortyapi.com/api/location/`
  const response = await fetch(url)
  const data = await response.json()

  return data.results
}

function displayAllLocations(locations) {
  const locationsWrapper = document.querySelector(".locationsWrapper")
  locationsWrapper.innerHTML = ``
  for (let i = 0; i < locations.length; i++) {
    locationsWrapper.innerHTML = locationsWrapper.innerHTML + `
      <div class="location">
        <h2>Name: ${locations[i].name}</h2>
        <h3>Type: ${locations[i].type}</h3>
        <h4>Dimension: ${locations[i].dimension}</h4>
        <h1>Residents: ${locations[i].residents.length}</h1>
      </div>
    `
  }
}



window.addEventListener("DOMContentLoaded", async () => {

  const chracters = await getAllCharacters()
  console.log(chracters)
  displayChracters(chracters)


  const episodes = await getAllEpisodes()
  console.log(episodes)
  displayAllEpisodes(episodes)

  const locations = await getAllLocations()
  console.log(locations)
  displayAllLocations(locations)

})