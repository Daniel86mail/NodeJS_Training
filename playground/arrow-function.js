var square = (x) => x*x;

 console.log(square(9));


 var user = {
     name: 'Daniel',
     sayHi: () => { 
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
     },
     sayHiAlt: function() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
     }
     
 };

 user.sayHi(1,2,3);
 user.sayHiAlt(1,2,3);
