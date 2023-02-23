let Emitter=require('events');
let config=require('./config');
let emtr = new Emitter();

// emtr.on('greet', ()=>console.log('Somewhere someone said hello'));  //uso on para guardar la funcion

emtr.on(config.events.GREET, ()=>console.log('Somewhere someone said hello'));  //uso on para guardar la funcion

emtr.on(config.events.GREET, ()=>console.log('A greeting ocurred'));  //uso on para guardar la funcion

emtr.on(config.events.JUMP, ()=>console.log('someone jumped'));  //uso on para guardar la funcion
