<script lang="ts" setup>
// const navbarUpdate = async () => {
//   const navbarEl = document.querySelector('.navbar')
//   const checkCollapsedNavbar = document.querySelector('.navbar .navbar-collapse')
//   if (navbarEl) {
//     if (navbarEl.classList.contains('show')) {
//       navbarEl.classList.add('collapsed')
//     } else {
//       navbarEl.classList.remove('collapsed')
//     }
//   }
//   await new Promise((resolve) => setTimeout(resolve, 1))
//   setTimeout(navbarUpdate, 1)
// }
// const navbarOnScroll = () => {
//   const scrollTop = window.scrollY
//   const navbarEl = document.querySelector('.navbar')
//   if (navbarEl) {
//     if (scrollTop > 0) {
//       navbarEl.classList.add('scrolled')
//     } else {
//       navbarEl.classList.remove('scrolled')
//     }
//   }
// }

// let time: NodeJS.Timeout | undefined
// onMounted(() => {
//   time = setTimeout(navbarUpdate, 1)
//   window.addEventListener('scroll', navbarOnScroll)
// })
// onBeforeUnmount(() => {
//   clearTimeout(time)
//   window.removeEventListener('scroll', navbarOnScroll)
// })
</script>

<template>
  <div class="w-full min-h-screen flex flex-col text-gray-100">
    <div class="fixed top-0 left-0 w-full py-4 px-6">
      <div class="relative flex justify-between">
        <div class="flex">
          <NuxtLink class="" to="/">
            <svg width="27.71" height="32" viewBox="0 0 167 192" fill="#0096FF" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M69.8874 125V117.448L82.3034 98.376C83.2421 96.968 84.1168 95.6027 84.9274 94.28C85.7808 92.9573 86.4634 91.6133 86.9754 90.248C87.5301 88.8827 87.8074 87.4533 87.8074 85.96C87.8074 84.4667 87.5088 83.3573 86.9114 82.632C86.3141 81.9067 85.5034 81.544 84.4794 81.544C83.3274 81.544 82.4314 81.864 81.7914 82.504C81.1514 83.144 80.7034 83.9973 80.4474 85.064C80.2341 86.1307 80.1274 87.3253 80.1274 88.648V91.208H69.7594V88.456C69.7594 85.384 70.2501 82.6533 71.2314 80.264C72.2128 77.832 73.7701 75.9333 75.9034 74.568C78.0368 73.16 80.8314 72.456 84.2874 72.456C88.9381 72.456 92.4368 73.672 94.7834 76.104C97.1728 78.4933 98.3674 81.8427 98.3674 86.152C98.3674 88.2427 98.0261 90.184 97.3434 91.976C96.7034 93.768 95.8288 95.5173 94.7194 97.224C93.6528 98.888 92.5008 100.637 91.2634 102.472L81.7914 116.616H96.9594V125H69.8874Z" />
              <path d="M44.3279 125L34.9839 73.16H44.7759L50.3439 108.36L55.5279 73.16H65.8959L56.4239 125H44.3279Z" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M116.674 113.352V125H126.658V113.352H131.458V105.416H126.658V73.16H114.242L100.738 105.48V113.352H116.674ZM116.674 105.416H108.866L116.674 83.848V105.416Z" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M83.1384 0L166.277 48V144L83.1384 192L0 144V48L83.1384 0ZM10 53.7735L83.1384 11.547L156.277 53.7735V138.227L83.1384 180.453L10 138.227V53.7735Z" />
            </svg>
          </NuxtLink>
        </div>
        <div class="flex-1 flex justify-center items-center pr-6">
          <ul class="flex space-x-5 text-sm font-mono">
            <li>
              <NuxtLink class="text-white font-semibold" to="/">
                <span class="text-primary-500">01.</span>
                <span>// Home</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white font-semibold" to="/about">
                <span class="text-primary-500">02.</span>
                <span>// About</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white font-semibold" to="/experience">
                <span class="text-primary-500">03.</span>
                <span>// Experience</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white font-semibold" to="/projects">
                <span class="text-primary-500">04.</span>
                <span>// Projects</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white font-semibold" to="/contact">
                <span class="text-primary-500">05.</span>
                <span>// Contact</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col pt-16 min-h-full">
      <!-- content -->
      <div class="flex-1 flex flex-col">
        <slot />
      </div>
      <!-- footer -->
      <div class="text-center py-2">
        <div class="text-sm text-gray-500">
          Design by
          <a href="https://github.com/viandwi24" class="text-primary-500 italic underline underline-primary-500">@viandwi24</a>
        </div>
      </div>
    </div>
    <div class="tso-rainbow" />
  </div>
</template>
