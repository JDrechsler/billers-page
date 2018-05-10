var config = {
	databaseURL: "https://billersapp.firebaseio.com",
	projectId: "billersapp",
};

firebase.initializeApp(config)

const db = firebase.firestore()

export var billsRefSorted = db.collection('billers').orderBy("dayOfMonth", "asc")

var billsRef = db.collection('billers')
Vue.prototype.$billsRef = db.collection('billers')