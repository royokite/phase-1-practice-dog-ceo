// console.log('%c HI', 'color: firebrick')
//Dog CEO practice!

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/8";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    const dogPicContainer = document.getElementById('dog-image-container');
    const dogBreeds = document.getElementById('dog-breeds');

   fetch(imgUrl)
   .then(response => response.json())
   .then(allDogPics => {
        allDogPics.message.forEach(oneDogPic => {
            dogPicContainer.innerHTML += `<img src='${oneDogPic}' height='350px' width='25%'>`;
            })    
    }) 

   fetch(breedUrl)
   .then(response => response.json())
   .then(allBreeds => {
        const breedList = Object.keys(allBreeds.message);
        breedList.map(breed => {
            dogBreeds.innerHTML += `<li>${breed}</li>`; 
        })
        dogBreeds.style.cursor = 'pointer';
        dogBreeds.addEventListener('click', (e) => e.target.style.color = 'red');

        const breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener('change', (e) => {
            const firstLetter = e.target.value;
            const filteredList = breedList.filter(breed => breed.startsWith(firstLetter));
            dogBreeds.innerHTML = '';
            filteredList.map(filteredDogs => dogBreeds.innerHTML += `<li>${filteredDogs}</li>`);
        });
   })
})
