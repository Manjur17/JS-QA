const input = [
  { id: 1, type: 'fruit', name: 'apple' },
  { id: 2, type: 'vegetable', name: 'carrot' },
  { id: 3, type: 'fruit', name: 'banana' },
  { id: 4, type: 'vegetable', name: 'lettuce' }
];
// Output:
// {
//   fruit: [
//     { id: 1, type: 'fruit', name: 'apple' },
//     { id: 3, type: 'fruit', name: 'banana' }
//   ],
//   vegetable: [
//     { id: 2, type: 'vegetable', name: 'carrot' },
//     { id: 4, type: 'vegetable', name: 'lettuce' }
//   ]
// } 

function groupBy(input, types) {

  const ans = {};

  input.map((element) => {
    let key = element.type;

    if (key in ans) {
      let value = [...ans[key], element];
      //ans.key = value
      ans[key] = value;
    } else {
      //ans.key = [element]
      ans[key] = [element];
    }
  })

  return ans;
}

console.log(groupBy(input, 'type'));