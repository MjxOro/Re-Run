const fs = require('fs')

function makeObj(x){
	let cardObj = {
		id: x+1,
		image: `http://placekitten.com/200/300?image=${x+1}`,
		title: 'Cute Kitten ' + x+1,
		price: '$' + Math.floor(Math.random() * 100 + 1),
	}
	return cardObj
}
let cardArr = []
for(let i = 0; i<12;i++){
	cardArr.push(makeObj(i))
}
fs.writeFile('cardData.json',JSON.stringify(cardArr),()=>{
	console.log('File created successfully')
})

