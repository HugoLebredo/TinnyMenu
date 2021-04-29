require('colors')

const showMenu = () => {
    
    console.clear()
    
    return new Promise((resolve) => {    
        

        console.log(`===========================`.cyan)
        console.log(`\tSelect Option`)
        console.log(`===========================`.cyan)
        console.log(`\t${"1".green} New Task 1`)
        console.log(`\t${"2".green} New Task 2`)
        console.log(`\t${"3".green} New Task 3`)
        console.log(`\t${"4".green} New Task 4`)
        console.log(`\t${"5".green} New Task 5`)
        console.log(`\t${"6".green} New Task 6`)
        console.log(`\t${"7".green} New Task 7`)
        console.log(`\t${"0".green} Exit\n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Select an Option: ',(opt) => {
            resolve(opt)
            readline.close()
        }
    )})
}


const pause = () => {

    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`Push ${'Enter'.green} to continue`,() => {
            readline.close()
            resolve()
        })
    })
}


module.exports = {showMenu, pause}