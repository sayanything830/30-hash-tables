'use strict';

const HashTable = require('./lib/hash-table');

let hashTable = new HashTable(3);

let one = {
  key: 'bob',
  value: '123-456-7890',
};

let two = {
  key: 'jane',
  value: '234-567-8901',
};

let three = {
  key: 'bob',
  value: '345-678-9012',
};

hashTable.set(one.key, one.value);
hashTable.set(two.key, two.value);
hashTable.set(three.key, three.value);

console.log('3 nodes set to memory: ', hashTable.memory);

console.log('get "jane" from table: ', hashTable.get('jane'));

hashTable.remove('jane');

console.log('"jane" removed from table: ', hashTable.memory);
