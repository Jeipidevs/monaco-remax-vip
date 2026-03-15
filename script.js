// Initialize AOS
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// Navigation transparency and Mobile Menu Toggle
const navSticky = document.querySelector('.nav-sticky');
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        if (navSticky) navSticky.classList.add('scrolled');
    } else {
        if (navSticky) navSticky.classList.remove('scrolled');
    }
});

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('is-active');
    });
});

// Smooth scroll function
function scrollToForm() {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// WhatsApp redirect
function openWhatsApp() {
    window.open('https://wa.me/5551985945354?text=Olá!%20Quero%20conhecer%20o%20Mônaco%20Grand%20Marina', '_blank');
}

// Lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightbox && lightboxImg) {
        lightbox.classList.add('active');
        lightboxImg.src = src;
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

// Phone mask (BR pattern)
const phoneInput = document.getElementById('telefone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (value.length > 5) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, '($1');
        }
        
        e.target.value = value;
    });
}

// Lead Capture Form
const leadForm = document.getElementById('leadForm');
if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const cidade = document.getElementById('cidade').value;
        
        // Simulating API call
        console.log('Lead capturado:', { nome, telefone, email, cidade });
        
        // Redirect to WhatsApp with info
        const message = `Olá Junior Martins! Tenho interesse no Mônaco Grand Marina.
Nome: ${nome}
WhatsApp: ${telefone}
Email: ${email}
Cidade: ${cidade}`;
        
        window.open(`https://wa.me/5551985945354?text=${encodeURIComponent(message)}`, '_blank');
        
        // Success behavior
        leadForm.reset();
        const successMsg = document.getElementById('successMessage');
        if (successMsg) {
            successMsg.classList.remove('hidden');
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 5000);
        }
    });
}

// ROI Chart Animation (Simplified SVG Chart)
function initROIChart() {
    const container = document.getElementById('roi-chart-placeholder');
    if (!container) return;

    container.innerHTML = `
        <svg viewBox="0 0 400 200" style="width: 100%; height: 100%;">
            <line x1="40" y1="20" x2="40" y2="180" stroke="#334155" stroke-width="1" />
            <line x1="40" y1="180" x2="380" y2="180" stroke="#334155" stroke-width="1" />
            
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

            <rect x="220" y="180" width="40" height="0" fill="#C5A059">
                <animate attributeName="height" from="0" to="160" dur="1.5s" fill="freeze" />
                <animate attributeName="y" from="180" to="20" dur="1.5s" fill="freeze" />
            </rect>
            <text x="220" y="195" fill="#C5A059" font-size="10" font-weight="bold">GRAND MARINA</text>
            
            <text x="50" y="130" fill="white" font-size="12">320% ROI Potencial</text>
        </svg>
    `;
}

document.addEventListener('DOMContentLoaded', initROIChart);
