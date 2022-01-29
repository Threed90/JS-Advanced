//closure variant:
function solution(){
    let result = '';

    return {
        append(str){
            result += str;
            return result;
        },
        removeStart(countToRemove){
            result = result.substring(countToRemove)
        },
        removeEnd(countToRemove){
            result = result.substring(0, result.length-countToRemove);
        },
        print(){
            console.log(result);
        }
    }
}

//object context variant:
// function solution(){
//     return {
//         result : '',
//         append(str){
//             this.result += str;
//             return this.result;
//         },
//         removeStart(countToRemove){
//             this.result = this.result.substring(countToRemove)
//         },
//         removeEnd(countToRemove){
//             this.result = this.result.substring(0, this.result.length-countToRemove);
//         },
//         print(){
//             console.log(this.result);
//         }
//     }
// }

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


