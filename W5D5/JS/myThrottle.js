Function.prototype.myThrottle = function(interval) {
  let tooSoon = true;
  // console.log('hello?')
  if (tooSoon === false) {
    console.log(`${this.name}`)
    tooSoon = true;
    setTimeout(function(){tooSoon = false;}, interval);

    this();
  }
}


class Neuron {
  // console.log('hello?')
  fire() {
    console.log("Firing!");
  }
};

const neuron = new Neuron;

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);


// clearInterval(interval);

neuron.fire = neuron.fire.myThrottle(500);

const interval = setInterval(() => {
  neuron.fire();
}, 10);

// // This time, if our Function#myThrottle worked correctly, 
// // the Neuron#fire function should only be able to execute 
// // every 500ms, even though we're still trying to invoke it 
// // every 10ms!

// // If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }
// };