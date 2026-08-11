//LOADING BAR
window.addEventListener("load",function(){
    setTimeout(function(){
        const loader=document.getElementById("loader");
        loader.style.opacity="0";
        loader.style.visibility="hidden";
    },3000);
});
// ===============================
// Mobile Navigation
// ===============================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===============================
// Doctor Availability
// Clinic Timing:
// Mon-Sat : 6 PM - 8:30 PM
// Sunday : 10AM - 12AM
//Thursday OFF
// ===============================

const status = document.getElementById("status");

function updateStatus() {

    const now = new Date();

    const day = now.getDay(); // 0 = Sunday
    const hour = now.getHours();

    if(day === 0){
        if(hour >=10 && hour< 12){
            status.innerHTML = "🟢 Doctor Available";
            status.style.background = "#27ae60";
        }else{
            status.innerHTML = "🔴 Clinic Closed ";
            status.style.background = "#e74c3c";
        }
        return;
    }
    if(day==4){
        status.innerHTML = "🔴 Clinic Closed ";
        status.style.background = "#e74c3c";
    }

    if(hour >= 18 && hour < 21){
        status.innerHTML = "🟢 Doctor Available";
        status.style.background = "#27ae60";
    }
    else{
        status.innerHTML = "🔴 Clinic Closed";
        status.style.background = "#e74c3c";
    }
}
updateStatus();


// ===============================
// Health Tips Slider
// ===============================

const tips = [
"💧 Drink at least 8 glasses of water every day.",
"🥗 Eat fresh fruits and green vegetables daily.",
"🚶 Walk for at least 30 minutes every day.",
"😴 Sleep for 7-8 hours every night.",
"🩺 Visit your doctor regularly for health checkups.",
"🧘 Practice yoga and meditation to reduce stress.",
"🚭 Avoid smoking and excessive alcohol consumption."
];
let tipIndex = 0;
const tipBox = document.getElementById("tipsBox");
function changeTip(){
    tipBox.innerHTML = tips[tipIndex];
    tipIndex++;
    if(tipIndex >= tips.length){
        tipIndex = 0;
    }
}
changeTip();
setInterval(changeTip,4000);
// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }
});
topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// ===============================
// Smooth Fade Animation on Scroll
// ===============================

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
},{
    threshold:0.2
});
document.querySelectorAll("section").forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="1s";
    observer.observe(section);
});

// ==========================================
// APPOINTMENT FORM → WHATSAPP
// ==========================================
const appointmentForm = document.getElementById("appointmentForm");
appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const problem = document.getElementById("message").value.trim();
    // Check required fields
    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        date === "" ||
        problem === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }
    // Validate phone number
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    // ==========================================
    // DOCTOR'S WHATSAPP NUMBER
    // Replace this number with the real number
    // ==========================================
    const doctorWhatsApp = "919111177991";
    // ==========================================
    // Create WhatsApp Message
    // ==========================================
    const whatsappMessage = 
` *DR. SHARMA CLINIC - APPOINTMENT*
 *Patient Name:* ${name}
 *Email:* ${email}
 *Phone:* ${phone}
 *Appointment Date:* ${date}
 *Health Problem:*
${problem}
Please confirm my appointment. Thank you.`;
    // Encode message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // ==========================================
    // WhatsApp URL
    // ==========================================
    const whatsappURL =
        "https://wa.me/" +
        doctorWhatsApp +
        "?text=" +
        encodedMessage;
    // ==========================================
    // Open WhatsApp
    // ==========================================
    window.location.href = whatsappURL;
});

