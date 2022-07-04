const anchorsRef = document.querySelectorAll("li.item");
console.log("Number of categories: ", anchorsRef.length);

const countCildrenRef = anchorsRef.forEach((anchorRef) => {
  const categoryTitleRef = anchorRef.firstElementChild.textContent;
  console.log("Category:", categoryTitleRef);

  const itemRef = anchorRef.querySelectorAll("li");
  console.log("Elements:", itemRef.length);
});
