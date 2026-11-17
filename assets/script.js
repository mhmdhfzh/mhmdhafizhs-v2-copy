/* =============================================================
   HAFIZH PORTFOLIO — NO FRAMEWORKS, NO BACKEND

   QUICK EDIT GUIDE
   1. Personal details & links: Edit index.html (hero, contact).
   2. Portrait: Existing file assets/img/foto hafizh.png in GitHub.
   3. CV: Existing PDF assets/img/CV-MUHAMAD HAFIZH SANTANA.pdf.
   4. PROJECTS array below: add, remove, reorder or edit projects.
      - title.en / title.id = English and Indonesian project titles.
      - brand = brand/client name (use only with actual work).
      - category = social, video, brochure, apparel, seo, branding.
      - thumbnail = local image path in images/.
      - images = array of local image paths for image gallery.
      - driveUrl = Google Drive link for video/article work.
      - externalUrl = an existing published website, if verified.
      - sourceUrl = original Instagram post when provided.
      - featured = false hides a retained archive item.
   5. Languages: Indonesian (id) is default. Edit translations.id / translations.en below.
   6. Categories: Add filter button in index.html; add label in
      categoryLabels and its translation; update category logic.
   7. Colors & fonts: Edit :root at the top of style.css.

   Real legacy projects reuse assets/img/ in your existing GitHub repo.
   Missing categories display clearly labeled sample placeholders.
   Do not remove the existing assets/ folder when uploading.
   ============================================================= */

const CONFIG = {
  // Existing CV file from GitHub. Replace this file to update your CV.
  cvPath: "assets/img/CV-MUHAMAD HAFIZH SANTANA.pdf",
  contactEmail: "muhamadhafizhsantana3233@gmail.com",
};

// ----------------- PROJECT DATA: EDIT ALL PROJECTS HERE -----------------
const PROJECTS = [
  {
    "id": 1,
    "title": {
      "en": "Wakil Walikota Bandung · 01",
      "id": "Wakil Walikota Bandung · 01"
    },
    "brand": "Personal Portfolio",
    "category": "social",
    "thumbnail": "assets/img/erwin1.png",
    "images": [
      "assets/img/erwin1.png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DBdNkCLS7OB/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 2,
    "title": {
      "en": "Wakil Walikota Bandung · 02",
      "id": "Wakil Walikota Bandung · 02"
    },
    "brand": "Personal Portfolio",
    "category": "social",
    "thumbnail": "assets/img/erwin2 (1).png",
    "images": [
      "assets/img/erwin2 (1).png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DBf6NKhyBUe/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 3,
    "title": {
      "en": "Wakil Walikota Bandung · 03",
      "id": "Wakil Walikota Bandung · 03"
    },
    "brand": "Personal Portfolio",
    "category": "social",
    "thumbnail": "assets/img/erwin2 (2).png",
    "images": [
      "assets/img/erwin2 (2).png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DBpx9JCSXMa/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 4,
    "title": {
      "en": "Wakil Walikota Bandung · 04",
      "id": "Wakil Walikota Bandung · 04"
    },
    "brand": "Personal Portfolio",
    "category": "social",
    "thumbnail": "assets/img/erwin2 (3).png",
    "images": [
      "assets/img/erwin2 (3).png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DBjOdu9yMlL/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 5,
    "title": {
      "en": "Design Justin Hubner",
      "id": "Design Justin Hubner"
    },
    "brand": "Personal Portfolio",
    "category": "social",
    "thumbnail": "assets/img/Poster 1.png",
    "images": [
      "assets/img/Poster 1.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 6,
    "title": {
      "en": "Design Muhammad Ali",
      "id": "Design Muhammad Ali"
    },
    "brand": "Personal Portfolio",
    "category": "social",
    "thumbnail": "assets/img/Poster 2.png",
    "images": [
      "assets/img/Poster 2.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 7,
    "title": {
      "en": "Flayer Produk Inovadok Medika",
      "id": "Flayer Produk Inovadok Medika"
    },
    "brand": "Inovadok",
    "category": "brochure",
    "thumbnail": "assets/img/flayer3.png",
    "images": [
      "assets/img/flayer3.png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DHHsy7DMDkl/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 8,
    "title": {
      "en": "Flayer Ucapan Hari Raya Idul Fitri",
      "id": "Flayer Ucapan Hari Raya Idul Fitri"
    },
    "brand": "Inovadok",
    "category": "brochure",
    "thumbnail": "assets/img/flayer7.png",
    "images": [
      "assets/img/flayer7.png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DH2J6_uxjti/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 9,
    "title": {
      "en": "Flayer Produk Inovadok Medika · 02",
      "id": "Flayer Produk Inovadok Medika · 02"
    },
    "brand": "Inovadok",
    "category": "brochure",
    "thumbnail": "assets/img/flayer 4.png",
    "images": [
      "assets/img/flayer 4.png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DGpA8xEp562/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 10,
    "title": {
      "en": "Flayer Produk Inovadok Medika · 03",
      "id": "Flayer Produk Inovadok Medika · 03"
    },
    "brand": "Inovadok",
    "category": "brochure",
    "thumbnail": "assets/img/flayer 5.png",
    "images": [
      "assets/img/flayer 5.png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DHKRkYnNWax/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 11,
    "title": {
      "en": "Flayer Produk Inovadok Medika · 04",
      "id": "Flayer Produk Inovadok Medika · 04"
    },
    "brand": "Inovadok",
    "category": "brochure",
    "thumbnail": "assets/img/flayer 6.png",
    "images": [
      "assets/img/flayer 6.png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DHTEsgWIqhI/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 12,
    "title": {
      "en": "Flayer Produk Inovadok · 05",
      "id": "Flayer Produk Inovadok · 05"
    },
    "brand": "Inovadok",
    "category": "brochure",
    "thumbnail": "assets/img/flayer 8.png",
    "images": [
      "assets/img/flayer 8.png"
    ],
    "driveUrl": "",
    "sourceUrl": "https://www.instagram.com/p/DGcP2L8t0Rd/",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 13,
    "title": {
      "en": "Katalog WhatsApp · 01",
      "id": "Katalog WhatsApp · 01"
    },
    "brand": "Inovadok",
    "category": "brochure",
    "thumbnail": "assets/img/katalog inovadok.png",
    "images": [
      "assets/img/katalog inovadok.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 14,
    "title": {
      "en": "Katalog WhatsApp · 02",
      "id": "Katalog WhatsApp · 02"
    },
    "brand": "Inovadok",
    "category": "brochure",
    "thumbnail": "assets/img/Katalog 2.png",
    "images": [
      "assets/img/Katalog 2.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 15,
    "title": {
      "en": "Desain Menu · 01",
      "id": "Desain Menu · 01"
    },
    "brand": "Personal Portfolio",
    "category": "brochure",
    "thumbnail": "assets/img/meni 1.png",
    "images": [
      "assets/img/meni 1.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 16,
    "title": {
      "en": "Desain Menu · 02",
      "id": "Desain Menu · 02"
    },
    "brand": "Personal Portfolio",
    "category": "brochure",
    "thumbnail": "assets/img/menu 2.png",
    "images": [
      "assets/img/menu 2.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 17,
    "title": {
      "en": "Desain Menu · 03",
      "id": "Desain Menu · 03"
    },
    "brand": "Personal Portfolio",
    "category": "brochure",
    "thumbnail": "assets/img/menu 3.png",
    "images": [
      "assets/img/menu 3.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 18,
    "title": {
      "en": "Desain Menu · 04",
      "id": "Desain Menu · 04"
    },
    "brand": "Personal Portfolio",
    "category": "brochure",
    "thumbnail": "assets/img/menu 4.png",
    "images": [
      "assets/img/menu 4.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 19,
    "title": {
      "en": "Design Banner",
      "id": "Design Banner"
    },
    "brand": "Personal Portfolio",
    "category": "brochure",
    "thumbnail": "assets/img/bn1.png",
    "images": [
      "assets/img/bn1.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Original portfolio item preserved from the existing GitHub repository.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    }
  },
  {
    "id": 20,
    "title": {
      "en": "Website iRekammedis",
      "id": "Website iRekammedis"
    },
    "brand": "PT Inova Medika Solusindo",
    "category": "seo",
    "thumbnail": "assets/img/Wordpress1.png",
    "images": [
      "assets/img/Wordpress1.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Website content project retained from the existing portfolio; opens the previously linked published page.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    },
    "externalUrl": "https://inovadok.id/header-irekammedis-hafizh/"
  },
  {
    "id": 21,
    "title": {
      "en": "Website Inovadok",
      "id": "Website Inovadok"
    },
    "brand": "PT Inova Medika Solusindo",
    "category": "seo",
    "thumbnail": "assets/img/inovadok.png",
    "images": [
      "assets/img/inovadok.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Website content project retained from the existing portfolio; opens the previously linked published page.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    },
    "externalUrl": "https://inovadok.id/header-hafizh-2/"
  },
  {
    "id": 22,
    "title": {
      "en": "Website iHospital",
      "id": "Website iHospital"
    },
    "brand": "PT Inova Medika Solusindo",
    "category": "seo",
    "thumbnail": "assets/img/iHospital (1).png",
    "images": [
      "assets/img/iHospital (1).png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Website content project retained from the existing portfolio; opens the previously linked published page.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    },
    "externalUrl": "https://inovadok.id/ihospital-hafizh/"
  },
  {
    "id": 23,
    "title": {
      "en": "Website iKlinik",
      "id": "Website iKlinik"
    },
    "brand": "PT Inova Medika Solusindo",
    "category": "seo",
    "thumbnail": "assets/img/iKlinik.png",
    "images": [
      "assets/img/iKlinik.png"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Website content project retained from the existing portfolio; opens the previously linked published page.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    },
    "externalUrl": "https://inovadok.id/iklinik-hafizh/"
  },
  {
    "id": 24,
    "title": {
      "en": "Todo App Design",
      "id": "Todo App Design"
    },
    "brand": "Personal Learning",
    "category": "branding",
    "thumbnail": "assets/img/Todo App Design.PNG",
    "images": [
      "assets/img/Todo App Design.PNG"
    ],
    "driveUrl": "",
    "sourceUrl": "",
    "description": {
      "en": "Existing learning design; hidden from featured creative work by default.",
      "id": "Karya portofolio yang sudah ada pada repository GitHub lama."
    },
    "featured": false
  },
  {
    "id": 25,
    "title": {
      "en": "Video Editing / Reels Placeholder",
      "id": "Video Editing / Reels Contoh"
    },
    "brand": "Portfolio Placeholder",
    "category": "video",
    "thumbnail": "images/video-reel.jpg",
    "images": [],
    "driveUrl": "",
    "description": {
      "en": "Placeholder. Add a real thumbnail and a Drive link.",
      "id": "Placeholder. Tambahkan gambar dan tautan proyek asli Anda."
    }
  },
  {
    "id": 26,
    "title": {
      "en": "YouTube Production Placeholder",
      "id": "YouTube Production Contoh"
    },
    "brand": "Portfolio Placeholder",
    "category": "video",
    "thumbnail": "images/video-youtube.jpg",
    "images": [],
    "driveUrl": "",
    "description": {
      "en": "Placeholder. Add a real YouTube or event video thumbnail and its Drive link.",
      "id": "Placeholder. Tambahkan gambar dan tautan proyek asli Anda."
    }
  },
  {
    "id": 27,
    "title": {
      "en": "SEO Article Placeholder",
      "id": "SEO Article Contoh"
    },
    "brand": "Portfolio Placeholder",
    "category": "seo",
    "thumbnail": "images/seo-article.jpg",
    "images": [],
    "driveUrl": "",
    "description": {
      "en": "Placeholder. Add a real SEO article cover and its Drive link.",
      "id": "Placeholder. Tambahkan gambar dan tautan proyek asli Anda."
    }
  },
  {
    "id": 28,
    "title": {
      "en": "WordPress Article Placeholder",
      "id": "WordPress Article Contoh"
    },
    "brand": "Portfolio Placeholder",
    "category": "seo",
    "thumbnail": "images/seo-wordpress.jpg",
    "images": [],
    "driveUrl": "",
    "description": {
      "en": "Placeholder. Add a real article cover and Drive link.",
      "id": "Placeholder. Tambahkan gambar dan tautan proyek asli Anda."
    }
  },
  {
    "id": 29,
    "title": {
      "en": "Apparel Design Placeholder",
      "id": "Apparel Design Contoh"
    },
    "brand": "Portfolio Placeholder",
    "category": "apparel",
    "thumbnail": "images/apparel-tee.jpg",
    "images": [
      "images/apparel-tee.jpg"
    ],
    "driveUrl": "",
    "description": {
      "en": "Placeholder. Add a real gathering T-shirt design.",
      "id": "Placeholder. Tambahkan gambar dan tautan proyek asli Anda."
    }
  },
  {
    "id": 30,
    "title": {
      "en": "Uniform & Merchandise Placeholder",
      "id": "Uniform & Merchandise Contoh"
    },
    "brand": "Portfolio Placeholder",
    "category": "apparel",
    "thumbnail": "images/apparel-uniform.jpg",
    "images": [
      "images/apparel-uniform.jpg"
    ],
    "driveUrl": "",
    "description": {
      "en": "Placeholder. Add real uniform or merchandise artwork.",
      "id": "Placeholder. Tambahkan gambar dan tautan proyek asli Anda."
    }
  },
  {
    "id": 31,
    "title": {
      "en": "Brand Identity Placeholder",
      "id": "Brand Identity Contoh"
    },
    "brand": "Portfolio Placeholder",
    "category": "branding",
    "thumbnail": "images/branding-identity.jpg",
    "images": [
      "images/branding-identity.jpg"
    ],
    "driveUrl": "",
    "description": {
      "en": "Placeholder. Add a real branding project.",
      "id": "Placeholder. Tambahkan gambar dan tautan proyek asli Anda."
    }
  },
  {
    "id": 32,
    "title": {
      "en": "Campaign Design Placeholder",
      "id": "Campaign Design Contoh"
    },
    "brand": "Portfolio Placeholder",
    "category": "branding",
    "thumbnail": "images/branding-campaign.jpg",
    "images": [
      "images/branding-campaign.jpg"
    ],
    "driveUrl": "",
    "description": {
      "en": "Placeholder. Add a real campaign project.",
      "id": "Placeholder. Tambahkan gambar dan tautan proyek asli Anda."
    }
  }
];

// Existing certificate files. Verify the title/issuer on each image before replacing the generic label.
const CERTIFICATES = [
  {
    "title": {
      "en": "Certificate 01",
      "id": "Sertifikat 01"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti1.PNG",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 02",
      "id": "Sertifikat 02"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti2.PNG",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 03",
      "id": "Sertifikat 03"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti3.PNG",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 04",
      "id": "Sertifikat 04"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti 4.PNG",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 05",
      "id": "Sertifikat 05"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti5.PNG",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 06",
      "id": "Sertifikat 06"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/Serti 6_page-0001.jpg",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 07",
      "id": "Sertifikat 07"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti 7_page-0001.jpg",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 08",
      "id": "Sertifikat 08"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti 8_page-0001.jpg",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 09",
      "id": "Sertifikat 09"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti 9_page-0001.jpg",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 10",
      "id": "Sertifikat 10"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti 10_page-0001.jpg",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 11",
      "id": "Sertifikat 11"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti pkl.jpg",
    "date": ""
  },
  {
    "title": {
      "en": "Certificate 12",
      "id": "Sertifikat 12"
    },
    "issuer": "",
    "image": "assets/Sertifikasi/serti pkl 2.jpg",
    "date": ""
  }
];

const categoryLabels = {
  social: { en: "Social Media Design", id: "Desain Media Sosial" },
  video: { en: "Video Editing & Content", id: "Editing Video & Konten" },
  brochure: { en: "Brochure, Banner & Flyer Design", id: "Desain Brosur, Banner & Flyer" },
  apparel: { en: "Apparel & Merchandise Design", id: "Desain Apparel & Merchandise" },
  seo: { en: "SEO Articles & Website Content", id: "Artikel SEO & Konten Website" },
  branding: { en: "Branding & Marketing Campaigns", id: "Branding & Kampanye Pemasaran" }
};

// ----------------- LANGUAGE DICTIONARIES: EDIT TRANSLATIONS HERE -----------------
const translations = {
  en: {
    viewOriginal:"View original post ↗", viewWebsite:"Open published website",
    existingAsset:"EXISTING WORK", 
    skipLink: "Skip to content", mainNavigation: "Main navigation", selectLanguage: "Select language", openMenu: "Open menu", closeMenu: "Close menu",
    navHome: "Home", navAbout: "About", navExperience: "Experience", navSkills: "Skills", navProjects: "Projects", navContact: "Contact", downloadCV: "Download CV",
    brandCaption: " / CREATIVE PORTFOLIO",
    heroEyebrow: "CONTENT. DESIGN. DIRECTION.", hello: "Hello, I'm", tagline: "Turning Ideas Into Visual Experiences.",
    heroDescription: "I create social media designs, videos, and SEO content that support brand communication and marketing goals.",
    viewProjects: "View My Projects", contactMe: "Contact Me", findMe: "FIND ME ON", scrollExplore: "SCROLL TO EXPLORE",
    portraitAlt: "Muhamad Hafizh Santana", profilePlaceholder: "Portrait of Muhamad Hafizh Santana",
    portraitCaption: "VISUALS / CONTENT / STRATEGY", creativeThinking: "CREATIVE<br>THINKING<span class='tiny-dot'>.</span>", portfolioWord: "PORTFOLIO", verticalIndex: "SCROLL TO EXPLORE — 01 / 07",
    projectsKicker: "THE PORTFOLIO", curatedSelection: "A CURATED SELECTION",
    projectsTitle: "Selected <em>Creative Works.</em>", projectsIntro: "A collection of creative projects, digital content, and visual communication work.",
    projectNote: "Original creative work appears in this gallery. Categories without uploaded work are clearly marked as placeholders.",
    projectCategories: "Project categories", filterAll: "All Projects", filterSocial: "Social Media Design", filterVideo: "Video Editing", filterBrochure: "Brochure & Banner", filterApparel: "Desain Pakaian & Merchandise", filterSeo: "SEO Articles", filterBranding: "Branding & Campaigns",
    projectEndNote: "Have a project or collaboration in mind?", getInTouch: "Get in touch ↗",
    imagePreview: "VIEW GALLERY ↗", externalPreview: "OPEN IN DRIVE ↗", imagePending: "Preview image unavailable", placeholderBrand: "Portfolio Placeholder", placeholderFlag: "PLACEHOLDER", projectOpenAria: "Open image gallery for", projectLinkAria: "Open Google Drive for",
    experienceKicker: "WHERE I'VE WORKED", myJourney: "MY JOURNEY", experienceTitle: "Professional <em>Experience.</em>", experienceIntro: "Creating and managing digital content for brands with different audiences, objectives, and visual identities.",
    currentPeriod: "JUL 2025 — PRESENT", currentBadge: "CURRENT ROLE", jobIndexOne: "01 / CURRENT", jobIndexTwo: "02 / INTERNSHIP", currentCompany: "Business & Brand Management Team", currentDescription: "Planning, creating, and executing digital content across multiple business units under centralized management.", brandsHandled: "BRANDS HANDLED / 07", responsibilitiesTitle: "KEY RESPONSIBILITIES",
    resp1: "Creating social media content and promotional visuals across brands.", resp2: "Designing carousels, flyers, brochures, posters, banners, and X-banners.",
    resp3: "Editing promotional videos and producing YouTube content for Injo and Izumi.", resp4: "Planning and independently publishing digital content.",
    resp5: "Managing WordPress articles and applying basic SEO optimization.", resp6: "Supporting advertising creatives, events, documentation, and branding.", resp7: "Using AI tools for research, scripts, voice-overs, and content workflows.",
    internPeriod: "OCT 2024 — MAR 2025", internTitle: "Content Management System (CMS) Intern", internDescription: "Worked on promotional flyer designs, brand materials, campaign visuals, promotional video editing, and WordPress website content management.",
    expertiseKicker: "WHAT I DO", creativeToolkit: "THE CREATIVE TOOLKIT", skillsTitle: "Skills &amp; <em>Expertise.</em>", skillsIntro: "A combination of creative, marketing, and practical technical skills that support end-to-end content production.",
    skillCatContent: "Content & Marketing", skillCatCreative: "Creative & Design", skillCatAi: "AI-Assisted Workflow", skillCatTools: "Software & Tools", skillCatTechnical: "Technical Knowledge",
    skillContentMarketing: "Content Marketing", skillSocialContent: "Social Media Content", skillContentPlanning: "Content Planning", skillSeoWriting: "SEO Article Writing", skillVisualStrategy: "Visual Content Strategy", skillAdCreative: "Digital Advertising Creative",
    skillSocialDesign: "Social Media Design", skillPromoDesign: "Promotional Design", skillBrochureDesign: "Brochure & Banner Design", skillVisualBranding: "Visual Branding", skillVideoEditing: "Video Editing", skillVisualStorytelling: "Visual Storytelling", skillGraphicDesign: "Graphic Design", skillContentManagement: "Content Management",
    skillAiResearch: "AI-assisted Research", skillAiScript: "AI Script Generation", skillAiVo: "AI Voice-over Production", skillPhotoshop: "Adobe Photoshop (Basic)",
    aboutKicker: "THE PERSON BEHIND THE WORK", littleAbout: "A LITTLE ABOUT ME", aboutTitle: "Design-minded.<br><em>Strategy-driven.</em>", aboutLead: "I am a Content Marketing & Creative Specialist with experience managing digital content production for seven brands across education, technology, property, lifestyle, and food & beverage.",
    aboutParagraph1: "My work spans social media creation, graphic design, video editing, SEO content, website content management, and AI-assisted creative production.",
    aboutParagraph2: "I combine creative thinking, visual storytelling, and digital marketing strategy to build engaging content that supports brand identity and marketing objectives.",
    statBrands: "Brands managed", statDisciplines: "Core areas: content, design & marketing", statAi: "Assisted creative workflows",
    learningKicker: "LEARNING & GROWING", foundations: "THE FOUNDATIONS", educationTitle: "My <em>Education.</em>", vocationalSchool: "VOCATIONAL HIGH SCHOOL", educationMajor: "Software Engineering (RPL)", averageGrade: "AVERAGE GRADE",
    continuedLearning: "CONTINUOUS LEARNING", credentials: "CREDENTIALS & LEARNING", certificatesTitle: "Certificates<span class='title-accent'>.</span>",
    certificateIntro: "Certificate documentation. Titles and issuers will be added after verification.", certificatePreview: "VIEW PREVIEW ↗",
    certificateAltOne: "Placeholder for Social Media Management certificate", certificateAltTwo: "Placeholder for Canva for Design certificate", certificateAltThree: "Placeholder for internship certificate",
    contactKicker: "LET'S CONNECT", haveAnIdea: "HAVE AN IDEA IN MIND?", contactTitle: "Let's Create<br><em>Something Together.</em>", contactDescription: "Have a project, collaboration, or opportunity in mind? Feel free to get in touch.",
    chatWhatsapp: "Chat on WhatsApp", contactEmailLink: "Or send an email",
    connectDirectly: "CONNECT DIRECTLY", sendMessage: "SEND A MESSAGE", formNote: "This form opens your email app to send the message. No information is stored on this website.",
    formName: "Your name", formNamePlaceholder: "How should I call you?", formEmail: "Email address", formEmailPlaceholder: "you@example.com", formSubject: "Subject", formSubjectPlaceholder: "Let's talk about...", formMessage: "Your message", formMessagePlaceholder: "Tell me about your project or idea...", sendViaEmail: "Send via Email",
    formInvalidName: "Please enter your name (at least 2 characters).", formInvalidEmail: "Please enter a valid email address.", formInvalidSubject: "Please enter a subject.", formInvalidMessage: "Please write at least 10 characters in your message.", formOpenMail: "Your email application will open with the message prepared. Please press Send there.",
    backToTop: "BACK TO TOP", allRights: "All rights reserved.", footerCraft: "MADE WITH INTENT. BUILT TO INSPIRE.",
    closePreview: "Close preview", previousImage: "Previous image", nextImage: "Next image", projectImageAlt: "Project image preview", certificateView: "Original certificate image from the existing repository.",
    cvMissing: "CV is not added yet. Set CONFIG.cvPath in script.js after adding your PDF.", linkMissing: "Google Drive link is not added yet. Enter driveUrl in the PROJECTS array.", imageMissing: "The image file is missing. Check the path in script.js.",
  },
  id: {
    viewOriginal:"Lihat unggahan asli ↗", viewWebsite:"Buka halaman website",
    existingAsset:"KARYA ASLI",
    skipLink: "Lewati ke konten", mainNavigation: "Navigasi utama", selectLanguage: "Pilih bahasa", openMenu: "Buka menu", closeMenu: "Tutup menu",
    navHome: "Beranda", navAbout: "Tentang", navExperience: "Pengalaman", navSkills: "Keahlian", navProjects: "Portofolio", navContact: "Kontak", downloadCV: "Unduh CV",
    brandCaption: " / PORTOFOLIO KREATIF",
    heroEyebrow: "KONTEN. DESAIN. ARAH KREATIF.", hello: "Halo, saya", tagline: "Mengubah Ide Menjadi Pengalaman Visual.",
    heroDescription: "Saya membuat desain media sosial, video, dan konten SEO yang mendukung komunikasi brand serta tujuan pemasaran.",
    viewProjects: "Lihat Portofolio", contactMe: "Hubungi Saya", findMe: "TEMUKAN SAYA DI", scrollExplore: "GULIR UNTUK JELAJAH",
    portraitAlt: "Muhamad Hafizh Santana", profilePlaceholder: "Foto Muhamad Hafizh Santana",
    portraitCaption: "VISUAL / KONTEN / STRATEGI", creativeThinking: "BERPIKIR<br>KREATIF<span class='tiny-dot'>.</span>", portfolioWord: "PORTOFOLIO", verticalIndex: "GULIR UNTUK JELAJAH — 01 / 07",
    projectsKicker: "PORTOFOLIO", curatedSelection: "KURASI KARYA", projectsTitle: "Karya <em>Kreatif Pilihan.</em>", projectsIntro: "Koleksi proyek kreatif, konten digital, dan karya komunikasi visual.",
    projectNote: "Galeri menampilkan karya asli. Kategori yang belum memiliki contoh karya ditandai sebagai placeholder.",
    projectCategories: "Kategori proyek", filterAll: "Semua Proyek", filterSocial: "Desain Media Sosial", filterVideo: "Editing Video", filterBrochure: "Brosur & Banner", filterApparel: "Desain Pakaian & Merchandise", filterSeo: "Artikel SEO", filterBranding: "Branding & Kampanye",
    projectEndNote: "Ingin mendiskusikan proyek atau kolaborasi?", getInTouch: "Hubungi saya ↗",
    imagePreview: "LIHAT GALERI ↗", externalPreview: "BUKA DI DRIVE ↗", imagePending: "Gambar pratinjau tidak tersedia", placeholderBrand: "Placeholder Portofolio", placeholderFlag: "PLACEHOLDER", projectOpenAria: "Buka galeri gambar untuk", projectLinkAria: "Buka Google Drive untuk",
    experienceKicker: "PENGALAMAN KERJA", myJourney: "PERJALANAN SAYA", experienceTitle: "Pengalaman <em>Profesional.</em>", experienceIntro: "Membuat dan mengelola konten digital untuk brand dengan audiens, tujuan, dan identitas visual yang berbeda.",
    currentPeriod: "JUL 2025 — SEKARANG", currentBadge: "POSISI SAAT INI", jobIndexOne: "01 / SAAT INI", jobIndexTwo: "02 / MAGANG", currentCompany: "Tim Manajemen Bisnis & Brand", currentDescription: "Merencanakan, membuat, dan menjalankan konten digital untuk beberapa unit bisnis di bawah manajemen terpusat.", brandsHandled: "BRAND YANG DITANGANI / 07", responsibilitiesTitle: "TANGGUNG JAWAB UTAMA",
    resp1: "Membuat konten media sosial dan materi visual promosi untuk berbagai brand.", resp2: "Mendesain carousel, flyer, brosur, poster, banner, dan X-banner.",
    resp3: "Mengedit video promosi dan memproduksi konten YouTube untuk Injo dan Izumi.", resp4: "Merencanakan dan memublikasikan konten digital secara mandiri.",
    resp5: "Mengelola artikel WordPress dan menerapkan optimasi SEO dasar.", resp6: "Mendukung materi iklan digital, acara, dokumentasi, dan kebutuhan branding.", resp7: "Menggunakan alat AI untuk riset, naskah, voice-over, dan produksi konten.",
    internPeriod: "OKT 2024 — MAR 2025", internTitle: "Magang Content Management System (CMS)", internDescription: "Mengerjakan desain flyer promosi, materi branding, visual kampanye, editing video promosi, dan pengelolaan konten website WordPress.",
    expertiseKicker: "BIDANG KEAHLIAN", creativeToolkit: "PERANGKAT KERJA KREATIF", skillsTitle: "Keahlian &amp; <em>Kompetensi.</em>", skillsIntro: "Perpaduan keterampilan kreatif, pemasaran, dan teknis praktis untuk mendukung seluruh proses produksi konten.",
    skillCatContent: "Konten & Pemasaran", skillCatCreative: "Kreatif & Desain", skillCatAi: "Alur Kerja Berbantuan AI", skillCatTools: "Software & Alat Kerja", skillCatTechnical: "Pengetahuan Teknis",
    skillContentMarketing: "Pemasaran Konten", skillSocialContent: "Konten Media Sosial", skillContentPlanning: "Perencanaan Konten", skillSeoWriting: "Penulisan Artikel SEO", skillVisualStrategy: "Strategi Konten Visual", skillAdCreative: "Materi Kreatif Iklan Digital",
    skillSocialDesign: "Desain Media Sosial", skillPromoDesign: "Desain Promosi", skillBrochureDesign: "Desain Brosur & Banner", skillVisualBranding: "Branding Visual", skillVideoEditing: "Editing Video", skillVisualStorytelling: "Penceritaan Visual", skillGraphicDesign: "Desain Grafis", skillContentManagement: "Manajemen Konten",
    skillAiResearch: "Riset Berbantuan AI", skillAiScript: "Pembuatan Naskah dengan AI", skillAiVo: "Produksi Voice-over AI", skillPhotoshop: "Adobe Photoshop (Dasar)",
    aboutKicker: "DI BALIK KARYA", littleAbout: "SEDIKIT TENTANG SAYA", aboutTitle: "Berpikir Visual.<br><em>Fokus Strategi.</em>", aboutLead: "Saya seorang Content Marketing & Creative Specialist yang berpengalaman mengelola produksi konten digital untuk tujuh brand di bidang pendidikan, teknologi, properti, gaya hidup, serta makanan dan minuman.",
    aboutParagraph1: "Pekerjaan saya mencakup pembuatan konten media sosial, desain grafis, editing video, konten SEO, pengelolaan konten website, dan produksi kreatif berbantuan AI.",
    aboutParagraph2: "Saya memadukan pemikiran kreatif, penceritaan visual, dan strategi pemasaran digital untuk membuat konten yang mendukung identitas brand dan tujuan pemasaran.",
    statBrands: "Brand yang dikelola", statDisciplines: "Bidang utama: konten, desain & pemasaran", statAi: "Alur kerja kreatif berbantuan AI",
    learningKicker: "BELAJAR & BERKEMBANG", foundations: "DASAR PENDIDIKAN", educationTitle: "Riwayat <em>Pendidikan.</em>", vocationalSchool: "SEKOLAH MENENGAH KEJURUAN", educationMajor: "Rekayasa Perangkat Lunak (RPL)", averageGrade: "NILAI RATA-RATA",
    continuedLearning: "TERUS BELAJAR", credentials: "SERTIFIKAT & PEMBELAJARAN", certificatesTitle: "Sertifikat<span class='title-accent'>.</span>",
    certificateIntro: "Dokumentasi sertifikat. Nama dan penerbit akan dilengkapi setelah diverifikasi.", certificatePreview: "LIHAT PRATINJAU ↗",
    certificateAltOne: "Placeholder sertifikat Social Media Management", certificateAltTwo: "Placeholder sertifikat Canva for Design", certificateAltThree: "Placeholder sertifikat magang",
    contactKicker: "MARI TERHUBUNG", haveAnIdea: "PUNYA IDE ATAU PROYEK?", contactTitle: "Mari Berkarya<br><em>Bersama.</em>", contactDescription: "Punya proyek, rencana kolaborasi, atau peluang kerja sama? Silakan hubungi saya.",
    chatWhatsapp: "Chat lewat WhatsApp", contactEmailLink: "Atau kirim email",
    connectDirectly: "HUBUNGI LANGSUNG", sendMessage: "KIRIM PESAN", formNote: "Formulir ini membuka aplikasi email Anda untuk mengirim pesan. Website tidak menyimpan informasi Anda.",
    formName: "Nama Anda", formNamePlaceholder: "Siapa nama Anda?", formEmail: "Alamat email", formEmailPlaceholder: "anda@contoh.com", formSubject: "Subjek", formSubjectPlaceholder: "Saya ingin membicarakan...", formMessage: "Pesan Anda", formMessagePlaceholder: "Ceritakan proyek atau ide Anda...", sendViaEmail: "Kirim melalui Email",
    formInvalidName: "Masukkan nama Anda (minimal 2 karakter).", formInvalidEmail: "Masukkan alamat email yang valid.", formInvalidSubject: "Masukkan subjek pesan.", formInvalidMessage: "Tuliskan pesan minimal 10 karakter.", formOpenMail: "Aplikasi email akan terbuka dengan pesan yang sudah disiapkan. Silakan tekan Kirim di sana.",
    backToTop: "KEMBALI KE ATAS", allRights: "Hak cipta dilindungi.", footerCraft: "DIBUAT DENGAN TUJUAN. DIRANCANG DENGAN KREATIVITAS.",
    closePreview: "Tutup pratinjau", previousImage: "Gambar sebelumnya", nextImage: "Gambar berikutnya", projectImageAlt: "Pratinjau gambar proyek", certificateView: "Gambar sertifikat asli dari repository lama.",
    cvMissing: "CV belum ditambahkan. Atur CONFIG.cvPath di script.js setelah menambahkan PDF.", linkMissing: "Tautan Google Drive belum tersedia. Isi driveUrl pada array PROJECTS.", imageMissing: "File gambar tidak ditemukan. Periksa jalurnya di script.js.",
  }
};

let currentLanguage = "id";
let activeFilter = "all";
let modalImages = [];
let modalSourceUrl = "";
let modalIndex = 0;
let modalTitle = "";
let modalIssuer = "";
let modalDescription = "";
let focusBeforeModal = null;
let toastTimer = null;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const t = (key) => (translations[currentLanguage] && translations[currentLanguage][key]) || translations.id[key] || translations.en[key] || key;
const tx = (obj) => (obj && (obj[currentLanguage] || obj.id || obj.en)) || "";
const safeText = (value) => String(value || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");

function saveLanguage(lang) {
  try { localStorage.setItem("hafizh-portfolio-language", lang); } catch (_) { /* Some browsers block localStorage on local files. */ }
}
function restoreLanguage() {
  try { const lang = localStorage.getItem("hafizh-portfolio-language"); return lang === "en" ? "en" : "id"; }
  catch (_) { return "id"; }
}
function setLanguage(lang, remember = true) {
  currentLanguage = lang === "id" ? "id" : "en";
  document.documentElement.lang = currentLanguage;
  if (remember) saveLanguage(currentLanguage);
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  // Only our own hardcoded translation strings are inserted as HTML.
  $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  $$('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  $$('.lang-btn').forEach(el => { const selected = el.dataset.lang === currentLanguage; el.classList.toggle("is-selected", selected); el.setAttribute("aria-pressed", String(selected)); });
  document.title = currentLanguage === "id" ? "Muhamad Hafizh Santana | Spesialis Konten & Kreatif" : "Muhamad Hafizh Santana | Content Marketing & Creative Specialist";
  renderProjects();
  renderCertificates();
  if ($("#image-modal").classList.contains("is-open")) updateModal();
  const status = $("#form-status"); if (status.textContent) status.textContent = "";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4400);
}
function attachImageFallback(img) {
  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = "true";
    img.src = "images/fallback.jpg";
    img.alt = t("imagePending");
  });
}
function isSafeExternalUrl(value) {
  try { const url = new URL(value); return url.protocol === "https:" || url.protocol === "http:"; }
  catch (_) { return false; }
}
function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;
  const items = PROJECTS.filter(p => p.featured !== false && (activeFilter === "all" || p.category === activeFilter));
  const fragment = document.createDocumentFragment();
  items.forEach((project, i) => {
    const external = project.category === "video" || project.category === "seo";
    const category = categoryLabels[project.category] ? tx(categoryLabels[project.category]) : project.category;
    const name = tx(project.title);
    const sample = project.brand === "Portfolio Placeholder";
    const brand = sample ? t("placeholderBrand") : project.brand;
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.animationDelay = Math.min(i * 22, 150) + "ms";
    card.innerHTML = `
      <button class="project-click" type="button" aria-label="${safeText((external ? (project.externalUrl ? t("viewWebsite") : t("projectLinkAria")) : t("projectOpenAria")) + " " + name)}">
        <span class="project-media">
          <img src="${safeText(project.thumbnail)}" alt="${safeText(name + (sample ? ": " + t("placeholderFlag") : ""))}" loading="lazy" width="1200" height="840">
          <span class="project-badge"><span class="project-badge-dot"></span>${safeText(sample ? t("placeholderFlag") : t("existingAsset"))}</span>
          <span class="project-open-icon" aria-hidden="true">↗</span>
        </span>
        <span class="project-card-content"><span>${safeText(category)}</span><h3>${safeText(name)}</h3>
          <span class="project-card-bottom"><span>${safeText(brand)}</span><span class="project-link-hint">${safeText(external ? (project.externalUrl ? t("viewWebsite") : t("externalPreview")) : t("imagePreview"))}</span></span>
        </span>
      </button>`;
    attachImageFallback(card.querySelector("img"));
    card.querySelector("button").addEventListener("click", () => {
      if (external) {
        const url = project.driveUrl || project.externalUrl || "";
        if (isSafeExternalUrl(url)) window.open(url, "_blank", "noopener,noreferrer");
        else showToast(t("linkMissing"));
      } else {
        const images = project.images && project.images.length ? project.images : [project.thumbnail];
        openModal({ images, title: name, issuer: brand, description: tx(project.description), sourceUrl: project.sourceUrl || "" });
      }
    });
    fragment.appendChild(card);
  });
  grid.replaceChildren(fragment);
}

function selectFilter(category) {
  activeFilter = category;
  $$('.filter-button').forEach(button => {
    const selected = button.dataset.filter === category;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderProjects();
}

function openModal({ images, title, issuer, description, sourceUrl = "" }) {
  modalImages = images;
  modalSourceUrl = sourceUrl;
  modalIndex = 0;
  modalTitle = title;
  modalIssuer = issuer;
  modalDescription = description;
  focusBeforeModal = document.activeElement;
  const modal = $("#image-modal");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  updateModal();
  modal.querySelector(".modal-close").focus();
}
function updateModal() {
  $("#modal-title").textContent = modalTitle;
  $("#modal-brand").textContent = modalIssuer;
  $("#modal-description").textContent = modalDescription;
  const source = $("#modal-source-link");
  source.hidden = !isSafeExternalUrl(modalSourceUrl);
  if (!source.hidden) { source.href = modalSourceUrl; source.textContent = t("viewOriginal"); }
  else source.removeAttribute("href");
  $("#modal-counter").textContent = String(modalIndex + 1).padStart(2, "0") + " / " + String(modalImages.length).padStart(2, "0");
  const image = $("#modal-image");
  image.removeAttribute("data-fallback-applied");
  image.alt = modalTitle + " — " + t("projectImageAlt");
  image.src = modalImages[modalIndex] || "images/fallback.jpg";
  const showArrows = modalImages.length > 1;
  $("#modal-prev").hidden = !showArrows;
  $("#modal-next").hidden = !showArrows;
}
function shiftModal(by) {
  if (!modalImages.length) return;
  modalIndex = (modalIndex + by + modalImages.length) % modalImages.length;
  updateModal();
}
function closeModal() {
  const modal = $("#image-modal");
  if (!modal.classList.contains("is-open")) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  if (focusBeforeModal && focusBeforeModal.isConnected) focusBeforeModal.focus();
}

function renderCertificates() {
  const grid = $("#certificate-grid");
  if (!grid) return;
  const fragment = document.createDocumentFragment();
  CERTIFICATES.forEach(item => {
    const title = tx(item.title);
    const card = document.createElement("button");
    card.className = "certificate-card";
    card.type = "button";
    card.innerHTML = `<span class="certificate-image"><img src="${safeText(item.image)}" alt="${safeText(title)}" loading="lazy"><span class="zoom-tag" aria-hidden="true">↗</span></span><span class="certificate-info"><span>${safeText(item.date || "CERTIFICATE")}</span><h3>${safeText(title)}</h3><p>${safeText(t("certificatePreview"))}</p></span>`;
    attachImageFallback(card.querySelector("img"));
    card.addEventListener("click", () => openModal({images:[item.image],title,issuer:item.issuer || "",description:t("certificateView")}));
    fragment.appendChild(card);
  });
  grid.replaceChildren(fragment);
}

function initNavigation() {
  const menu = $("#primary-nav");
  const toggle = $("#menu-toggle");
  function closeMenu() {
    menu.classList.remove("menu-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", t("openMenu"));
  }
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("menu-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", t(isOpen ? "closeMenu" : "openMenu"));
  });
  $$('a[href^="#"]').forEach(link => link.addEventListener("click", () => {
    if (menu.classList.contains("menu-open")) closeMenu();
  }));
  document.addEventListener("click", event => {
    if (menu.classList.contains("menu-open") && !event.target.closest(".site-header")) closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && menu.classList.contains("menu-open")) closeMenu();
  });
  const navLinks = $$(".primary-nav .nav-link");
  const sections = $$('main section[id]');
  const sectionToNav = { home:"home", projects:"projects", experience:"experience", skills:"skills", about:"about", education:"about", certificates:"about", contact:"contact" };
  if ("IntersectionObserver" in window) {
    const visible = new Map();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
        else visible.delete(entry.target.id);
      });
      const nearest = Array.from(visible).sort((a,b) => Math.abs(a[1]) - Math.abs(b[1]))[0];
      if (nearest) {
        const active = sectionToNav[nearest[0]];
        navLinks.forEach(link => {
          const match = link.getAttribute("href") === "#" + active;
          link.classList.toggle("active", match);
          if (match) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    }, { rootMargin:"-15% 0px -60% 0px", threshold:0 });
    sections.forEach(section => observer.observe(section));
  }
  window.addEventListener("scroll", () => $("#site-header").classList.toggle("is-scrolled", window.scrollY > 20), { passive:true });
}
function initReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const elements = $$(".section-topline,.section-heading-wrap,.timeline-card,.skill-card,.about-layout,.education-card,.certificate-card,.contact-banner,.contact-layout");
  elements.forEach(el => el.classList.add("reveal"));
  document.documentElement.classList.add("js-ready");
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); observer.unobserve(entry.target); }
  }), { rootMargin:"0px 0px -35px 0px", threshold:.08 });
  elements.forEach(el => observer.observe(el));
}
function initContactForm() {
  $("#contact-form").addEventListener("submit", event => {
    event.preventDefault();
    const fields = {
      name: $("#contact-name"), email: $("#contact-email"),
      subject: $("#contact-subject"), message: $("#contact-message")
    };
    Object.values(fields).forEach(el => el.classList.remove("is-invalid"));
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const subject = fields.subject.value.trim();
    const message = fields.message.value.trim();
    const invalid = (field, key) => {
      fields[field].classList.add("is-invalid");
      $("#form-status").classList.remove("success");
      $("#form-status").textContent = t(key);
      fields[field].focus();
    };
    if (name.length < 2) return invalid("name", "formInvalidName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return invalid("email", "formInvalidEmail");
    if (!subject) return invalid("subject", "formInvalidSubject");
    if (message.length < 10) return invalid("message", "formInvalidMessage");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $("#form-status").classList.add("success");
    $("#form-status").textContent = t("formOpenMail");
    // No backend. The visitor still needs to press Send in their email app.
    window.location.href = mailto;
  });
}
function initCV() {
  $$('[data-cv-action]').forEach(button => button.addEventListener("click", () => {
    if (!CONFIG.cvPath) return showToast(t("cvMissing"));
    const a = document.createElement("a");
    a.href = CONFIG.cvPath;
    a.download = CONFIG.cvPath.split("/").pop() || "CV.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }));
}

function initialize() {
  attachImageFallback($("#modal-image"));
  $$('img:not(#modal-image)').forEach(attachImageFallback);
  setLanguage(restoreLanguage(), false);
  $$('.lang-btn').forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
  $$('.filter-button').forEach(btn => btn.addEventListener("click", () => selectFilter(btn.dataset.filter)));
  renderCertificates();
  initNavigation();
  initContactForm();
  initCV();
  initReveals();
  $$("[data-modal-close]").forEach(button => button.addEventListener("click", closeModal));
  $("#modal-prev").addEventListener("click", () => shiftModal(-1));
  $("#modal-next").addEventListener("click", () => shiftModal(1));
  document.addEventListener("keydown", event => {
    const modal = $("#image-modal");
    if (!modal.classList.contains("is-open")) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") shiftModal(-1);
    if (event.key === "ArrowRight") shiftModal(1);
    if (event.key === "Tab") {
      const focusable = $$('.modal.is-open button:not([hidden])');
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
}
document.addEventListener("DOMContentLoaded", initialize);
