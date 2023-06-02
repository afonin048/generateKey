const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let password = '';
function generateKey(length, characters){
    for(let i=0; i<length; i++){
        let gif = characters[Math.floor(Math.random()* characters.length)];
        password += gif
    }
}
generateKey(Math.floor(Math.random()* characters.length), characters)
console.log(password)
