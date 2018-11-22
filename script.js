var MarkHeight, MarkMass, JohnHeight, JohnMass, JohnBMI, MarkBMI, IsMark;

MarkHeight = prompt('Enter Mark\'s Height');
console.log('Mark\'s Height', MarkHeight);
MarkMass = prompt('Enter Mark\'s Mass');
console.log('Mark\'s  Mass', MarkMass);
JohnHeight = prompt('Enter John\'s Height');
console.log('John\'s Height', MarkHeight);
JohnMass = prompt('Enter John\'s Mass');
console.log('John\'s  Mass', MarkMass);

JohnBMI = JohnMass/JohnHeight*JohnHeight;
MarkBMI = MarkMass/MarkHeight*MarkHeight;

if(JohnBMI>MarkBMI){
    IsMark = false
    console.log('Is Marks\' BMI higher than John\'s',IsMark);
} else if(MarkBMI>JohnBMI){
    IsMark = true
    console.log('Is Marks\' BMI higher than John\'s',IsMark);
} else{
    console.log("DEAD");
}





