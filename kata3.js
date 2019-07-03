/*
6 kyu
"Simple Encryption #1 - Alternating Split"

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!
*/

function encrypt(text, n) {
    if(n <= 0)
        return text;

    if(text !== null && text != ''){
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
    else
        return text;
}

function decrypt(encryptedText, n) {
    if(n <= 0)
        return encryptedText;

    if(encryptedText !== null && encryptedText != ''){
        let sourceLength = encryptedText.length;
        let oddPart = '';
        let evenPart = ''
        let textBeforeLastEncryption = '';
        
        if(sourceLength % 2 != 0){
            // encryptedText = encryptedText.slice(0, -1);
            sourceLength--;
        }

        evenPart = encryptedText.slice(0, sourceLength/2);
        oddPart = encryptedText.slice(sourceLength/2);

        for(let i = 0; i < sourceLength/2; i++){

            textBeforeLastEncryption += oddPart[i]+evenPart[i];
        }

        if((sourceLength+1) % 2 != 0){
            textBeforeLastEncryption += oddPart[sourceLength/2];
        }

        return decrypt(textBeforeLastEncryption, n-1);

    }
    else
        return encryptedText;

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