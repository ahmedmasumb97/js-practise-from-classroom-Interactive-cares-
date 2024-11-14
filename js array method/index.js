const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];



// map : take all values without any condition

let names = characters.map( ele => ele.name )
let fname = characters.map( ele => ele.name.split(' ')[0])
let allHeight = characters.map( ele => ele.height)
let nameHeight = characters.map( (ele) => {
    return {
        
        name: ele.name,
        height: Number(ele.height)
    }
})
console.log( names)
console.log(fname)
console.log(allHeight)
console.log(nameHeight)



// filter


let greater100 = characters.filter((ele) => {
    return ele.mass > 100 
})
let ematyArr = []
let less100 = characters.filter((ele) => {
    if(ele.mass < 100) {
        console.log(ele)
        ematyArr.push({
            name: ele.name,
            mass: ele.mass
        })
    
    }
})


let ematyArr1 = []

let maleCharacter = characters.filter( (male)  => {
    if( male.gender === 'male'){
        
        ematyArr1.push({
            name: male.name,
            mass: male.gender
        })
    }

    if (male.gender === 'female'){
        ematyArr1.push({
            name: male.name,
            mass: male.gender
        })
    }
})
console.log(greater100)
console.log(ematyArr)
console.log(ematyArr1)



// every

let blueEyePerson = []
let blueEye = characters.every((ele) => {
    if(ele.eye_color == 'blue') {
       blueEyePerson.push({
        name: ele.name,
        eye_color: ele.eye_color
       })
    }
    return ele.eye_color == 'blue'
})

console.log(blueEyePerson)
console.log(blueEye)



// reduce

let tottalMess = characters.reduce( (total,ele,index,arr) => {
    return `${Number(total)+Number(ele.mass)} `
},0)

let totalHeight = characters.reduce( (total,ele,index,arr) => {
    return Number(total)+Number(ele.height)
},0)

let nameb =''
let namelength = characters.reduce( (total,ele) => {
    
 
 return (total += ele.name.split(' ').join('').length)
    
},)


let eyeColor = characters.reduce( (total,ele) => {
    console.log(typeof total)
    if(total[ele.eye_color]){
        total[ele.eye_color]++
    }

    else{
        total[ele.eye_color] = 1
    }
    return total

},{})
console.log(tottalMess)
console.log(totalHeight)
console.log(namelength)
console.log(nameb)
console.log(eyeColor)

// for(let i=0; i<characters.length; i++) {
//     console.log(characters[i])
// }

// if do not set default values for total it set automatically first index
let num = [3,2,4,5]
let sum = num.reduce((total,ele) => {
    return total
    
})


console.log(sum)


let ob = {

}

// ob['one'] = 1;
// ob['two'] = 2;
// ob['three'] = 3;
// ob['two']++; //
// console.log(ob)

let country = "Bangladesh is beautiful country"
let captital = country.split("").reduce( (total,element)=>{

    if(element != " "){

        if(total[element]){
            total[element]++
        }

    else{
        total[element] = 1
    }
    }

    return total

},{})


console.log(captital)