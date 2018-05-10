<template>
	<q-layout view="hHr LpR lFf">
		<q-layout-header>
			<q-toolbar>
				<q-toolbar-title>
					Bill Tracker - {{getDateToday}}
				</q-toolbar-title>
			</q-toolbar>
		</q-layout-header>

		<q-page-container class='scroll-content'>
			<q-page>

				<div v-if='bills.length > 0'>

					<div v-for="bill in unpaidBills" :key="bill.id">
						<card-comp :propbill='bill' @contextmenu.native.prevent="editSelectedBill(bill)" @click.native="editSelectedBill(bill)"></card-comp>
					</div>

					<hr>

					<div v-for="bill in paidBills" :key="bill.id">
						<card-comp :propbill='bill' @contextmenu.native.prevent="editSelectedBill(bill)" @click.native="editSelectedBill(bill)"></card-comp>
					</div>

				</div>
				<div v-else>
					No bills to show right now.
				</div>

				<q-page-sticky position="bottom-right" :offset="[18, 18]">
					<q-fab icon="add" direction="up" color="primary">
						<q-fab-action @click="addModalOpened=true" color="blue" class="white" icon="add"></q-fab-action>
						<q-fab-action @click="overviewModalOpened=true" color="blue" class="white" icon="info"></q-fab-action>
					</q-fab>
				</q-page-sticky>

				<q-modal v-if="addModalOpened" v-model="addModalOpened" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
					<add-bill-comp></add-bill-comp>
				</q-modal>

				<q-modal v-if="editModalOpened" v-model="editModalOpened" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
					<edit-bill-comp :propbill='selectedBill'></edit-bill-comp>
				</q-modal>

				<q-modal v-if="overviewModalOpened" v-model="overviewModalOpened" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
					<overview-comp></overview-comp>
				</q-modal>

			</q-page>

		</q-page-container>
	</q-layout>
</template>

<script>
export default {
	data() {
		return {
			message: "Vuefire & Firestore",
			notificationSupported: false,
			addModalOpened: false,
			editModalOpened: false,
			overviewModalOpened: false,
			search: "string",
			/**@type {Bill} */
			selectedBill: {}
		};
	},
	created() {
		this.enableNotifications()
	},
	methods: {
		enableNotifications() {
			if ("Notification" in window) {

				if (Notification.permission === 'granted') {
					return
				}

				Notification.requestPermission()
					.then(res => {
						console.log(res)
						if (res !== 'granted') {
							console.log('permission was denied for notifications')
							//alert('denied...')
						} else {

							navigator.serviceWorker.ready.then(function (registration) {
								registration.showNotification('Notification test was successful', {
									body: '$1',
									icon: 'assets/icon.png',
									vibrate: [200, 100, 200, 100, 200, 100, 200],
									badge: 'assets/icon.png'
									// image: 'http://www.leveragedloan.com/wp-content/uploads/2018/01/netflix-logo.png'
								});
							});
						}
					})

			} else {
				//alert("This browser does not support notifications, I am sorry :/")
				console.log('This browser does not support notifications :/')
			}
		},
		editSelectedBill(/**@type {Bill} */ bill) {
			this.selectedBill = bill
			this.editModalOpened = true
		},
		sendNotificationReminders() {

		}
	},
	computed: {
		/**@returns {Array<Bill>} */
		bills() { return this.$store.state.bills },
		/**@returns {string} Returns a date string */
		getDateToday() {
			let today = new Date
			return today.toDateString()
		},
		/**@returns {Array<Bill>} */
		paidBills() { return this.bills.filter(u => u.isPaid) },
		/**@returns {Array<Bill>} */
		unpaidBills() { return this.bills.filter(p => !p.isPaid) }
	}
};
</script>

<style scoped>
.scroll-content {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
  display: block;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  contain: size style layout;
  background: linear-gradient(45deg, #6cfd9f, #6887ff);
}

.q-alert {
  min-width: 250px;
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>