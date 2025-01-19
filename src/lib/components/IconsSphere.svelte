<script>
const skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#E44D26' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
    { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
    { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ED' },
    { name: 'AWS', icon: 'fa-brands fa-aws', color: '#FF9900' },
    { name: 'Angular', icon: 'fa-brands fa-angular', color: '#DD0031' },
    { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#4FC08D' },
    { name: 'Sass', icon: 'fa-brands fa-sass', color: '#CC6699' },
    { name: 'PHP', icon: 'fa-brands fa-php', color: '#777BB4' },
    { name: 'WordPress', icon: 'fa-brands fa-wordpress', color: '#21759B' },
    { name: 'Linux', icon: 'fa-brands fa-linux', color: '#FCC624' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952B3' },
    { name: 'NPM', icon: 'fa-brands fa-npm', color: '#CB3837' },
    { name: 'GitHub', icon: 'fa-brands fa-github', color: '#181717' },
    { name: 'Laravel', icon: 'fa-brands fa-laravel', color: '#FF2D20' },
    { name: 'Digital Ocean', icon: 'fa-brands fa-digital-ocean', color: '#0080FF' }
];

class Globe {
    constructor() {
        this.globe = document.getElementById('globe');
        this.radius = window.innerWidth < 768 ? 200 : 400;
        this.autoRotate = true;
        this.rotationSpeed = 0.0005;
        this.dragging = false;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.lastRotationX = 0;
        this.lastRotationY = 0;
        this.currentRotationX = 0;
        this.currentRotationY = 0;
        this.skills = [];

        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
        const numSkills = skills.length;
        
        skills.forEach((skill, i) => {
            const element = document.createElement('div');
            element.className = 'skill';
            element.innerHTML = `
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            `;
            element.style.background = `linear-gradient(135deg, ${skill.color}33, ${skill.color}66)`;
            element.style.borderColor = `${skill.color}44`;

            // Calculate position using improved spherical distribution
            const y = 1 - (i / (numSkills - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            // Store initial position for rotation calculations
            this.skills.push({
                element,
                initialX: x * this.radius,
                initialY: y * this.radius,
                initialZ: z * this.radius,
                x: x * this.radius,
                y: y * this.radius,
                z: z * this.radius
            });

            this.globe.appendChild(element);
        });
    }

    updateSkillsVisibility() {
        const cosY = Math.cos(this.currentRotationY);
        const sinY = Math.sin(this.currentRotationY);
        const cosX = Math.cos(this.currentRotationX);
        const sinX = Math.sin(this.currentRotationX);

        // Update positions and calculate visibility
        this.skills.forEach(skill => {
            // Apply rotation matrix
            const x = skill.initialX;
            const y = skill.initialY;
            const z = skill.initialZ;

            // Rotate around Y axis first
            const rotY_x = x * cosY - z * sinY;
            const rotY_z = x * sinY + z * cosY;

            // Then rotate around X axis
            const finalY = y * cosX - rotY_z * sinX;
            const finalZ = y * sinX + rotY_z * cosX;

            // Update current position
            skill.x = rotY_x;
            skill.y = finalY;
            skill.z = finalZ;

            // Calculate visibility based on z-position (depth)
            const normalizedZ = finalZ / this.radius;
            
            // Improved opacity calculation for better visibility
            let opacity = (normalizedZ + 1) / 2;
            opacity = Math.pow(opacity, 0.7); // Soften the opacity falloff
            opacity = Math.max(0.1, opacity); // Ensure minimum visibility
            
            // Improved scale calculation
            const scale = 0.8 + (opacity * 0.4); // Larger scale range for better depth perception

            // Apply transforms with perspective
            skill.element.style.transform = `translate3d(${rotY_x}px, ${finalY}px, ${finalZ}px) scale(${scale})`;
            skill.element.style.opacity = opacity;
            skill.element.style.zIndex = Math.round(finalZ);

            // Add a subtle rotation to face the viewer
            const rotationX = Math.atan2(finalY, this.radius) * (180 / Math.PI);
            const rotationY = Math.atan2(rotY_x, this.radius) * (180 / Math.PI);
            skill.element.style.transform += ` rotateX(${-rotationX}deg) rotateY(${-rotationY}deg)`;
        });

        // Sort elements by z-index for proper layering
        this.skills.sort((a, b) => b.z - a.z);
        this.skills.forEach(skill => {
            this.globe.appendChild(skill.element); // Re-append to update visual order
        });
    }

    animate = () => {
        if (this.autoRotate && !this.dragging) {
            this.currentRotationY += this.rotationSpeed;
        }

        this.updateSkillsVisibility();
        requestAnimationFrame(this.animate);
    }

    setupEventListeners() {
        document.addEventListener('mousedown', this.onStart);
        document.addEventListener('mousemove', this.onMove);
        document.addEventListener('mouseup', this.onEnd);
        document.addEventListener('touchstart', this.onStart);
        document.addEventListener('touchmove', this.onMove);
        document.addEventListener('touchend', this.onEnd);
    }

    onStart = (e) => {
        this.dragging = true;
        this.autoRotate = false;
        const { clientX, clientY } = e.touches ? e.touches[0] : e;
        this.touchStartX = clientX;
        this.touchStartY = clientY;
        this.lastRotationX = this.currentRotationX;
        this.lastRotationY = this.currentRotationY;
    }

    onMove = (e) => {
        if (!this.dragging) return;
        
        const { clientX, clientY } = e.touches ? e.touches[0] : e;
        const deltaX = clientX - this.touchStartX;
        const deltaY = clientY - this.touchStartY;

        this.currentRotationY = this.lastRotationY + (deltaX * 0.005);
        this.currentRotationX = Math.max(-Math.PI/3, Math.min(Math.PI/3, this.lastRotationX + (deltaY * 0.005)));
    }

    onEnd = () => {
        this.dragging = false;
        setTimeout(() => {
            this.autoRotate = true;
        }, 1500);
    }
}

window.addEventListener('load', () => {
    new Globe();
});

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    overflow: hidden;
}

.scene {
    perspective: 1200px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.globe {
    position: relative;
    width: 1px;
    height: 1px;
    transform-style: preserve-3d;
}

.skill {
    position: absolute;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 50%;
    backdrop-filter: blur(5px);
    cursor: pointer;
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backface-visibility: hidden;
    will-change: transform, opacity;
}

.skill i {
    font-size: 24px;
    margin-bottom: 5px;
    transform: translateZ(1px);
}

.skill span {
    font-size: 10px;
    opacity: 0.8;
    transform: translateZ(1px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90%;
}

.skill:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1) translateZ(20px) !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    z-index: 1000 !important;
}
</style>


<div class="scene">
    <div class="globe" id="globe"></div>
</div>
<script src="script.js"></script>