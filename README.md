# decoderRing
JavaScript project built to be an encryption/decryption application to communicate and read top-secret messages using three different ciphers.
<br />
_run `npm install` then `npm start` in your terminal to get the app running_
## Ceasar Cipher
![Ceasar Cipher](/images/decoderRing-Ceasar.png?raw=true)
Here, the user can type any message they desire in the "Your Message" field then put any number between -25 and 25 in the "Shift number" field to set the shift key.
<br />
The output can be decoded by typing the outputed message in the "Your Message" field then putting the inverse number they used to code the original message in the "Shift number" field.
## Polybius Cipher
![Polybius Cipher](/images/decoderRing-Polybius.png?raw=true)
Here, the user can type any message they like in the "Your Message" field and make sure that "Encode" is checked to give each letter in their message a two digit code.
<br />
The output can be decoded by typing the outputed code in the "Your Message" field then checking "Decode."
<br />
**Side Note:** If 'i' or 'j' are used for the encoded message, errors may occur during decoding as they share the same number code. Typically with three or more words.
## Substitution Cipher
![Substitution Cipher](/images/decoderRing-Sub.png?raw=true)
Here, the user can type any message they like in the "Your Message" field, then assigning the "Alphabet Key" any 26-character, alphanumeric code, including symbols (but without any reapeating characters), and finally making sure "Encode" is checked.
<br />
The output can be decoded by typing the outputed message in the "Your Message" field, leaving the "Alphabet Key" field as-is, then checking "Decode."
## Built with:
- JavaScript using validation/conditional functions
- HTML
- CSS with Bootstrap
- Mocha & Chai using Test-Driven Development practices
