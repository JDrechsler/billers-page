<template>

	<q-modal-layout>
		<q-toolbar slot="header">
			<q-btn flat round dense v-close-overlay icon="keyboard_arrow_left"></q-btn>
			<q-toolbar-title>
				Settings
			</q-toolbar-title>
			Version 0.2
		</q-toolbar>

		<div class="layout-padding">
			<q-btn icon="refresh" class="full-width mb30" color="primary" label="Refresh Page" @click="reloadPage"></q-btn>
			<q-btn color="positive" v-close-overlay class="full-width mb30" label="Mark All Bills As Paid" @click="markAllBillsAsPaid"></q-btn>
			<q-btn color="negative" v-close-overlay class="full-width mb30" label="Mark All Bills As Unpaid" @click="markAllBillsAsUnpaid"></q-btn>
		</div>

	</q-modal-layout>
</template>

<script>

export default {
	data() {
		return {

		}
	},
	methods: {
		reloadPage() { window.location.reload() },
		markAllBillsAsPaid() {
			for (let bill of this.bills) {
				this.$billsRef.doc(bill.id).update({ isPaid: true })
			}
		},
		markAllBillsAsUnpaid() {
			for (let bill of this.bills) {
				this.$billsRef.doc(bill.id).update({ isPaid: false })
			}
		}
	},
	computed: {
		/**@returns {Array<Bill>} */
		bills() { return this.$store.state.bills }
	}
}
</script>

<style scoped>
.q-modal-layout-content.col.scroll {
  background: linear-gradient(45deg, #6cfd9f, #6887ff);
}

.mb30 {
  margin-bottom: 30px;
}
</style>
