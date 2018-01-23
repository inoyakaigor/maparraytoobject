# Map array to object
### how to use
```js
import mapArrayToObject from 'maparraytoobject'

const array = [
  {id: 'bcd2', value: 'some val'},
  {id: '1fd4', value: 'some val'},
  {id: '6acc', value: 'some val'},
]

const store = mapArrayToObject(array, 'id')
/* store will be
  {
   1fd4: {id: "1fd4", value: "some val"},
   6acc: {id: "6acc", value: "some val"},
   bcd2: {id: "bcd2", value: "some val"}
  }
*/
```