// Navigation transparency on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation Initialization
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// ROI Chart Animation (Simplified SVG Chart)
function initROIChart() {
    const container = document.getElementById('roi-chart-placeholder');
    if (!container) return;

    container.innerHTML = `
        <svg viewBox="0 0 400 200" style="width: 100%; height: 100%;">
            <!-- Grid Lines -->
            <line x1="40" y1="20" x2="40" y2="180" stroke="#334155" stroke-width="1" />
            <line x1="40" y1="180" x2="380" y2="180" stroke="#334155" stroke-width="1" />
            
            <!-- Bars -->
            <rect x="60" y="180" width="40" height="0" fill="#334155">
                <animate attributeName="height" from="0" to="40" dur="1.5s" fill="freeze" />
                <animate attributeName="y" from="180" to="140" dur="1.5s" fill="freeze" />
            </rect>
            <text x="60" y="195" fill="#94a3b8" font-size="10">Residencial</text>

            <rect x="140" y="180" width="40" height="0" fill="#334155">
                <animate attributeName="height" from="0" to="80" dur="1.5s" fill="freeze" />
                <animate attributeName="y" from="180" to="100" dur="1.5s" fill="freeze" />
            </rect>
            <text x="140" y="195" fill="#94a3b8" font-size="10">Condomínio</text>

            <rect x="220" y="180" width="40" height="0" fill="#c5a059">
                <animate attributeName="height" from="0" to="160" dur="1.5s" fill="freeze" />
                <animate attributeName="y" from="180" to="20" dur="1.5s" fill="freeze" />
            </rect>
            <text x="220" y="195" fill="#c5a059" font-size="10" font-weight="bold">GRAND MARINA</text>
            
            <text x="50" y="130" fill="white" font-size="12">320% ROI</text>
        </svg>
    `;
}

initROIChart();

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pelo seu interesse. Nossa equipe de concierge entrará em contato em breve.');
});
