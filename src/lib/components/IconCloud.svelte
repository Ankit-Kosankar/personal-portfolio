<script lang="ts">
  import { onMount} from "svelte";
  import { writable } from "svelte/store";
  
  // Props for the cloud
  export let iconSlugs: string[] = [];
  
  // Svelte store for managing theme
  const theme = writable("light");

  let iconsData: any[] = [];
  let renderedIcons: string[] = [];

  // Fetch SimpleIcons
  async function fetchSimpleIcons(slugs: string[]): Promise<any[]> {
    const simpleIcons = await import("simple-icons");
    const icons = slugs.map((slug) => {
      const icon = (simpleIcons as Record<string, any>)[`si${slug.charAt(0).toUpperCase() + slug.slice(1)}`];
      if (!icon) {
        console.warn(`Icon not found for slug: ${slug}`);
      }
      return icon;
    }).filter(Boolean);
    return icons;
  }

  // Render Custom Icon
  function renderCustomIcon(icon: any, theme: string): string {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${icon.hex}" style="background-color: ${bgHex}; width: 42px; height: 42px; border-radius: 50%; margin: 10px;">
        <path d="${icon.path}" fill-rule="evenodd" clip-rule="evenodd" />
      </svg>
    `;
    return svg;
  }

  // On mount, fetch icons and prepare them
  onMount(async () => {
    iconsData = await fetchSimpleIcons(iconSlugs);
    renderedIcons = iconsData.map((icon) => renderCustomIcon(icon, $theme || "light"));
  });
</script>

<style>
  .icon-cloud-container {
    width: 50%;
    height: 300px;
    perspective: 1000px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-cloud {
    position: relative;
    width: 100%;
    height: 100%;
    animation: rotateCloud 20s infinite linear;
    transform-style: preserve-3d; 
  }

  @keyframes rotateCloud {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  .icon {
    position: absolute;
    /* width: 42px; */
    /* height: 42px; */
    background-size: cover;
    background-position: center;
    transform-origin: center;
    transition: transform 0.3s ease;
    cursor: pointer;
    opacity: 0.8;
  }

  :global(.icon-cloud svg) {
    transition: transform 0.3s ease;
  }

  :global(.icon-cloud svg:hover) {
    transform: scale(1.2);
  }
</style>

<div class="icon-cloud-container">
  <div class="icon-cloud">
    {#each renderedIcons as icon, i}
      <div
        class="icon"
        style="
          transform: rotateY({(i * 360) / renderedIcons.length}deg) rotateX({(Math.random() * 360 - 180)}deg) translateZ({200 + (Math.sin(i * Math.PI / renderedIcons.length) * 100)}px);
          background-image: url('{icon}');
        "
      >
        {@html icon}
      </div>
    {/each}
  </div>
</div>


<!-- <script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let iconSlugs: string[] = [];

  let iconsData: any[] = [];
  let renderedIcons: string[] = [];

  const theme = writable("light");

  async function fetchSimpleIcons(slugs: string[]): Promise<any[]> {
    const simpleIcons = await import("simple-icons");
    const icons = slugs.map((slug) => {
      const icon = (simpleIcons as Record<string, any>)[`si${slug.charAt(0).toUpperCase() + slug.slice(1)}`];
      if (!icon) {
        console.warn(`Icon not found for slug: ${slug}`);
      }
      return icon;
    }).filter(Boolean);
    console.log("Fetched icons:", icons);
    return icons;
  }

  function renderCustomIcon(icon: any, theme: string): string {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${icon.hex}" style="background-color: ${bgHex}; width: 42px; height: 42px; border-radius: 50%; margin: 10px;">
        <path d="${icon.path}" fill-rule="evenodd" clip-rule="evenodd" />
      </svg>
    `;
    return svg;
  }

  onMount(async () => {
    iconsData = await fetchSimpleIcons(iconSlugs);
    renderedIcons = iconsData.map((icon) => renderCustomIcon(icon, $theme || "light"));
    console.log("Rendered icons:", renderedIcons);
  });
</script>

<style>
  .icon-cloud-container {
    width: 100%;
    height: 500px;
    perspective: 1500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-cloud {
    position: relative;
    width: 100%;
    height: 100%;
    animation: rotateCloud 20s infinite linear;
    transform-style: preserve-3d; 
  }

  @keyframes rotateCloud {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  .icon {
    position: absolute;
    width: 42px;
    height: 42px;
    background-size: cover;
    background-position: center;
    transform-origin: center;
    transition: transform 0.3s ease;
    cursor: pointer;
    opacity: 0.8;
  }

  :global(.icon-cloud svg) {
    transition: transform 0.3s ease;
  }

  :global(.icon-cloud svg:hover) {
    transform: scale(1.2);
  }
</style>

<div class="icon-cloud-container">
  <div class="icon-cloud">
    {#each renderedIcons as icon, i}
      <div
        class="icon"
        style="
          transform: rotateY({(i * 360) / renderedIcons.length}deg) rotateX({(Math.random() * 360 - 180)}deg) translateZ({200 + (Math.sin(i * Math.PI / renderedIcons.length) * 100)}px);
          background-image: url('{icon}');
        "
      >
        {@html icon}
      </div>
    {/each}
  </div>
</div> -->