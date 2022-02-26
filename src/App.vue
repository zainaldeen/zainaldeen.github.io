<template>
  <div id="app">
    <nav class="flex justify-between">
      <div class="flex gap-x-0.1 xsm:gap-x-1 sm:gap-x-2 md:gap-x-4 nav ">
        <img class="inline mb-2 nav-for-web my-ava" :src="require(`./assets/${urls[path]}.png`)" alt="my pic">
        <router-link class="nav-for-web" to="/home">Home</router-link>
        <router-link class="nav-for-mobile" to="/home"><img class="inline mb-2 my-ava" src="./assets/zainavatar1.png" alt="my pic">
        </router-link> |
        <router-link class="nav-for-web" to="/about">About</router-link>
        <router-link class="nav-for-mobile" to="/about"><img class="inline mb-2 my-ava" src="./assets/zainavatar2.png" alt="my pic">
        </router-link> |
        <router-link class="nav-for-web" to="/experiences">Experiences</router-link>
        <router-link class="nav-for-mobile" to="/experiences"><img class="inline mb-2 my-ava" src="./assets/zainavatar3.png" alt="my pic">
        </router-link>|
        <router-link class="nav-for-web" to="/education">Education</router-link>
        <router-link class="nav-for-mobile" to="/education"><img class="inline mb-2 my-ava" src="./assets/zainavatar4.png" alt="my pic">
        </router-link>|
        <router-link class="nav-for-web" to="/skills">Skills</router-link>
        <router-link class="nav-for-mobile" to="/skills"><img class="inline mb-2 my-ava" src="./assets/zainavatar5.png" alt="my pic">
        </router-link>|
        <router-link class="nav-for-web" to="/achievements">Achievements</router-link>
        <router-link class="nav-for-mobile" to="/achievements"><img class="inline mb-2 my-ava" src="./assets/zainavatar6.png" alt="my pic">
        </router-link>|
        <router-link class="nav-for-web" to="/contacts">Contacts</router-link>
        <router-link class="nav-for-mobile" to="/contacts"><img class="inline mb-2 my-ava" src="./assets/zainavatar7.png" alt="my pic">
        </router-link>
      </div>
      <div class="mr-2 sm:mr-5">
        <a href="./assets/my-resume.pdf" download="Zain Aldeen Fayod CV">
          <img class="inline nav-for-web pic-nav-for-web" id="my-pic" src="./assets/me.jpg" alt="my pic">
          <span class="nav-for-web"> Download resume </span>
        </a>
      </div>

    </nav>
    <main>
      <aside class="side-for-web" >
        <SideBarComponent :active-route="`${$route.path}`"/>
      </aside>
      <router-view class="main-for-web"/>
    </main>

  </div>
</template>

<script>
import SideBarComponent from "@/includes/SideBar";
export default {
  components: {SideBarComponent},
  data(){
    return {
      urls : {
        'home': 'zainavatar1',
        'about': 'zainavatar2',
        'experiences': 'zainavatar3',
        'education': 'zainavatar4',
        'skills': 'zainavatar5',
        'achievements': 'zainavatar6',
        'contacts': 'zainavatar7',
      }
    }
  },
  computed: {
    path() {
      if ( this.$route.path === '/') return '/';
      return  this.$route.path.split('/')[1];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}

main {
  height: calc(100vh - 45px);
  display: flex;

}
nav {
  height: 45px;
  background-color: #212121;
  text-align: left;
  padding: 10px 0 0 10px;
  border-bottom: 1px solid #747474;
  border-left: #ff6c37 5px solid;

}
#my-pic {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  display: inline;
}

.my-ava {
  min-width: 10px;
  max-width: 30px;
}


nav a {
  font-weight: bold;
  color: #a6a6a6;
}

nav a.router-link-active {
  color: #ff6c37;
}
nav a:hover {
  color: #ff6c37;
}

</style>
