const k = 3
const machine = new kNear(k)

function learnO() {
    machine.learn(webcamdata, 'O')
    log.innerText = `Learning O`
}

function learnL() {
    machine.learn(webcamdata, 'L')
    log.innerText = `Learning L`

}
function learnI() {
    machine.learn(webcamdata, 'I')
    log.innerText = `Learning I`
}

function predict() {
    let prediction = machine.classify(webcamdata)
    console.log(`I think it's a ${prediction}`)
    log.innerText = `I think it's a ${prediction}`
}
