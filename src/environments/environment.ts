// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  configFirebase : {
    apiKey: "AIzaSyAlpldvcu8utVAnypRMUdMZ4H4EKr2x0iE",
    authDomain: "therapyapp-6edb2.firebaseapp.com",
    databaseURL: "https://therapyapp-6edb2.firebaseio.com",
    projectId: "therapyapp-6edb2",
    storageBucket: "therapyapp-6edb2.appspot.com",
    messagingSenderId: "482425361237"
  },
  dialogFlow: {
    angularBot:'aae1c4f707034241bad1b630fff542e1'
 }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
