import chalk from "chalk";
import inquirer from "inquirer";

class Player {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}
class Opponent {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Please enter your name"
    })
let opponent = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select your opponent",
        choices: ["Skeleton", "Assassin", "Zombie"]
    })

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    if (opponent.select == "Skeleton") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Select Your option",
                choices: ["Attack", "Drink Portion", "Run for your life."]
            });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
              p1.fuelDecrease()
              console.log(chalk.bold.red (`${p1.name} fuel is ${p1.fuel}`))
              console.log(chalk.bold.green(` ${o1.name} fuel is ${o1.fuel}`))
if(p1.fuel <= 0 ){
    console.log(chalk.red.bold.italic("You lose better luck next time!")) 
    process.exit() 
}            
            }
            if (num <= 0) { 
              o1.fuelDecrease()
              console.log(chalk.bold.green(` ${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(` ${o1.name} fuel is ${o1.fuel}`))
                if(o1.fuel <= 0 ){
                    console.log(chalk.red.bold.italic("You win1"))
                    process.exit() 
                }  
            }
        }
        if (ask.opt == "Drink Portion") {
    p1.fuelIncrease()
    console.log(chalk.bold.italic.blue(`You Drink health portion your fuel is ${p1.fuel}` ))
         }
        if (ask.opt == "Run for your life.") { console.log(chalk.red.bold.italic("You lose better luck next time!"))
        process.exit()  }
    } 


    if (opponent.select == "Assassin") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Select Your option",
                choices: ["Attack", "Drink Portion", "Run for your life."]
            });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
              p1.fuelDecrease()
              console.log(chalk.bold.red (`${p1.name} fuel is ${p1.fuel}`))
              console.log(chalk.bold.green(` ${o1.name} fuel is ${o1.fuel}`))
if(p1.fuel <= 0 ){
    console.log(chalk.red.bold.italic("You lose better luck next time!")) 
    process.exit() 
}            
            }
            if (num <= 0) { 
              o1.fuelDecrease()
              console.log(chalk.bold.green(` ${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(` ${o1.name} fuel is ${o1.fuel}`))
                if(o1.fuel <= 0 ){
                    console.log(chalk.red.bold.italic("You win1"))
                    process.exit() 
                }  
            }
        }
        if (ask.opt == "Drink Portion") {
    p1.fuelIncrease()
    console.log(chalk.bold.italic.blue(`You Drink health portion your fuel is ${p1.fuel}` ))
         }
        if (ask.opt == "Run for your life.") { console.log(chalk.red.bold.italic("You lose better luck next time!"))
        process.exit()  }
    } 


    if (opponent.select == "Zombie") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Select Your option",
                choices: ["Attack", "Drink Portion", "Run for your life."]
            });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
              p1.fuelDecrease()
              console.log(chalk.bold.red (`${p1.name} fuel is ${p1.fuel}`))
              console.log(chalk.bold.green(` ${o1.name} fuel is ${o1.fuel}`))
if(p1.fuel <= 0 ){
    console.log(chalk.red.bold.italic("You lose better luck next time!")) 
    process.exit() 
}            
            }
            if (num <= 0) { 
              o1.fuelDecrease()
              console.log(chalk.bold.green(` ${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(` ${o1.name} fuel is ${o1.fuel}`))
                if(o1.fuel <= 0 ){
                    console.log(chalk.red.bold.italic("You win1"))
                    process.exit() 
                }  
            }
        }
        if (ask.opt == "Drink Portion") {
    p1.fuelIncrease()
    console.log(chalk.bold.italic.blue(`You Drink health portion your fuel is ${p1.fuel}` ))
         }
        if (ask.opt == "Run for your life.") { console.log(chalk.red.bold.italic("You lose better luck next time!"))
        process.exit()  }
    } 
}
while(true)



