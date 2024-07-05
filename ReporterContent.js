let articles = [
    { 
        img: 'https://static01.nyt.com/images/2024/03/26/multimedia/26russia-torture-1-fwzq/26russia-torture-1-fwzq-jumbo.jpg?quality=75&auto=webp', 
        title: 'Display of Battered Men Was Russia’s Warning to the Public, Analysts Say', 
        author: 'Valerie Hopkins & Neil MacFarquhar | The New York Times', 
        rating: 3 
    },
    { 
        img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-860w,f_auto,q_auto:best/rockcms/2024-03/240320-mcr-kidney-transplant-inline-ac-547p-ce0c0f.jpg', 
        title: 'In a first, surgeons successfully transplant a pig kidney into a man', 
        author: 'Berkeley Lovelace Jr. and Patrick Martin | NBC', 
        rating: 4 
    },
    { 
        img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/3840/production/_133000441_metrokyiv.png.webp', 
        title: 'Ukraine war: Two Russian landing ships hit off Crimea, officials say', 
        author: 'James Gregory & Paulin Kola | BBC', 
        rating: 3 
    },
    { 
        img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-03-24t201819z-1400983683-rc2js6a3f3if-rtrmadp-3-russia-shooting-suspects-court-2.jpg?q=w_1110,c_fill/f_webp', 
        title: 'Moscow concert hall attack suspects appear in court as Russia defends security services', 
        author: 'Christian Edwards, Masha Angelova, Josh Pennington and Anna Chernova | CNN', 
        rating: 5 
    },
    { 
        img: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LF6Z3GTB2QH5DA4BORXNN2Y7OQ.jpg&w=1200', 
        title: 'Putin says ‘radical Islamists’ attacked concert hall, suggests link to Ukraine', 
        author: 'Mary Ilyushina | Washington Times', 
        rating: 2 
    },
    { 
        img: 'https://d3i6fh83elv35t.cloudfront.net/static/2024/03/transplant-1024x683.jpg', 
        title: 'Transplant of pig kidney into a human marks medical milestone', 
        author: 'William Brangham | PBS News Hour', 
        rating: 5 
    },
    
    // Retrieve these from the database instead
];

let polls = [
    { 
        id: 1,
        img: 'https://static01.nyt.com/images/2024/03/26/multimedia/26russia-torture-1-fwzq/26russia-torture-1-fwzq-jumbo.jpg?quality=75&auto=webp', 
        title: 'How would you rate my articles?', 
        author: 'Jeff', 
        ratings: [
            {
                title: 'This article is informative',
                rating: 1,
                votes: 1
            },
            {
                title: 'This article is well-written',
                rating: 2,
                votes: 1
            },
            {
                title: 'This article is engaging',
                rating: 3,
                votes: 1
            },
            {
                title: 'This article is biased',
                rating: 4,
                votes: 1
            },
        ],

    },
   
    
    // Retrieve these from the database instead
];

function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += 
            `<span>
                <svg class="w-5 h-5 text-yellow star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#ffcc66" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </span>`
        } else {
            stars += 
            `<span>
                <svg class="w-5 h-5 text-grey star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </span>`
        }
    }
    
    return stars;
}   

function listArticles(article) {
    return `
    <div class="w-full px-3 mb-4 transition-transform duration-300 transform hover:scale-105">
    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-row" style="min-width: 400px;">
        <div class="flex items-center justify-center min-w-28 w-28 h-28 overflow-hidden rounded-lg">
            <img src="${article.img}" alt="News Story Image" class="w-full h-full object-cover">
        </div>
        <div class="p-3">
            <h2 class="text-lg font-semibold mb-2" style="min-height: 32px;">${article.title}</h2>
            <div class="data flex">
            Comments: --- Ratings: --- Total Rating: <p class="rating flex ml-1">${generateStars(article.rating)}</p>
            </div>
        </div>
    </div>
    </div>
    `;
}

let articleHTML = articles.map(article => listArticles(article)).join('');
// += is to append and = is to overwrite
document.querySelector('#articles-content').innerHTML += articleHTML;
document.querySelector('#articles-content').classList.remove('hidden');