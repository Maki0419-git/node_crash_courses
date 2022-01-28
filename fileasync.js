const { readFile, writeFile } = require('fs');

console.log("start")
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
})


readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', () => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/async-result.txt',
            ` append test Here is the result:${first},${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("done");
            }
        )
    })
})

console.log("start next task")
