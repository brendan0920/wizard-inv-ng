import promptSync from "prompt-sync";
const prompt = promptSync();

export class ConsoleIO {
    getRandomNumber(maxVal: number): number {
        return Math.floor(Math.random() * maxVal) + 1;
    }

    getWholeNumber(userInput: string): number {
        let nbr: number = 0;
        let success: boolean = false;
        while (!success) {
            console.log();
            let strInput: string = prompt(userInput);
            nbr = Number(strInput);
            if (!isNaN(nbr) && Number.isInteger(nbr)) {
                success = true;
            } else {
                console.log("Invalid entry, Must be a whole number. Try again!");
            }
        }
        return nbr;
    }

    getString1(userInput: string): string {
        let strValue: string = "";
        let isValid: boolean = false;
        while (!isValid) {
            strValue = prompt(userInput).toLocaleLowerCase();
            if (strValue == "") {
                console.log("Error: entry is required.");
                continue;
            } else {
                break;
            }
        }
        return strValue;
    }

    getString2(userInput: string, s1: string, s2: string): string {
        let strValue: string = "";
        let isValid: boolean = false;
        while (!isValid) {
            strValue = prompt(userInput).toLocaleLowerCase();
            if (strValue == "") {
                console.log("Error: entry is required.");
                continue;
            }
            else if (strValue != s1 && strValue != s2) {
                console.log(`Error: entry must be either '${s1}' or '${s2}'.`);
                continue;
            }
            else {
                break;
            }
        }
        return strValue;
    }

    getInt(userInput: string, min: number, max: number): number {
        let number: number = 0;
        let isValid: boolean = false;

        while (!isValid) {
            try {
                number = parseInt(prompt(userInput));
                if (number < min) {
                    console.log(`Invalid entry: number less than min (${min})`);
                    continue;
                }
                else if (number > max) {
                    console.log(`Invalid entry: number greater than max (${max})`);
                    continue;
                }
                else {
                    break;
                }
            }
            catch (e) {
                console.log("Invalid entry: please enter a valid integer.");
                continue;
            }
        }
        return number;
    }

}
