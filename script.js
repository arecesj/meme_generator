window.onload = function() {
  let memeForm = document.getElementById('memeForm');
  let memeDiv = document.getElementById('memeDiv');

  memeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let newContainer = document.createElement('div');
    newContainer.className += 'container';
    let newMeme = document.createElement('img');
    newMeme.src = document.getElementById('imageURL').value;

    let topMemeText = document.createElement('div');
    topMemeText.className += 'topMemeText';
    topMemeText.innerText = document.getElementById('topText').value;

    let bottomMemeText = document.createElement('div');
    bottomMemeText.className += 'bottomMemeText';
    bottomMemeText.innerText = document.getElementById('bottomText').value;

    memeDiv.appendChild(newContainer);
    newContainer.appendChild(newMeme);
    newContainer.appendChild(topMemeText);
    newContainer.appendChild(bottomMemeText);

    memeForm.reset();
  });
  //TODO When hovering, either darken it with an 'X' or state that it should/can be deleted by clicking on it
  memeDiv.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      event.target.parentNode.remove();
    }
    //TODO Fit more than one meme in the div space
  });
};
