export var store = new Vuex.Store({
	strict: true,
	state: {
		bills: []
	},
	mutations: Vuexfire.firebaseMutations,
	getters: {
		bills: state => state.bills,
	},
	actions: {
		setBillsRef: Vuexfire.firebaseAction(({ bindFirebaseRef }, ref) => {
			bindFirebaseRef('bills', ref)
		})
	},
})