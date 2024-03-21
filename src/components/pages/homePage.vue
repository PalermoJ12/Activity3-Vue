<template id="HomePage">
  <div class="d-flex flex-column">
    <div>
      <addProduct
        :products="products"
        :addToCart="addToCart"
        :addNewProduct="addNewProduct"
      />
    </div>
    <div>
      <cart
        :carts="carts"
        :errorCart="errorCart"
        :totalPrice="totalPrice"
        :removeFromCart="removeFromCart"
        :decreaseQuantity="decreaseQuantity"
        :addQuantityFromCart="addQuantityFromCart"
      />
    </div>
  </div>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import addProduct from "./addProduct.vue";
import cart from "./cart.vue";
export default {
  name: "homePage",
  components: {
    addProduct,
    cart,
  },
  data() {
    return {
      newProductText: null,
      newPrice: 0,
      products: [
        { id: 1, product: "Laptop", price: 20.35, qty: 1 },
        { id: 2, product: "Cellphone", price: 39.5, qty: 1 },
        { id: 3, product: "Tablet", price: 15.99, qty: 1 },
        { id: 4, product: "Smartwatch", price: 49.99, qty: 1 },
        { id: 5, product: "Headphones", price: 29.99, qty: 1 },
        { id: 6, product: "Mouse", price: 9.99, qty: 1 },
        { id: 7, product: "Keyboard", price: 14.99, qty: 1 },
        { id: 8, product: "Printer", price: 79.99, qty: 1 },
        { id: 9, product: "Camera", price: 129.99, qty: 1 },
        { id: 10, product: "External Hard Drive", price: 59.99, qty: 1 },
      ],
      error: "",
      errorCart: "",
      qty: 0,
      cartItemNo: 0,
      prodQty: 0,
      carts: [],
    };
  },
  methods: {
    addToCart(data) {
  

      const checkToken = localStorage.getItem("token");
      if (checkToken) {
        const check = this.carts.find((i) => i.id === data.id);
        if (check) {
          this.errorCart = "This product is already in cart.";
        } else {
          this.carts.push(data);
          this.errorCart = "";
        }
      }else{
        this.$router.push("/login")
      }
    },
    addQuantityFromCart(i, index) {
      this.carts.forEach((cartItem) => {
        if (cartItem.id === i.id) {
          cartItem.qty++;
        }
      });
    },
    decreaseQuantity(i, index) {
      this.carts.forEach((cartItem, index) => {
        if (cartItem.id === i.id) {
          if (cartItem.qty == 1) {
            this.carts.splice(index, 1);
          } else {
            cartItem.qty--;
          }
        }
      });
    },
    removeFromCart(index) {
      this.carts.splice(index, 1);
    },
  },
  computed: {
    totalPrice() {
      return this.carts.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.qty;
      }, 0);
    },
  },
};
</script>

<style scoped></style>
