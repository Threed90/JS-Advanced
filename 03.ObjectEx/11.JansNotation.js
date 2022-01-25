function solve(arr) {
    let maths = {
        '+': function (first, second) {
            return first + second;
        },
        '*': function (first, second) {
            return first * second;
        },
        '/': function (first, second) {
            return first / second;
        },
        '-': function (first, second) {
            return first - second;
        }
    };

    let nums = [];

    for (const item of arr) {
        if (Number(item)) {
            nums.push(Number(item))
        } else {
            if (nums.length >= 2) {
                let secondNum = nums.pop();
                let firstNum = nums.pop();

                let result = maths[item](firstNum, secondNum);
                nums.push(result);

            } else if (nums.length <= 1) {
                console.log("Error: not enough operands!");
                return;
            }
        }
    }

    if (nums.length === 1) {
        console.log(nums[0]);
    } else if (nums.length > 1) {
        console.log("Error: too many operands!");
    }
}


solve([5,
    3,
    4,
    '*',
    '-']
);
solve([3,
    4,
    '+']
);
solve([7,
    33,
    8,
    '-']
);
solve([15,
    '/']
);
