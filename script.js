
//الصفحة الرئيسية

const projects = [
  {
      id: "project1",
    type: "web",
    title: "Restaurant website",
    arabicTitle: "موقع مطعم",
    price: "350$",
    summary: "This project is an online shop with cart, checkout, and payment integration.",
    summaryAr: "هذا المشروع هو متجر إلكتروني مع سلة شراء وواجهة دفع متكاملة.",
    images: [
      { src: "images/website/home_restaurent.png", desc: "Main Page", descAr: "الصفحة الأساسية" },
      

    ]
  
  },
  {
     id: "project2",
    type: "app",
    title: "POS system",
    arabicTitle: "نقطة بيع لمتجر",
    price: "250$",
   
    images: [
      { src: "images/POS/main.png", desc: "Main Page", descAr: "الصفحة الأساسية" },
      
    ]
  
  },
    {
     id: "project3",
    type: "appp",
    title: "Dlivery Application",
    arabicTitle: "تطبيق توصيل",
    price: "3000$",
  
    images: [
      { src: "images/delivery/qshop.jpg", desc: "Main Page", descAr: "الصفحة الأساسية" },
    
    ]
  
  },
  {
     id: "project4",
    type: "app",
    title: "Dental System",
    arabicTitle: "نظام عيادات",
     price: "200$",
    
    images: [
      { src: "images/dental/home.png", desc: "Main Page", descAr: "الصفحة الأساسية" },
      
    ]
  
  }

  
  // باقي المشاريع بنفس الطريقة

];

let isArabic = false;

function toggleLanguage() {
  isArabic = !isArabic;
  updateLanguage();
}

function updateLanguage() {
  // تغيير عنوان الصفحة
  document.getElementById("mainTitle").textContent = isArabic ? "أعمالي البرمجية" : "My Programming Works";
  document.getElementById("mainDesc").textContent = isArabic ? "محفظة أعمال مشاريع الويب والتطبيقات" : "Portfolio of web and app projects";

  // تغيير أزرار الفلترة
  document.getElementById("btnAll").textContent = isArabic ? "الكل" : "All";
  document.getElementById("btnWeb").textContent = isArabic ? "ويب" : "Web";
  document.getElementById("btnApp").textContent = isArabic ? "C# / SQL" : "C# / SQL";

  // إعادة تحميل المشاريع مع الوصف المناسب
  loadProjects(isArabic ? 'arabic' : 'english');
}

// تعديل loadProjects لدعم وصف عربي
function loadProjects(lang = 'english', filter = 'all') {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  projects
    .filter(project => filter === 'all' || project.type === filter)
    .forEach(project => {
      const card = document.createElement("div");
      card.classList.add("card");

      const projectTitle = lang === 'arabic' && project.arabicTitle ? project.arabicTitle : project.title;
      const projectDesc = lang === 'arabic' ? (project.images[0].descAr || project.images[0].desc) : project.images[0].desc;
      const projectPrice = project.price; // السعر


      card.innerHTML = `
        <div class="card-img">
          <img src="${project.images[0].src}" alt="${projectTitle}">
        </div>
        <h3>${projectTitle}</h3>
        <p>${projectDesc}</p>
        <p class="price">${projectPrice}</p>
     
      `;

      card.addEventListener("click", () => {
        window.location.href = `project.html?id=${project.id}`;
      });

      gallery.appendChild(card);
    });
}
document.getElementById("btnAll").addEventListener("click", () => {
  currentFilter = "all";
  loadProjects(isArabic ? 'arabic' : 'english', currentFilter);
});

document.getElementById("btnWeb").addEventListener("click", () => {
  currentFilter = "web";
  loadProjects(isArabic ? 'arabic' : 'english', currentFilter);
});

document.getElementById("btnApp").addEventListener("click", () => {
  currentFilter = "app";
  loadProjects(isArabic ? 'arabic' : 'english', currentFilter);
});

// ربط زر اللغة
document.getElementById("langBtn").addEventListener("click", toggleLanguage);

// التحميل الأولي
document.addEventListener("DOMContentLoaded", () => loadProjects());








