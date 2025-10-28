
var th = {
    menu_home: "หน้าหลัก",
    menu_about: "เกี่ยวกับเรา",
    menu_member: "ลูกค้าของเรา",
    menu_travel: "แหล่งท่องเที่ยว",
    menu_contance: "ติดต่อเรา",
    about1: "ทัวร์จังหวัดภูเก็ต เหมาเป็นรายวัน เหมารวมน้ำมัน มาเดี่ยวหรือหมู่คณะ เราพร้อมให้บริการ",
    about2: "เที่ยวภูเก็ต",
    hero1: "บริการเช่ารถตู้ VIP พร้อมคนขับ",
    hero2: "บริการรถตู้ VIP เช่าเหมา, รับส่ง สนามบินภูเก็ต ไปยังที่ต่างๆ ราคาไม่แพง ปลอดภัย แอร์เย็นฉ่ำ",
    hero3: "บริการนำเที่ยว พร้อมคนขับ",
    hero4: "เรามีบริการพาท่าน ไปยังสถานที่ต่างๆ ในภูเก็ต หรือต่างจังหวัด เริ่มต้น 5 ชั่วโมง รับรอง สนุกแน่!",
    hero5: "บริการ รับ-ส่ง สนามบินภูเก็ต",
    hero6: ""
    contance1: "ติดต่อเรา",
    contance2: "ติดต่อเรา",
    btn_language: "ภาษา : THAI"
  };
  var en = {
    menu_home: "Home",
    menu_about: "About",
    menu_member: "Customer",
    menu_travel: "Attractions",
    menu_contance: "Contact Us",
    about2: "Travel In Phuket",
    about1:"Phuket Province Tour Rent on a daily basis Total oil Come alone or in a group We are ready to serve you.",
    hero1: "Van rental with driver",
    hero2: "Van rental service, Phuket airport transfer Go to different places, inexpensive, safe, cool air conditioning.",
    hero3: "Tour service with driver",
    hero4: "We have a service to take you. Go to various places in Phuket. Guaranteed to be fun!",
    hero5: "Phuket Airport Transfer",
    contance1: "Contact",
    contance2: "Contact",
    btn_language: "Language : EN"
  };
  
  function renderlang() {
    if (!localStorage.lang) {
      localStorage.setItem("lang", "en");
    } else {
      $("#menu_home").text(settext("menu_home"));
      $("#menu_about").text(settext("menu_about"));
      $("#menu_member").text(settext("menu_member"));
      $("#menu_travel").text(settext("menu_travel"));
      $("#menu_contance").text(settext("menu_contance"));
      $("#about1").text(settext("about1"));
      $("#about2").text(settext("about2"));
      $("#hero1").text(settext("hero1"));
      $("#hero2").text(settext("hero2"));
      $("#hero3").text(settext("hero3"));
      $("#hero3").text(settext("hero3"));
      $("#hero4").text(settext("hero4"));
      $("#hero5").text(settext("hero5"));
      $("#hero6").text(settext("hero6"));
      $("#contance1").text(settext("contance1"));
      $("#contance2").text(settext("contance2"));

      $("#btn_language").text(settext("btn_language"));
    }
  }
  
  function settext(key) {
    if (localStorage.lang == "en") {
      return en[key];
    } else {
      return th[key];
    }
  }
  
  function togglelang() {
    if (localStorage.lang == "en") localStorage.setItem("lang", "th");
    else if (localStorage.lang == "th") localStorage.setItem("lang", "en");
    location.reload();
    renderlang();
    return "now language: " + localStorage.lang;
  }
  
  renderlang()

  
  