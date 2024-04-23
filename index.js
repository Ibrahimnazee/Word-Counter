#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgCyanBright("\n \t \t Welcome To Word Counter"));
console.log(chalk.green("=".repeat(60)));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter A Word",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(words);
console.log(chalk.bold.bgBlueBright("\n \t \t -sentence word"));
console.log(chalk.bold.bgRedBright(`\n \t \t word count ${(chalk.bold.bgRedBright(words.length))}`));
console.log(chalk.green("=".repeat(60)));
