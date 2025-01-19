<script>
    // Script block can remain empty unless you want to add interactivity later
    import IconCloud from "../../lib/components/IconCloud.svelte";
    import IconSphere from "../../lib/components/IconCloud.svelte";

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
</script>


<style>
    .about-container {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header {
        margin-bottom: 20px;
    }

    .header h3 {
        font-size: 1.5rem;
        margin: 0;
        font-weight: normal;
        letter-spacing: 0.1rem;
    }

    p {
        margin-bottom: 1.5em;
        letter-spacing: 0.1em;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .skills-section h4 {
        font-size: 1.2rem;
        margin-top: 20px;
        color: #333;
    }

    .skills-section ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }

    .skills-section li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 1rem;
        letter-spacing: 0.1em;
        transition: transform 0.3s ease, background-color 0.3s ease;
        padding: 5px;
        border-radius: 6px;
        flex: 1 1 45%;
        box-sizing: border-box;
    }

    .skills-section li:hover {
        transform: translateX(10px) scale(1.05); /* Slightly shift and scale on hover */
        background-color: #f0f8ff; /* Light background on hover */
    }

    .skills-section li i {
        font-size: 1.5rem;
        margin-right: 10px;
        color: #007BFF;
        transition: color 0.3s ease, transform 0.3s ease;
    }

    .skills-section li:hover i {
        color: #0056b3; /* Darker blue on hover */
        transform: rotate(10deg) scale(1.2); /* Rotate and scale the icon on hover */
    }

    /* Keyframes for entrance animation */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Apply animation to skill list items */
    .skills-section li {
        animation: fadeIn 0.5s ease-out;
    }

    /* Delay for each list item */
    .skills-section li:nth-child(1) {
        animation-delay: 0.1s;
    }
    .skills-section li:nth-child(2) {
        animation-delay: 0.2s;
    }
    .skills-section li:nth-child(3) {
        animation-delay: 0.3s;
    }
    .skills-section li:nth-child(4) {
        animation-delay: 0.4s;
    }
    .skills-section li:nth-child(5) {
        animation-delay: 0.5s;
    }
    .skills-section li:nth-child(6) {
        animation-delay: 0.6s;
    }
    .skills-section li:nth-child(7) {
        animation-delay: 0.7s;
    }
</style>

<div class="about-container">
    <div class="header">
        <h3>HI , I AM ANKIT KOSANKAR</h3>
        <p>
            A passionate Software Engineer with 2.5+ years of professional experience 
            transforming complex challenges into elegant digital solutions.
        </p>
    </div>

    <div class="professional-identity">
        <h4>Professional Identity</h4>
        <p>
            <strong>Background:</strong> Computer Science Engineering graduate<br>
            <strong>Specialization:</strong> Full-stack Web Development<br>
            <strong>Professional Approach:</strong> Innovative problem solver with an entrepreneurial mindset
        </p>
    </div>

    <div class="skills-section">
        <h3>Skills :</h3>

        <h4>Frontend Technologies</h4>
        <ul>
            <li><i class="fab fa-svelte"></i> Svelte</li>
            <li><i class="fab fa-react"></i> React</li>
            <li><i class="fab fa-angular"></i> Angular</li>
            <li><i class="fab fa-js-square"></i> JavaScript</li>
            <li><i class="fab fa-css3-alt"></i> CSS</li>
            <li><i class="fas fa-palette"></i> SCSS</li>
            <li><i class="fas fa-cube"></i> Three.js</li>
        </ul>

        <h4>Backend Technologies</h4>
        <ul>
            <li><i class="fab fa-java"></i> Java</li>
            <li><i class="fas fa-leaf"></i> Spring Boot</li>
            <li><i class="fab fa-node"></i> Node.js</li>
            <li><i class="fas fa-server"></i> Server-Side Programming</li>
        </ul>
    </div>

    <IconSphere></IconSphere>
    <IconCloud iconSlugs={slugs}/>
      
</div>


<!-- <style>
    .about-container {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header {
        margin-bottom: 20px;
    }

    .header h3 {
        font-size: 1.5rem;
        margin: 0;
        font-weight: normal;
        letter-spacing: 0.1rem;
    }


    .skills-section ul {
        list-style-type: square;
        padding-left: 20px;
        letter-spacing: 0.1em;
    }

    .skills-section li {
        margin-bottom: 5px;
        letter-spacing: 0.1em;
    }


    p {
        margin-bottom: 1.5em;
        letter-spacing: 0.1em;
    }
</style>

<div class="about-container">
    <div class="header">
        <h3>HI , I AM ANKIT KOSANKAR</h3>
        <p>
            A passionate Software Engineer with 2.5+ years of professional experience 
            transforming complex challenges into elegant digital solutions.
        </p>
    </div>

    <div class="professional-identity">
        <h4>Professional Identity</h4>
        <p>
            <strong>Background:</strong> Computer Science Engineering graduate<br>
            <strong>Specialization:</strong> Full-stack Web Development<br>
            <strong>Professional Approach:</strong> Innovative problem solver with an entrepreneurial mindset
        </p>
    </div>

    <div class="skills-section">
        <h3>Technical Expertise Highlights</h3>

        <h4>Frontend Technologies</h4>
        <ul>
            <li>Advanced skills in Svelte, React, Angular</li>
            <li>Proficient in JavaScript, CSS, SCSS</li>
            <li>Creative implementation with Three.js</li>
        </ul>

        <h4>Backend Technologies</h4>
        <ul>
            <li>Java and Spring Boot specialist</li>
            <li>Node.js backend development</li>
            <li>Robust server-side programming capabilities</li>
        </ul>
    </div>
</div> -->


<!-- <style>
    .about-container {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header {
        text-align: center;
        margin-bottom: 20px;
    }

    .header h1 {
        font-size: 2rem;
        margin: 0;
    }

    .header p {
        color: #666;
    }

    .skills-section h2 {
        font-size: 1.5rem;
        margin-top: 20px;
        color: #333;
    }

    .skills-section ul {
        list-style-type: square;
        padding-left: 20px;
    }

    .skills-section li {
        margin-bottom: 5px;
    }
</style>

<div class="about-container">
    <div class="header">
        <h1>About Me</h1>
        <p>{introduction}</p>
    </div>

    <div class="professional-identity">
        <h2>Professional Identity</h2>
        <p>
            <strong>Background:</strong> Computer Science And Engineering Graduate<br>
            <strong>Specialization:</strong> Full-stack Web Development<br>
            <strong>Professional Approach:</strong> Innovative problem solver with an entrepreneurial mindset
        </p>
    </div>

    <div class="skills-section">
        <h2>Technical Expertise Highlights</h2>

        <h3>Frontend Technologies</h3>
        <ul>
            <li>Advanced skills in Svelte, React, Angular</li>
            <li>Proficient in JavaScript, CSS, SCSS</li>
            <li>Creative implementation with Three.js</li>
        </ul>

        <h3>Backend Technologies</h3>
        <ul>
            <li>Java and Spring Boot specialist</li>
            <li>Node.js backend development</li>
            <li>Robust server-side programming capabilities</li>
        </ul>
    </div>
</div> -->

<!-- <h1> This is about page </h1>
<div>
    <h1>About Me</h1>
<div>
    <pre>
        <p>
            Introduction
            Hi, I'm Ankit, a passionate Software Engineer with 2.5+ years of professional experience
            transforming complex challenges into elegant digital solutions.
        </p>
        <p>
            Professional Identity
            Background: Computer Science Engineering graduate
            Specialization: Full-stack Web Development
            Professional Approach: Innovative problem solver with entrepreneurial mindset
        </p>
        <h2>Technical Expertise Highlights</h2>
        <h3>Frontend Technologies</h3>
        <ul>
            <li>Advanced skills in Svelte, React, Angular</li>
            <li>Proficient in JavaScript, CSS, SCSS</li>
            <li>Creative implementation with Three.js</li>
        </ul>
        <h3>Backend Technologies</h3>
        <ul>
            <li>Java and Spring Boot specialist</li>
            <li>Node.js backend development</li>
            <li>Robust server-side programming capabilities</li>
        </ul>
    </pre>
</div>
</div> -->