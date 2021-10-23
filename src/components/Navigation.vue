<template>
  <header>
      <nav class="container">
          <div class="branding">
              <router-link 
              class="header" :to="{name : 'Home'}"
              >Falgun</router-link>
          </div>
          <div class="nav-links">
              <ul>
                  <router-links class="link">Home</router-links>
                  <router-links class="link">Blog</router-links>
                  <router-links class="link">Code-Editor</router-links>
                  <router-links class="link">Courses</router-links>
                  <router-links class="link">Login/Register</router-links>
              </ul>

          </div>
      </nav>
  </header>
  </template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>