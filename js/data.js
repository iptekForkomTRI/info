// {
//     link : "",
//     gambar : "" ,
//     judul : ""
// }




const dataSeminar = [
    {
        link : "https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2FID-DevOps_36%3Ffbclid%3DIwAR11XA9wUanBgrKO5jzqvmTz9O7VPHlkQQ6o73nZLcVCAJ0A1pjwYGkqK-o&h=AT3ef4_7FUZOseE2_aOn78Vswy21c0u90iQyg9_XQXuh_x70r26IlpddvRmLrC486kv6Uu7xt7QLBo9ykmH-3xxs0ldZRXguzPPdKJyAue2lvAdF7lZdw5fsp5Wc&__tn__=-UK-R&c[0]=AT2MIREqa6QeF8lNGfZ66kDT2JzebgXAOvz924t5v-SQZe2p_Wgxi8g4fJlnRQMQrW6WiM0iSC5HxeVinQNYoNQtXhyMcNdUgBuRlEL-M5coTagLTFcJTrOv3JAyZmUyr2UorWrjcrdxnSj2uoqGiFmNMW2n6CzQY-L9CUf_NsJIhxoXWyyeVCbjfiwNSF2aStOfu1X4pnBprpZf9QQ4bRQDoYaHqA",
        gambar : "https://scontent.fpku2-1.fna.fbcdn.net/v/t1.0-0/p180x540/120202948_3118894564887074_2668290746713861262_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_eui2=AeGe-jvK_AvO56efDVEaX3cZMQCJwQFoQ5cxAInBAWhDl7tfZOSW3XHC_tCtdQihY3YwQUyh7MRRVU4w4ksTNY3d&_nc_ohc=jmWh8u0QXzMAX_rGWda&_nc_ht=scontent.fpku2-1.fna&tp=6&oh=f4e077fa060719225209bce1365a89a0&oe=5FA03768",
        judul : "DevOps Indonesia (ONLINE) Integrated CI/CD pipeline with Azure and AWS"
    },
    {
        link : "https://tampil.id/event/detail/VFdwUk1BPT0",
        gambar : "https://gate.bisaai.id/bisa_ai_vcon/event/media/2020-10-04_152810_event.jpg",
        judul : "Tutorial Database MySQL untuk Enterprise Sistem"
    },
    {
        link : "https://tampil.id/event/detail/VFhwTk1RPT0",
        gambar : "https://gate.bisaai.id/bisa_ai_vcon/event/media/2020-09-25_213730_event.jpg",
        judul : "Tutorial Dasar-Dasar Business Intelligence Dengan Python"
    },
    {
        link : "https://tampil.id/event/detail/VFdwak13PT0",
        gambar : "https://gate.bisaai.id/bisa_ai_vcon/event/media/2020-10-04_152851_event.jpg",
        judul : "Basis Data  : Konsep dan Implementasi"
    },
    {
        link : "https://dilo.id/Event/Detail/1883",
        gambar : "https://minio.dilo.id/event/972bed16-a258-453d-a76e-91eacce7604b.jpeg",
        judul : "DILo Customer Validation Week 3 - Talking to User"
    },
    {
        link : "https://dilo.id/Event/Detail/1937",
        gambar : "https://minio.dilo.id/event/61399eb0-fdd4-4503-86b2-35fda292cbee.jpeg",
        judul : "DILoTalks08 - YouTube Marketing"
    },
    {
        link : "https://dilo.id/Event/Detail/1945",
        gambar : "https://minio.dilo.id/event/ffbc6116-a0ee-40d3-a68f-49e06a3ad1de.png",
        judul : "What Quality Assurance Do in Startup Industry"
    },
    {
        link : "https://dilo.id/Event/Detail/1943",
        gambar : "https://minio.dilo.id/event/a0f3947e-b3ef-4b15-a14c-083775860ee8.png",
        judul : "THE POWER OF COPYWRITING & UXWRITING FOR YOUR STARTUP"
    },
    {
        link : "https://dilo.id/Event/Detail/1939",
        gambar : "https://minio.dilo.id/event/e3d0e8b8-001e-4d60-8408-a04ac23d0135.png",
        judul : "Bootcamp SEO (Lets Optimize Your Search Website)"
    },
    {
        link : "https://dilo.id/Event/Detail/1920",
        gambar : "https://minio.dilo.id/event/980f55fb-24a8-4fc3-b2a1-39a1b2b25e46.jpg",
        judul : "Kick Start Your Career As A UX Designer"
    },
    {
        link : "https://dilo.id/Event/Detail/1897",
        gambar : "https://minio.dilo.id/event/354a0e68-b79c-4663-8672-a7378d4d2dad.png",
        judul : "Accounting for Startup"
    },
    {
        link : "https://dilo.id/Event/Detail/1923",
        gambar : "https://minio.dilo.id/event/90b38c2d-e825-49fe-b197-f30b84ed717e.png",
        judul : "The Power of SCRUM Method for Startup Development"
    },
    {
        link : "https://dilo.id/Event/Detail/1926",
        gambar : "https://minio.dilo.id/event/1beb5d26-6fe1-4471-be2e-318547c33a7c.png",
        judul : "Public Speaking for Business"
    },
    {
        link : "https://dilo.id/Event/Detail/1898",
        gambar : "https://minio.dilo.id/event/a4af65eb-6340-4f5b-9570-e5ea6a67f580.png",
        judul : "Know Your Life Know Your Strength"
    },
    {
        link : "https://dilo.id/Event/Detail/1931",
        gambar : "https://minio.dilo.id/event/45de390c-c90b-4694-9142-78bc1536bc1e.png",
        judul : "Digital Marketing Tips and Trick for Business"
    },
    {
        link : "https://dilo.id/Event/Detail/1930",
        gambar : "https://minio.dilo.id/event/23a0b90b-9190-4cb5-9390-598f02219f97.png",
        judul : "IT Supply Chain For Startup 4.0"
    },
    {
        link : "https://dilo.id/Event/Detail/1924",
        gambar : "https://minio.dilo.id/event/11669cc3-cf33-45e9-ac5f-51aa7d550fd5.jpg",
        judul : "TRANSFORMASI DIGITAL DAN PENGARUHNYA PADA BISNIS & SDM"
    },
    
    
];

const dataLomba = [
    {
        link : "https://www.instagram.com/p/CF1Ob5jJ7Mn/",
        gambar : "https://instagram.fkno6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.134.1080.1080a/s640x640/120358139_767724600683254_1673076820030021748_n.jpg?_nc_ht=instagram.fkno6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=xbK0c4kBO0YAX9bn-HA&oh=d750cd5180c77dd9421dc23d093eca0b&oe=5FA24C2B",
        judul : "Informatics Competition Himpunan Mahasiswa Teknik Informatika Universitas Ahmad Dahlan"  
    },
    {
        link : "https://careers.shopee.co.id/ndsc/",
        gambar : "https://careers.shopee.co.id/ndsc/images/hero-image-2020.png",
        judul : "National Data Science Challenge 2020"
    },
    
    
];

const dataPelatihan = [
    {
        link : "https://maedtratrainingpartner.com/posts/7271990275189912355?hl=id",
        gambar : "https://lh3.googleusercontent.com/p/AF1QipO_Mf_c9SVEnduLvtqwqNDSJxhOCADuSX9Y4lE4=w600-h0",
        judul : "Introduction of Mikrotik Routers"
    },
    {
        link : "https://dilo.id/Event/Detail/1897",
        gambar : "https://minio.dilo.id/event/a64babc0-a6d3-4011-b77d-c03cdf4f10d8.jpg",
        judul : "BELAJAR DASAR DESAIN LOGO"
    },
    {
        link : "https://kelaskita.com/lab127/kelas/lab127-networking-essentials/",
        gambar : "https://kelaskita.com/media/images/2019/09/2019-09-09-18-56-24823075_logolab127-(1)png594.jpg",
        judul : "LAB127 - Networking Essentials"
    },
    
];
