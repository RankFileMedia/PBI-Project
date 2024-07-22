const dropZone = document.getElementById('dropZone');
const fileList = document.getElementById('fileList');
const maxFiles = 5;
const maxSize = 10 * 1024 * 1024; // 10MB limit


//IMPORTANT: Implement restrictions to the api to prevent modification of these client side restrictions.

// Prevent default behavior (Prevent file from being opened)
document.addEventListener('dragover', (event) => {
  event.preventDefault();
});

document.addEventListener('drop', (event) => {
  event.preventDefault();
});

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  // Add some visual feedback
  dropZone.style.backgroundColor = 'lightblue';
});

dropZone.addEventListener('dragleave', () => {
  // Remove visual feedback
  dropZone.style.backgroundColor = '';
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  // Remove visual feedback
  dropZone.style.backgroundColor = '';

  if (event.dataTransfer.items) {
    // Count current files in the list
    const currentFilesCount = fileList.getElementsByTagName('li').length;
    let allowedNewFiles = maxFiles - currentFilesCount;

    if (allowedNewFiles <= 0) {
      alert('Max 5 files allowed.');
      return;
    }

    let filesAdded = 0;
    for (let i = 0; i < event.dataTransfer.items.length && filesAdded < maxFiles; i++) {
      if (event.dataTransfer.items[i].kind === 'file') {
        var file = event.dataTransfer.items[i].getAsFile();
        if(file.size > maxSize) {
            //if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif')
            alert(`${file.name} is too large. Max size is 10MB.`);
            continue;
        }
        if (file.size <= maxSize) {
          console.log('... file[' + i + '].name = ' + file.name);
          // Create a list item for the file
          const li = document.createElement('li');
          li.textContent = file.name;
          li.className = 'flex justify-between items-center p-2 m-2 bg-gray-100 rounded-lg';
          // Add a remove button
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700';
          removeButton.onclick = function() {
            li.remove();
          };
          li.appendChild(removeButton);
          fileList.appendChild(li);
          filesAdded++;
        }
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + event.dataTransfer.files[i].name);
    }
  }
});

document.getElementById('submitArticle').addEventListener('click', function(event) {
    const title = document.getElementById('articleTitle').value.trim();
    const text = document.getElementById('articleText').value.trim();

    // Check if title and text fields are filled
    if (!title || !text) {
      alert('Please fill in both the title and the text fields.');
      event.preventDefault(); // Prevent form submission
    } else {
      // Proceed with form submission
      // Here you can add your logic to handle the submission, e.g., using fetch API or form submit
      //Prefered way is to first show the user a demo of what it will look like on a story page and then ask for confirmation.
      console.log('Form can be submitted');
      fetch(`http://127.0.0.1:5000/articles`, {
        method: 'POST',
        credentials: 'include', // Include credentials for CORS requests
        body: JSON.stringify({
          //author: username,
          title: title, // Assuming it's defined
          content: text, // Assuming it's defined
          media_url: 'https://example.com/media.html',
          user_id: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => response.json()) // Convert the response to JSON
      .then(data => console.log(data)) // Log the response data
      .catch(error => console.error('Error:', error)); // Log any errors
    }
  });