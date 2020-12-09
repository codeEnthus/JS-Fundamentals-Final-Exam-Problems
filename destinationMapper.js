function destinationMapper(input) {

    let text = input;
    let pattern = /([=|\/])(?<country>[A-Za-z]{3,})\1/g

    let result = pattern.exec(text);
    let destinations = [];
    let sum = 0;
    while (result) {
        let length = Number(result.groups.country.length)
        sum += length;
        destinations.push(result.groups.country)
        result = pattern.exec(text)
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${sum}`)
}
destinationMapper('ThisIs some InvalidInput')