export const getNextIndex = (index, arrayLength) =>
  index + 1 > arrayLength ? 0 : index + 1;

export const getPreviousIndex = (index, arrayLength) =>
  index - 1 < 0 ? arrayLength - 1 : index - 1;
