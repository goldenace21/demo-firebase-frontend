// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAcc3cU1tzH5jA0GHy4nNHEaoH_Ywkzdrw",
    authDomain: "news-684f3.firebaseapp.com",
    // databaseUrl
    databaseUrl: "https://news-684f3-default-rtdb.firebaseio.com/",
    projectId: "news-684f3",
    storageBucket: "news-684f3.appspot.com",
    messagingSenderId: "606144768703",
    appId: "1:606144768703:web:f0eed0a05845320157740a",
    measurementId: "G-6YHBZY9D47"
  },
  apiUrl: 'http://localhost:8080'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
