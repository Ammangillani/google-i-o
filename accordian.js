function toggleAccordion(accordionId) {
  const accordion = document.getElementById(accordionId);
  accordion.classList.toggle("open");
}

function filterList(searchId, listId, boxContainerId) {
  const searchInput = document.getElementById(searchId).value.toLowerCase();
  const listItems = document.querySelectorAll(`#${listId} li`);
  const boxes = document.querySelectorAll(`#${boxContainerId} .box`);

  listItems.forEach((item) => {
    const itemId = item.querySelector("input").id.toLowerCase();
    if (itemId.includes(searchInput)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });

  boxes.forEach((box) => {
    const boxId = box.id.toLowerCase();
    if (boxId.includes(searchInput)) {
      box.style.display = "flex";
    } else {
      box.style.display = "none";
    }
  });
}
