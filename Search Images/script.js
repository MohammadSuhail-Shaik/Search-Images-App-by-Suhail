const accessKeyForUnsplash = '4hTEeUT6vFl2j2hTp1O6wf0EyZZ4qUpD9qXVa8Xi9Ps';
const randomNumForDefaultData = Math.floor(Math.random() * 10);

const defaultData1 = {
    0 : {
        imageAddress : 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl : "https://unsplash.com/photos/multicolored-hallway-RnCPiXixooY",
        alt : "prism lights",    },
    1 : {
        imageAddress: 'https://images.unsplash.com/photo-1700143418116-d94c3f23b9ab?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:"https://unsplash.com/photos/a-city-skyline-with-a-lot-of-tall-buildings-UJ9h_sfPtdA",
        alt : "night city",
    },
    2 : {
        imageAddress : 'https://plus.unsplash.com/premium_photo-1682804225008-4cd4542e91d5?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl : 'https://unsplash.com/photos/a-view-of-a-city-with-skyscrapers-at-sunset-tC8F4uhteeI',
        alt : 'Constructions',
    },
    3 : {
        imageAddress: 'https://images.unsplash.com/photo-1683009427660-b38dea9e8488?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl : 'https://unsplash.com/photos/a-close-up-of-a-lizard-on-the-ground-XykVSjPQJzQ',
        alt : 'Nature Reserve - NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.',
    },
    4: {
        imageAddress : 'https://images.unsplash.com/photo-1682687221248-3116ba6ab483?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-cow-standing-in-the-middle-of-a-desert-JZerhwPHiBI',
        alt : 'Amongst expansive red sands and spectacular sandstone rock formations',
    },
    5: {
        imageAddress : 'https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt : 'Sandstone plateau, Hisma Desert – NEOM',
    },
    6: {
        imageAddress : 'https://images.unsplash.com/photo-1701979397766-bbd6fdd29743?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/an-abstract-painting-with-black-yellow-and-green-colors-PXgaUq7byX0',
        alt : 'Genesis II 1914 Franz Marc (German, 1880–1916) Germany, 20th century Color woodcut Gift',
    },
    7: {
        imageAddress : 'https://images.unsplash.com/photo-1701854711357-ac1374019816?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-group-of-wrapped-presents-under-a-christmas-tree-bh1fKYXv2cA',
        alt : 'Christmas Decorations',
    },
    8: {
        imageAddress : 'https://images.unsplash.com/photo-1701551871576-e31af6170d63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-person-walking-on-a-beach-near-the-ocean-U1qoAsSOW5g',
        alt : 'ocean nature',
    },
    9: {
        imageAddress : 'https://images.unsplash.com/photo-1682687981807-35e55307a7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-person-in-a-wet-suit-is-swimming-in-the-ocean-hFnNvoz4D_s',
        alt : 'colored coral reefs and an abundance of diverse marine life',
    },
};
const defaultData2 = {
    0: {
        imageAddress : 'https://images.unsplash.com/photo-1701421709945-4d0660948cc4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-snow-covered-field-with-trees-in-the-background-Jk3A-FBzicM',
        alt : 'Jura Mountains',
    },
    1: {
        imageAddress : 'https://images.unsplash.com/photo-1701861970866-902d8bf5b25d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-couple-of-people-that-are-walking-down-a-street-3BxumuOjnss',
        alt : 'street photography',
    },
    2: {
        imageAddress : 'https://images.unsplash.com/photo-1701635269348-b095bd4944ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/an-aerial-view-of-a-large-arena-in-a-city-BTLrwCfrQ94',
        alt : 'Plaza de toros de La Malagueta',
    },
    3: {
        imageAddress : 'https://images.unsplash.com/photo-1701014159143-09482059f571?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-group-of-planets-in-the-dark-sky-_75VdeLT3BI',
        alt : 'planet,planets,space,galaxy,stars,astronomy,universe,outer space',
    },
    4: {
        imageAddress : 'https://images.unsplash.com/photo-1701888203979-b7ae62de6319?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-truck-driving-down-a-street-next-to-palm-trees-bu4tUw5XBiY',
        alt : 'XXIV Rallye Ciudad de Valencia, Memorial Javi Sanz 2023',
    },
    5: {
        imageAddress : 'https://plus.unsplash.com/premium_photo-1700954961998-f6cb235d0f03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-doorway-leading-into-a-stone-building-with-statues-in-the-background-QNB-LRZkHMk',
        alt : 'Rockes and open sky',
    },
    6: {
        imageAddress : 'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-scuba-diver-swims-through-an-underwater-cave-yx7TJle8LhM',
        alt : 'Islands of NEOM – NEOM, Saudi Arabia | Home to kaleidoscopic- colored coral reefs and an abundance of diverse –marine life',
    },
    7: {
        imageAddress : 'https://images.unsplash.com/photo-1701839339832-158736f88c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-group-of-people-walking-down-a-street-at-night-L3FVi8K2Kcg',
        alt : 'Night views',
    },
    8: {
        imageAddress : 'https://images.unsplash.com/photo-1701711995517-c992ace5fe93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-winding-road-in-the-mountains-at-night-yPlyDFhGwb8',
        alt : 'Light through the mountains',
    },
    9: {
        imageAddress : 'https://images.unsplash.com/photo-1677769765602-12a1665ccca5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageUrl:'https://unsplash.com/photos/a-lone-tree-in-the-middle-of-a-desert-hE1m3JLfH64',
        alt : 'Tree',
    },
};
const defaultData3 = {
        0: {
            imageAddress : 'https://plus.unsplash.com/premium_photo-1701882451626-755af9d9cb27?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/a-person-is-spooning-cucumbers-into-a-jar-aN9BKlk3flI',
            alt : 'Editorial, Health & Wellness',
        },
        1: {
            imageAddress : 'https://images.unsplash.com/photo-1623265292303-3e111c402ca4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/a-small-bowl-filled-with-red-and-green-peppers-POUf9RcKOuE',
            alt : 'redchilli',
        },
        2: {
            imageAddress : 'https://plus.unsplash.com/premium_photo-1701760275641-e60a89edad6a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/an-old-green-phone-with-a-cord-attached-to-it-xbnNN2vshMM',
            alt : 'Vintage revival retro telephone pale green peach orange palette classic 1970s design sunlight long shadow soft tones neutral beige background 3d illustration render digital rendering',
        },
        3: {
            imageAddress : 'https://images.unsplash.com/photo-1700348307455-e2886ff35de0?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/a-man-in-a-hoodie-smoking-a-cigarette-etcN-HM_JRU',
            alt : 'Infinite Harmonies: Enthralling Handpan Performance in Neon Glow',
        },
        4: {
            imageAddress : 'https://images.unsplash.com/photo-1631559416257-aca23abbe832?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/a-long-exposure-of-a-flower-on-a-black-background-w2FJpng8Ouk',
            alt : 'Floating Flowers Series',
        },
        5: {
            imageAddress : 'https://images.unsplash.com/photo-1682688759157-57988e10ffa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/a-person-sitting-inside-of-a-tent-in-the-desert-seX13AzLqls',
            alt : 'Nature Reserve - NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed',
        },
        6: {
            imageAddress : 'https://images.unsplash.com/photo-1648075082539-ca4a311d2afa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/a-set-of-stairs-leading-up-to-the-top-of-a-building-ZZUUvTUYdlQ',
            alt : 'Lookup in the subway station',
        },
        7: {
            imageAddress : 'https://images.unsplash.com/photo-1701040851331-eef78742f488?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/a-bird-flying-over-a-large-building-in-the-middle-of-a-forest-KTd0YRjdMyg',
            alt : 'mosque',
        },
        8: {
            imageAddress : 'https://images.unsplash.com/photo-1699519443631-60ef06bf1743?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/a-bird-flying-over-a-large-building-at-night-b-1l_4CDZ1E',
            alt : 'mosque',
        },
        9: {
            imageAddress : 'https://images.unsplash.com/photo-1699519440475-5e0fdf320ae5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageUrl:'https://unsplash.com/photos/a-red-car-parked-on-the-side-of-a-street-uP7XWhLTiIY',
            alt : 'vintage car',
        },
   };

const formEl = document.querySelector('form');
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results"); 
const showMoreBtn = document.getElementById("show-more-btn");

let inputData = "";
let page = 1;

async function searchImages()  {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}
    &client_id=${accessKeyForUnsplash}`
    // console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    
    // console.log(data)
    const reuslts = data.results;
    console.log("reusltsOk");
    if (page === 1){
        searchResults.innerHTML = ''
    }

    reuslts.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });
    page++;
    if(page > 1){
        showMoreBtn.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    console.log("fromEl")
    searchImages()
})
showMoreBtn.addEventListener("click", () => {
    searchImages()
})

async function homeDefaultsImages(randomNumForDefaultData) {
    searchResults.innerHTML = ''
    const data1 = defaultData1[randomNumForDefaultData];
    const data2 = defaultData2[randomNumForDefaultData];
    const data3 = defaultData3[randomNumForDefaultData];
  
    const defaultData = [data1, data2, data3]; 
  
    defaultData.forEach((eachData) => { 
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("search-result");
      const image = document.createElement('img');
      image.src = eachData.imageAddress; 
      image.alt = eachData.alt; 
      const imageLink = document.createElement('a');
      imageLink.href = eachData.imageUrl; 
      imageLink.target = "_blank";
      imageLink.textContent = eachData.alt; 
  
      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResults.appendChild(imageWrapper);
    })
  }
  
  homeDefaultsImages(randomNumForDefaultData);
  