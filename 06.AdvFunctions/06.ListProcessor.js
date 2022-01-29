function solve(commands){
    let innerArr = [];

    let funcLibrary = {
        add(str){
            innerArr.push(str);
        },
        remove(str){
            innerArr = innerArr.filter(e => e !== str);
        },
        print(){
            console.log(innerArr.join(','));
        }
    };

    let commandTokens = commands.map(e => e.split(' '));

    for (const commandToken of commandTokens) {
        if(commandToken.length === 2){
            funcLibrary[commandToken[0]](commandToken[1]);
        } else if(commandToken.length === 1){
            funcLibrary[commandToken[0]]();
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);