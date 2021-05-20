import Api from '@/services/Api'

export default {
  login_seller (credentials) {
    return Api().post('/api/seller/login', credentials)
  },
  login_buyer (credentials) {
    return Api().get('/api/buyer/login', { params: credentials })
  },
  register_buyer (credentials) {
    return Api().post('/api/buyer', credentials)
  },
  register_seller (credentials) {
    return Api().post('/api/seller', credentials)
  },
  seller_books (id) {
    console.log(id)
    return Api().get('/api/book/sellerBooks', { params: { sellerSellerid: id } })
  },
  listings () {
    return Api().get('/api/book/listings')
  },
  seller_registerBooks (book) {
    return Api().post('/api/book/registerBook', book)
  },
  buyer_bookRequest (request) {
    return Api().post('/api/request', request)
  },
  seller_receivedRequests (id) {
    return Api().get('/api/request/sellerRequests', { params: { sellerid: id } })
  },
  buyer_byId (id) {
    return Api().get('/api/buyer/buyerid', { params: { buyerid: id } })
  },
  book_byId (id) {
    return Api().get('/api/book/sellerBooks', { params: { book_id: id } })
  }
}
