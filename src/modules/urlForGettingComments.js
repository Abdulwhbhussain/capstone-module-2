// get Comments from the Involvement API
const urlForGettingComments = urlForComments + '?item_id=';
foodByChina.forEach( async (food) => {
  const url = urlForGettingComments + food.id;
  const comments = await fetch(url).then((response) => response.json()).then((data) => data);
  food.comments = comments;
});
return foodByChina;


// Post Comments Functions 
const addComment = async (date, id, name, comment) => {
  const requestToResponse = await fetch(urlForComments, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          item_id: id,
          username: name,
          comment: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${name}: ${comment}`,
      }),
  });
  const data = await requestToResponse.text();
  if (data === 'Created') {
  return data;
  }
}

export default urlForGettingComments;
