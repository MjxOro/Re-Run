const fs = require('fs')

function makeObj(x){
	let cardObj = {
		image: `http://placekitten.com/200/300?image=${x}`,
		title: 'Cute Kitten ' + x,
		price: '$' + Math.floor(Math.random() * 100 + 1),
	}
	return cardObj
}
let cardArr = []
for(let i = 0; i<20;i++){
	cardArr.push(makeObj(i))
}
fs.writeFile('cardData.json',JSON.stringify(cardArr),()=>{
	console.log('File created successfully')
})

