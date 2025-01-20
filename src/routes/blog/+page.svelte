<script>
  import { onMount } from 'svelte';

  let progressText = "Work In Progress";
  let displayedText = "";
  let index = 0;
  let dots = ["", "", ""];

  function animateText() {
    if (index < progressText.length) {
      displayedText += progressText[index];
      index++;
      setTimeout(animateText, 150);
    } else {
      animateDots();
    }
  }

  function animateDots() {
    let dotIndex = 0;
    setInterval(() => {
      dots = dots.map((_, i) => (i <= dotIndex ? "." : ""));
      dotIndex = (dotIndex + 1) % 3;
    }, 600);
  }

  onMount(() => {
    setTimeout(() => {
      animateText();
    }, 1000);
  });
</script>

<style>
  .outer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
    overflow: hidden;
  }

  .progress {
    font-size: 2rem;
    font-style: italic;
    color: black;
    white-space: pre;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .dot {
    display: inline-block;
    animation: bounce 0.6s infinite;
  }

  .dot:nth-child(1) {
    animation-delay: 0s;
  }
  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }
</style>

<div class="outer-container">
  <div class="progress">
    {displayedText}
    {#each dots as dot}
      <span class="dot">{dot}</span>
    {/each}
  </div>
</div>