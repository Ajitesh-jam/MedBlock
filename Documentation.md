#firestore database
create database in firestore webiste
get configuration from there 
https://firebase.google.com/docs/firestore/quickstart
paste initial code 


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    FIREBASE_CONFIGURATION
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);







//FOR storj


<!-- //FOR Ceramic 

following documentation - 

docs - https://developers.ceramic.network/docs/composedb/create-ceramic-app
video - https://www.youtube.com/watch?v=69dU8P3aWME&t=611s


following documentation progress - 
 ```brew install ceramicnetwork/tap/ceramic-one
ceramic-one daemon --network testnet-clay``` (to run on testnet) 

use Ceramic insted of ceramic-one
```npm install -g @ceramicnetwork/cli```

for interactiveness -
```npm install -g @glazed/cli```

```npm install -g ipfs```
```ipfs daemon```

DID Session - 
```glaze did:create```


DataBase - 

glaze model:create test
glaze model:inspect test  #verify





#following QuickStart

```npx create-ceramic-app```



// Another method (above not worrking)
```
npm install did-session
npm install @didtools/pkh-ethereum
npm install dids

```
 -->

<!-- // IPFS 
```npm install ipfs-http-client``` -->


Ceramic again
yt video - https://www.youtube.com/watch?v=r68FXBTCBZ4&t=125s
docs - https://blog.ceramic.network/getting-started-with-composedb-on-ceramic-2/

```
brew install jq
curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/ceramicstudio/wheel/main/wheel.sh | bash





```





#IPFS

```
npm install -g @web3-storage/w3cli
w3 login