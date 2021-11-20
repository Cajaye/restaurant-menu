<script lang="ts">
  const addToCart = (selected: number, cart: number) => {
    //on click add cart
    if (!selected || selected === 0) {
      return cart;
    }
    return selected + cart;
  };
</script>
