<template>
  <div>
    <h1>{{ product.name }}</h1>
    <h1><strong>ID:</strong> {{ product.id }}</h1>
    <h1><strong>Price:</strong> {{ product.price | currency }}</h1>
    <h1><strong>In Stock:</strong> {{ product.inStock }}</h1>
    <h1>{{ product.description }}</h1>
  </div>
</template>

<script>
import { products } from "./data/products";

export default {
  data() {
    return {
      products: products,
      product: null,
    };
  },
  created() {
    let productId = this.$route.params.productId;
    this.product = this.getProduct(productId);
  },
  methods: {
    getProduct(productId) {
      let match = null;

      this.products.forEach(function (product) {
        if (product.id == productId) {
          match = product;
        }
      });
      return match;
    },
  },
};
</script>
