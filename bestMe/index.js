const questions = [
    "Oque eu aprendi hoje ?",
    "Oque me deixou aborrecido ? Oque posso fazer para melhorar",
    "Oque me deixou feliz hoje ?",
    "Quantas pessoas ajudei hoje ?",
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index]+ " > ")
}

ask()

const answers = []

 process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else{
        console.log(answers)
        process.exit()
    }
 })

 process.on('exit', () =>{
     console.log(`
        Bacana Rafael

        Oque você aprendeu hoje foi:
        ${answers[0]}

        Oque te aborreceu hoje e oque você pode fazer para melhorar foi:
        ${answers[1]}

        Oque te deixou feliz hoje:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!

        Volte amanha para mais reflexões. 
     `)
 })