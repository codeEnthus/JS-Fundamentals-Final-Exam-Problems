function passwordReset(array) {

    let text = array.shift();

    array.forEach(line => {
        let tokens = line.split(' ');
        let command = tokens[0];


        if (command === 'TakeOdd') {
            text = text.split('');
            let result = [];
            for (let i = 1; i < text.length; i += 2) {
                result.push(text[i])
            }
            text = result.join('');
            console.log(text)
        } else if (command === 'Cut') {
            let startIndex = Number(tokens[1]);
            let count = Number(tokens[tokens.length - 1]);
            let sub = text.substr(startIndex, count)

            if (text.includes(sub)) {
                text = text.replace(sub, '')
            }
            console.log(text)
        } else if (command === 'Substitute') {
            let current = tokens[1];
            let newSymbol = tokens[tokens.length - 1]

            if (text.includes(current)) {
                text = text.replace(new RegExp(current, 'g'), newSymbol); // regExp 
                console.log(text)
            } else {
                console.log(`Nothing to replace!`)
            }
        }
    });
    console.log(`Your password is: ${text}`)

}
passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])