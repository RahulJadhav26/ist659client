<template>
  <div class="container">
        <div class="text-center">
            <h1 >Dashboard</h1>
            <hr style="width:50%; margin-left:25% !important; margin-right:25% !important;" />
            <h4>Welcome {{user.buyerfirstname}} {{user.buyerlastname}} !</h4>
        </div>
        <div>
            <b-table
                :items="list"
                :fields="fields"
                select-mode="single"
                responsive="sm"
                ref="selectableTable"
                selectable
                @row-selected="onRowSelected"
                >
                <template #cell(selected)="{ rowSelected }">
                    <template v-if="rowSelected">
                        <span aria-hidden="true">&check;</span>
                        <span class="sr-only">Selected</span>
                    </template>
                    <template v-else>
                        <span aria-hidden="true">&nbsp;</span>
                        <span class="sr-only">Not selected</span>
                    </template>
                 </template>
            </b-table>
            <div>
             <b-button size="sm" variant="outline-primary" @click="clearSelected">Clear selected</b-button>
            </div>
        </div>
        <b-button class="mt-5" variant="outline-success" @click="Request(selected)"> Request Selected Books</b-button>
  </div>
</template>

<script>
import routes from '../services/routes'
export default {
  name: 'Buy',
  data () {
    return {
      user: this.$store.state.user.data,
      list: [],
      fields: ['selected', 'book_title', 'book_description', 'book_author_first_name', 'book_author_last_name', 'book_price'],
      selected: []
    }
  },
  created () {
    routes.listings().then(data => {
      this.list = data.data
    })
  },
  methods: {
    onRowSelected (items) {
      this.selected = items
    },
    selectAllRows () {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected () {
      this.$refs.selectableTable.clearSelected()
    },
    Request (obj) {
      var request = {
        book_id: obj[0].book_id,
        sellerSellerid: obj[0].sellerSellerid,
        buyerid: this.user.buyerid
      }
      console.log(request)
      routes.buyer_bookRequest(request).then(data => {
        console.log(data.data)
        alert('Request Generated Successfully')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

</script>

<style>

</style>
