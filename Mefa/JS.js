const cars = [
    {
        id: 1,
        brand: 'BMW',
        model: '320i',
        price: 1100000,
        description: 'BMW 320i, 2018 model, düşük km, bakımlı.',
        images: [
            'https://i0.shbdn.com/photos/88/89/17/x5_1217888917fih.jpg',
            'https://otomobiltutkunu.com/wp-content/uploads/2013/10/BMW-320i-Test_otomobiltutkunu_BMW-320i-EDTest_BMW-320-Test.jpg'
            
        ]
    },
    {
        id: 2,
        brand: 'Audi',
        model: 'A4',
        price: 1000000,
        description: 'Audi A4, 2017 model, çok temiz, 2. el.',
        images: [
            'https://i0.shbdn.com/photos/61/30/80/x5_1156613080kjt.jpg',
            'https://i0.shbdn.com/photos/94/70/26/x5_1234947026rph.jpg'
        ]
    },
    {
        id: 3,
        brand: 'Mercedes',
        model: 'C-Class',
        price: 1200000,
        description: 'Mercedes C-Class, 2020 model, full donanımlı.',
        images: [
            'https://i0.shbdn.com/photos/32/40/14/x5_1234324014tar.jpg',
            'https://i0.shbdn.com/photos/67/95/71/x5_1174679571720.jpg'
        ]
    },
    {
        id: 4,
        brand: 'Toyota',
        model: 'Corolla',
        price: 700000,
        description: 'Toyota Corolla, 2015 model, düşük km.',
        images: [
            'https://i0.shbdn.com/photos/48/88/12/x5_1155488812g2p.jpg',
            'https://i0.shbdn.com/photos/56/60/80/x5_11895660800bu.jpg'
        ]
    },
    {
        id: 5,
        brand: 'Opel',
        model: 'Astra',
        price: 400000,
        description: 'Opel Astra, 2016 model, 1.6 dizel, otomatik.',
        images: [
            'https://i0.shbdn.com/photos/69/29/85/x5_1194692985hf8.jpg',
            'https://i0.shbdn.com/photos/41/24/38/x5_1103412438z86.jpg'
        ]
    },
    {
        id: 6,
        brand: 'Ford',
        model: 'Focus',
        price: 750000,
        description: 'Ford Focus, 2017 model, sağlam, 1.5 TDCi motor.',
        images: [
            'https://i0.shbdn.com/photos/30/08/68/x5_1156300868kom.jpg',
            'https://i0.shbdn.com/photos/72/81/09/1207728109802.jpg'
        ]
    },
    {
        id: 7,
        brand: 'Seat',
        model: 'Leon',
        price: 800000,
        description: 'Seat Leon, 2018 model, bir parça boya,DSG otomatik vites.',
        images: [
            'https://i0.shbdn.com/photos/47/81/64/x5_1209478164dfn.jpg',
            'https://arbstorage.mncdn.com/ilanfotograflari/2025/04/22/29149985/80ad4a15-9ca8-47df-bc63-7bc76ae51e0b_image_for_silan_29149985_580x435.jpg'
        ]
    },
    {
        id: 8,
        brand: 'BMW',
        model: 'X5',
        price: 500000,
        description: 'BMW X5, 2005 model, full donanımlı, boya değişen yok.',
        images: [
            'https://i0.shbdn.com/photos/74/10/60/x5_1196741060ovy.jpg',
            'https://i0.shbdn.com/photos/59/13/50/x5_1217591350ffl.jpg'
        ]
    },
    {
        id: 9,
        brand: 'Audi',
        model: 'Q7',
        price: 600000,
        description: 'Audi Q7, 2007 model, 4x4 , geniş iç mekan.',
        images: [
            'https://i0.shbdn.com/photos/57/08/73/x5_1082570873p2a.jpg',
            'https://i0.shbdn.com/photos/40/34/88/x5_1237403488mc5.jpg'
        ]
    }
];


    // Araba ilanlarını sayfada listeleme fonksiyonu
function displayCars(filteredCars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';

    filteredCars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');

        carItem.innerHTML = `
            <img src="${car.images[0]}" alt="${car.brand} ${car.model}">
            <div class="content">
                <h3>${car.brand} ${car.model}</h3>
                <p>${car.description}</p>
                <p class="price">${car.price}₺</p>
                <button class="inspect-btn" onclick="openModal(${car.id})">İncele</button>
            </div>
        `;
        carList.appendChild(carItem);
    });
}




    // Modal fonksiyonu
    function openModal(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;
    }
// Modal fonksiyonu

let currentImageIndex = 0;
let currentCar = null;

function openModal(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;
    currentCar = car;
    currentImageIndex = 0;

    updateSliderImage();

    document.getElementById('modal-title').innerText = `${car.brand} ${car.model}`;
    document.getElementById('modal-description').innerText = car.description;
    document.getElementById('myModal').style.display = "block";
}

function updateSliderImage() {
    const image = currentCar.images[currentImageIndex];
    document.getElementById('modal-image').src = image;
}

function nextImage() {
    if (!currentCar) return;
    currentImageIndex = (currentImageIndex + 1) % currentCar.images.length;
    updateSliderImage();
}

function prevImage() {
    if (!currentCar) return;
    currentImageIndex = (currentImageIndex - 1 + currentCar.images.length) % currentCar.images.length;
    updateSliderImage();
}




    // Filtreleme fonksiyonu
function filterCars() {
    const selectedBrand = document.getElementById('brand').value;
    const selectedPrice = document.getElementById('price').value;

    let filteredCars = [...cars];

    if (selectedBrand) {
        filteredCars = filteredCars.filter(car => car.brand === selectedBrand);
    }

    if (selectedPrice) {
        const [minPrice, maxPrice] = selectedPrice.split('-').map(Number);
        filteredCars = filteredCars.filter(car => car.price >= minPrice && car.price <= maxPrice);
    }

    displayCars(filteredCars);
}


    // Arama fonksiyonu
    function searchCars() {
        const searchQuery = document.getElementById('search-bar').value.toLowerCase();
        const filteredCars = cars.filter(car =>
            car.brand.toLowerCase().includes(searchQuery) || car.model.toLowerCase().includes(searchQuery)
        );
        displayCars(filteredCars);
    }

    // Modal'ı kapatma fonksiyonu
    function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }

    // Sayfa ilk yüklendiğinde arabaları göster
    displayCars(cars);
// Arka plana tıklanınca modal kapanır
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}