function solve(n, k){
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let currentOffset = i - k;

        if(currentOffset <= 0){
            currentOffset = 0;
        }
        let temp = 0;
        for (let j = currentOffset; j < i; j++) {
            temp += arr[j]
        }
        arr[i] = temp;
    }

    return arr;
}

solve(8, 2);