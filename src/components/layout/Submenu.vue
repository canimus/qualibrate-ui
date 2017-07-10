<template>
    <div>
        <p class="menu-label">{{submenu.name}}</p>
        <ul class="menu-list">
            <li v-for="item in submenu.items" :key="item.title">
                <router-link :to="item.path">
                    <span class="icon"><i :class="['fa', item.icon]"></i></span>
                    {{item.title}}
                </router-link>
            </li>
        </ul>
        <p></p>
    </div>
</template>

<script>
  export default {
    props: ['submenu']
  }
</script>
