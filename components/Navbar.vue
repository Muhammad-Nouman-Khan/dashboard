<template>
  <nav class="w-full flex justify-between items-center p-4">
    <div class="flex items-center gap-4">
      <Icon name="lucide:menu" size="25" />
      <h1 class="italic text-2xl font-bold">Bookme</h1>
    </div>

    <div class="flex items-center gap-4">
      <div
        class="rounded-full bg-[#F6F9FD] flex items-center justify-center p-2 cursor-pointer"
      >
        <Icon name="lucide:mail" style="color: cadetblue" />
      </div>
      <div
        class="rounded-full bg-[#F6F9FD] flex items-center justify-center p-2 cursor-pointer"
      >
        <Icon name="lucide:bell" style="color: cadetblue" />
      </div>
      <div
        class="rounded-full bg-[#F6F9FD] flex items-center justify-center p-2 cursor-pointer"
      >
        <Icon name="lucide:user" style="color: cadetblue" />
      </div>
    </div>
  </nav>
</template>
