<template>
  <header>
    <div>
      <NuxtLink to="/">Doge</NuxtLink>
    </div>
    <nav>
      <NuxtLink to="doges">Doges</NuxtLink>

    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  color: rgb(116, 26, 190);
  background-color: black;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: red;
}
nav {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>