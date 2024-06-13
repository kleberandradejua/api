const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

//get all posts

async function getAllPosts() {
    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data)

    loadingElement.classList.add("hide");
    data.forEach((post) => {

        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = post.title
        body.innerText = post.body
        link.innerText = "ler"
        link.setAttribute("href", `/pos.html?id=${post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)

    })
}

getAllPosts()
