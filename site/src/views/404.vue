<script setup lang="ts">
import { useObservable } from "@vueuse/rxjs";
import app from "@/services";
const handled = async () => {
  // app
  //   .collection("projects")
  //   .get()
  //   .then((e) => {
  //     console.log(e);
  //   });
  await app
    .collection("projects")
    .add({
      members: 3,
      name: "cohot 3 atlp",
      category: "events",
      createdAt: "12/02/2024",
    })
    .then((e) => {
      console.log(e);
    })
    .catch((e) => {
      console.log(e);
    });
  // app
  //   .collection("projects")
  //   .doc(6)
  //   .update({
  //     name: "Cohot5 project",
  //     category: "training",
  //     members: 4,
  //     createdAt: "12/03/2022",
  //   })
  //   .then((e) => {
  //     console.log(e);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  // app
  //   .collection("projects")
  //   .doc(6)
  //   .get()
  //   .then((e) => {
  //     console.log(e);
  //   });
  // app
  //   .collection("projects")
  //   .doc(5)
  //   .delete()
  //   .then((e) => {
  //     console.log(e);
  //   });
  // app
  //   .collection("projects")
  //   .where("members", "<", 4)
  //   .where("members", ">", 1)
  //   .where("category", "==", "events")
  //   .limit(2)
  //   .get()
  //   .then((e) => {
  //     console.log(e);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
};

// const obsevable: any = liveQuery(() => db.projects.toArray());

// const datas: any = useObservable(obsevable);
</script>

<template>
  <div class="min-h-full rounded-3xl pt-20 pb-24 flex flex-col bg-gray-900">
    <main
      class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="flex-shrink-0 flex justify-center">
        <router-link to="/" class="inline-flex">
          <span class="sr-only">Workflow</span>
          <img class="h-24 w-auto" src="/images/404-error.png" alt="" />
        </router-link>
      </div>
      <div class="py-8">
        <div class="text-center flex flex-col items-center justify-center">
          <div>
            <p
              class="rounded w-fit bg-primaryLight bg-opacity-25 px-2.5 py-1 text-xs font-semibold text-primaryLight tracking-wide uppercase"
            >
              404 error
            </p>
          </div>
          <h1
            class="mb-3 mt-5 font-semibold text-gray-200 tracking-tight text-lg"
          >
            Page not found.
          </h1>
          <p class="mt-2 text-sm font-medium text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-6">
            <Btn @click="handled">Take me back home</Btn>
          </div>
          <!-- <ul>
            <li v-for="data in datas" :key="data.id">
              {{ data.name }}, {{ data.createdAt }},{{ data.type }}
            </li>
            <p class="" v-if="!datas?.length">no projects</p>
          </ul> -->
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
