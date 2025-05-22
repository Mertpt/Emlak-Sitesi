const properties = [
            {
                id: 1,
                location: 'İstanbul',
                title: 'Üsküdarda Satılık Sıfır Bina',
                price: 15000000,
                description: 'Yeni bina, 1+1 ve 2+1 daireler.',
                image: 'https://www.normagroup.com.tr/wp-content/uploads/2024/05/Adsiz-tasarim-54.png',
                extraImage: 'https://www.normagroup.com.tr/wp-content/uploads/2024/05/Adsiz-tasarim-54.png',
                detailUrl:"emlak_ilanlari/istanbul.html"
            },
            {
                id: 2,
                location: 'Antalya,Kemer',
                title: 'Deniz Kenarı Müstakil Bina',
                price: 25000000,
                description: 'Deniz Kenarı,bahçeli,köye 2km uzaklıkta,müstakil bina',
                image: 'https://i.pinimg.com/736x/42/86/5b/42865bf885e8be87b007fe005505e6f7.jpg',
                extraImage: 'https://i.pinimg.com/736x/42/86/5b/42865bf885e8be87b007fe005505e6f7.jpg',
                detailUrl:"emlak_ilanlari/Antalya.html"

            },
            {
                id: 3,
                location: 'İzmir',
                title: ' ANA CADDE DE SATILIK KOMPLE 7 KATLI BİNA',
                price: 14500000,
                description: 'Zemin dükkan + 3 kat, doğalgazlı daireler, merkezi konum.',
                image: 'https://pbs.twimg.com/media/ElmO_KaXUAItqis.jpg',
                extraImage: 'https://pbs.twimg.com/media/ElmO_KaXUAItqis.jpg',
                detailUrl:"emlak_ilanlari/İzmir.html"

            },
            {
                id: 4,
                location: 'Bursa',
                title: 'Nilüfer 4+1 Dubleks',
                price: 1000000,
                description: '!!!Altından Sokak Geçen O Ünlü Apartman ŞOK FİYATA SADECE ! MİLYON TL!!!',
                image: 'https://www.bursaport.com/cdn/s_Rc63_OrVux7JXNzG0jPbmtF9I=/690x460/webp/2023/02/19/bursa-da-altindan-sokak-gecen-bina-gorenleri-sasirtiyor-1676812416-760_large.webp',
                extraImage: 'https://www.bursaport.com/cdn/s_Rc63_OrVux7JXNzG0jPbmtF9I=/690x460/webp/2023/02/19/bursa-da-altindan-sokak-gecen-bina-gorenleri-sasirtiyor-1676812416-760_large.webp',
                detailUrl:"emlak_ilanlari/Bursa.html"

            },
            {  
                id: 5,
                location: 'Ankara',
                title: 'Çankaya’da Lüks Satılık Bina',
                price: 8500000,
                description: 'Site içerisinde, güvenlikli, 3+1 geniş daire.',
                image: 'https://www.stoneplusturkiye.com/wp-content/uploads/2021/07/Stoneplus-Petek.webp',
                extraImage: 'https://www.stoneplusturkiye.com/wp-content/uploads/2021/07/Stoneplus-Petek.webp',
                detailUrl:"emlak_ilanlari/Ankara.html"

            },
            {  
                id: 6,
                location: 'Mardin',
                title: 'Lüks Satılık Daire',
                price: 5000000,
                description: '7+1 daire,lüks,fırsat bu fırsat başka yerde bu fiyata bulamazsınız!!',
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsb6y33sFH6AimuhawB6qJCS2HdlMXpLzXQ&s',
                extraImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsb6y33sFH6AimuhawB6qJCS2HdlMXpLzXQ&s',
                detailUrl:"emlak_ilanlari/Mardin.html"
            },
        ];

        function displayProperties(filtered) {
            const container = document.getElementById('property-list');
            container.innerHTML = '';
            filtered.forEach(p => {
                const div = document.createElement('div');
                div.className = 'property-item';
                div.onclick = () => openModal(p);
                div.innerHTML = `
                    <img src="${p.image}" alt="${p.title}">
                    <div class="content">
                        <h3>${p.title}</h3>
                        <p>Fiyat: ${p.price.toLocaleString()}₺</p>
                        <p>Konum: ${p.location}</p>
                    </div>`;
                container.appendChild(div);
            });
        }

        function openModal(p) {
            document.getElementById('modal-title').innerText = p.title;
            document.getElementById('modal-description').innerText = p.description;
            document.getElementById('modal-image').src = p.extraImage;
            document.getElementById('myModal').style.display = 'block';

            document.getElementById('modal-detail-btn').onclick = () => {
                alert("Detay sayfasına yönlendiriliyor: " + p.title);
                    Örnek: window.location.href = p.detailUrl;
            };
        }

        document.querySelector('.close').onclick = () => {
            document.getElementById('myModal').style.display = 'none';
        };

        function filterProperties() {
            const loc = document.getElementById('location').value;
            const price = document.getElementById('price').value;
            let filtered = properties;

            if (loc) {
                filtered = filtered.filter(p => p.location === loc);
            }

            if (price) {
                const [min, max] = price.split('-').map(Number);
                filtered = filtered.filter(p => p.price >= min && p.price <= max);
            }

            displayProperties(filtered);
        }

        function searchProperties() {
            const q = document.getElementById('search-bar').value.toLowerCase();
            const filtered = properties.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.location.toLowerCase().includes(q)
            );
            displayProperties(filtered);
        }
function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }
        displayProperties(properties);

        window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}
        