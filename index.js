//accessing the HTML elements
const beerDetails = document.querySelector('.beer-details');
const beerList = document.getElementById('beer-list');
const beerName = document.getElementById('beer-name');
const beerImgine = document.getElementById('beer-image');
const reviewForm = document.getElementById('review-form');
const beerPrice = document.getElementById('beer-price');
const weeklyUpdate = document.getElementById('weekly-updates');
//const beerRating = document.getElementById('beer-rating');

//getting the data
fetch('https://api.sampleapis.com/beers/stouts')
    .then(resp => resp.json())
    .then(beers => {
        renderBeers(beers);
        renderOneBeer(beers[21]);
        console.log(beers);
    })

    // rendering beers in the beer-list column 
function renderBeers(beers) {
    beerList.innerHTML = '';
    beers.forEach(beer => {
        const li = document.createElement('li');
        li.innerText = beer.name;
        //adding list elements of beers to nav bar
        beerList.appendChild(li);
        // click event added for each beer + img + price
        li.addEventListener('click', () => {
            beerName.innerText = beer.name;
            beerImgine.src = beer.image;
            beerPrice.innerText = beer.price;

            //const li = document.getElementById('beer-rating')
            //li.innerText = beer.reviews;
            //beerRating.appendChild(li);
            
        })
    })

    const filterBtn = document.getElementById('good-beer-filter')

    filterBtn.addEventListener('click', () => {
 
        // filter button
           if (filterBtn.innerText === '5 Star Filter: ON') {
               //barDiv.innerText = ''
       
               beers.forEach(beer => {
                   const span = document.createElement('span')
                   span.innerText = beer.name
                   span.addEventListener('click', renderBeers)
                  //barDiv.appendChild(span)
               })
           //  filterBtn.innerText = '5 Star Filter: OFF'
               filterBtn.innerText = '5 Star Filter: OFF'
           } else if (filterBtn.innerText === '5 Star Filter: OFF') {
           // filterBtn.innerText = '5 Star Filter: ON'
           let result = beers.filter(x => x['rating'] > 4.5 == true)
               //barDiv.innerText = ''
       
               result.forEach(beer => {
                   const span = document.createElement('span')
                   span.innerText = beer.name
                   span.addEventListener('click', renderBeers)
                   //barDiv.appendChild(span)
               })
               filterBtn.innerText = '5 Star Filter: ON'
           }
       }) 
}
            //trying to get the a submit event to happen for the email subcription form
        // weeklyUpdate.addEventListener('submit', (e) =>  handleFormSubmit(e));

        // function handleFormSubmit(e) {
        //     e.preventDefault();

        //     const li = document.createElement('li');   
        //     li.innerText = weeklyUpdate.value;

        //      reviewList.appendChild(li);

        //     weeklyUpdate.reset();
            
       //}
            // just rendering one beer(img) when the page loads (the nitro can)
        function renderOneBeer(beer) {
            beerImgine.src = beer.image;
        }

            // trying to add a review submit event to the review form, so far its cereating a list under the add review button
         reviewForm.addEventListener('submit', (e) => handleReviewSubmit(e));

         function handleReviewSubmit(e) {
             e.preventDefault();

             const li = document.createElement('li');
             li.innerText = e.target.review.value;
             reviewForm.appendChild(li);

             reviewForm.reset();
         }

    

//how do I specify that I want the average of the rating to be >4.5?
