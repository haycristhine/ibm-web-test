<template>
  <cv-header aria-label="Carbon tutorial">
    <cv-header-name to="#">StackOverflow Searcher</cv-header-name>
    <cv-header-nav v-if="$auth.isAuthenticated">
      <cv-header-menu-item to="/home">Home</cv-header-menu-item>
      <cv-header-menu-item to="/empty-page">Favorites</cv-header-menu-item>
    </cv-header-nav>
    <template v-if="!$auth.loading" slot="header-global">
      <cv-header-menu-item v-if="$auth.isAuthenticated"
        >Welcome, {{ $auth.user.name }}</cv-header-menu-item
      >
      <cv-header-global-action
        v-if="$auth.isAuthenticated"
        @click="logout"
        aria-label="Logout"
      >
        <logout-20 />
      </cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
import Logout20 from '@carbon/icons-vue/es/logout/20';
import Notification20 from '@carbon/icons-vue/es/notification/20';
import UserAvatar20 from '@carbon/icons-vue/es/user--avatar/20';
export default {
  name: 'TutorialHeader',
  components: { Notification20, UserAvatar20, Logout20 },
  methods: {
    logout() {
      this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>
