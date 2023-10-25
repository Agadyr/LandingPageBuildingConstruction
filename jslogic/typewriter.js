let output = document.getElementById('output')

let words = [
    'Our Services',
    'House Remodel',
    'Tower Construction',
    'Interior Design',
    'Metal Roofing',
    'Plumbing Service',
    'Building Renovation'
]

let charTurn = 0;
let wordturn = 0;
printWord()
function printWord(){
    if(charTurn <= words[wordturn].length){
        output.innerHTML = words[wordturn].substr(0, charTurn)
        charTurn++
        setTimeout(printWord,200)
    }else{
        setTimeout(deleteWord, 700)
    }
}
function deleteWord(){
    if(charTurn >= 0){
        output.innerHTML = words[wordturn].substr(0, charTurn)
        charTurn--
        setTimeout(deleteWord, 100)
    }else{
        if(wordturn < words.length - 1){
            wordturn++
        }else{
            wordturn = 0
        }
        charTurn = 0
        setTimeout(printWord,200)
    }
}

