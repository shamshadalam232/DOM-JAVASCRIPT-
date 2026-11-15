const searchInput = document.querySelector(".input")
const searchButton = document.querySelector(".search")
const movieContainer = document.querySelector(".movie-container")
const nextButton = document.querySelector(".next")
const prevButton = document.querySelector(".prev")
const loader = document.querySelector(".loader")


let page = 1

let currentSearch = ""

let fetchedMovies = async () => {

let url = `https://www.omdbapi.com/?s=${currentSearch}&page=${page}&apikey=3ace48c9`

loader.style.display = "block"

 try {

            let result = await fetch(url)

            if(!result.ok){
              throw new Error(`HTTP error! Status: ${result.status}`);
            }

            let data = await result.json()

            if(data.Response ===  "False"){
                return alert("Movie not found!")
            }

            prevButton.disabled = page === 1

            console.log(data)

            movieContainer.innerHTML = ""

            data.Search.forEach((curr) => {
                
                const card = document.createElement("div")
                card.classList.add("movie-card")

                const img = document.createElement("img")
                img.src = curr.Poster

                img.addEventListener("error", ()=> {
                    img.src = "default-poster.jpg"
                })


                const div = document.createElement("div")
                div.classList.add("movie-details")


                const h3 = document.createElement("h3")
                const p1 = document.createElement("p")
                const p2 = document.createElement("p")

                h3.textContent = curr.Title
                p1.textContent = curr.Year
                p2.textContent = curr.Type


                div.appendChild(h3)
                div.appendChild(p1)
                div.appendChild(p2)
                card.appendChild(img)
                card.appendChild(div)

                movieContainer.appendChild(card)
          
            })
        } catch (error) {
            console.log(error)
        } finally {
            loader.style.display = "none"
        }

        
}

searchButton.addEventListener("click", async () => {
    let value = searchInput.value.trim()
    console.log(value)
    
    if (value === "") {
        return alert("plzz fill the value in input")
    } else {
        currentSearch = value
        fetchedMovies()
    }
})



nextButton.addEventListener("click", ()=> {
    page++
    fetchedMovies()
    
})


prevButton.addEventListener("click", ()=> {
    if(page > 1 && currentSearch !== ""){
        --page
        fetchedMovies()
    }
})