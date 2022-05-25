<template>
  <section class="listacmd">
    <p>Piadas ácidas(bullying)</p>
    <br />
    <div>
      <img :src="image" id="comedimg"/>
      <h1>Léo Lins</h1>
    </div>
    <div>
      <img :src="image1" id="comedimg"/>
      <h1>Rafinha Bastos</h1>
    </div>
    <div>
      <img :src="image2" id="comedimg"/>
      <a href="arthur.html"><h1>Arthur Petry</h1></a>
    </div>
  </section>
</template>
<script>
import image1 from "@/assets/rafinha2.jpg";
import image2 from "@/assets/arthur2.jpg";
import image from "@/assets/leolins2.jpg";

export default {
  data: function () {
    return {
      image: image,
      image1: image1,
      image2: image2,
    };
  },
};

</script>
<style>
.listacmd {
  padding: 2em;
  display: inline-block;
  width: 100%;
}
.listacmd div {
  float: left;
  width: 30%;
  border: 1px solid black;
  margin: 2px;
}
#comedimg {
  width: 100%;
}
</style>
