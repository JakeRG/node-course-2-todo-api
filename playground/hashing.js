const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '696969!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$HTrefw3wBXJgoHDYva1Fkuhlp77C5XGDPVjweJjlbRUv2d9Q0IpHy';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// let data = {
//     id: 69
// };

// let token = jwt.sign(data, '69696969');
// console.log(token);

// let decoded = jwt.verify(token, '69696969');
// console.log('decoded', decoded);

// let message = 'I am your father';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data)).toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log("Data was not changed");
// } else {
//     console.log("Data was changed. Do not trust!");
// }