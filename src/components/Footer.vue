<template>
  <footer class="footer glass-gradient">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <p>&copy; 2025 Nordic Nexus</p>
        </div>
        <div class="col">
          <ul class="social-links">
            <li><a href="https://discord.gg/gvVdMhBKXY" target="_blank" rel="noopener noreferrer"><i
                  class="fa-brands fa-discord"></i></a></li>
            <li><a href="https://steamcommunity.com/groups/nordicnexus" target="_blank" rel="noopener noreferrer"><i
                  class="fa-brands fa-steam"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  color: white;
  padding: 22px;
  position: relative;
  width: 100%;
  backdrop-filter: blur(10px);
  z-index: 10;
}

body {
  margin: 0;
}

.glass-gradient {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
}

.social-links {
  list-style: none;
  padding: 0;
}

.social-links li {
  display: inline;
  margin-right: 10px;
}

.social-links a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

.social-links a:hover {
  color: #7bffa5;
}
</style>
