<template>
<div class="container">
    <div class="text-center">
    <h1 >Dashboard</h1>
    <hr style="width:50%; margin-left:25% !important; margin-right:25% !important;" />
    <h4>Welcome {{user.sellerfirstname}} {{user.sellerlastname}} !</h4>
    </div>
    <div>
        <div>
            <h5>Requests for Listed Books</h5>
            <b-table table-variant="warning" striped hover :fields="fields1" :items="requests"></b-table>
        </div>
        <div>
            <h5>Your Currently Listed Books</h5>
            <b-table table-variant="primary" striped hover :fields="fields" :items="items"></b-table>
        </div>
    </div>
    <div>
        <b-button @click="onReset();modalShow = !modalShow" variant="outline-primary">List a book</b-button>
        <b-modal v-model="modalShow" hide-footer >
            <b-form>
                 <b-form-group
                    id="input-group-1"
                    label="Book Title:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="book.book_title"
                    placeholder="Enter Book Title"
                    required
                    ></b-form-input>
                </b-form-group>
                 <b-form-group id="input-group-2" label="Book Description:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="book.book_description"
                    placeholder="Enter Description"
                    required
                    ></b-form-input>
                </b-form-group>
                 <b-form-group id="input-group-3" label="Book Author First Name:" label-for="input-3">
                    <b-form-input
                    id="input-3"
                    v-model="book.book_author_first_name"
                    placeholder="Enter Book Author First Name"
                    required
                    ></b-form-input>
                </b-form-group>
                 <b-form-group id="input-group-4" label="Book Author Last Name:" label-for="input-4">
                    <b-form-input
                    id="input-4"
                    v-model="book.book_author_last_name"
                    placeholder="Enter Book Author Last Name"
                    required
                    ></b-form-input>
                </b-form-group>
                 <b-form-group id="input-group-5" label="Book Price:" label-for="input-5">
                    <b-form-input
                    id="input-5"
                    v-model.number="book.book_price"
                    type="number"
                    placeholder="Enter Book Author Last Name"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-button @click="addBook(book)" variant="outline-primary">Add Book</b-button>
            </b-form>
        </b-modal>
    </div>
</div>
</template>

<script>
import routes from '../services/routes'
export default {
  name: 'Sell',
  data () {
    return {
      modalShow: false,
      user: this.$store.state.user.data,
      fields: ['book_id', 'book_title', 'book_description', 'book_author_first_name', 'book_author_last_name', 'book_price', 'book_status'],
      fields1: ['request_id', 'book_id', 'buyer_id'],
      items: [],
      requests: [],
      book: {
        book_title: '',
        book_description: '',
        book_price: 0,
        book_author_first_name: '',
        book_author_last_name: ''
        // sellerSellerid: this.$store.user.data.sellerid
      }
    }
  },
  created () {
    routes.seller_books(this.user.sellerid).then(data => {
    //   console.log(data.data)
      this.items = data.data
    }).catch(err => {
      console.log(err)
    })
    routes.seller_receivedRequests(this.user.sellerid).then(data => {
      console.log(data.data)
      this.requests = data.data
    //   this.requests.forEach((req, i) => {
    //     routes.buyer_byId(req.buyer_id).then(data => {
    //       this.requests[i].buyerfirstname = data.buyerfirstname
    //       this.requests[i].buyerlastname = data.buyerlastname
    //       this.requests[i].buyeremail = data.buyeremail
    //     })
    //   })
    //   this.requests.forEach((req, i) => {
    //     routes.book_byId(req.book_id).then(data => {
    //       this.requests[i].book_title = data.book_title
    //       this.requests[i].book_description = data.book_description
    //     })
    //   })
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    onReset () {
      // Reset our form values
      this.book.book_title = ''
      this.book.book_description = ''
      this.book.book_price = 0
      this.book.book_author_first_name = ''
      this.book.book_author_last_name = ''
    },
    addBook (book) {
      book.sellerSellerid = this.user.sellerid
      console.log(book)
      routes.seller_registerBooks(book).then(data => {
        this.items.push(data.data)
      })
      this.modalShow = !this.modalShow
    }
  }
}

</script>

<style scoped>

</style>
