// Get comment form and comment list elements
let commentForm = document.getElementById('comment-form');
let commentList = document.querySelector('.comment-list');

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    let commentInput = document.getElementById('comment-input').value;

    if (commentInput.trim() !== '') {
        let newComment = document.createElement('div');
        let newParagraph = document.createElement('p');
        newComment.classList.add('comment');
        newParagraph.classList.add('p1')
        newParagraph.innerText = commentInput;

        newComment.appendChild(newParagraph);

        // Create input text field and button
        let inputField = document.createElement('input');
        inputField.classList.add('comment-input');
        inputField.type = 'text';
        inputField.placeholder = 'Add a comment...';

        let button = document.createElement('button');
        button.innerText = 'Add Comment';
        button.classList.add('add-comment');
        button.addEventListener('click', function() {
        let replyText = inputField.value;
            if (replyText.trim() !== '') {
                let replyElement = document.createElement('p');
                replyElement.innerText = replyText;
                replyElement.classList.add('p2');
                newComment.appendChild(replyElement);
                inputField.value = '';
            }
        });

        // Append input field and button to the new comment element
        newComment.appendChild(inputField);
        newComment.appendChild(button);

        // Create a new button element
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete');

        deleteButton.addEventListener('click', function() {
            commentList.removeChild(newComment);
        });

        // Append the elements
        newComment.appendChild(deleteButton);
        commentList.appendChild(newComment);

        // Clear the comment input
        document.getElementById('comment-input').value = '';
    }
}

// Add event listener to the comment form
commentForm.addEventListener('submit', handleFormSubmit);

