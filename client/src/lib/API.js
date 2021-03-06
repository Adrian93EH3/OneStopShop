import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (email, password, signUpCode) {
      return axios.post('/api/users', { email, password, signUpCode });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get('/api/secrets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Products: {
    getAllProducts: function() {
      return axios.get('/api/products', {})
    },

    createProduct: function(productObj) {
      return axios.post('/api/products', productObj)
    }
  }

}
