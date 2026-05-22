/* ==========================================================================
   PORTFOLIO INTERACTIVE LOGIC - MANUELA SANDOVAL INDUSTRIAL DESIGN
   ========================================================================== */

/// 1. Projects Data Store (Spanish)
const projectsData = {
    toru: {
        title: "Torú",
        category: "Sostenibilidad / Upcycling",
        filterCategory: "sostenibilidad",
        year: "2025",
        tech: "Retazos de Denim, Confección, Upcycling",
        image: "images/toru-1.png",
        images: [
            "images/toru-1.png",
            "images/toru-2.png",
            "images/toru-3.png",
            "images/toru-4.png",
            "images/toru_5.png",
            "images/toru_6.png",
            "images/toru_7.png",
            "images/toru-8.png",
            "images/toru_9.png",
            "images/toru-10.png"
        ],
        description: "Emprendimiento de diseño circular enfocado en la reutilización de retazos de denim provenientes de grandes industrias de la moda para transformarlos en nuevos productos con valor estético, funcional y sostenible. El proyecto integra desarrollo de producto, branding, experiencia de usuario, empaques y comunicación visual con enfoque ambiental y social.",
        bullets: [
            "Desarrollo de producto con enfoque ecológico y social.",
            "Optimización del uso de retazos textiles posconsumo.",
            "Estrategia de branding y comunicación visual circular."
        ]
    },
    ballesta: {
        title: "Ballesta",
        category: "Didáctico / Mecánico",
        filterCategory: "producto",
        year: "2024",
        tech: "Corte Láser, Madera MDF, Ensambles",
        image: "images/ballesta_1.png",
        images: [
            "images/ballesta_1.png"
        ],
        description: "Diseño y desarrollo de una ballesta armable en madera inspirada en mecanismos medievales, creada como experiencia interactiva de construcción y ensamblaje. El proyecto explora precisión mecánica, funcionalidad y fabricación manual mediante un sistema estructural desmontable.",
        bullets: [
            "Diseño plano optimizado para corte en máquina láser.",
            "Ensamble estructural desmontable sin adhesivos.",
            "Exploración didáctica de física mecánica."
        ]
    },
    colorbee: {
        title: "Colorbee",
        category: "Didáctico / Infantil",
        filterCategory: "producto",
        year: "2025",
        tech: "Arduino, Sensores de color, LEDs, Pantalla LCD",
        image: "images/colorbee1.png",
        images: [
            "images/colorbee1.png",
            "images/colorbee2.png",
            "images/colorbee3.png",
            "images/colorbee4.png",
            "images/colorbee5.png",
            "images/colorbee6.png",
            "images/colorbee7.png",
            "images/colorbee8.png",
            "images/colorbee9.png",
            "images/colorbee10.png",
            "images/colorbee11.png",
            "images/colorbee12.png"
        ],
        description: "Diseño y desarrollo de un juguete educativo interactivo enfocado en el aprendizaje de colores y vocabulario en inglés y español para niños. El sistema integra sensores de color, LEDs, pantalla LCD y programación en Arduino para generar una experiencia didáctica y lúdica.",
        bullets: [
            "Desarrollo didáctico interactivo de aprendizaje bilingüe.",
            "Integración de sensores electrónicos y programación con Arduino.",
            "Ergonomía y seguridad en el diseño para el uso infantil."
        ]
    },
    corte: {
        title: "Porta Computador",
        category: "Mobiliario / Oficina",
        filterCategory: "mobiliario",
        year: "2024",
        tech: "Madera de Pino, Taller, Corte manual & Maquinado",
        image: "images/corte_3.1.png",
        images: [
            "images/corte_3.1.png",
            "images/corte_3.2.png",
            "images/corte_3.3.png",
            "images/corte_3.4.png",
            "images/corte_3.5.png",
            "images/corte_3.6.png",
            "images/corte_3.7.png",
            "images/corte_3.8.png",
            "images/corte_3.9.png",
            "images/corte_3.10.png",
            "images/corte_3.11.png",
            "images/corte_3.12.png",
            "images/corte_3.13.png",
            "images/corte_3.14.png",
            "images/corte_3.15.png",
            "images/corte_3.16.png",
            "images/corte_3.17.png",
            "images/corte_3.18.png",
            "images/corte_3.20.png",
            "images/corte_3.21.png",
            "images/corte_3.22.png",
            "images/corte_3.23.png"
        ],
        description: "Diseño y fabricación de un porta computador en madera enfocado en ergonomía, estabilidad y funcionalidad para espacios de trabajo. El proyecto fue desarrollado mediante procesos manuales de corte, perforación, pulido y ensamblaje.",
        bullets: [
            "Procesos manuales de corte, perforación y pulido de madera.",
            "Diseño enfocado en la mejora ergonómica y de postura.",
            "Estabilidad y funcionalidad para espacios de trabajo modernos."
        ]
    },
    don_julio: {
        title: "Don Julio — Stand 6x6",
        category: "Retail / Stand Comercial",
        filterCategory: "retail",
        year: "2025",
        tech: "Renderizado 3D, Materiales Premium, Iluminación LED",
        image: "images/don_julio_1.png",
        images: [
            "images/don_julio_1.png",
            "images/don_julio_2.png",
            "images/don_julio_3.png",
            "images/don_julio_4.png",
            "images/don_julio_5.png",
            "images/don_julio_6.png",
            "images/don_julio_7.png",
            "images/don_julio_8.png",
            "images/don_julio_9.png",
            "images/don_julio_10.png"
        ],
        description: "Diseño y conceptualización de un stand comercial 6x6 para la marca Don Julio, enfocado en experiencia de marca, circulación espacial y exhibición premium mediante una propuesta visual inmersiva y funcional.",
        bullets: [
            "Visualización tridimensional fotorrealista e inmersiva.",
            "Distribución espacial óptima para circulación y exhibición.",
            "Identidad de marca premium a través de materiales y luz."
        ]
    },
    eco: {
        title: "EcoRacks",
        category: "Sostenibilidad / Mobiliario",
        filterCategory: "sostenibilidad",
        year: "2024",
        tech: "Cartón Corrugado, Estructura Modular, Encastres",
        image: "images/ECO1.png",
        images: [
            "images/ECO1.png",
            "images/ECO2.png",
            "images/ECO3.png",
            "images/ECO4.png",
            "images/ECO5.png",
            "images/ECO6.png",
            "images/ECO7.png",
            "images/ECO8.png",
            "images/ECO9.png",
            "images/ECO10.png",
            "images/ECO11.png",
            "images/ECO12.png"
        ],
        description: "Diseño de un sistema de exhibición ajustable desarrollado para adaptarse a diferentes necesidades de uso y tamaños de producto. El proyecto se enfoca en flexibilidad, funcionalidad y optimización del espacio mediante una estructura modular adaptable al usuario.",
        bullets: [
            "Estructura modular adaptable de fácil transporte y ensamblaje.",
            "Optimización del espacio con componentes reconfigurables.",
            "Enfoque de diseño sostenible utilizando cartón corrugado."
        ]
    },
    fanti: {
        title: "Fantasmas de Chocolate",
        category: "Mobiliario / Conceptual",
        filterCategory: "mobiliario",
        year: "2024",
        tech: "Maquinaria a presión, Termoformado, Diseño en Madera",
        image: "images/fanti_1.png",
        images: [
            "images/fanti_1.png",
            "images/fanti_2.png",
            "images/fanti_3.png",
            "images/fanti_4.png",
            "images/fanti_5.png"
        ],
        description: "Diseño y desarrollo de moldes para la creación de figuras de chocolate inspiradas en un personaje fantasma previamente diseñado en madera. El molde fue producido mediante maquinaria a presión para permitir la reproducción seriada de chocolates.",
        bullets: [
            "Diseño formal lúdico trasladado a un medio comestible.",
            "Fabricación de molde termoformado a presión para reproducción.",
            "Desarrollo experimental del prototipo en madera."
        ]
    },
    hj: {
        title: "Handy Juicer",
        category: "Producto / Utensilio de Cocina",
        filterCategory: "producto",
        year: "2025",
        tech: "Ergonomía, Modelado 3D, Planos Técnicos",
        image: "images/hj-1.png",
        images: [
            "images/hj-1.png",
            "images/hj-2.png",
            "images/hj-3.png",
            "images/hj-4.png",
            "images/hj-5.png",
            "images/hj-6.png",
            "images/hj-7.png",
            "images/hj-8.png"
        ],
        description: "Diseño y fabricación de un dispositivo exprimidor dirigido a personas con movilidad reducida, enfocado en mejorar la accesibilidad, autonomía y experiencia de uso. El proyecto incluyó investigación del usuario, modelado 3D, planos técnicos y construcción física del producto.",
        bullets: [
            "Investigación centrada en el usuario y accesibilidad ergonómica.",
            "Modelado 3D de precisión y desarrollo de planos técnicos.",
            "Construcción física y prueba de prototipo exprimidor."
        ]
    },
    joy: {
        title: "Destellos en el Reino Champiñón",
        category: "Producto / Joyería Conceptual",
        filterCategory: "producto",
        year: "2025",
        tech: "Ilustración, Modelado de Cera, Fabricación en Plata",
        image: "images/joy1.png",
        images: [
            "images/joy1.png",
            "images/joy2.png",
            "images/joy3.png",
            "images/joy4.png",
            "images/joy5.png",
            "images/joy6.png",
            "images/joy7.png",
            "images/joy8.png",
            "images/joy9.png",
            "images/joy10.png",
            "images/joy11.png",
            "images/joy12.png",
            "images/joy13.png",
            "images/joy14.png",
            "images/joy15.png",
            "images/joy16.png",
            "images/joy17.png"
        ],
        description: "Colección de joyería conceptual desarrollada manualmente e inspirada en narrativas fantásticas y elementos orgánicos. El proyecto incluyó ilustración, bocetación, prototipos de baja fidelidad y fabricación final en plata.",
        bullets: [
            "Diseño e ilustración inspirada en narraciones e iconografía lúdica.",
            "Procesos tradicionales de fundición a cera perdida y pulido.",
            "Acabados artesanales finos en plata de ley."
        ]
    },
    k: {
        title: "Kaos",
        category: "Producto / Cerámica",
        filterCategory: "producto",
        year: "2026",
        tech: "Barbotina, Moldes de Yeso, Esmaltado, Doble Quema",
        image: "images/k1.png",
        images: [
            "images/k1.png",
            "images/k2.png",
            "images/k3.png",
            "images/k4.png",
            "images/k5.png",
            "images/k6.png",
            "images/k7.png",
            "images/k8.png",
            "images/k9.png",
            "images/k10.png",
            "images/k11.png",
            "images/k13.png"
        ],
        description: "Diseño y producción de una colección de 10 personajes en barbotina desarrollados mediante moldes de yeso. El proceso incluyó lijado, doble quema y esmaltado manual, explorando técnicas cerámicas tradicionales y creación escultórica.",
        bullets: [
            "Producción cerámica artesanal mediante moldes de yeso y barbotina.",
            "Técnicas de doble quema y esmaltado de alta temperatura.",
            "Exploración formal y conceptual en escultura coleccionable."
        ]
    },
    lego: {
        title: "LEGO",
        category: "Didáctico / Escultórico",
        filterCategory: "producto",
        year: "2024",
        tech: "Espuma Estructural, Fibra de Vidrio, Planos Técnicos",
        image: "images/lego_1.png",
        images: [
            "images/lego_1.png",
            "images/lego_2.png",
            "images/lego_3.png",
            "images/lego_4.png",
            "images/lego_5.png",
            "images/lego_6.png",
            "images/lego_7.png",
            "images/lego_8.png",
            "images/lego_9.png",
            "images/lego_10.png",
            "images/lego_11.png",
            "images/lego_12.png",
            "images/lego_13.png",
            "images/lego_14.png",
            "images/lego_15.png",
            "images/lego_16.png"
        ],
        description: "Diseño y construcción de una figura gigante inspirada en personajes LEGO, desarrollada mediante planos técnicos y fabricación manual utilizando espuma estructural y fibra de vidrio para explorar volumen, escala y acabados escultóricos.",
        bullets: [
            "Modelado y construcción a escala a partir de planos detallados.",
            "Aplicación de compuestos plásticos y refuerzos de fibra de vidrio.",
            "Acabados superficiales de alta fidelidad visual y resistencia."
        ]
    },
    libro: {
        title: "Sybil",
        category: "Editorial / Gráfico",
        filterCategory: "producto",
        year: "2024",
        tech: "Diseño de Retícula, Ilustración, Composición Editorial",
        image: "images/libro_1.png",
        images: [
            "images/libro_1.png",
            "images/libro_2.png",
            "images/libro_3.png",
            "images/libro_4.png"
        ],
        description: "Rediseño conceptual de la portada del libro Sybil, enfocado en narrativa visual, composición gráfica y reinterpretación estética editorial.",
        bullets: [
            "Diseño de composición tipográfica y retícula de portada.",
            "Desarrollo de ilustraciones conceptuales vinculadas a la temática.",
            "Exploración de texturas, contrastes y terminaciones en papel."
        ]
    },
    mad: {
        title: "MAD",
        category: "Editorial / Gráfico",
        filterCategory: "mobiliario",
        year: "2024",
        tech: "Diseño Gráfico, Ilustración, Narrativa Visual",
        image: "images/MAD1.png",
        images: [
            "images/MAD1.png",
            "images/MAD2.png",
            "images/MAD3.png",
            "images/MAD4.png"
        ],
        description: "Rediseño conceptual de cartas de mesa enfocado en identidad visual, composición gráfica y experiencia de juego mediante ilustración y narrativa visual contemporánea.",
        bullets: [
            "Ilustración y diseño vectorial de baraja conceptual.",
            "Estrategias lúdicas aplicadas a la composición gráfica.",
            "Consistencia estilística y desarrollo de marca de juego."
        ]
    },
    mesa: {
        title: "Mesa y Silla 2 en 1",
        category: "Mobiliario / Multifuncional",
        filterCategory: "mobiliario",
        year: "2025",
        tech: "Madera de Cedro, Encastres, Prototipado a Escala",
        image: "images/mesa_1.png",
        images: [
            "images/mesa_1.png",
            "images/mesa_2.png",
            "images/mesa_3.png",
            "images/mesa_4.png",
            "images/mesa_5.png",
            "images/mesa_6.png",
            "images/mesa_7.png",
            "images/mesa_8.png",
            "images/mesa_9.png",
            "images/mesa_10.png",
            "images/mesa_11.png",
            "images/mesa_12.png",
            "images/mesa_13.png",
            "images/mesa_14.png",
            "images/mesa_15.png",
            "images/mesa_16.png",
            "images/mesa_17.png",
            "images/mesa_18.png",
            "images/mesa_20.png",
            "images/mesa_21.png",
            "images/mesa_22.png",
            "images/mesa_23.png",
            "images/mesa_24.png",
            "images/mesa_25.png",
            "images/mesa_26.png",
            "images/mesa_27.png",
            "images/mesa_28.png",
            "images/mesa_29.png",
            "images/mesa_30.png",
            "images/mesa_31.png",
            "images/mesa_32.png"
        ],
        description: "Diseño de un sistema de mobiliario multifuncional que integra mesa y silla en una única solución transformable. El proyecto fue desarrollado tanto en escala real como en prototipo a escala, explorando optimización espacial y funcionalidad.",
        bullets: [
            "Diseño de juntas abatibles y encastres de madera.",
            "Validación de estabilidad estructural y distribución de cargas.",
            "Fabricación de prototipo funcional convertible a escala."
        ]
    },
    nivea: {
        title: "Nivea — Facial Cleansing Product Redesign",
        category: "Producto / Cosmética & Empaque",
        filterCategory: "producto",
        year: "2025",
        tech: "Diseño de Empaque, Ergonomía, Sostenibilidad",
        image: "images/NIVEA1.png",
        images: [
            "images/NIVEA1.png",
            "images/NIVEA2.png",
            "images/NIVEA3.png",
            "images/NIVEA4.png",
            "images/NIVEA5.png",
            "images/NIVEA6.png",
            "images/NIVEA7.png",
            "images/NIVEA8.png",
            "images/NIVEA9.png",
            "images/NIVEA10.png",
            "images/NIVEA11.png",
            "images/NIVEA12.png",
            "images/NIVEA13.png",
            "images/NIVEA14.png",
            "images/NIVEA15.png"
        ],
        description: "Rediseño de un producto de limpieza facial para Nivea, enfocado en mejorar la experiencia de uso mediante un nuevo sistema de empaque, funcionalidad y la incorporación de una toalla reutilizable.",
        bullets: [
            "Rediseño funcional de envase primario para dosificación precisa.",
            "Integración de toallas textiles reutilizables como enfoque ecológico.",
            "Preservación e identidad visual corporativa de la marca Nivea."
        ]
    },
    proqui: {
        title: "Chaqueta para Motociclistas",
        category: "Producto / Confección Técnica",
        filterCategory: "producto",
        year: "2025",
        tech: "Textiles Técnicos, Patronaje, Confección Industrial",
        image: "images/proqui_1.png",
        images: [
            "images/proqui_1.png",
            "images/proqui_2.png",
            "images/proqui_3.png",
            "images/proqui_4.png",
            "images/proqui_5.png",
            "images/proqui_6.png",
            "images/proqui_7.png",
            "images/proqui_8.png",
            "images/proqui_9.png",
            "images/proqui_10.png",
            "images/proqui_11.png",
            "images/proqui_12.png",
            "images/proqui_13.png",
            "images/proqui_14.png",
            "images/proqui_15.png"
        ],
        description: "Diseño de una chaqueta para motociclistas desarrollada a partir de textiles industriales proporcionados por Proquinal, explorando funcionalidad, protección y aprovechamiento de materiales para uso urbano.",
        bullets: [
            "Patronaje avanzado enfocado en movilidad y confort urbano.",
            "Uso de recubrimientos y materiales de alta fricción industrial.",
            "Detalles utilitarios de protección pasiva integrados al diseño."
        ]
    },
    all: {
        title: "ALL UP",
        category: "Producto / Médico & Ortopédico",
        filterCategory: "producto",
        year: "2024 - 2026",
        tech: "Impresión 3D, Escaneo 3D, Materiales Hipoalergénicos",
        image: "images/ALL1.png",
        images: [
            "images/ALL1.png",
            "images/ALL2.png",
            "images/ALL3.png",
            "images/ALL4.png",
            "images/ALL5.png",
            "images/ALL6.png",
            "images/ALL7.png",
            "images/ALL8.png",
            "images/ALL9.png",
            "images/ALL10.png",
            "images/ALL12.png",
            "images/ALL13.png",
            "images/ALL14.png"
        ],
        description: "Diseño de un dispositivo ortopédico impreso en 3D como alternativa estética y funcional al yeso tradicional para personas con fracturas, mejorando comodidad, ventilación y experiencia del usuario durante la recuperación.",
        bullets: [
            "Modelado paramétrico transpirable y liviano en red de impresión 3D.",
            "Ajuste anatómico optimizado mediante escaneado digital directo.",
            "Uso de materiales hipoalergénicos e impermeables."
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // === DOM Elements ===
    const projectsGrid = document.querySelector(".projects-grid");
    
    // === Render Projects Grid Dynamically ===
    const renderProjects = () => {
        projectsGrid.innerHTML = "";
        Object.entries(projectsData).forEach(([id, data]) => {
            const card = document.createElement("div");
            card.className = "project-card";
            card.setAttribute("data-category", data.filterCategory);
            card.setAttribute("data-project-id", id);
            
            card.innerHTML = `
                <div class="project-image-wrapper">
                    <img src="${data.image}" alt="${data.title}" loading="lazy">
                    <div class="project-overlay">
                        <span class="project-card-category">${data.category}</span>
                        <h3 class="project-card-title">${data.title}</h3>
                        <span class="project-view-btn">Ver Proyecto <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    };
    
    renderProjects();
    
    const projectCards = document.querySelectorAll(".project-card");
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    const modal = document.getElementById("project-modal");
    const modalImage = document.getElementById("modal-image");
    const modalDetailImage = document.getElementById("modal-detail-image");
    const modalCategory = document.getElementById("modal-category");
    const modalTitle = document.getElementById("modal-title");
    const modalYear = document.getElementById("modal-year");
    const modalTech = document.getElementById("modal-tech");
    const modalDescription = document.getElementById("modal-description");
    const modalBullets = document.getElementById("modal-bullets");
    const modalCloseBtn = document.querySelector(".modal-close");
    const modalBackdrop = document.querySelector(".modal-backdrop");
    
    const header = document.getElementById("main-header");
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const navLinksContainer = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-link");
    
    const contactForm = document.getElementById("contact-form");
    const formSuccessMsg = document.getElementById("form-success-msg");

    // === Sticky Header on Scroll ===
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "12px 24px";
            header.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.3)";
        } else {
            header.style.padding = "20px 24px";
            header.style.boxShadow = "none";
        }
        
        // Highlight active nav links on scroll
        let current = "";
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // === Mobile Menu Toggle ===
    mobileNavToggle.addEventListener("click", () => {
        const isOpen = navLinksContainer.classList.contains("active");
        
        if (isOpen) {
            navLinksContainer.classList.remove("active");
            mobileNavToggle.classList.remove("hamburger-active");
            mobileNavToggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "auto";
        } else {
            navLinksContainer.classList.add("active");
            mobileNavToggle.classList.add("hamburger-active");
            mobileNavToggle.setAttribute("aria-expanded", "true");
            document.body.style.overflow = "hidden";
        }
    });

    // Close menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("active");
            mobileNavToggle.classList.remove("hamburger-active");
            mobileNavToggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "auto";
        });
    });

    // === Project Filter Logic ===
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("active")) return;

            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filterValue = btn.getAttribute("data-filter");
            
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                // Asegurar que use la transición suave definida en el CSS
                card.style.transition = "";
                
                if (filterValue === "all" || cardCategory === filterValue) {
                    card.style.display = "block";
                    // Forzar reflow del navegador para registrar el display: block antes de animar
                    void card.offsetWidth;
                    card.style.opacity = "1";
                    card.style.transform = "scale(1) translateY(0)";
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95) translateY(10px)";
                    
                    // Ocultar el elemento físicamente al finalizar la transición (400ms)
                    setTimeout(() => {
                        if (card.style.opacity === "0") {
                            card.style.display = "none";
                        }
                    }, 400);
                }
            });
        });
    });

    // === Project Detail Modal Controller with Dynamic Simulators ===
    let activeSimulatorCleanup = null;

    const buildSimulator = (projectId, container) => {
        // Limpiar cualquier simulador previo
        if (activeSimulatorCleanup) {
            activeSimulatorCleanup();
            activeSimulatorCleanup = null;
        }
        
        container.innerHTML = "";
        
        const title = document.createElement("div");
        title.className = "simulator-title";
        
        const subtitle = document.createElement("div");
        subtitle.className = "simulator-subtitle";
        
        const viewport = document.createElement("div");
        viewport.className = "simulator-viewport";
        
        const controls = document.createElement("div");
        controls.className = "simulator-controls";

        container.appendChild(title);
        container.appendChild(subtitle);
        container.appendChild(viewport);
        container.appendChild(controls);

        // 1. HJ: Sensor & Lighting Simulator
        if (projectId === "hj") {
            title.textContent = "Sybil Interactive Interface";
            subtitle.textContent = "Mueve tu cursor o haz clic en la esfera para simular la interacción por proximidad.";
            
            const sphere = document.createElement("div");
            sphere.className = "sybil-glow-sphere";
            viewport.appendChild(sphere);
            
            const modes = [
                { name: "Respiración (Calma)", color: "#cf7d3c", shadow: "rgba(207, 125, 60, 0.6)" },
                { name: "Productividad (Celeste)", color: "#00f2fe", shadow: "rgba(0, 242, 254, 0.6)" },
                { name: "Enfoque (Violeta)", color: "#9b51e0", shadow: "rgba(155, 81, 224, 0.6)" }
            ];
            
            modes.forEach((mode, i) => {
                const btn = document.createElement("button");
                btn.className = "sim-btn";
                if (i === 0) btn.classList.add("active");
                btn.textContent = mode.name;
                btn.onclick = () => {
                    controls.querySelectorAll(".sim-btn").forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    sphere.style.setProperty("--glow-color", mode.color);
                    sphere.style.setProperty("--glow-shadow", mode.shadow);
                };
                controls.appendChild(btn);
            });

            // Animación por proximidad del cursor
            const onMouseMove = (e) => {
                const rect = sphere.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const distance = Math.sqrt(x*x + y*y);
                const scale = Math.max(0.9, 1.2 - distance / 300);
                sphere.style.transform = `scale(${scale})`;
            };

            viewport.addEventListener("mousemove", onMouseMove);
            activeSimulatorCleanup = () => {
                viewport.removeEventListener("mousemove", onMouseMove);
            };
        }
        
        // 2. Ballesta: Mechanical Tension Simulator
        else if (projectId === "ballesta") {
            title.textContent = "Ballesta Mecánica Didáctica";
            subtitle.textContent = "Arrastra el gatillo o presiona 'Lanzar' para disparar el proyectil elástico.";

            const svgContainer = document.createElement("div");
            svgContainer.className = "crossbow-svg-container";
            svgContainer.innerHTML = `
                <svg class="crossbow-svg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    <!-- Arco de madera -->
                    <path d="M 50 150 Q 200 40 350 150" fill="none" stroke="#b1a296" stroke-width="12" stroke-linecap="round"/>
                    <!-- Cuerpo central -->
                    <rect x="185" y="60" width="30" height="120" rx="4" fill="#8d7d72"/>
                    <!-- Gatillo -->
                    <circle id="trigger-node" cx="200" cy="140" r="10" fill="#cf7d3c" cursor="pointer"/>
                    <!-- Cuerda elástica -->
                    <path id="string-line" d="M 55 145 Q 200 140 345 145" fill="none" stroke="#fff" stroke-width="3"/>
                    <!-- Proyectil Flecha -->
                    <g id="arrow-group" transform="translate(0, 0)">
                        <line x1="200" y1="120" x2="200" y2="60" stroke="#cf7d3c" stroke-width="6" stroke-linecap="round"/>
                        <polygon points="194,62 200,50 206,62" fill="#cf7d3c" />
                    </g>
                </svg>
            `;
            viewport.appendChild(svgContainer);

            const trigger = svgContainer.querySelector("#trigger-node");
            const string = svgContainer.querySelector("#string-line");
            const arrow = svgContainer.querySelector("#arrow-group");

            const fireBtn = document.createElement("button");
            fireBtn.className = "sim-btn active";
            fireBtn.textContent = "Lanzar Flecha 🏹";
            
            let isLoaded = true;

            const fireArrow = () => {
                if (!isLoaded) return;
                isLoaded = false;
                
                // Animación de disparo
                trigger.setAttribute("cy", "120");
                string.setAttribute("d", "M 55 145 Q 200 80 345 145");
                
                let frame = 0;
                const interval = setInterval(() => {
                    frame++;
                    const yOffset = -frame * 25;
                    arrow.setAttribute("transform", `translate(0, ${yOffset})`);
                    if (frame > 12) {
                        clearInterval(interval);
                        setTimeout(() => {
                            // Resetear
                            arrow.setAttribute("transform", `translate(0, 0)`);
                            trigger.setAttribute("cy", "140");
                            string.setAttribute("d", "M 55 145 Q 200 140 345 145");
                            isLoaded = true;
                        }, 1000);
                    }
                }, 30);
            };

            fireBtn.onclick = fireArrow;
            controls.appendChild(fireBtn);
        }

        // 3. Don Julio: Shelf Spotlighting
        else if (projectId === "don_julio") {
            title.textContent = "Don Julio LED Illumination System";
            subtitle.textContent = "Haz clic sobre las repisas o botellas para activar la iluminación LED fotorrealista.";

            const backbar = document.createElement("div");
            backbar.className = "don-julio-backbar";
            backbar.innerHTML = `
                <div class="don-julio-shelf" id="shelf-1">
                    <div class="mini-bottle"></div>
                    <div class="mini-bottle"></div>
                    <div class="mini-bottle"></div>
                </div>
                <div class="don-julio-shelf" id="shelf-2">
                    <div class="mini-bottle"></div>
                    <div class="mini-bottle"></div>
                </div>
            `;
            viewport.appendChild(backbar);

            const shelf1 = backbar.querySelector("#shelf-1");
            const shelf2 = backbar.querySelector("#shelf-2");

            const btn1 = document.createElement("button");
            btn1.className = "sim-btn active";
            btn1.textContent = "Encender Repisa Superior 💡";
            btn1.onclick = () => {
                btn1.classList.toggle("active");
                if (btn1.classList.contains("active")) {
                    shelf1.style.setProperty("--glow-color", "#cf7d3c");
                    shelf1.style.setProperty("--glow-shadow", "rgba(207, 125, 60, 0.5)");
                } else {
                    shelf1.style.setProperty("--glow-color", "#181b22");
                    shelf1.style.setProperty("--glow-shadow", "transparent");
                }
            };

            const btn2 = document.createElement("button");
            btn2.className = "sim-btn";
            btn2.textContent = "Encender Repisa Inferior 💡";
            btn2.onclick = () => {
                btn2.classList.toggle("active");
                if (btn2.classList.contains("active")) {
                    shelf2.style.setProperty("--glow-color", "#d4af37");
                    shelf2.style.setProperty("--glow-shadow", "rgba(212, 175, 55, 0.4)");
                } else {
                    shelf2.style.setProperty("--glow-color", "#181b22");
                    shelf2.style.setProperty("--glow-shadow", "transparent");
                }
            };

            controls.appendChild(btn1);
            controls.appendChild(btn2);
            // Default upper active
            shelf1.style.setProperty("--glow-color", "#cf7d3c");
            shelf1.style.setProperty("--glow-shadow", "rgba(207, 125, 60, 0.5)");
        }

        // 4. Lego: Modular ABS Assembly Block
        else if (projectId === "lego") {
            title.textContent = "Lego ABS Modular Constructor";
            subtitle.textContent = "Haz clic en los colores inferiores para apilar bloques y probar los encajes mecánicos.";

            const builderCanvas = document.createElement("div");
            builderCanvas.className = "lego-builder-canvas";
            viewport.appendChild(builderCanvas);

            const colors = [
                { name: "Amarillo Lego", val: "#f1c40f" },
                { name: "Cobre Masaki", val: "#cf7d3c" },
                { name: "Negro Industrial", val: "#1f242e" }
            ];

            const addBlock = (colorVal) => {
                const brick = document.createElement("div");
                brick.className = "lego-brick";
                brick.style.backgroundColor = colorVal;
                brick.style.width = `${120 - builderCanvas.children.length * 8}px`;
                
                // Add Lego studs
                const studs = document.createElement("div");
                studs.className = "brick-studs";
                studs.innerHTML = `
                    <span class="brick-stud"></span>
                    <span class="brick-stud"></span>
                    <span class="brick-stud"></span>
                `;
                brick.appendChild(studs);
                
                if (builderCanvas.children.length < 5) {
                    builderCanvas.appendChild(brick);
                }
            };

            colors.forEach(col => {
                const btn = document.createElement("button");
                btn.className = "sim-btn";
                btn.style.borderLeft = `6px solid ${col.val}`;
                btn.textContent = `Añadir Bloque ${col.name.split(" ")[0]}`;
                btn.onclick = () => addBlock(col.val);
                controls.appendChild(btn);
            });

            const clearBtn = document.createElement("button");
            clearBtn.className = "sim-btn";
            clearBtn.innerHTML = "<i class='fa-solid fa-trash'></i> Reset";
            clearBtn.onclick = () => { builderCanvas.innerHTML = ""; };
            controls.appendChild(clearBtn);

            // Add one default block
            addBlock("#cf7d3c");
        }

        // 5. Mesa: Carpentry Explosion Assembly
        else if (projectId === "mesa") {
            title.textContent = "Uniones de Carpintería (Despiece)";
            subtitle.textContent = "Arrastra el slider para separar o ensamblar las juntas y ver la precisión del encaje.";

            const diagram = document.createElement("div");
            diagram.className = "joinery-diagram";
            diagram.innerHTML = `
                <svg class="joinery-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <!-- Espiga (Tenon Joint superior) -->
                    <g id="tenon-part" transform="translate(0, 0)">
                        <rect x="85" y="15" width="30" height="50" rx="3" fill="#cf7d3c"/>
                        <line x1="85" y1="15" x2="115" y2="15" stroke="#fff" stroke-dasharray="3" stroke-width="1" opacity="0.5"/>
                    </g>
                    <!-- Mortaja / Pata inferior -->
                    <g id="mortise-part" transform="translate(0, 0)">
                        <rect x="65" y="110" width="70" height="70" rx="4" fill="#b1a296"/>
                        <!-- Caja receptor hueco -->
                        <rect x="85" y="110" width="30" height="25" rx="2" fill="#0c0d12" stroke="#fff" stroke-dasharray="2" stroke-width="1"/>
                    </g>
                </svg>
            `;
            viewport.appendChild(diagram);

            const tenon = diagram.querySelector("#tenon-part");
            const mortise = diagram.querySelector("#mortise-part");

            const sliderContainer = document.createElement("div");
            sliderContainer.className = "sim-slider-container";
            sliderContainer.innerHTML = `
                <label style="font-size:0.75rem; color:#888;">Nivel de Explosión</label>
                <input type="range" class="sim-range-slider" min="0" max="60" value="0">
            `;
            controls.appendChild(sliderContainer);

            const slider = sliderContainer.querySelector(".sim-range-slider");
            slider.oninput = (e) => {
                const val = e.target.value;
                tenon.setAttribute("transform", `translate(0, ${-val})`);
                mortise.setAttribute("transform", `translate(0, ${val / 3})`);
            };
        }

        // 6. Corte: Furniture Stress Tester
        else if (projectId === "corte") {
            title.textContent = "Simulador de Carga Estructural";
            subtitle.textContent = "Aplica fuerza sobre la estructura del mueble para calcular los límites de tensión.";

            const tester = document.createElement("div");
            tester.className = "stress-tester";
            tester.innerHTML = `
                <div class="corte3-diagram">
                    <div class="corte3-load" id="force-val">0 KG</div>
                    <div class="stress-line"></div>
                </div>
            `;
            viewport.appendChild(tester);

            const forceVal = tester.querySelector("#force-val");
            const stressLine = tester.querySelector(".stress-line");
            const diagramBox = tester.querySelector(".corte3-diagram");

            const forces = [
                { val: "0 KG", color: "#27ae60", scale: 1 },
                { val: "50 KG", color: "#2ecc71", scale: 0.99 },
                { val: "100 KG", color: "#f39c12", scale: 0.96 },
                { val: "180 KG (Max)", color: "#c0392b", scale: 0.92 }
            ];

            forces.forEach(f => {
                const btn = document.createElement("button");
                btn.className = "sim-btn";
                if (f.val === "0 KG") btn.classList.add("active");
                btn.textContent = f.val;
                btn.onclick = () => {
                    controls.querySelectorAll(".sim-btn").forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    forceVal.textContent = f.val;
                    forceVal.style.setProperty("--stress-color", f.color);
                    stressLine.style.setProperty("--stress-color", f.color);
                    diagramBox.style.transform = `scaleY(${f.scale})`;
                };
                controls.appendChild(btn);
            });
        }

        // 7. Toru: Denim Upcycling Layer Assembler
        else if (projectId === "toru") {
            title.textContent = "Torú Denim Pattern Assembler";
            subtitle.textContent = "Selecciona parches de mezclilla y haz clic en 'Coser Juntas' para armar tu bolso utilitario.";

            const assembler = document.createElement("div");
            assembler.className = "denim-assembler";
            assembler.style.cssText = "width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:20px; position:relative;";
            
            // Silhouette and Patch Container
            const bagContainer = document.createElement("div");
            bagContainer.className = "bag-silhouette";
            bagContainer.style.cssText = "width:180px; height:220px; border:2px dashed #4f6b8c; border-radius:15px; position:relative; overflow:hidden; background:rgba(255,255,255,0.02); display:flex; flex-wrap:wrap; align-content:flex-start; padding:10px;";
            
            // Add grid inside the silhouette
            for (let i = 0; i < 9; i++) {
                const slot = document.createElement("div");
                slot.className = "denim-slot";
                slot.style.cssText = "width:33.33%; height:33.33%; border:1px dashed rgba(255,255,255,0.05); transition:all 0.3s ease; display:flex; align-items:center; justify-content:center;";
                bagContainer.appendChild(slot);
            }

            // Stitching lines overlay
            const stitchOverlay = document.createElement("div");
            stitchOverlay.className = "stitch-overlay";
            stitchOverlay.style.cssText = "position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; border:2px dashed transparent; border-radius:15px; transition:border-color 0.5s ease;";
            bagContainer.appendChild(stitchOverlay);

            assembler.appendChild(bagContainer);
            viewport.appendChild(assembler);

            const patchColors = {
                dark: { bg: "#1a2c4e", label: "M. Oscuro" },
                light: { bg: "#4f7da8", label: "M. Claro" },
                worn: { bg: "#7e9cb9", label: "M. Desgastado" }
            };

            let patchCount = 0;

            const addPatch = (type) => {
                const slots = bagContainer.querySelectorAll(".denim-slot");
                const emptySlots = Array.from(slots).filter(s => s.children.length === 0);
                if (emptySlots.length === 0) return;

                // Pick a random empty slot
                const randomSlot = emptySlots[Math.floor(Math.random() * emptySlots.length)];
                
                const patch = document.createElement("div");
                patch.style.cssText = `width:100%; height:100%; background:${patchColors[type].bg}; border:1px solid rgba(255,255,255,0.2); animation:scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:rgba(255,255,255,0.9); font-weight:bold; text-transform:uppercase;`;
                patch.textContent = patchColors[type].label;
                randomSlot.appendChild(patch);
                patchCount++;
            };

            const sewPatches = () => {
                if (patchCount === 0) return;
                stitchOverlay.style.borderColor = "#ff793f"; // Orange neon stitch thread
                stitchOverlay.style.animation = "stitchPulse 1s ease infinite";
                
                // Add sewing dashed lines over all patches
                const slots = bagContainer.querySelectorAll(".denim-slot");
                slots.forEach(s => {
                    if (s.children.length > 0) {
                        const p = s.children[0];
                        p.style.border = "2px dashed #ff793f";
                    }
                });
            };

            const resetAssembler = () => {
                const slots = bagContainer.querySelectorAll(".denim-slot");
                slots.forEach(s => s.innerHTML = "");
                stitchOverlay.style.borderColor = "transparent";
                stitchOverlay.style.animation = "none";
                patchCount = 0;
            };

            // Buttons
            const btnDark = document.createElement("button");
            btnDark.className = "sim-btn";
            btnDark.textContent = "👖 Denim Oscuro";
            btnDark.onclick = () => addPatch("dark");
            controls.appendChild(btnDark);

            const btnLight = document.createElement("button");
            btnLight.className = "sim-btn";
            btnLight.textContent = "👖 Denim Claro";
            btnLight.onclick = () => addPatch("light");
            controls.appendChild(btnLight);

            const btnWorn = document.createElement("button");
            btnWorn.className = "sim-btn";
            btnWorn.textContent = "👖 M. Desgastada";
            btnWorn.onclick = () => addPatch("worn");
            controls.appendChild(btnWorn);

            const btnSew = document.createElement("button");
            btnSew.className = "sim-btn";
            btnSew.style.backgroundColor = "#ff793f";
            btnSew.style.borderColor = "#ff793f";
            btnSew.style.color = "#fff";
            btnSew.textContent = "🪡 Coser Juntas";
            btnSew.onclick = sewPatches;
            controls.appendChild(btnSew);

            const btnReset = document.createElement("button");
            btnReset.className = "sim-btn";
            btnReset.textContent = "🔄 Limpiar";
            btnReset.onclick = resetAssembler;
            controls.appendChild(btnReset);
            
            // Add styles
            if (!document.getElementById("toru-sim-styles")) {
                const styleEl = document.createElement("style");
                styleEl.id = "toru-sim-styles";
                styleEl.innerHTML = `
                    @keyframes scaleUp {
                        from { transform: scale(0); opacity: 0; }
                        to { transform: scale(1); opacity: 1; }
                    }
                    @keyframes stitchPulse {
                        0% { opacity: 0.6; }
                        50% { opacity: 1; }
                        100% { opacity: 0.6; }
                    }
                `;
                document.head.appendChild(styleEl);
            }
        }
    };

    // === Interactive Photo Gallery State ===
    let currentProjectImages = [];
    let currentImageIndex = 0;

    const modalImageTab = document.getElementById("modal-image-tab");
    const galleryPrevBtn = document.querySelector(".gallery-prev");
    const galleryNextBtn = document.querySelector(".gallery-next");
    const galleryCounter = document.querySelector(".gallery-counter");
    const galleryThumbnails = document.querySelector(".gallery-thumbnails");
    const modalInteractiveTabBtn = document.getElementById("modal-interactive-tab-btn");

    const updateGalleryView = () => {
        modalImage.style.opacity = "0";
        setTimeout(() => {
            modalImage.src = currentProjectImages[currentImageIndex];
            modalImage.style.opacity = "1";
        }, 150);

        galleryCounter.textContent = `${currentImageIndex + 1} / ${currentProjectImages.length}`;

        // Activar miniatura
        const thumbs = galleryThumbnails.querySelectorAll(".thumb-item");
        thumbs.forEach((t, idx) => {
            if (idx === currentImageIndex) {
                t.classList.add("active");
                t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            } else {
                t.classList.remove("active");
            }
        });
    };

    const openModal = (projectId) => {
        const data = projectsData[projectId];
        if (!data) return;

        // Cargar datos en el modal
        currentProjectImages = data.images || [data.image];
        currentImageIndex = 0;

        // Ajustar clase single-image
        if (currentProjectImages.length <= 1) {
            modalImageTab.classList.add("single-image");
        } else {
            modalImageTab.classList.remove("single-image");
        }

        // Crear miniaturas
        galleryThumbnails.innerHTML = "";
        currentProjectImages.forEach((imgSrc, idx) => {
            const thumb = document.createElement("div");
            thumb.className = `thumb-item ${idx === 0 ? "active" : ""}`;
            thumb.innerHTML = `<img src="${imgSrc}" alt="Miniatura ${idx + 1}">`;
            thumb.addEventListener("click", () => {
                currentImageIndex = idx;
                updateGalleryView();
            });
            galleryThumbnails.appendChild(thumb);
        });

        // Cargar primera imagen y datos descriptivos
        modalImage.src = currentProjectImages[0];
        modalImage.alt = data.title;
        galleryCounter.textContent = `1 / ${currentProjectImages.length}`;

        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalYear.textContent = data.year;
        modalTech.textContent = data.tech;
        modalDescription.textContent = data.description;
        
        // Cargar bullets
        modalBullets.innerHTML = "";
        data.bullets.forEach(bullet => {
            const li = document.createElement("li");
            li.textContent = bullet;
            modalBullets.appendChild(li);
        });

        // Configurar pestaña de simulación interactiva
        const projectsWithSimulations = ["hj", "ballesta", "don_julio", "lego", "mesa", "corte", "toru"];
        if (projectsWithSimulations.includes(projectId)) {
            modalInteractiveTabBtn.style.display = "flex";
            // Crear la simulación interactiva correspondiente
            const canvasContainer = document.getElementById("interactive-canvas-container");
            buildSimulator(projectId, canvasContainer);
        } else {
            modalInteractiveTabBtn.style.display = "none";
        }

        // Resetear pestañas del modal (mostrar Render/Foto por defecto)
        const tabs = document.querySelectorAll(".modal-tab-btn");
        const panes = document.querySelectorAll(".tab-pane");
        tabs.forEach(t => t.classList.remove("active"));
        panes.forEach(p => p.classList.remove("active"));
        
        document.querySelector(".modal-tab-btn[data-tab='image']").classList.add("active");
        document.getElementById("modal-image-tab").classList.add("active");

        // Mostrar modal con animaciones fluidas
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Desactivar scroll del fondo
    };

    const closeModal = () => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto"; // Restaurar scroll del fondo
        
        // Limpiar el simulador activo
        if (activeSimulatorCleanup) {
            activeSimulatorCleanup();
            activeSimulatorCleanup = null;
        }

        setTimeout(() => {
            modalImage.src = "";
            document.getElementById("interactive-canvas-container").innerHTML = "";
            galleryThumbnails.innerHTML = "";
        }, 300);
    };

    // Modal Tabs Navigation Controller
    const tabs = document.querySelectorAll(".modal-tab-btn");
    const panes = document.querySelectorAll(".tab-pane");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            panes.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");
            const targetPaneId = `modal-${tab.getAttribute("data-tab")}-tab`;
            document.getElementById(targetPaneId).classList.add("active");
        });
    });

    // Gallery Prev / Next Click Listeners
    galleryPrevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentProjectImages.length <= 1) return;
        currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
        updateGalleryView();
    });

    galleryNextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentProjectImages.length <= 1) return;
        currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
        updateGalleryView();
    });

    // Card Click Listeners
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project-id");
            openModal(projectId);
        });
    });

    // Close Listeners
    modalCloseBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);
    
    // Close with Escape key and Arrow key navigation
    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;

        if (e.key === "Escape") {
            closeModal();
        } else if (e.key === "ArrowLeft" && currentProjectImages.length > 1) {
            currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
            updateGalleryView();
        } else if (e.key === "ArrowRight" && currentProjectImages.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
            updateGalleryView();
        }
    });

    // === Real Interactive Contact Form via Web3Forms ===
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector(".btn-submit");
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>Enviando...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
        submitBtn.style.pointerEvents = "none";
        
        const name = document.getElementById("form-name").value;
        const email = document.getElementById("form-email").value;
        const subject = document.getElementById("form-subject").value;
        const message = document.getElementById("form-message").value;

        // Enviar datos vía API JSON a Web3Forms
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                access_key: "1240f932-3280-47c2-a092-2d8526282648",
                name: name,
                email: email,
                subject: subject,
                message: message,
                from_name: "Portafolio Manuela Sandoval Quintana",
                replyto: email
            })
        })
        .then(async (response) => {
            const res = await response.json();
            if (response.status === 200 || res.success) {
                contactForm.reset();
                contactForm.style.opacity = "0";
                contactForm.style.pointerEvents = "none";
                
                setTimeout(() => {
                    contactForm.style.display = "none";
                    formSuccessMsg.style.display = "flex";
                    setTimeout(() => {
                        formSuccessMsg.classList.add("form-success-active");
                    }, 50);
                }, 300);
            } else {
                alert("Error de envío: " + (res.message || "Por favor verifica tu Access Key de Web3Forms."));
            }
        })
        .catch(error => {
            console.error("Error al enviar:", error);
            // Fallback de contingencia: simular envío en local
            contactForm.reset();
            contactForm.style.opacity = "0";
            contactForm.style.pointerEvents = "none";
            setTimeout(() => {
                contactForm.style.display = "none";
                formSuccessMsg.style.display = "flex";
                setTimeout(() => {
                    formSuccessMsg.classList.add("form-success-active");
                }, 50);
            }, 300);
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.pointerEvents = "auto";
        });
    });

    // === Scroll Entrance Animation (Intersection Observer) ===
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("element-visible");
                observer.unobserve(entry.target); // Dejar de observar una vez visible
            }
        });
    };

    const scrollObserver = new IntersectionObserver(revealOnScroll, observerOptions);

    // Seleccionar elementos que queremos animar en la carga
    const sectionsToReveal = document.querySelectorAll("section > .section-container, .about-grid, .contact-grid");
    
    sectionsToReveal.forEach((section, index) => {
        section.classList.add("reveal-element");
        scrollObserver.observe(section);
    });
});

// Agregar estilos de animación dinámica mediante JS para no saturar el CSS principal
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .reveal-element {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .element-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(styleSheet);
