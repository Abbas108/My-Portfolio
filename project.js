//صفحة كل مشروع

const projects = [
  {
    id: "project1",
    title: "E-Commerce Website",
    summary: "This project is an online shop with cart, checkout, and payment integration.",
    summaryAr: "هذا المشروع هو متجر إلكتروني مع سلة شراء وواجهة دفع متكاملة.",
    images: [
      { src: "images/website/home_restaurent.png", desc: "Home Page", descAr: "الصفحة الرئيسية" },
      { src: "images/website/explore_food.png", desc: "Explore Food", descAr: "بحث الاطعمة" },
      { src: "images/website/add_category.png", desc: "add category", descAr: "أضافة منتجات" },
      { src: "images/website/admin manager.png", desc: "Admin manager", descAr: "الادارة" },
      { src: "images/website/confirm_order.png", desc: "Confirm Order", descAr: "تأكيد الطلب" },
      { src: "images/website/dashboard_food.png", desc: "Dashboard Food", descAr: "ادارة الاطعمة" },
      { src: "images/website/manage_food.png", desc: "Manage Food", descAr: "إدارة الاطعمة" },
      { src: "images/website/manage_order.png", desc: "Manage Order", descAr: "إدارة الطلبات" }
    ]
  },
  {
    id: "project2",
    title: "POS system",
    summary: "Smartr POS system to manage sales and inventory with ease.",
    summaryAr: "نظام نقاط بيع ذكي لإدارة المبيعات و المخزون بسهولة.",
    images: [
      { src: "images/POS/saleALLDATA.PNG", desc: "Sale Form", descAr: "شاشة المبيع" },
      { src: "images/POS/customer.PNG", desc: "customer Form", descAr: "شاشة الزبائن" },
      { src: "images/POS/items.PNG", desc: "Products Form", descAr: "شاشة البضائع" },
      { src: "images/POS/mainPage.PNG", desc: "Main Form", descAr: "الشاشة الرئيسية" },
      { src: "images/POS/reportSale.PNG", desc: "Profit Form", descAr: "شاشة الارباح" },
      { src: "images/POS/SALEWITHpILL.PNG", desc: "Sale Form", descAr: "شاشة المبيع مع تفاصيل" },
      { src: "images/POS/buyPill.png", desc: "Buy Form", descAr: "شاشة المشتريات" },
      { src: "images/POS/importer.png", desc: "Importer Form", descAr: "شاشة الموردين" },
      { src: "images/POS/users.png", desc: "Users Form", descAr: "شاشة المستخدمين" }
    ]
  },
  {
    id: "project3",
    title: "delivery application",
    summary: "Your easiest way to get anything delivered fast & safe.",
    summaryAr: "تطبيق سهل لتوصيل كل ما تحتاجه بسرعة و أمان",
    images: [
      { src: "images/delivery/info_category.jpg", desc: "category", descAr: "الاصناف" },
      { src: "images/delivery/info_item.jpg", desc: "Products", descAr: "المنتجات" },
      { src: "images/delivery/my_cart.jpg", desc: "My Cart", descAr: "السلة" },
      { src: "images/delivery/confirm_order.jpg", desc: "Confirm Order", descAr: "تأكيد الطلب" },
      { src: "images/delivery/address.jpg", desc: "Address", descAr: "تحديد الموقع" },
      { src: "images/delivery/setting.jpg", desc: "Settings", descAr: "الاعدادات" },
      { src: "images/delivery/track_orders.jpg", desc: "Track Order", descAr: "متابعة الطلب" },
      { src: "images/delivery/profile.jpg", desc: "Edit Profile", descAr: "الملف الشخصي" },
      { src: "images/delivery/contact.jpg", desc: "Contact", descAr: "الاتصال" },
      { src: "images/delivery/about.jpg", desc: "About", descAr: "معلومات عن التطبيق" },
      { src: "images/delivery/manage_product.jpg", desc: "Admin Manage Products", descAr: "ادارة المنتجات" },
      { src: "images/delivery/admin_confirm_order.jpg", desc: "Admin Manage Orders", descAr: "ادارة الطلبات" }
    ]
  },
  {
    id: "project4",
    title: "Dental system",
    summary: "Digital system to organize appointments,patient files,and enhance treatment experience",
    summaryAr: "نظام إلكتروني يضمن تنظيم المواعيد و سجلات المرضى وتحسين تجربة العلاج",
    images: [
      { src: "images/dental/appointement.png", desc: "Appointment", descAr: "المواعيد" },
      { src: "images/dental/patient.png", desc: "Patient", descAr: "المرضى" },
      { src: "images/dental/prescription.png", desc: "prescription", descAr: "الوصفات" },
      { src: "images/dental/supplies.png", desc: "Supplies", descAr: "الاحتياجات" },
      { src: "images/dental/treatment.png", desc: "Treatment", descAr: "العلاجات" },
      { src: "images/dental/user.png", desc: "User", descAr: "المستخدمين" }
]
  }
];

let currentIndex = 0;
let currentProjectImages = [];
let isArabic = false; // زر اللغة

function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const project = projects.find(p => p.id === projectId);
  if (!project) {
    document.body.innerHTML = "<h2>Project not found</h2>";
    return;
  }

  updateProjectLanguage(project);

  const imagesDiv = document.getElementById("images");
 // imagesDiv.innerHTML = ""; // تنظيف قبل التحميل

  project.images.forEach((imgObj, index) => {
    const container = document.createElement("div");
    container.classList.add("image-container");

    const imageEl = document.createElement("img");
    imageEl.src = imgObj.src;
    imageEl.alt = isArabic ? imgObj.descAr : imgObj.desc;

    const descEl = document.createElement("p");
    descEl.textContent = isArabic ? imgObj.descAr : imgObj.desc;

    imageEl.addEventListener("click", () => {
      currentProjectImages = project.images;
      currentIndex = index;
      showLightbox(currentIndex);
    });

    container.appendChild(imageEl);
    container.appendChild(descEl);
    imagesDiv.appendChild(container);
  });

  // إغلاق Lightbox عند الضغط على ×
  document.querySelector(".lightbox .close").addEventListener("click", () => {
    document.getElementById("lightbox").style.display = "none";
  });

  // إغلاق Lightbox عند الضغط على الخلفية
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target === document.getElementById("lightbox")) {
      document.getElementById("lightbox").style.display = "none";
    }
  });

  // الأسهم
  document.querySelector(".lightbox .prev").addEventListener("click", prevImage);
  document.querySelector(".lightbox .next").addEventListener("click", nextImage);
}

function updateProjectLanguage(project) {
  document.getElementById("title").textContent = isArabic && project.titleAr ? project.titleAr : project.title;
  if (project.summary || project.summaryAr) {
    document.getElementById("projectSummary").textContent = isArabic ? (project.summaryAr || project.summary) : project.summary;
  }
}

function showLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const imgEl = document.querySelector(".lightbox-img");
  const descEl = document.getElementById("lightbox-desc");

  imgEl.src = currentProjectImages[index].src;
  descEl.textContent = isArabic ? currentProjectImages[index].descAr : currentProjectImages[index].desc;
  lightbox.style.display = "block";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
  showLightbox(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentProjectImages.length;
  showLightbox(currentIndex);
}

// زر اللغة
function toggleLanguage() {
  isArabic = !isArabic;
  loadProject();
}

//=======================
document.addEventListener("DOMContentLoaded", () => {
  loadProject();
 // document.getElementById("langBtn").addEventListener("click", toggleLanguage);
});

