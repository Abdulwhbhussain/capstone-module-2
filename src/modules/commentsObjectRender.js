const commentsObjectRender = (commentsArray) => {
  const popupComments = document.createElement('div');
  popupComments.classList.add('popup-comments');
  const comments = commentsArray.forEach((comment) => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('individual-comment');
      commentElement.innerText = comment.comment;
      popupComments.appendChild(commentElement);
  });
  return popupComments.innerHTML;
};

export default commentsObjectRender;