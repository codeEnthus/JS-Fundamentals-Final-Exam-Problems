function worldTourTask(input) {

    let stops = input.shift();
    let line = input.shift();
    while (line !== 'Travel') {

        let info = line.split(':');
        let command = info[0]

        switch (command) {
            case 'Add Stop':
                let index = Number(info[1]);
                let country = info[2];

                let half = stops.substring(0, index);
                let half2 = stops.substring(index)

                stops = half + country + half2
                break;
            case 'Remove Stop':
                let startIndex = Number(info[1]);
                let endIndex = Number(info[2]);

                if (startIndex < stops.length && endIndex < stops.length) {
                    let sub = stops.substring(startIndex, endIndex + 1);
                    stops = stops.replace(sub, '')
                }
                break;
            case 'Switch':
                let oldStr = info[1];
                let newStr = info[2]

                stops = stops.replace(oldStr, newStr);
                break;

        }
        console.log(stops);
        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`)

}
worldTourTask([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])