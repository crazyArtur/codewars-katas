/*
6 kyu
"Simple Encryption #1 - Alternating Split"

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!
*/

function encrypt(text, n) {
    if( text === null || text == ''|| n <= 0 )
        return text;
    else{
        let sourceLength = text.length;
        let oddPart = '';
        let evenPart = '';
        for(let i = 0; i+1 < sourceLength; i+=2){
            oddPart += text[i];
            evenPart += text[i+1];
        }
        
        if(sourceLength % 2 != 0)
            oddPart += text[sourceLength-1];
        
        return encrypt(evenPart.concat(oddPart), n-1);
    }
}

function decrypt(encryptedText, n) {
    if(encryptedText === null || encryptedText == '' || n <= 0)
        return encryptedText;
    else{
        let sourceLength = encryptedText.length;
        let oddPart = '';
        let evenPart = ''
        let textBeforeLastEncryption = '';
        
        if(sourceLength % 2 != 0){
            var middleIndex = (sourceLength-1)/2;
        }else
            middleIndex = sourceLength/2

        evenPart = encryptedText.slice(0, middleIndex);
        oddPart = encryptedText.slice(middleIndex);

        for(let i = 0; i < middleIndex; i++){
            textBeforeLastEncryption += oddPart[i]+evenPart[i];
        }

        textBeforeLastEncryption = decrypt(textBeforeLastEncryption, n-1);

        if(sourceLength % 2 != 0){
            textBeforeLastEncryption += oddPart[middleIndex];
        }

        return textBeforeLastEncryption;
    }
}

console.log(encrypt('qwertyu', 0));
console.log(encrypt('qwertyu', 1));
console.log(encrypt('qwertyu', 2));

console.log(" ");

console.log(decrypt('rqtwyeu', 0));
console.log(decrypt('rqtwyeu', 1));
console.log(decrypt('rqtwyeu', 2));

// console.log('i = ', i, ', oddPart = ', oddPart[i], ', evenPart = ', evenPart[i]);
// console.log('i = ', i, ', oddPart+1 = ', oddPart[i+1], ', evenPart+1 = ', evenPart[i+1]);
// console.log(" ");