<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";

  let name = $state("");
</script>

<main class="container">
  <h1>Media Center</h1>
  <p>Click below to start.</p>
  <a href="/library"><button>Start</button></a>
</main>