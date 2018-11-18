# Iteration

![](https://media.giphy.com/media/pfeT03JnVSsbC/giphy.gif)

### Set Up

1. Fork and clone this repo.
2. Create a file to work in.
3. Follow the tasks below.
4. Use `node` to test your work.

### Part 1 - Transformers

Given the array of transformers below, acomplish the following tasks:

1. Write a function called `transformersNames` that uses `map` to return a new array of transformers' names.
2. Write a function called `onlyAutobots` that uses `filter` to return a new array of only Autobots.
3. Write a function called `onlyVehicles` that uses `filter` to return a new array of transformers with only vehicle forms.

```js
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
```

### Part 2 - DNA Strings

In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Write a function called dnaTransform that takes in a DNA string returns a string that represents it's compliment. For example: `dnaTransform("ATTGC")` will rerurn `"TAACG"`

### BONUS

Reduce the array of constructions below to form Devastator!

The Devastator object should look like this:

```js
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
```

#### Here is the array:

```js
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
```
