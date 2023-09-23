const editInventory = async (event) => {
  event.preventDefault();

  const postId = document.querySelector('#postId').value;
  const artist_name = document.querySelector('#albumBandName').value.trim()
  const album_name = document.querySelector('#albumName').value.trim()
  const price = document.querySelector('#albumPrice').value
  const stock = document.querySelector('#albumStock').value
  const genre_id = document.querySelector('#albumGenre').value

  if (artist_name && album_name && price && stock && genre_id) {
    const response = await fetch(`/api/album/${postId}`, {
      method: 'PUT',
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

const deleteClickHandler = async function() {

  const postId = document.querySelector('#postId').value;
  const genre_id = document.querySelector('#albumGenre').value

  await fetch(`/api/album/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace(`/genre/${genre_id}/albums`);
};

document
  .querySelector('#editInventory')
  .addEventListener('submit', editInventory);

document
  .querySelector('#delete')
  .addEventListener('click', deleteClickHandler);