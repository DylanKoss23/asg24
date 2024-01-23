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
body {
  background-color: black;
  color: rgb(148, 23, 23);
}

header {
  display: flex;
 justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  color: rgb(196, 42, 106);
  background-color: rgb(174, 177, 0);
}

a {
  color: rgb(0, 247, 255);
  text-decoration: none;
}

a:hover {
  color: rgb(131, 63, 63);
}

nav {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

main {
  background-color: rgb(180, 62, 180);
  color: white;
}
</style>