<template>
  <div>
    <Header />
    <ItemList />
  </div>
</template>

<script>
import Header from "@/components/Header";
import ItemList from "@/components/ItemList";
export default {
  name: "Home",
  components: {
    Header,
    ItemList,
  },
};
</script>
