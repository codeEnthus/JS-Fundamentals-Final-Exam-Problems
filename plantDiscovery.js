function plantDiscovery(input) {

    let n = Number(input.shift());
    let commands = input.slice(n);
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [name, rarity] = input[i].split('<->')
        rarity = Number(rarity)
        plants[name] = { rarity, rating: [] };
    }

    let data = commands.shift();

    while (data !== 'Exhibition') {

        let [command, ...rest] = data.split(': ');
        let info = rest[0].split(' - ')
        let name = info[0]
        if (plants.hasOwnProperty(name)) {
            switch (command) {
                case 'Rate':
                    let rate = info[1]
                    rate = Number(rate)
                    plants[name].rating.push(rate);
                    break;
                case 'Update':
                    let rarity = info[1]
                    if (plants[name].rarity) {
                        plants[name].rarity = Number(rarity);
                    }
                    break;
                case 'Reset':
                    
                    if (plants[name]) {
                        plants[name].rating = 0;
                    }
                    break;
                default:
                    console.log('error'); break;
            }
        } else {
            console.log('error')
        }


        data = commands.shift();
    }
    function averageRage(arr) {
        if (!arr.length) return 0;

        return arr.reduce((a, b) => a + b, 0) / arr.length
    }
    let sorted = Object.entries(plants).sort((a, b) => {
        if (a[1].rarity === b[1].rarity) {
            return b[1].rating - a[1].rating
        } else {
            return b[1].rarity - a[1].rarity
        }
    })
    console.log('Plants for the exhibition:')

    for (const key of sorted) {
        console.log(`- ${key[0]}; Rarity: ${key[1].rarity}; Rating: ${averageRage(key[1].rating).toFixed(2)}`)
    }

}
plantDiscovery([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
])