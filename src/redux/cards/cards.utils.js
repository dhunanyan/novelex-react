export const addCard = (cards, cardToAdd) => {
  const sameCard = Object.values(cards).map((value) =>
    value.name !== cardToAdd.name ? value : null
  );

  if (sameCard === null) {
    alert(`Card with ${cardToAdd.name} key-name already exists`);
    return { ...cards };
  }

  return { ...cards, [cardToAdd.name]: { ...cardToAdd } };
};

export const removeCard = (cards, cardToRemove) => {
  const array = Object.values(cards).filter((value) =>
    value.name !== cardToRemove.name ? true : false
  );
  const arrayToObject = (arr, key) => {
    return arr.reduce((obj, item) => {
      obj[item[key]] = item;
      return obj;
    }, {});
  };

  const obj = arrayToObject(array, "name");

  return obj;
};

export const filterCards = (cardMap, sectionId) => {
  const arrayToObject = (arr, key) => {
    return arr.reduce((obj, item) => {
      obj[item[key]] = item;
      return obj;
    }, {});
  };

  const array = Object.values(cardMap).filter((value) =>
    value.page === sectionId ? true : false
  );

  return arrayToObject(array, "name");
};
