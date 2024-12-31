const zero = '+[]'; 
const one = '+!![]'; 

const number = n =>{
    Array.from({length:n}, () => one).join(' + ');
}

const map = {}; 

map.a = `(+{}+ [])[${number(1)}]`;

const fromString = s => s.split('').map(x => {
    return map[x];
}).join('+');

const x = {}+[] // object object
;