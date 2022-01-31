function solution(command){

    if(command === 'upvote'){
        this.upvotes++;
    } else if(command === 'downvote'){
        this.downvotes++;
    } else if (command === 'score'){
        let result = [];
        let voteIncreaser = Math.ceil(Math.max(this.upvotes, this.downvotes)*0.25);
        let positiveVotesReport = this.upvotes;
        let negativeVotesReport = this.downvotes;
        let total = this.upvotes + this.downvotes;

        if(total > 50){
            positiveVotesReport += voteIncreaser;
            negativeVotesReport += voteIncreaser;
        }

        result.push(positiveVotesReport, negativeVotesReport, positiveVotesReport - negativeVotesReport);

        if(total < 10){
            result.push('new');
        } else if(this.upvotes > total * 0.66){
            result.push('hot');
        } else if(this.upvotes - this.downvotes < 0){
            result.push('unpopular');
        }  else if(total > 100){
            result.push('controversial');
        } else {
            result.push('new');
        }

        return result;
    }
}


//testing:

let forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote');

var answer = solution.call(forumPost, 'score');
console.log(answer);


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};



solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');    
}

score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);