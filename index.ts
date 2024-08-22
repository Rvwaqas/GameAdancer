import chalk from "chalk";
import inquirer from "inquirer";

// player class
class Player{
    name:string;
    fuel:number=100;

constructor(name:string){
    this.name=name;
}
fuelDecrease(){
    let fuel=this.fuel -25;
    this.fuel=fuel;
}
drinkFuel(){
    this.fuel=100;
}

}

class Opponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }

    fuelDecrease(){
        let fuel=this.fuel -25;
        this.fuel=fuel;
    }
}//Opponent class

// calling inquirer

let player=await inquirer.prompt({
    type:'input',
    name:'name',
    message:"Enter Your Name"
})

console.log(player.name);

let opponent=await inquirer.prompt({
    type:'list',
    name:'select',
    message:"Select your Opponent!",
    choices:["Skeleton","Assassin","Zombie"]
    
})

console.log(opponent.select)

let p1=new Player(player.name);
let o1=new Opponent(opponent.select)

do{


if(opponent.select=="Skeleton"){
    
    let ask=await inquirer.prompt({
        type:'list',
        name:'opt',
        message:"Select your tasl",
        choices:["Attack","Drink portion","Run For Your Life.."]
    })

    if(ask.opt=="Attack"){
            let num=Math.floor(Math.random()*2)
            if(num>0){
               p1.fuelDecrease()
               console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`)
               console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`)
                if(p1.fuel<=0){
                    console.log(chalk.red.bold.italic("You loose,Better Luck Next Time")) 
                    process.exit()               
                }
            }
            if(num<=0){
                o1.fuelDecrease()
                console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`)
                console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`)
                if(o1.fuel<=0){
                    console.log(chalk.red.bold.italic("You win"))
                    process.exit()            
                }
            }
            
    }
    if(ask.opt=="Drink portion"){
        p1.drinkFuel();
        console.log(p1.fuel)
    }
    if(ask.opt=="Run For Your Life.."){
        console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"));
        process.exit()    
    }


}

if(opponent.select=="Assassin"){
    
    let ask=await inquirer.prompt({
        type:'list',
        name:'opt',
        message:"Select your tasl",
        choices:["Attack","Drink portion","Run For Your Life.."]
    })

    if(ask.opt=="Attack"){
            let num=Math.floor(Math.random()*2)
            if(num>0){
               p1.fuelDecrease()
               console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`)
               console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`)
                if(p1.fuel<=0){
                    console.log(chalk.red.bold.italic("You loose,Better Luck Next Time")) 
                    process.exit()               
                }
            }
            if(num<=0){
                o1.fuelDecrease()
                console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`)
                console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`)
                if(o1.fuel<=0){
                    console.log(chalk.red.bold.italic("You win"))
                    process.exit()            
                }
            }
            
    }
    if(ask.opt=="Drink portion"){
        p1.drinkFuel();
        console.log(p1.fuel)
    }
    if(ask.opt=="Run For Your Life.."){
        console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"));
        process.exit()    
    }


}


if(opponent.select=="Zombie"){
    
    let ask=await inquirer.prompt({
        type:'list',
        name:'opt',
        message:"Select your tasl",
        choices:["Attack","Drink portion","Run For Your Life.."]
    })

    if(ask.opt=="Attack"){
            let num=Math.floor(Math.random()*2)
            if(num>0){
               p1.fuelDecrease()
               console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`)
               console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`)
                if(p1.fuel<=0){
                    console.log(chalk.red.bold.italic("You loose,Better Luck Next Time")) 
                    process.exit()               
                }
            }
            if(num<=0){
                o1.fuelDecrease()
                console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`)
                console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`)
                if(o1.fuel<=0){
                    console.log(chalk.red.bold.italic("You win"))
                    process.exit()            
                }
            }
            
    }
    if(ask.opt=="Drink portion"){
        p1.drinkFuel();
        console.log(p1.fuel)
    }
    if(ask.opt=="Run For Your Life.."){
        console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"));
        process.exit()    
    }


}

}//do
while(true)