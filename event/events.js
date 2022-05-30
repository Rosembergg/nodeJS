/*Criação do core dos eventos 

const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (msg) => {
    console.log('Eu ouvi você', msg)
})

ev.emit('saySomething',"Rafael")
*/
const {inherits} = require('util')
const {EventEmitter} = require ('events')

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character ('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado`))

console.log('Oh! quem podera me salvar ?')
chapolin.emit('help')

