//handles the info for the story from the database.
// Step 1: Extract the Article ID from the URL
const queryParams = new URLSearchParams(window.location.search);
const articleId = queryParams.get('id'); // Assuming the URL parameter is named 'id'
console.log(articleId);
var test_img = "https://flowbite.com/docs/images/people/profile-picture-2.jpg";
var test_author = "Jane Doe";
var test_title = "Arkansas Foodbank Distribution Event Runs Out of Food Early Because of Demand";
var test_text = 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet dictum sit amet justo donec enim. Morbi tristique senectus et netus et malesuada. Id leo in vitae turpis massa sed elementum tempus. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Ac turpis egestas integer eget. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Aenean sed adipiscing diam donec adipiscing. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis."
 + "\n\nScelerisque in dictum non consectetur a erat nam at. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Egestas congue quisque egestas diam in arcu cursus euismod quis. Sagittis nisl rhoncus mattis rhoncus urna. Lectus nulla at volutpat diam ut venenatis. Varius quam quisque id diam vel quam elementum pulvinar. Volutpat sed cras ornare arcu dui. Proin libero nunc consequat interdum varius. Purus in mollis nunc sed id."
 + "\n\nUt tortor pretium viverra suspendisse potenti. Lectus nulla at volutpat diam. Dolor sit amet consectetur adipiscing. Tristique senectus et netus et malesuada fames ac turpis. Proin sed libero enim sed faucibus. Vulputate ut pharetra sit amet aliquam id diam. Aliquet nibh praesent tristique magna sit amet. Massa sapien faucibus et molestie ac feugiat sed. Iaculis nunc sed augue lacus. Ipsum dolor sit amet consectetur. Eu sem integer vitae justo eget magna. Est ultricies integer quis auctor elit sed vulputate mi. Volutpat ac tincidunt vitae semper quis lectus."
 + "\n\nLeo a diam sollicitudin tempor id eu nisl nunc. Cras ornare arcu dui vivamus arcu felis bibendum ut. Sit amet est placerat in. Et molestie ac feugiat sed lectus vestibulum. Congue nisi vitae suscipit tellus mauris a diam. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Habitant morbi tristique senectus et netus. Vulputate ut pharetra sit amet aliquam. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae."
 + "\n\nUt aliquam purus sit amet luctus venenatis. Non diam phasellus vestibulum lorem sed risus ultricies. Amet mauris commodo quis imperdiet. Sagittis purus sit amet volutpat consequat. Nibh praesent tristique magna sit amet purus gravida quis blandit. Id ornare arcu odio ut sem nulla pharetra diam. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Nullam eget felis eget nunc. Pharetra convallis posuere morbi leo urna molestie at. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Quis viverra nibh cras pulvinar. Ultrices in iaculis nunc sed augue lacus viverra. A condimentum vitae sapien pellentesque. Est lorem ipsum dolor sit amet. Habitant morbi tristique senectus et netus et malesuada fames.";
const test_comments = [{
    id: 1,
    user: "John Doe",
    date: new Date().toDateString(),
    text: "This is a great article!",
    likes: 5,
    replies: [{
        id: 3,
        user: "Jane Doe",
        date: new Date().toDateString(),
        text: "Thank you!",
        likes: 2,
        replies: []
    }]
},
{
    id: 2,
    user: "Jessy Doe",
    date: new Date().toDateString(),
    text: "I love this article!",
    likes: 2,
    replies: []
}];


    // Step 2: Fetch the Article Data
async function fetchArticle(articleId) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/articles/${articleId}`, {
        method: 'GET',
        credentials: 'include' // Include credentials for CORS requests
        });
      
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
      
          const data = await response.json();
          console.log(data); // Process the data received from the API
          test_title = data.title;
          test_text = data.text;
          console.log(test_text);
          // Continue with the rest of your code here after the fetch completes
        } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
        }
}




function createCommentComponent(commentData) {

    const avatar = `https://example.com/avatar/${commentData.user}.png`; // Placeholder avatar URL
    const date = new Date().toISOString().split('T')[0]; // Placeholder for current date
    const dateReadable = new Date().toDateString(); // Placeholder for current readable date
    return `
        <article class="p-6 text-base bg-white rounded-lg mb-3 border-t border-gray-200">
            <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                        <img class="mr-2 w-6 h-6 rounded-full" src="${test_img}" alt="${commentData.user}">
                        ${commentData.user}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        <time pubdate datetime="${commentData.date}" title="${commentData.date}">${commentData.date}</time>
                    </p>
                </div>
            </footer>
            <p class="text-gray-500">${commentData.text}</p>
            <div class="flex items-center mt-4 space-x-4">
                <svg class="likeIcon h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                <span style="margin: 0 20px 0 10px;">${commentData.likes}</span>
                <button type="button" class="flex items-center text-sm text-gray-500 hover:underline font-medium">
                    Reply
                </button>
            </div>
        </article>
    `;
}

function renderComments(comments, container) {
    comments.forEach(comment => {
        const commentHTML = createCommentComponent(comment);
        const commentElement = document.createElement('div');
        commentElement.innerHTML = commentHTML;
        container.appendChild(commentElement);

        // Check if there are replies and recursively render them
        if (comment.replies && comment.replies.length > 0) {
            const repliesContainer = document.createElement('div');
            repliesContainer.classList.add('ml-6');
            commentElement.appendChild(repliesContainer);
            renderComments(comment.replies, repliesContainer); // Pass the replies container for nesting
        }
    });
}

async function main() {
    if (articleId) {
        // Step 2: Fetch the Article Data
        console.log(test_text);
        await fetchArticle(articleId);
        console.log(test_text);
    }
    const main_text = document.getElementById('article-text');
    let new_text = test_text.split("\n\n").join("<br><br><br>");
    main_text.innerHTML = new_text;

    const main_headline = document.getElementById('main-headline');
    main_headline.textContent = test_title;

    const rootContainer = document.getElementById('comments');
    renderComments(test_comments, rootContainer);

    document.querySelectorAll('.likeIcon').forEach(icon => {
        icon.addEventListener('click', function() {
            this.classList.toggle('likeIcon-default');
            this.classList.toggle('likeIcon-filled');
        });
    });
}
main();






