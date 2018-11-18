/* 
Part 1 - Transformers
Given the array of transformers below, acomplish the following tasks:
*/


var transformers = [
    {
      name: 'Optimus Prime',
      form: 'Freightliner Truck',
      form_type: 'vehicle',
      team: 'Autobot'
    },
    {
      name: 'Megatron',
      form: 'Gun',
      form_type: 'object',
      team: 'Decepticon'
    },
    {
      name: 'Bumblebee',
      form: 'VW Beetle',
      form_type: 'vehicle',
      team: 'Autobot'
    },
    {
      name: 'Soundwave',
      form: 'Walkman',
      form_type: 'object',
      team: 'Decepticon'
    },
    {
      name: 'Starscream',
      form: 'Fighter Jet',
      form_type: 'vehicle',
      team: 'Decepticon',
    },
    {
      name: 'Rodimus Prime',
      form: 'Ford GT',
      form_type: 'vehicle',
      team: 'Autobot',
    }
  ];


  // 1. Write a function called transformersNames that uses map to return a new array of transformers' names.

  var transformersNames = transformers.map(function(x){

    return x.name;
  });
  //console.log(`Names : ${transformersNames}`);

  // 2. Write a function called onlyAutobots that uses filter to return a new array of only Autobots.

  var onlyAutobots = transformers.filter(function(x){
      return x.team == 'Autobot';
  });
  //console.log(onlyAutobots);

  // 3. Write a function called onlyVehicles that uses filter to return a new array of transformers with only vehicle forms.

  var onlyVehicles = transformers.filter(function(x){
      return x.form_type == 'vehicle';
  });
  //console.log(onlyVehicles)




  /* 
  Part 2 - DNA Strings
  In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". 
  Write a function called dnaTransform that takes in a DNA string returns a string 
  that represents it's compliment. For example: dnaTransform("ATTGC") will rerurn "TAACG"
  */


  function dnaTransform(str){
      var x = "";
      for (var i = 0; i < str.length; i++){
          if (str[i] == 'A'){
              x += 'T';
          } else if (str[i]== 'C'){
              x += 'G';
          } else if (str[i]== 'T'){
            x += 'A';
         } else if (str[i]== 'G'){
            x += 'C';
         }
     };
     return x;
};

  //console.log(dnaTransform('ATTGC'));

  // Part 2/1 another solution! 
 function dnaTransform(str){
   var dna = {  A: 'T',  T: 'A',  C: 'G',  G: 'C' };
   return str.split('').map(function(char) {
     return dna[char];
   }).join('');

 };




  /* 
  BONUS
Reduce the array of constructions below to form Devastator!

The Devastator object should look like this:

{ 
  name: 'Devastator',
  team: 'Decepticons',
  form: {
     rightLeg: 'Scrapper',
     upperTorso: 'Hook',
     leftArm: 'Bonecrusher',
     rightArm: 'Scavenger',
     leftLeg: 'Mixmaster',
     lowerTorso: 'Long Haul',
  },
}
  */


 var constructicons = [
    {
      name: 'Scrapper',
      form: 'Freightliner Truck',
      team: 'Decepticon',
      bodyPart: 'rightLeg'
    },
    {
      name: 'Hook',
      form: 'Mobile Crane',
      team: 'Decepticon',
      bodyPart: 'upperTorso'
    },
    {
      name: 'Bonecrusher',
      form: 'Bulldozer',
      team: 'Decepticon',
      bodyPart: 'leftArm'
    },
    {
      name: 'Scavenger',
      form: 'Excavator',
      team: 'Decepticon',
      bodyPart: 'rightArm'
    },
    {
      name: 'Mixmaster',
      form: 'Concrete Mixer',
      team: 'Decepticon',
      bodyPart: 'leftLeg'
    },
    {
      name: 'Long Haul',
      form: 'Dump Truck',
      team: 'Decepticon',
      bodyPart: 'lowerTorso'
    }
  ];

  var obj = { 
    name: 'Devastator',
    team: 'Decepticons',
    form: {
       
    },
  };

  


  function buildTransformer() {

    var accumObj = {
      name: 'Devastator',
      team: 'Decepticons',
      form: {}
    };
  
   return constructicons
          .reduce(function(accumObj, elem) {
              accumObj.form[elem.bodyPart] = elem['name'];
              return accumObj;
          }, accumObj);
  }

  console.log(buildTransformer);


