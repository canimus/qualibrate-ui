

Vue.component('qfp-main', {
  template: `
    <div class="columns">
      <div class="column is-3" v-show="isSideVisible">
        <aside class="menu section">
          <qfp-sideheader v-for="(header,idx) in headers" :key="idx" :title="header.name" v-bind:position="idx+1" v-on:menuclear='menuClear()'></qfp-sideheader>
        </aside>
      </div>
      <div class="column">
        <section class="section">
          <h1 class="title">Heineken</h1>
          <h2 class="subtitle">Order to Cash / Business Processes</h2>
        </section>
      </div>
    </div>
  `,
  data() {
    return {
      isSideVisible: true,
      headers : [
        {name: 'Design'},
        {name: 'Testing'},
        {name: 'Planning'},
        {name: 'Training'},
        {name: 'Environment'}
      ]
    }
  },
  methods: {
    menuClear() {
      this.$children.forEach(d => {
        d.$children.forEach(e => e.isActive = false)
      })
    }
  }
})

Vue.component('qfp-nav', {
  template: `
  <div class="hero is-light">
      <nav class="nav">
        <div class="nav-right">
          <a href="#" class="nav-item is-tab is-active">Home</a>
          <a href="#" class="nav-item is-tab">Company</a>
          <a href="#" class="nav-item is-tab">About Us</a>
          <a href="#" class="nav-item is-tab">Contact</a>
        </div>
      </nav>
  </div>
  `,
  data() {
    return {
      menus: ['test', 'dos']
    }
  }
})

Vue.component('qfp-sideheader', {
  template: `
  <div>
    <p class="menu-label">{{title}}</p>
    <ul class="menu-list">
      <qfp-sidemenu v-for="(menu,idx) in menuValues" :key="menu.item" :index='idx' :icon="menu.icon" :name="menu.item" v-on:menuclear="menuClear"></qfp-sidemenu>
    </ul>
    <p>&nbsp;</p>
  </div>
  `,
  props: ['title', 'position'],
  data() {
    return {
      menus: [
        [
          {item: 'Dashboard', icon: 'tachometer', color: 'is-info'},
          {item: 'Processes', icon: 'sitemap'},
          {item: 'Roles', icon: 'users'},
          {item: 'Tags', icon: 'tags'}
        ],
        [
          {item: 'Flows', icon: 'trello'},
          {item: 'Tasks', icon: 'tasks'},
          {item: 'User Actions', icon: 'hand-o-up'},
          {item: 'User Functions', icon: 'superscript'},
          {item: 'Data Sets', icon: 'database'},
          {item: 'Scenarios', icon: 'gears'}
        ],
        [
          {item: 'Tasks', icon: 'check-square-o'},
          {item: 'Schedules', icon: 'calendar-plus-o'},
          {item: 'Reports', icon: 'bar-chart-o'},
          {item: 'Defects', icon: 'bug'}
        ],
        [
          {item: 'Playbacks', icon: 'film'},
          {item: 'Handbooks', icon: 'book'}
        ],
        [
          {item: 'Adapters', icon: 'laptop'},
          {item: 'Licenses', icon: 'unlock-alt'},
          {item: 'Status', icon: 'heartbeat'}
        ]
      ]
    }
  },
  computed: {
    menuValues() {
      return this.menus[this.position-1];
    }
  },
  methods: {
    menuClear(evt) {
      this.$emit('menuclear')
    }
  }
})


Vue.component('qfp-sidemenu', {
  template: `
  <li>
    <a :class="isActive ? 'is-active' : ''" v-on:click="menuChanged()" v-on:keyup.down='menuChanged'>
      <span class="icon">
        <i :class="'fa fa-' + icon"></i>
      </span> {{name}}
    </a>
  </li>
  `,
  props: ['icon', 'name', 'index', 'color'],
  data() {
    return {
      isActive : false
    }
  },
  methods: {
    menuChanged() {
      this.$emit('menuclear', this.index);
      this.isActive = !this.isActive;
    }
  }
})

new Vue({
  el: '#root'
})
