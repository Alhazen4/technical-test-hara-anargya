<script setup>
  import PopUpComponent from './components/PopUpComponent.vue';
</script>

<template>
  <div id="check" class="bg-white-cus h-screen w-screen">
      <div class="flex bg-white">
        <div class="flex flex-col w-281px h-screen px-4 py-8 overflow-y-auto border-r">
          <h2 class="text-3xl font-extrabold text-left text-web-title">
            heylink.
          </h2>

          <div class="flex flex-col justify-between mt-6">
            <aside>
              <ul>

                <li>
                  <router-link to="/" class="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715c.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725z"/><path stroke-linecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"/></g></svg>
                    <span class="mx-4 text-base font-medium">Dashboard</span>
                  </router-link>
                </li>

                <li>
                  <router-link to="/overview" class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m22 7l-7.38 7.335c-.997.991-1.496 1.487-2.115 1.487c-.619 0-1.117-.496-2.115-1.488l-.24-.238c-.997-.992-1.497-1.489-2.116-1.489s-1.118.497-2.115 1.49L2 18M22 7v5.546M22 7h-5.582"/></svg>
                    <span class="mx-4 text-base font-medium">Overview</span>
                  </router-link>
                </li>

              </ul>
            </aside>
          </div>
        </div>

        <div class="w-full h-screen bg-white-cus">
          <div class="w-full h-65px bg-white border-b px-5 py-5 flex item-baseline">
            <p class="text-black text-base font-semibold">
              Conversion
            </p>
          </div>
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<style scoped></style>
