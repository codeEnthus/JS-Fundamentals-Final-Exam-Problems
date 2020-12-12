function needForSpeed(array) {

    let carCnt = Number(array.shift());
    let carsArr = array.slice(0, carCnt);
    let commands = array.slice(carCnt);

    let cars = {};

    carsArr.forEach(car => {
        let [model, kilometers, aviableFuel] = car.split('|');
        kilometers = Number(kilometers);
        aviableFuel = Number(aviableFuel);
        cars[model] = { distance: kilometers, fuel: aviableFuel }
    })

    for (const command of commands) {
        let tokens = command.split(' : ')
        let act = tokens[0];
        let model = tokens[1];

        if (act === 'Drive') {
            let km = Number(tokens[2]);
            let needFuel = Number(tokens[tokens.length - 1])
            if (cars[model].fuel < needFuel) {
                console.log(`Not enough fuel to make that ride`)
            } else {
                cars[model].distance += km;
                cars[model].fuel -= needFuel;
                console.log(`${model} driven for ${km} kilometers. ${needFuel} liters of fuel consumed.`)
            }
            if (cars[model].distance >= 100000) {
                delete cars[model];
                console.log(`Time to sell the ${model}!`)
            }
        } else if (act === 'Refuel') {
            let maxFuel = 75;
            let refuel = Number(tokens[tokens.length - 1]);
            let totalFuel = refuel + cars[model].fuel;
            if (totalFuel > maxFuel) {
                console.log(`${model} refueled with ${maxFuel - cars[model].fuel} liters`)
                cars[model].fuel = maxFuel;

            } else {
                console.log(`${model} refueled with ${totalFuel - cars[model].fuel} liters`)
                cars[model].fuel += refuel;
            }
        } else if (act === 'Revert') {
            let revertedKm = Number(tokens[tokens.length - 1]);
            let currentKm = cars[model].distance -= revertedKm
            if (currentKm < 10000) {
                cars[model].distance = 10000;
            } else {
                console.log(`${model} mileage decreased by ${revertedKm} kilometers`);

            }
        }
    }

    let carEntries = Object.entries(cars).sort((a,b)=>{
        if (b[1].distance === a[1].distance){
            return  a[0].localeCompare(b[0]);
        }else {
            return b[1].distance - a[1].distance
        }
    })
    for (const car of carEntries) {
        console.log(`${car[0]} -> Mileage: ${car[1].distance} kms, Fuel in the tank: ${car[1].fuel} lt.`)
    }

}