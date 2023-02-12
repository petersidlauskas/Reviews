const reviewContainer = document.getElementById('review-container')

const reviews = [
    { 
        img: "https://cdn.shopify.com/s/files/1/1078/1074/files/Grand_Cities_Crew_Buggy_Talls_2048x2048.jpg?v=1518420531",
        alt: "Buggy",
        text: "Yooooooooo this station fire",
        name: "Buggy Talls"

    },

    {
        img: "https://image.tmdb.org/t/p/original/dq1HKu543XfamCoXrpCDu0xYtJR.jpg",
        alt: "Mark",
        text: "Bronze Radio makes me feel alive",
        name: "Mark Humineik"

    },
    
    {
        img: "https://www.incimages.com/uploaded_files/image/336x336/GregSatell_122131.jpeg",
        alt: "Greg",
        text: "I hated it",
        name: "Greg"

    }


]

function populateDisplay(){
    reviews.forEach(review => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')
        cardElement.addEventListener('mouseover' , showCard)
        cardElement.addEventListener('mouseleave' , blurCard)
        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', review.img)
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement)
        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name
        cardElement.append(imageContainer, paragraphElement, nameContainer)
        reviewContainer.append(cardElement)
    })
}

populateDisplay()

function showCard() {
    this.classList.add('active')
}

function blurCard() {
    this.classList.remove('active')
}