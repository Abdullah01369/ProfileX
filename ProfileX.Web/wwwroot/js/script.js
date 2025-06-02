document.addEventListener('DOMContentLoaded', () => {
    // Navigasyon bağlantılarına yumuşak kaydırma (smooth scrolling) ekleme
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header için scroll anında görünüm değişikliği (isteğe bağlı)
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // İsteğe bağlı: Form gönderimi için basit bir bildirim
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Sayfanın yenilenmesini engelle

            // Burada form verilerini toplayıp bir sunucuya gönderebilirsin.
            // Örneğin: fetch API kullanarak.
            const formData = new FormData(contactForm);
            console.log('Form verileri:', Object.fromEntries(formData));

            alert('Mesajınız başarıyla gönderildi! Teşekkürler.');
            contactForm.reset(); // Formu sıfırla
        });
    }

    // Projeler veya yetenekler için basit bir filtreleme/animasyon eklenebilir.
    // Örneğin, yeteneklerinizi bir yüzde barı ile görselleştirebilirsiniz.
    // Bu sadece bir örnek, karmaşıklığına sen karar verebilirsin.
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px) scale(1.02)';
            item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
});