<script lang="ts">
  import { email, userId } from "../stores/userInfo";
</script>

<section class="h-screen">
  <p>Hello, {$email}</p>
  <p>Your user id is: {$userId}</p>
</section>
