<template id="cart">

    <div class="d-flex flex-column m-4">
        <div class=" m-2 mt-4 d-flex flex-column w-100 justify-content-center">
            <div class="d-flex justify-content-center">
                <h6>My Cart</h6>
            </div>
            <h6 class="mx-auto" style="color: red">{{ errorCart }}</h6>
            <div class="p-3 border border-primary ">
                <div class="d-flex flex-wrap m-2 ">

                    <div class="m-2 border border-success p-3  " v-for="(cart, index) in carts" :key="index">
                        {{ `Product: ${cart.product} || Price: ${cart.price} Qty: ${cart.qty}` }}
                        <button class="btn btn-primary m-1 " @click="addQuantityFromCart(cart, index)">+</button>
                        <button class="btn btn-danger m-1" @click="decreaseQuantity(cart, index)">-</button>
                        <button class="btn btn-danger m-1" @click="removeFromCart(index)">
                            Remove
                        </button>
                    </div>
                </div>
                <div class="d-flex mt-4 ">
                    <h6 class="ms-3">Total Price: ₱ {{ totalPrice ? totalPrice.toFixed((2)) : "0.00" }} </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cart",
    props: {
        carts: Array,
        errorCart: String,
        totalPrice: Function,
        addQuantityFromCart: Function,
        decreaseQuantity: Function,
        removeFromCart: Function,
    },



};
</script>