<template>
  <header>
    <div>
      <h1 id="maintit">Humor Ideal</h1>
    </div>
    <div id="logdiv">
      <a href="login.html">Login</a>
    </div>
  </header>
  <main>
    <section id="intsec">
      <RouterLink to="/">Introdução</RouterLink>
    </section>
    <section>
      <div id="genero">
        <h2>Gêneros</h2>
        <nav>
          <RouterLink to="/newg">Livre</RouterLink>
        </nav>
        <nav>
          <RouterLink to="/acido">ácido</RouterLink>
        </nav>
        <nav>
          <RouterLink to="/autodp">Auto-Depressivo</RouterLink>
        </nav>
        <nav>
          <RouterLink to="/fem">Feminino</RouterLink>
        </nav>
        <nav>
          <RouterLink to="/estrang">Estrangeiro</RouterLink>
        </nav>
      </div>
    </section>
    <section><RouterView /></section>
  </main>
</template>
<style>
@import "@/assets/base.css";
body {
  background-image: url("./assets/fundomadeira.jpg");
}
header {
  background-color: darkred;
  padding: 1em;
}
#maintit {
  color: white;
}
main {
  border-radius: 20px;
  background-color: white;
  margin: auto;
  padding: 5em;
  padding-top: 1em;
  margin-top: 5em;
  width: 60%;
  text-align: center;
}
#genero nav {
  margin: 2px;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #ff7f50;
  border-radius: 10px;
  position: relative;
  float: left;
}
#genero {
  display: inline-block;
}
#genero a {
  color: white;
  text-decoration: none;
}
#genero h2 {
  text-align: center;
}
#intsec {
  width: 100%;
  background-color: darkred;
  text-align: center;
}
#intsec a {
  color: white;
  text-decoration: none;
}
#logdiv a {
  color: white;
  text-decoration: none;
}
</style>
