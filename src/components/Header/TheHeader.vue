<template>
  <div>
    <header>
      <h1 class="title">October 2023 Repositories</h1>
      <nav>
        <p><router-link to="/main">Main</router-link></p>
        <p><router-link to="/favourites">Favourites</router-link></p>
      </nav>
    </header>
  </div>
</template>

<script>
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
}

.title {
  font-weight: 800;
  font-size: 3.75rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem 0;
}

nav {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

p {
  font-weight: 800;
  font-size: 1.75rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin: 0;
  padding: 0.5rem;
  background-color: #86efac;
  border-radius: 1rem;
  margin: 0;
  display: flex;
  align-items: center;
}
</style>
