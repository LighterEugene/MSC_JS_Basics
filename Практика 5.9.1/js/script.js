console.log('You are at '+window.location);


function printNumbers (number) {
  var i = number;

  while (i <= 100000) {
    if(i % 6 === 0)
     console.log(i);
    i = ++i;
  }
  console.log('finished!');

};


