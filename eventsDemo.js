import events from 'events';
import util from 'util';

export const myEmitter = new events.EventEmitter;

myEmitter.on('test', function(arg) {
  console.log(arg);
});

myEmitter.emit('test', 'myArgument');

export const teams = function(name) {
  this.name = name;
}

// Make teams to inherit EventEmitter
util.inherits(teams, events.EventEmitter);




const Arsenal = new teams('Arsenal');
const Juventus = new teams('Juventus');
const Galatasaray = new teams('Galatasaray');

// console.log(Arsenal);
// console.log(Juventus);
// console.log(Galatasaray);

const teamArray = [Arsenal, Juventus, Galatasaray];

// Attach event Listener to it.
teamArray.forEach( (team) => {
  team.on('nation', function(nation) {
    console.log(team.name + 'is ' + nation + ' football club');
  });
});

Arsenal.emit('nation', 'English');
Juventus.emit('nation', 'Italian');
Galatasaray.emit('nation', 'Turkish');

// console.log(Arsenal);
// console.log(Juventus);
// console.log(Galatasaray);
