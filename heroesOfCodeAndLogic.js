function heroesOfCodeAndLogic(input) {


    let count = Number(input.shift());

    let heroes = {};

    for (let i = 0; i < count; i++) {
        let [heroName, health, mana] = input[i].split(' ');

        health = Number(health);
        mana = Number(mana);

        heroes[heroName] = { health, mana }
    }

    let commands = input.slice(count);

    let info = commands.shift()

    while (info !== 'End') {
        let [command, argName, arg2, arg3] = info.split(' - ')
        if (heroes[argName]) {
            switch (command) {
                case 'Heal':
                    let currentHealth = heroes[argName].health;
                    let heal = Number(arg2)
                    heroes[argName].health += heal;
                    if (heroes[argName].health > 100) {
                        heroes[argName].health = 100
                    console.log(`${argName} healed for ${100 - currentHealth} HP!`);
                    }else {
                    console.log(`${argName} healed for ${heal} HP!`);

                    }
                    break;
                case 'Recharge':
                    let currentMana = heroes[argName].mana
                    let mana = Number(arg2);
                    heroes[argName].mana += mana;
                    if (heroes[argName].mana > 200) {
                        heroes[argName].mana = 200;
                    console.log(`${argName} recharged for ${200 - currentMana} MP!`)
                    }else {
                    console.log(`${argName} recharged for ${mana} MP!`)

                    }
                    break;
                case 'CastSpell':
                    let aviableMP = heroes[argName].mana;
                    let neededMP = Number(arg2);
                    let spell = arg3;
                    if (aviableMP < neededMP) {
                        console.log(`${argName} does not have enough MP to cast ${spell}!`)
                    }else {
                        let leftMana = aviableMP - neededMP
                        console.log(`${argName} has successfully cast ${spell} and now has ${leftMana} MP!`);
                        heroes[argName].mana = leftMana;
                    }
                    break;
                case 'TakeDamage':
                    let incomingDmg = Number(arg2);
                    let hitSpell = arg3;
                    let leftHealth = heroes[argName].health - incomingDmg

                    if (leftHealth > 0) {
                        console.log(`${argName} was hit for ${incomingDmg} HP by ${hitSpell} and now has ${leftHealth} HP left!`)
                        heroes[argName].health = leftHealth;
                    } else {
                        console.log(`${argName} has been killed by ${hitSpell}!`)
                        delete heroes[argName]
                    }
                    break;
            }
        }
        info = commands.shift();
    }

    let sortedHeroes = Object.entries(heroes).sort((a,b)=>{
        if (b[1].health === a[1].health){
            return a[0].localeCompare(b[0])
        }else {
            return b[1].health - a[1].health
        }
    });

    for (const kvp of sortedHeroes) {
      console.log(`${kvp[0]}`);

      console.log(`  HP: ${kvp[1].health}`);

      console.log(`  MP: ${kvp[1].mana}`); 
    }

}
heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]);
