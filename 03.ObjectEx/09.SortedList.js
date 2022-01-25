function createSortedList(){
    let inner = [];
    let obj = {
        add(element){
            inner.push(element);
            inner.sort((a, b) => a-b);
            this.size++;
        },
        remove(index){
            if(index>= 0 && index < this.size){
                inner.splice(index, 1);
                this.size--;
            } else {
                throw 'Out of collection boundary!';
            }
            
        },
        get(index){
            if(index >=0 && index<this.size){
                return inner[index];
            } else{
                throw 'Out of collection boundary!';
            }
            
        },
        size : 0
    }
    return obj;
}

let list = createSortedList();
list.add(6);
list.add(5);

list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
