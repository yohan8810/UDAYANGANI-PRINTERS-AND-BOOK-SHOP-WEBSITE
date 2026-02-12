
// Default Data matching current HTML
const defaultServices = [
    {
        id: "svc_1",
        title: "3DPrinting & Laser Engraving",
        description: "HighQuality 3DPrinting & Laser Engraving, Wooden Art works, Customized Engraving.",
        icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>',
        colorClass: "blue"
    },
    {
        id: "svc_2",
        title: "Book Binding & Box Clip Binding",
        description: "Perfect binding, spiral binding, and box clip binding for thesis, projects, and books.",
        icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
        colorClass: "green"
    },
    {
        id: "svc_3",
        title: "Document Services",
        description: "Scanning, photocopying, laminating, and our exclusive online PDF tools suite.",
        icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
        colorClass: "purple"
    }
];

const defaultGallery = [
    { title: "Digital Printing", subtitle: "High-speed digital outputs", imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Book Binding", subtitle: "Fine craftsmanship", imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Business Flyers", subtitle: "Marketing materials", imageUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Our Shop", subtitle: "Visit us today", imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Document Scanning", subtitle: "Digitize your records", imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Stationery", subtitle: "All your office needs", imageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

const defaultBooks = [
    { title: "Classic Literature", category: "Novels", price: "1,200", isNew: true, imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "Design Principles", category: "Education", price: "2,500", isNew: false, imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "Modern Science", category: "Education", price: "1,800", isNew: false, imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "Harry Potter", category: "Novels", price: "3,000", isNew: false, imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];

// Initialize Data if Empty
if (!localStorage.getItem('ud_services')) localStorage.setItem('ud_services', JSON.stringify(defaultServices));
if (!localStorage.getItem('ud_gallery')) localStorage.setItem('ud_gallery', JSON.stringify(defaultGallery));
if (!localStorage.getItem('ud_books')) localStorage.setItem('ud_books', JSON.stringify(defaultBooks));

// Data Access Object
const DataManager = {
    getServices: () => JSON.parse(localStorage.getItem('ud_services')),
    setServices: (data) => localStorage.setItem('ud_services', JSON.stringify(data)),
    
    getGallery: () => JSON.parse(localStorage.getItem('ud_gallery')),
    setGallery: (data) => localStorage.setItem('ud_gallery', JSON.stringify(data)),

    getBooks: () => JSON.parse(localStorage.getItem('ud_books')),
    setBooks: (data) => localStorage.setItem('ud_books', JSON.stringify(data)),
};
