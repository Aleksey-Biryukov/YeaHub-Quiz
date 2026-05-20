function getPaginationNumbers(currentPage: number, totalPages: number) {
  const numbers = [];

  numbers.push(1);

  if (totalPages <= 8) {
    for (let i = 2; i <= totalPages; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  if (currentPage <= 5) {
    numbers.push(2, 3, 4, 5, 6);
    numbers.push("...");
    numbers.push(totalPages);
    return numbers;
  }
  if (currentPage >= totalPages - 4) {
    numbers.push("...");
    for (let i = totalPages - 5; i <= totalPages; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  numbers.push("…");
  numbers.push(currentPage - 2);
  numbers.push(currentPage - 1);
  numbers.push(currentPage);
  numbers.push(currentPage + 1);
  numbers.push(currentPage + 2);
  numbers.push("…");
  numbers.push(totalPages);

  return numbers;
}

export default getPaginationNumbers;
