const baseUrl = "http://localhost:3001";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getItems = () =>
  fetch(`${baseUrl}/items`, {
    headers: { "Content-Type": "application/json" },
  }).then(handleServerResponse);
//.then((res) => res.data);

export const addItem = ({ name, imageUrl, weather }, token) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  })
    .then(handleServerResponse)
    .then((res) => res.data);
};

//function handleLike(evt, id) {
//const isLiked = evt.target.classList.contains("card__like-button_active");
//api
// .changeLikeStatus(id, isLiked)
// .then(() => {
//   evt.target.classList.toggle("card__like-button_active");
// })
// .catch(console.error);
//}

//changeLikeStatus(id, isLiked) {
//return fetch(`${this._baseUrl}/cards/${id}/likes`, {
//method: isLiked ? "DELETE" : "PUT",
//headers: this._headers,
// }).then(this._handleServer);
//}

export const updateUser = ({ name, avatar }, token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(handleServerResponse);
};

export const removeItem = (itemID, token) => {
  return fetch(`${baseUrl}/items/${itemID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};
