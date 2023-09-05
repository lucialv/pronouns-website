<template>
	<div>
		<div class="mx-16 my-16 items-center">
			<div class="flex">
				<div class="flex text-center text-3xl font-bold text-white">
					<div class="flex items-center">
						<img
							src="https://cdn.discordapp.com/attachments/1126125323101151252/1141792694704803931/IMG_20230814_003034_396.jpg"
							alt="logo"
							class="h-28 w-28 rounded-full"
						/>
						<h1 class="ml-3">@lucialv</h1>
					</div>
				</div>
			</div>
			<div class="mt-8 flex text-white">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
					/>
				</svg>
				<h1 class="ml-2">Age: <span class="text-[#ff95bb]">15</span></h1>
			</div>
			<div class="mt-4 flex text-white">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>

				<h1 class="ml-2">
					It's <span class="text-[#ff95bb]">{{ tiempo }}</span> on a <span class="text-[#ff95bb]">{{ dayOfWeek }}</span> in my timezone
					<span class="text-gray-500"> (UTC+02:00)</span>
				</h1>
			</div>
			<div class="mt-4 flex text-white">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
					/>
				</svg>

				<h1 class="ml-2">Europe</h1>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<div class="mt-16 items-center text-white">
					<div class="flex text-3xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-10 w-10"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
							/>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>

						<h1 class="ml-4 font-semibold text-[#ff95bb]">Names</h1>
					</div>
					<hr class="mt-4 h-1 w-48 rounded border-0 dark:bg-gray-500" />
					<div class="mt-4 items-center text-xl text-[#ff95bb]">
						<div class="mt-1 flex items-center">
							<corazon />
							<h1 class="ml-2">Lucía</h1>
						</div>
						<div class="mt-1 flex items-center">
							<corazon />
							<h1 class="ml-2">Lucy</h1>
						</div>
						<div class="mt-1 flex items-center">
							<corazon />
							<h1 class="ml-2">Lu</h1>
						</div>
					</div>
				</div>
				<div class="mt-16 items-center text-white">
					<div class="flex text-3xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-10 w-10"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
							/>
						</svg>

						<h1 class="ml-4 font-semibold text-[#ff95bb]">Pronouns</h1>
					</div>
					<hr class="mt-4 h-1 w-48 rounded border-0 dark:bg-gray-500" />
					<div class="mt-4 items-center text-xl">
						<div class="mt-1 flex items-center">
							<corazon />
							<h1 class="ml-2 text-[#ff95bb]">She/Her</h1>
						</div>
						<div class="mt-1 flex items-center">
							<dislike />
							<h1 class="ml-2 text-gray-700">He/Him</h1>
						</div>
						<div class="mt-1 flex items-center">
							<dislike />
							<h1 class="ml-2 text-gray-700">It/Its</h1>
						</div>
					</div>
				</div>
				<div class="mt-16 items-center text-white">
					<div class="flex text-3xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-10 w-10"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
							/>
						</svg>

						<h1 class="ml-4 font-semibold text-[#ff95bb]">Links</h1>
					</div>
					<hr class="mt-4 h-1 w-48 rounded border-0 dark:bg-gray-500" />
					<div class="mt-4 items-center text-xl">
						<div class="flex items-center">
							<img src="https://www.freeiconspng.com/thumbs/discord-icon/discord-icon-7.png" alt="discord" class="h-6 w-6" />
							<a href="https://discord.gg/ajQpA4kszg" class="ml-2 text-[#ff95bb] hover:underline">My Discord Server</a>
						</div>
						<div class="mt-1 flex items-center">
							<img src="/owo.webp" alt="owo" class="h-6 w-6" />
							<a href="https://mishu.dev" class="ml-2 text-[#ff95bb] hover:underline">My website</a>
						</div>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<div class="mt-16 items-center text-white">
					<div class="flex text-3xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-10 w-10"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
							/>
						</svg>

						<h1 class="ml-4 font-semibold text-[#ff95bb]">Words</h1>
					</div>
					<hr class="mt-4 h-1 w-48 rounded border-0 dark:bg-gray-500" />
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						<div class="mt-2 items-center text-white">
							<div class="flex text-3xl">
								<h1 class="font-semibold">Honorifics</h1>
							</div>
							<div class="mt-4 min-w-[350px] items-center text-xl">
								<div class="mt-1 flex items-center">
									<corazon />
									<h1 class="ml-2 text-[#ff95bb]">[no honorific]</h1>
								</div>
								<div class="mt-1 flex items-center">
									<like />
									<h1 class="ml-2 text-white">Ms.</h1>
								</div>
								<div class="mt-1 flex items-center">
									<like />
									<h1 class="ml-2 text-white">Ma'am</h1>
								</div>
								<div class="mt-1 flex items-center">
									<dislike />
									<h1 class="ml-2 text-gray-700">Mr.</h1>
								</div>
								<div class="mt-1 flex items-center">
									<dislike />
									<h1 class="ml-2 text-gray-700">Sir</h1>
								</div>
							</div>
						</div>
						<div class="mt-8 items-center text-white md:ml-44 md:mt-2">
							<div class="flex min-w-[350px] text-3xl">
								<h1 class="font-semibold">Person and family descriptions</h1>
							</div>
							<div class="mt-4 min-w-[350px] items-center text-xl">
								<div class="mt-1 flex items-center">
									<corazon />
									<h1 class="ml-2 text-[#ff95bb]">Lady</h1>
								</div>
								<div class="mt-1 flex items-center">
									<corazon />
									<h1 class="ml-2 text-[#ff95bb]">Woman</h1>
								</div>
								<div class="mt-1 flex items-center">
									<corazon />
									<h1 class="ml-2 text-[#ff95bb]">Girl</h1>
								</div>
								<div class="mt-1 flex items-center">
									<corazon />
									<h1 class="ml-2 text-[#ff95bb]">Sis</h1>
								</div>
								<div class="mt-1 flex items-center">
									<like />
									<h1 class="ml-2 text-white">Person</h1>
								</div>
								<div class="mt-1 flex items-center">
									<dislike />
									<h1 class="ml-2 text-gray-700">Dude</h1>
								</div>
								<div class="mt-1 flex items-center">
									<dislike />
									<h1 class="ml-2 text-gray-700">Boy</h1>
								</div>
								<div class="mt-1 flex items-center">
									<dislike />
									<h1 class="ml-2 text-gray-700">Bro</h1>
								</div>
								<div class="mt-1 flex items-center">
									<dislike />
									<h1 class="ml-2 text-gray-700">Man</h1>
								</div>
							</div>
						</div>
						<div class="mt-8 items-center text-white md:mt-2 lg:ml-96">
							<div class="flex min-w-[150px] text-3xl lg:min-w-[350px]">
								<h1 class="font-semibold">Relationship descriptions</h1>
							</div>
							<div class="mt-4 min-w-[350px] items-center text-xl">
								<div class="mt-1 flex items-center">
									<close />
									<h1 class="ml-2 text-rose-500">Girlfriend</h1>
								</div>
								<div class="mt-1 flex items-center">
									<close />
									<h1 class="ml-2 text-rose-500">Partner</h1>
								</div>
								<div class="mt-1 flex items-center">
									<like />
									<h1 class="ml-2 text-white">Friend</h1>
								</div>
								<div class="mt-1 flex items-center">
									<dislike />
									<h1 class="ml-2 text-gray-700">Boyfriend</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-16 items-center justify-center text-gray-400 md:flex lg:mt-8">
				<div class="mb-4 flex pr-4 md:mb-0">
					<corazon />
					<h1>= Love</h1>
				</div>
				<div class="mb-4 flex pr-4 md:mb-0">
					<close />
					<h1>= Only if we are close</h1>
				</div>
				<div class="mb-4 flex pr-4 md:mb-0">
					<like />
					<h1>= I like it</h1>
				</div>
				<div class="flex">
					<dislike />
					<h1>= I don't like it</h1>
				</div>
			</div>
		</div>
		<FooterPage />
	</div>
</template>

<script setup lang="js">
import { ref, onMounted } from "vue";

const tiempo = ref(getFormattedTime());
const day = ref(getCurrentDay());
const dayOfWeek = ref(getCurrentDayOfWeek());

// Function to get formatted time in Europe/Madrid timezone
function getFormattedTime() {
  const now = new Date();
  return now.toLocaleTimeString("en-US", { timeZone: "Europe/Madrid" });
}

// Function to get the current day
function getCurrentDay() {
  const now = new Date();
  return now.getDate();
}

// Function to get the current day of the week
function getCurrentDayOfWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();
  return daysOfWeek[now.getDay()];
}

// Update time, day, and dayOfWeek every second
onMounted(() => {
  setInterval(() => {
    tiempo.value = getFormattedTime();
    day.value = getCurrentDay();
    dayOfWeek.value = getCurrentDayOfWeek();
  }, 1000);
});
</script>
