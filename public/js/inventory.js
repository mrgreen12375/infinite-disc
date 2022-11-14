const addToInventory = async (event) => {
  event.preventDefault();

  const artist_name = document.querySelector('#albumBandName').value.trim()
  const album_name = document.querySelector('#albumName').value.trim()
  const price = document.querySelector('#albumPrice').value
  const stock = document.querySelector('#albumStock').value
  const genre_id = document.querySelector('#albumGenre').value

  if (artist_name && album_name && price && stock && genre_id) {
    const response = await fetch(`/api/album`, {
      method: 'POST',
      body: JSON.stringify({ artist_name, album_name, price, stock, genre_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/genre/${genre_id}/albums`);
    } else {
      alert('Failed to update inventory');
    }
  }
  else {
    alert('Please fill out form completely')
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('#addToInventory')
  .addEventListener('submit', addToInventory);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
  