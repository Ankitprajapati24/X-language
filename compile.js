function lexer(input){
    const tokens = [];
    let cursor = 0;

    while(cursor < input.length){
        let char = input[cursor];

        //skip whitespace
        if(/\s/.test(char)){
            cursor++;
            continue;
        }
        if(/[a-aA-Z0-9]/.test(char)){
            let word = '';
            while (/[a-zA-Z0-9]/.test(char)){
                word += char;
                char = input[++cursor];
            }

            if(word === 'su' || word === 'write'){
                tokens.push({ type: 'keyword',value: word});
            }
            else{
                tokens.push({ type: 'identifier', value: word})
            }
            continue;
        }

        //Tokenize operators and equal sign
        if(/[\+\-\*\/=]/.test(char)){
            tokens.push({type: 'operator',value : char});
            cursor++;
            continue;
        }
    }
    return tokens;
}


function compiler(input){
    const tokens = lexer(input);
    console.log(tokens)
}


const code = `
su x = 10
su y = 20
su sum = x+y

write sum
`

compiler(code)

// 
