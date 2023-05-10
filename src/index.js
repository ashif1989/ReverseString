//Reverse a String - Method 1

let reverseString1 = (str) => {
  let convertToArray = str.split("");
  let reverseArr = convertToArray.reverse();
  let reverseArrJoin = reverseArr.join("");

  console.log(reverseArrJoin);
};

//Method 2

let reverseString2 = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  console.log(reverseStr);
};

//Method 3

let reverseStr = "";
let reverseString3 = (str) => {
  reverseStr += str[str.length - 1];
  if (str.length > 1) {
    reverseString3(str.substring(0, str.length - 1));
  }
  console.log(reverseStr);
};

reverseString3("musa");
