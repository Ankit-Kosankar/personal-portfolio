<!-- <script>
    // Importing Iconify for icons
    import Icon from '@iconify/svelte';
</script> -->

<!-- <style>
    .about-container {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        background-color: #1e293b;
        color: #f1f5f9;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    .header {
        text-align: center;
        margin-bottom: 20px;
    }

    .header h1 {
        font-size: 2rem;
        margin: 0;
        color: #0ea5e9;
    }

    .header p {
        color: #94a3b8;
    }

    .skills-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .skill-card {
        background-color: #334155;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        text-align: center;
    }

    .skill-card h3 {
        color: #38bdf8;
        margin-bottom: 10px;
    }

    .skill-card ul {
        list-style: none;
        padding: 0;
    }

    .skill-card li {
        margin: 5px 0;
        color: #e2e8f0;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
    }

    .skill-card li span {
        font-size: 1.2rem;
    }
</style> -->

<!-- <div class="about-container">
    <div class="header">
        <h1>About Me</h1>
        <p>
            Hi, I'm Ankit, a passionate Software Engineer with 2.5+ years of professional experience 
            transforming complex challenges into elegant digital solutions.
        </p>
    </div>

    <div class="professional-identity">
        <h2>Professional Identity</h2>
        <p>
            <strong>Background:</strong> Computer Science Engineering graduate<br>
            <strong>Specialization:</strong> Full-stack Web Development<br>
            <strong>Professional Approach:</strong> Innovative problem solver with an entrepreneurial mindset
        </p>
    </div>

    <div class="skills-section">
        <div class="skill-card">
            <h3>Frontend Technologies</h3>
            <ul>
                <li><span><Icon icon="logos:svelte-icon" /></span> Svelte</li>
                <li><span><Icon icon="logos:react" /></span> React</li>
                <li><span><Icon icon="logos:angular-icon" /></span> Angular</li>
                <li><span><Icon icon="logos:javascript" /></span> JavaScript</li>
                <li><span><Icon icon="logos:css-3" /></span> CSS/SCSS</li>
            </ul>
        </div>
        <div class="skill-card">
            <h3>Backend Technologies</h3>
            <ul>
                <li><span><Icon icon="logos:java" /></span> Java</li>
                <li><span><Icon icon="logos:spring-icon" /></span> Spring Boot</li>
                <li><span><Icon icon="logos:nodejs-icon" /></span> Node.js</li>
                <li><span><Icon icon="logos:postgresql" /></span> PostgreSQL</li>
            </ul>
        </div>
    </div>
</div> -->


<!-- 
<script>
    export let name = "Ankit";
    export let title = "Software Engineer";
    export let experience = "2.5+ years of professional experience";
    export let introduction = `Hi, I'm ${name}, a passionate ${title} with ${experience} transforming complex challenges into elegant digital solutions.`;
</script> -->

<script>
    // Script block can remain empty unless you want to add interactivity later
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
        /* text-align: center; */
        margin-bottom: 20px;
    }

    .header h3 {
        font-size: 1.5rem;
        margin: 0;
        font-weight: normal;
        letter-spacing: 0.1rem;
    }

    /* .header p {
        color: #666;
    } */

    /* .skills-section h2 {
        font-size: 1.5rem;
        margin-top: 20px;
        color: #333;
    } */

    .skills-section ul {
        list-style-type: square;
        padding-left: 20px;
        letter-spacing: 0.1em;
    }

    .skills-section li {
        margin-bottom: 5px;
        letter-spacing: 0.1em;
    }
    
    /* h2 {
        font-size: 2em;
        line-height: 1.2;
        margin-bottom: 1.5em;
        letter-spacing: 1px; /* Adjust for spacing between letters 
    } */

    p {
        margin-bottom: 1.5em;
        letter-spacing: 0.1em;
    }
</style>

<div class="about-container">
    <div class="header">
        <!-- <h3>HI , I am Ankit Kosankar</h3> -->
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