const fruits = [
  'apple',
  'mango',
  'orange',
  'banana',
  'pineapple',
];

function chopper(fruits) {
  console.log('Start chopping...');
  setTimeout(() => {
    juicer(fruits)
  }, 1000);
}

function juicer(choppedFruits) {
  console.log('Start juicing...');
  setTimeout(() => {
    const juice = choppedFruits.map((fruit)=>{
        return ` ${fruit} juice`
    })
     console.log(`Juices is ready to be served${juice}`)
  }, 1000);
}

function startJuicing(fruits) {
    return chopper(fruits)
}

startJuicing(fruits);

/*
    Expected result: juices is ready to be served apple-juice, mango-juice, orang-juice....
*/
