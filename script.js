function rng(num){
    return Math.floor(Math.random() * num);
}

const factory = {
    random1: ['a', 'b', 'c', 'd'],
    random2: ['e', 'f', 'g', 'h'],
    random3: ['z', 'x', 'w', 'y']
}

const textToOutput = []

for (let prop in factory){
    let option = rng(factory[prop].length);
    if (prop == 'random1'){
        textToOutput.push(`Your 1 is: ${factory[prop][option]}`);
    }
    else if (prop == 'random2'){
        textToOutput.push(`Your 2 is: ${factory[prop][option]}`);
    }
    else if (prop == 'random3'){
        textToOutput.push(`Your 3 is: ${factory[prop][option]}`);
    }
    else{
        textToOutput.push(`Not Enoguh Info`)
    }
}

function format(wisdom){
    const formatted = textToOutput.join('\n');
    console.log(formatted);
}

format(textToOutput);