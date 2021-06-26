# Decoder Ring
## Vanilla Javascript

<br>

_An easy-to-use website to encode and decode secret messages!_

<br>

<image src="screenshot-decoder-ring.png">

## Summary

The Decoder Ring will allow users to encode and decode secret messages in three distinct ways.

### Caesar Shift
The Caesar Shift will ask the user to enter a message to be encoded or decoded. When encoding the user must select a number to "shift" the alphabet to encode the secret message. When decoding the user must know the amount to shift (positive or negative) in order to sucessfully decode the message.

### Polybius Square
The Polybius Square only requires the user to select if they are encoding or decoding the message. The polybius square is set up in a 5x5 square with "a" being in the top left corner and "z" being in the bottom right corner. The letters "i" and "j" share a square. Each letter is transformed into a 2-digit number that represents that letter. The result is a message made completely of numbers. When decoding the letter "i" and "j" will appear in the decoded message as "(i/j)" and it is up to the user to determine which letter should be used in the message.

### Substitution Cipher
The Substitution Cipher will ask the user to enter a message as well as an alphabet key. The key must be exactly 26 unique characters. Each character in the alphabet key will correspond to a letter of the alphabet. "A" will be transformed into the first character in the alphabet key, "b" will be transformed to the second, and so on. If the user doesn't enter exactly 26 unique characters for the key, the encryption or decryption will fail.

All options will maintain proper spacing and will ignore capital letters.

## Author

* **Kevin Bisner** - *Full-Stack Software Developer* - [Website](http://www.kevinbisner.com) | [LinkedIn](https://www.linkedin.com/in/kevinbisner/)
