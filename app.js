console.log('hello world!');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("vvedite pervoe chislo ", function(a) {
    rl.question("vvedite vtoroe chislo ", function(b) {
        a=Number(a);
        b=Number(b);
        console.log(a+b);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
// class human {
//     let head; 
//     let body; 
//     let arms; 
//     let legs; 
// }
// class person {
//     person(name, surename, age, address) {
//         this.name=name;
//         this.surename=surename;
//         this.age=age;
//         this.address=address;
//     }
//     let name;
//     let surename; 
//     let age; 
//     let address;
//     oneYearPassed() {
//         this.age+=1;
//     }
// }
// let aman = new person("Aman", "Kozybayev", 27, "aktobe");
// aman.oneYearPassed();





