// JS - Modified for Scrollable Navigation
        window.addEventListener('load', () => {
           setTimeout(() => {
              document.getElementById('loadingScreen').classList.add('hidden');
           }, 1000);
        });

        // Setup smooth scrolling for menu items
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
           item.addEventListener('click', () => {
              const sectionId = item.dataset.section;
              const section = document.getElementById(sectionId);
              if (section) {
                  // Smooth scroll to the section
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
           });
        });

        // Animate Stats when scrolled into view
        const observerOptions = { threshold: 0.5 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        const statsSection = document.getElementById('statsSection');
        if(statsSection) observer.observe(statsSection);

        function animateStats() {
           const metricValues = document.querySelectorAll('.metric-value[data-target]');
           metricValues.forEach((el, index) => {
              setTimeout(() => {
                 const target = parseInt(el.dataset.target);
                 let current = 0;
                 const increment = Math.ceil(target / 40); 
                 const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                       current = target;
                       clearInterval(timer);
                    }
                    el.textContent = current;
                 }, 30);
              }, index * 200);
           });
        }

        // Tab Switching Logic
        function switchTab(btn, tabId) {
           document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
           btn.classList.add('active');
           document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
           const pane = document.getElementById(tabId);
           if(pane) pane.classList.add('active');
        }

        // Gallery Filtering Logic
        function filterGallery(category, btn) {
           document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
           btn.classList.add('active');
           const items = document.querySelectorAll('.gallery-item');
           items.forEach(item => {
              if (category === 'all' || item.dataset.category === category) {
                 item.style.display = 'block';
                 item.style.animation = 'tabFade 0.4s ease-out';
              } else {
                 item.style.display = 'none';
              }
           });
        }

        // Back to Top Logic
        const backToTopBtn = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        
        
    

function toggleNotes() {
    const list = document.getElementById("notesList");
    if (!list) return;

    list.style.display =
        list.style.display === "block" ? "none" : "block";
}


function toggleBooks() {
    
    const list = document.getElementById("ebookList");
    list.style.display = list.style.display === "block" ? "none" : "block";
}




function toggleBooks() {
    const el = document.getElementById("ebookList");
    el.style.display = el.style.display === "block" ? "none" : "block";
}

function toggleVideos() {
    const el = document.getElementById("videoList");
    el.style.display = el.style.display === "block" ? "none" : "block";
}

function toggleNotes() {
    const el = document.getElementById("notesList");
    el.style.display = el.style.display === "block" ? "none" : "block";
}


function toggleBooks() {
    const el = document.getElementById("ebookList");
    el.style.display = el.style.display === "block" ? "none" : "block";
}


function toggleBooks() {
    const list = document.getElementById("ebookList");
    if (!list) return; // error stop

    list.style.display =
        list.style.display === "block" ? "none" : "block";
}


function toggleEbooks() {
    const box = document.getElementById("ebooksBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}


function toggleNotes() {
    const box = document.getElementById("notesBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}


function showGroup(btn, id) {
    const card = btn.closest('.pyq-card');
    card.querySelectorAll('.pyq-tab').forEach(b => b.classList.remove('active'));
    card.querySelectorAll('.pyq-group').forEach(g => g.classList.remove('active'));

    btn.classList.add('active');
    card.querySelector('#' + id).classList.add('active');
}

function togglePYQ(el) {
    const next = el.nextElementSibling;
    next.style.display = next.style.display === 'block' ? 'none' : 'block';
}

// --1st year --//
 
        const pyqData = {
            "Year 1": {
                "Core": [
                    { 
                        name: "Paper 1", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/1G0YjiKKS2plSjYE4nbHX8HPCIpe7728C/view?usp=drive_link" },
                            { year: "2024", link: "/pdf/paper 1 bca 1/2024 - BCA (4008-01).pdf" },
                            { year: "2023", link: "pdf/paper 1 bca 1/2023 - BCA (4008-01).pdf" },
                            { year: "2022", link: "/Rahul/pdf/paper 1 bca 1/2022 - BCA (4008-01).pdf" },
                            { year: "2021", link: "/Rahul/pdf/paper 1 bca 1/2021 - BCA (4008-01).pdf" },
                           
                        ] 
                    },
                    { 
                        name: "Paper 2", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/17Dn4APRcOEF9deCs7M8CLTt2_0ZEXPNp/view?usp=drive_link" },
                            { year: "2024", link: "/Rahul/pdf/paper 2 bca 1/2024 - BCA (4008-02).pdf" },
                            { year: "2023", link: "/Rahul/pdf/paper 2 bca 1/2023 - BCA (4008-02).pdf" },
                            { year: "2022", link: "/Rahul/pdf/paper 2 bca 1/2022 - BCA (4008-02).pdf" },
                            { year: "2021", link: "/Rahul/pdf/paper 2 bca 1/2021 - BCA (4008-02).pdf" },
                           
                        ] 
                    }
                ],
                "Subsidiary": [
                    { 
                        name: "Mathematics", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/1spHgnYiyvA_rbMI52IyuZ9Ml64MNYBYP/view?usp=drive_link" },
                            { year: "2024", link: "./pdfs/math_2019.pdf" },
                            { year: "2023", link: "https://drive.google.com/file/d/1kb6sc_ViWUznI9fpAwAtVc93ilMMXPBL/view?usp=drive_link" },
                            { year: "2022", link: "./pdfs/math_2019.pdf" },
                            { year: "2021", link: "./pdfs/math_2019.pdf" },
                        ] 
                    },
                    { 
                        name: "English", 
                        years: [
                            { year: "2025", link: ".https://drive.google.com/file/d/1QMhYjJg5ySkhv9xDREXkhLdRF8Mw7NcZ/view?usp=drive_link" },
                            { year: "2024", link: "./pdfs/eng_2019.pdf" },
                            { year: "2023", link: "https://drive.google.com/file/d/14esELHSscHrPLa2n2xpdg5ab0wUDN-Q_/view?usp=drive_link" },
                            { year: "2022", link: "./pdfs/eng_2019.pdf" },
                            { year: "2021", link: "./pdfs/eng_2019.pdf" },
                        ] 
                    },
                    { 
                        name: "Hindi", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/19jY8VnSxaCRYCoRSdsoRFlGS2Rjrr2Pw/view?usp=drive_link" },
                            { year: "2024", link: "./pdfs/math_2019.pdf" },
                            { year: "2023", link: ".https://drive.google.com/file/d/1Kyw4fw3r3G-69KgEwsHJXaeamVZC21aw/view?usp=drive_link" },
                            { year: "2022", link: "./pdfs/math_2019.pdf" },
                            { year: "2021", link: "./pdfs/math_2019.pdf" },
                        ] 
                    },
                ]
            },
            "Year 2": {
                "Core": [
                    { 
                        name: "Paper 3", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/1y9XkOXPhCT79bsft93t5rRHGElB7rFhi/view?usp=drive_link" },
                            { year: "2024", link: "./pdfs/dbms_2022.pdf" },
                            { year: "2023", link: "https://drive.google.com/file/d/1Zrx_Vh4G5ezDwNCokTrP68YcRNN_u8fE/view?usp=drive_link" },
                            { year: "2022", link: "./pdfs/dbms_2022.pdf" },
                            { year: "2021", link: "./pdfs/dbms_2022.pdf" },
                        ] 
                    },
                    { 
                        name: "Paper 4", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/19QzmMzIhB_xPxtMq6_AI1Nq8om7eQFCq/view?usp=drive_link" },
                            { year: "2024", link: ".https://drive.google.com/file/d/1vL3jrm7-RhQ1OxMHntZcgN_f6Yr_X_nP/view?usp=drive_link" },
                            { year: "2023", link: "https://drive.google.com/file/d/1yOYt2_Duiyfqhff7A_eN5XwgZLf-NubA/view?usp=drive_link" },
                            { year: "2022", link: "./pdfs/ds_2022.pdf" },
                            { year: "2021", link: "./pdfs/ds_2022.pdf" },
                        ] 
                    }
                ],
                "Subsidiary": [
                    { 
                        name: "Mathematics", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/19Yz07VsOD4Dr-f1f7o1rMRpwQaOOzxCt/view?usp=drive_link" },
                            { year: "2024", link: "https://drive.google.com/file/d/1wiOx5LrAjcOmbtFvKB3rK_OP1S4l1VVs/view?usp=drive_link" },
                            { year: "2023", link: "./pdfs/stats_2020.pdf" },
                            { year: "2022", link: "./pdfs/stats_2020.pdf" },
                            { year: "2021", link: "./pdfs/stats_2020.pdf" },
                        ] 
                    },
                    { 
                        name: "Englishs", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/17cRJ0ticozFDMW3mEo8CWymhT8dM-rj1/view?usp=drive_link" },
                            { year: "2024", link: "https://drive.google.com/file/d/1AsSxslmcXLA9x19Ldczt-q4MkyxougLD/view?usp=drive_link" },
                            { year: "2023", link: "https://drive.google.com/file/d/1yNSJIpzg_gNl-cijE5Jx1APSXAHiMR7-/view?usp=drive_link" },
                            { year: "2022", link: "./pdfs/stats_2020.pdf" },
                            { year: "2021", link: "./pdfs/stats_2020.pdf" },
                        ] 
                    },
                    { 
                        name: "Hindi", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/1WhzpvOPzq-GJtrvH-0J2jf9GPqWJlZvK/view?usp=drive_link" },
                            { year: "2024", link: "https://drive.google.com/file/d/1JGIS5DzBsvf2bZqRaARPngE6ayV-haiM/view?usp=drive_link" },
                            { year: "2023", link: "./pdfs/stats_2020.pdf" },
                            { year: "2022", link: "./pdfs/stats_2020.pdf" },
                            { year: "2021", link: "./pdfs/stats_2020.pdf" },
                        ] 
                    }
                ]
            },
            "Year 3": {
                 "Core": [
                    { 
                        name: "Paper 5", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/1jMgvwiC1BA1h2hzSUMB2OcogEXr32eia/view?usp=drive_link" },
                            { year: "2024", link: "./pdfs/java_2022.pdf" },
                            { year: "2023", link: "https://drive.google.com/file/d/1iH3mvDhTHZQIHZO69Yo3JshQbx3lawtK/view?usp=drive_link" },
                            { year: "2022", link: "./pdfs/java_2022.pdf" },
                            { year: "2021", link: "./pdfs/java_2022.pdf" },
                        ] 
                    },
                      { 
                        name: "Paper 6", 
                        years: [
                            { year: "2025", link: "https://drive.google.com/file/d/1wQQ7sFkeXtYO6jV_SNN8yZBOdoqYIfXL/view?usp=drive_link" },
                            { year: "2024", link: "https://drive.google.com/file/d/1CiEmawXQdzmSXNEXFh07wnbhQ-kD-B5P/view?usp=drive_link" },
                            { year: "2023", link: "https://drive.google.com/file/d/1u8Vmr5sjgSFicojGM9weMDIRiWhXkTuj/view?usp=drive_link" },
                            { year: "2022", link: "./pdfs/vb_2022.pdf" },
                            { year: "2021", link: "./pdfs/vb_2022.pdf" },
                        ] 
                    }
                ],
                "Subsidiary": [
                      { 
                        name: "General Studies", 
                        years: [
                            { year: "2025", link: "./pdfs/gs_2021.pdf" },
                            { year: "2024", link: "./pdfs/gs_2021.pdf" },
                            { year: "2023", link: "https://drive.google.com/file/d/1hZ0BhsAzBufyTJCsDGIFYU0PMUDYNI0M/view?usp=drive_link" },
                            { year: "2022", link: "./pdfs/gs_2021.pdf" },
                            { year: "2021", link: "./pdfs/gs_2021.pdf" },
                        ] 
                    }
                ]
            }
        };

        // VARIABLES
        let currentYear = null;
        let currentType = null;
        const step1 = document.getElementById('pyq-step-1');
        const step2 = document.getElementById('pyq-step-2');
        const step3 = document.getElementById('pyq-step-3');
        const searchResults = document.getElementById('pyq-search-results');
        const titleYear = document.getElementById('selectedYearTitle');
        const titleType = document.getElementById('selectedTypeTitle');
        const listContainer = document.getElementById('subjectListContainer');
        const searchInput = document.getElementById('pyqSearchInput');

        // FUNCTIONS
        function loadYear(year) {
            currentYear = year;
            titleYear.innerText = year;
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
        }

        function backToYears() {
            step2.classList.add('hidden');
            step1.classList.remove('hidden');
            currentYear = null;
        }

        function loadType(type) {
            currentType = type;
            titleType.innerText = `${currentYear} - ${type}`;
            step2.classList.add('hidden');
            step3.classList.remove('hidden');
            renderSubjects();
        }

        function backToType() {
            step3.classList.add('hidden');
            step2.classList.remove('hidden');
            currentType = null;
        }

        // UPDATED RENDER FUNCTION
        function renderSubjects() {
            listContainer.innerHTML = '';
            const subjects = pyqData[currentYear][currentType];

            subjects.forEach(sub => {
                // Accordion Item
                const item = document.createElement('div');
                item.className = 'subject-accordion-item';
                
                // Header
                const header = document.createElement('div');
                header.className = 'subject-header';
                header.innerHTML = `<span>${sub.name}</span> <span>+</span>`;
                header.onclick = function() {
                    const panel = this.nextElementSibling;
                    const isActive = panel.classList.contains('active');
                    // Close others
                    document.querySelectorAll('.subject-years').forEach(p => p.classList.remove('active'));
                    document.querySelectorAll('.subject-header span:last-child').forEach(s => s.innerText = '+');
                    
                    if(!isActive) {
                        panel.classList.add('active');
                        this.querySelector('span:last-child').innerText = '-';
                    }
                };

                // Content (Years) -> UPDATED HERE
                const content = document.createElement('div');
                content.className = 'subject-years';
                
                sub.years.forEach(yrObj => {
                    const link = document.createElement('a');
                    link.href = yrObj.link; // Link set here
                    link.className = 'year-chip';
                    link.innerText = yrObj.year;
                    link.target = "_blank"; // Opens in new tab
                    content.appendChild(link);
                });

                item.appendChild(header);
                item.appendChild(content);
                listContainer.appendChild(item);
            });
        }

        // SEARCH LOGIC UPDATED
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            
            if(val.length > 0) {
                step1.classList.add('hidden');
                step2.classList.add('hidden');
                step3.classList.add('hidden');
                searchResults.classList.remove('hidden');
                
                const container = document.getElementById('searchResultsContainer');
                container.innerHTML = '';

                // Flatten Data for Search
                for(const yr in pyqData) {
                    for(const tp in pyqData[yr]) {
                        pyqData[yr][tp].forEach(sub => {
                            if(sub.name.toLowerCase().includes(val)) {
                                const div = document.createElement('div');
                                div.className = 'subject-accordion-item';
                                div.style.padding = '15px';
                                div.innerHTML = `<strong style="color:var(--primary)">${sub.name}</strong> <small>(${yr} - ${tp})</small><br>`;
                                
                                // Updated Loop for Search Results
                                sub.years.forEach(y => {
                                    div.innerHTML += `<a href="${y.link}" target="_blank" class="year-chip" style="margin-top:5px">${y.year}</a> `;
                                });
                                container.appendChild(div);
                            }
                        });
                    }
                }
            } else {
                searchResults.classList.add('hidden');
                step1.classList.remove('hidden');
                step2.classList.add('hidden');
                step3.classList.add('hidden');
            }
        });