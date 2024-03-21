<template id="addProduct">
    <div class="d-flex justify-content-between">

        <div class="d-flex flex-column w-100 m-4 border border-primary">
            <h6 class="m-2">Products </h6>
            <div class="d-flex flex-wrap">
                <h6 class="d-flex flex-column m-3 p-3 border border-success " v-for="(product, index) in products"
                    :key="index">
                    <div>
                        <h4>{{ product.product }}</h4>
                        <h6>Price: {{ product.price }}</h6>
                    </div>

                    <button class="btn btn-primary m-2" @click="addToCart(product)">
                        Add to cart
                    </button>
                </h6>
            </div>
        </div>


    </div>

</template>

<script>
export default {
    name: "addProduct",
    props: {
        products: Array,
        addToCart: Function
    }

};
</script>

<style scoped>
/* Your scoped styles here */
</style>