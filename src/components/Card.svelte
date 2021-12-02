<script lang="ts">
  const addToCart = (selected: number, cart: number) => {
    //on click add cart
    if (!selected || selected === 0) {
      return cart;
    }
    return selected + cart;
  };

  let arr = [1, 2, 3, 4];
  arr.push(1);
  console.log(arr);
</script>
