// Input - number
// Output - number + "- Another sheep..."


const countingSheep = function (num) {
  // base case
  // if no more sheep return;
  if (num === 0) return;
  console.log(`${num} - Another sheep jump over the fence`);
  countingSheep(num - 1);
};

countingSheep(3);

// Output => 
// 3 - Another sheep jump over the fence
// 2 - Another sheep jump over the fence
// 1 - Another sheep jump over the fence
