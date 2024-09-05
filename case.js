const school = 'Bindubasini Govt Boys High School';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'ChemIsTry';

if (subject.toLocaleLowerCase == book.toLocaleLowerCase) {
    console.log("Poira fatai felbo");
}
else {
    console.log("Hudai hudai pata ultabo");
}

const drinks = 'water';
const liquid = '   water   ';
if (drinks.trim == liquid.trim) {
    console.log('Pani er opor nam jibon');
}
else {
    console.log("Somudre pani ase kintu khaite pari na");
}