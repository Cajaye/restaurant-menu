<script lang="ts">
  import { email, userId } from "../stores/userInfo";
</script>
//check if the values are empy and use a loading skeleton until the values are not empty
<section class="h-screen">
  <p>Hello, {$email}</p>
  <p>Your user id is: {$userId}</p>
</section>
