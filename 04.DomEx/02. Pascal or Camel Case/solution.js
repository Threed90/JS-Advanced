function solve() {

  let library = {
    'Camel Case': function (input) {
      return input.map((e, i) => {
        if (i === 0) {
          return e.toLowerCase();
        } else {
          let result = e[0].toUpperCase() + e.slice(1).toLowerCase();

          return result;
        }
      }).join('');

    },
    'Pascal Case': function (input) {
      return input.map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join('');
    }
  };

  let textTokens = document.getElementById('text').value.split(' ');
  let namingCase = document.getElementById('naming-convention').value;

  if(library[namingCase]){
    document.getElementById('result').textContent = library[namingCase](textTokens);
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
  
}

// function solve() {
 
//   let textToManipulateElement = document.getElementById('text').value;
//   let namingConventionElement = document.getElementById('naming-convention').value;
//   let resultElement = document.getElementById('result');


//   let resultString = '';

//   let textToManipulateElementArr = textToManipulateElement.split(' ');;

//   if(namingConventionElement === 'Camel Case'){


//     for(let i = 0 ; i < textToManipulateElementArr.length ; i++){
//       if(i === 0){
//         resultString += textToManipulateElementArr[i].toLowerCase();

//       }else{

//         let word = textToManipulateElementArr[i];
//         let firstLetter = word[0].toUpperCase();

//         word = word.toLowerCase();
//         resultString += (firstLetter + word.slice(1));



//       }
//     }

//     resultElement.textContent = resultString;


//   }else if(namingConventionElement === 'Pascal Case'){

//     for(let i = 0 ; i < textToManipulateElementArr.length ; i++){

//         let word = textToManipulateElementArr[i];
//         let firstLetter = word[0].toUpperCase();

//         word = word.toLowerCase();
//         resultString += (firstLetter + word.slice(1));


//     }
//     resultElement.textContent = resultString;


//   }else{
//     resultElement.textContent = 'Error!'

//   }
// }