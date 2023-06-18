import React, { useEffect } from "react";
import { Container, Row, Col, NavLink } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react";

const carMock = [
  {
    model: "Audi A 5",
    id: "1234554316",

    price: 13290,
    engine: { type: "2.0 TDI", horsepower: 177 },

    transmission: "automatic",
    emissionStandard: "Euro 5",
    year: "11/2012",
    km: 280000,
    options: [
      "Navigatie Audi MMI harta 3D Europa inclusiv Romania",
      "Faruri Bi-Xenon Adaptive",
      "Daylight LED + Stopuri LED",
      "Incalzire in scaune",
      "Volan multifunctional din piele cu comenzi",
      "Cruise Control (pilot automat) + Limitator de viteza",
      "Coming Home",
      "Interior din piele",
      "Leaving Home",
      "Conectivitate: Bluetooth / DVD - CD / USB / Aux-In / Card SD",
      "Climatronic",
      "4xGeamuri electrice",
      "Senzori parcare spate",
      "Oglinzi laterale pliabile electric / incalzite / reglabile electric",
      "Senzori Lumina / Ploaie / Presiune Pneuri",
      "Start/Stop la Semafor",
      "Privacy Glass",
      "Comenzi Vocale",
      "Cotiere Fata/Spate",
    ],
    imgUrl: [
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/353425188_167831006276868_5352403699912151242_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEu9NM2jWCt8S6bTGz2MLo_9IEolvdGwfP0gSiW90bB8y7eYM9Z5sSWUNvCHkzqYOoRDzXRw1dY5B7kO_rxar3t&_nc_ohc=_ezUmDCuPHoAX-KgS9I&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCTW2I4BChRU5LpGUwl3eXLyQzfcciXDMe3gsvyFDhBQg&oe=6492F315",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/352540790_167831642943471_3100846214548417692_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF4BRz4wEEzEgOw937hUasgjgizQIjRzECOCLNAiNHMQDoxoWGej1vbJ01TU3WbA6kHNLPy6jX7AVAfvdVUyN7d&_nc_ohc=UIXw7jG930IAX_DkPgt&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBY0-gvN2YwQ8Iw7A57OFEBUYjkJqlKpMx1sxzMlJO3qg&oe=6492EF9E",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/353441724_167831082943527_5980267673907661288_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF1HlVSTiXIZdBBGi29qH-O2-Becn7aNWLb4F5yfto1YqEFAV6dfmjr8bgYszB1W4K_QnOpOXg-FHuxSQnvAkxi&_nc_ohc=eiTWzecsSsEAX9-XtLL&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDwuNkPiXkKYgXXKBB9NEyYhsdm3kIXgwy2JdGOw4gW8g&oe=64945DDD",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/352688730_167831032943532_5614663620029772709_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHQsoQ3MPKA3mzTqFvhym6j4jkhY9HNph_iOSFj0c2mHyqI_ImV-GzebQEvatbfk6KJ1zrUA9chNsjbqCPeCf7E&_nc_ohc=bH4owQK6t34AX9TBNSH&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCr7xK7AD7mp6vTUI5xP5wClebFcEMWBlvUzupwYUIyew&oe=6492C571",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/353671810_167831769610125_1438999430781595475_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEU7QTfwCIQlHmdVfzrLEnBPAzbbyhA_eg8DNtvKED96NllrPuOzd0ppM17f8o_tp9qQhOkm7wTzzujOzQ3RTWl&_nc_ohc=Xfirrtn1iHsAX8RtSSW&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD8dfnWEj67ksC19r1RQ5xfdc7GO8g3HdrShn8CDoTjng&oe=64946923",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/353777287_167831612943474_2713403732019965152_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFrim2Q7l4jCiBo6JI5ZyGcEqo5iaxOf4ESqjmJrE5_gdxl7THg24nmwWa74blr5fvcaVS7xL6t81-HHN-Y0CHq&_nc_ohc=aaP6eulLa8UAX_-HPjj&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCQNq6NrcQoWVqjpn5mbSv9ne-1_95hpVWFjXvOYroyYw&oe=6493FAA4",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/353451354_167831829610119_6587101576012594995_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGrhV9jAvhVQL4CY7Ap6iEh3IZMoTTePS7chkyhNN49Lsb7Cm8V23lew3QLkBdTIPkLBky7e1gSnXKOP_SWY-_-&_nc_ohc=0b-D98tltHYAX9rJ1U1&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDPA-1nXl0obgpHi34JCrWmqTPEkJkxDjd_o5Gh1s9M6Q&oe=64931AA0",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/353448662_167831572943478_192286714727936825_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEmjPSRNbQPAsTP-cCBxG5u6DNuwUkGjeroM27BSQaN6oJrvCwtZIh35aTf7m720ffywC8Qu_fBApGoqJnIlNsH&_nc_ohc=XjkLHYiGydsAX-FuOgn&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAmUOfkuxo2tkPv5xsVnnAHDx5srqiMXU4qM8JILi6S8Q&oe=6493CDCE",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/353066173_167831619610140_6670859181954716322_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG7RrAqPq8L7IsF4zk_jciaS-DTbzWGuhFL4NNvNYa6ER6U84-xhEIrT8sMxO_kbGA6SrT5Wg2k-YQy0l2MF9qe&_nc_ohc=_JvduT67gHwAX-v2Qpe&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD2xwssde8yUSJ-z7xN9O4AE1cutaDUiED0asfMKjhKqQ&oe=64933878",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/353457164_167831072943528_2726273381918609607_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFXg7NF_ITLrvFqH6L982B832Eg5Lz9Ly3fYSDkvP0vLWTvlSEOuUah4z1rExObMCcU87vjK1uzZl-I-jGq5Dft&_nc_ohc=O2y21_a0YHcAX-4egTj&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCrpLPQmqob3UaLZRgWi2JYYWG8cA4Vp1Hnf_B7ooTJ7w&oe=64932B18",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/352813120_167831652943470_345662363715898491_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHtNN3GApwFiLjCgVpWETk_X5xCnCfDoipfnEKcJ8OiKqcTs9Te75fzFqL21ymyFfauj6YsEiIDdaUyBHxbvrSW&_nc_ohc=B3bD6D9_5z8AX9jWcDm&_nc_oc=AQlc6bnv9AmyYV1RyPhVn3x_fnYzdtIoA4eT1qNRvlre1oK180tjV4RTvQd_Blum55o&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDRFEjBzSBWOwOI4P-qAEhisECv_NS49tW6p5lg5qhTvA&oe=64946F6E",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/352813120_167831652943470_345662363715898491_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHtNN3GApwFiLjCgVpWETk_X5xCnCfDoipfnEKcJ8OiKqcTs9Te75fzFqL21ymyFfauj6YsEiIDdaUyBHxbvrSW&_nc_ohc=B3bD6D9_5z8AX9jWcDm&_nc_oc=AQlc6bnv9AmyYV1RyPhVn3x_fnYzdtIoA4eT1qNRvlre1oK180tjV4RTvQd_Blum55o&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDRFEjBzSBWOwOI4P-qAEhisECv_NS49tW6p5lg5qhTvA&oe=64946F6E",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/352677714_167831542943481_7518621732895422386_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHtVD5CLlBGJKd_Su-3xuu_21iFlp3II7rbWIWWncgjutzPUGfdfLmYLo2w_4gUlT-WaE-yQu0xXHCom13ezm32&_nc_ohc=chSg-JwgSd8AX9mKTIg&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCYvvXP2hC3X9vdZvG2xRBTi9I7E5JwMZsOlvSovLr0pw&oe=6492F245",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/353441665_167831702943465_8665329356238483923_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFrkfmpE2bQK9uzp453lNxhcUofGzAB-NRxSh8bMAH41Psf0XkjohKf1PpptPWT6ARFWC7zhO11bxzhacYJP25Q&_nc_ohc=AzCRepXvGvgAX_fVvx-&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAjFWMtaxdetZ5C81yeW69zL-djZRvRelMk94yfaY--2w&oe=64934651",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/353425188_167831006276868_5352403699912151242_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEu9NM2jWCt8S6bTGz2MLo_9IEolvdGwfP0gSiW90bB8y7eYM9Z5sSWUNvCHkzqYOoRDzXRw1dY5B7kO_rxar3t&_nc_ohc=_ezUmDCuPHoAX-KgS9I&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCTW2I4BChRU5LpGUwl3eXLyQzfcciXDMe3gsvyFDhBQg&oe=6492F315",
    ],
  },

  {
    model: "Hyundai I30 BlueDrive",
    id: "13451345",
    year: "12/2012",
    price: 5790,
    currency: "€",
    engine: { typwe: "1.6 Diesel", horsepower: 110 },

    transmission: "Cutie Manuala 6+1",
    serie: "TMAD351UADJ042688",
    emissionStandard: "Euro 5",
    options: [
      "Lumini De Zi LED",
      "BlueDrive",
      "Scaune incalzite pe fata",
      "Oglinzi electrice si rabatabile",
      "Stergatoare automate",
      "Lumini automate",
      "Calculator de bord",
      "Comenzi volan",
      "ECO start / stop",
      "Climatronic 2 Zone",
      "Bluetooth",
      "ABS • ESP",
      "Airbag frontale – laterale – cortina",
      "Cruise control",
      "Directie asistata",
      "Radio/USB/AUX/iPod",
      "Pilot Automat",
      "Proiectoare ceata",
      "Inchidere centralizata cu telecomanda pe cheie",
      "Volan reglabil pe inaltime si profunzime",
      "Scaun sofer reglabil pe inaltime",
      "Geamuri electrice fata + spate",
    ],
    imgUrl: [
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/351111305_971407543870044_1931228427543241447_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFqWLmnsxKQWXv_BqLLWrYnh-Dtdj5fqQ2H4O12Pl-pDRbmnMmP1JrwaNmqmDokeNWW3d80qB_vOGc6g-VwXSyZ&_nc_ohc=oERSYdW5GNkAX9kR1Ty&_nc_ht=scontent.fotp3-3.fna&oh=00_AfBj376pxCCZwLIewV9olqR-ptZt5RNEfL-fy1btUpjllg&oe=6493C81C",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350679044_946749536634614_4661013313361072149_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEOqrruuNQQyl9LAHifzM8pxFmIyRYnUtjEWYjJFidS2JGbI2_hFNaRtX09OzjH5FFZaVat9zv2Qx6QIkgzAa5u&_nc_ohc=552I7ABa00gAX8y9P3Q&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD99VIPmR-UIcxJMdv4ME_K23wsNMDIKbBl4L1WXY9GlQ&oe=6493717E",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350990492_940780160503314_6291356737983238871_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEQsYq38ifPvFtsX1fn9qF2ZT1Dsh_6LxllPUOyH_ovGVWr438kl1VCJFGfKHatQ6pj4aNZ-iFWkw9bM0KcvIcH&_nc_ohc=Fc4PFnNB2jEAX8jaxni&_nc_oc=AQkX0NKwa_Rh0BoT2f2mnI--yrF2ZsmmCxi546AwguB3p5GyK24YXIjmoQz_x8MYUP8&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCl5QlxXysRkZ_X_L7yMyZw80OuWVxTLJWQ_N6L158OIQ&oe=649495D8",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350830047_1429054041264320_7929675308942598220_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeENyemEiqmIJGRGPXKW23ruqbOhClxKmeeps6EKXEqZ51QYzffEH5iCIDgSwY46M6OpWAKpM0ayk0uY6Fl9D_ls&_nc_ohc=30r08q-LNhEAX8Vw0pF&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBa3wqqeoJyZOyHcuJNeSIj2KPnobN5qeR9zQCtLR0PJw&oe=6493F86D",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350830390_150398544695368_8923725959199647234_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH1rx9WpTWJzUxqX8WWzWQGQoyDpHcSm8pCjIOkdxKbyoAhjNqKlwq84ubPTFQi2XN9GGHRVOiMA7CvpU5ZkdHr&_nc_ohc=_i8gOl5nrfcAX_xTQpa&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAOi84rqzy_SCu7bpPiFyOUpJIfqQe4iX-kNoW-2IthXw&oe=6493E551",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350861688_262781836331634_7633777219523624714_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEn0D38xeOvDvHcUKaNIxUec8I3sEhynzNzwjewSHKfMylAtqgVGpbNBLfGFsrf3Dgn5HOecOLNszFGQUzYUwMu&_nc_ohc=pNoydv7E33QAX95DkFg&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCK0uFU6nBiDVXtXxdnanhvBkKQUPCL69d8VZDAFmJPfw&oe=6494ABA8",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350942470_219641684172008_828949137389397793_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE-AXm56f7DRrRKuBrMGM7p7r6gjRZaMDXuvqCNFlowNew5_OhRruIdYbuuScrRE9zPW64zUyWNcuwMCAppmuol&_nc_ohc=Hwj50QXeZB4AX9L04x1&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCKU1BQiqWuwnrkZm7WarZIu8OFTwsennbp57aYXn7lKQ&oe=6493D27A",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350823432_1283762375597574_8603236501136568977_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFkXfQDp-0oUVqtf3U6KN5A4r1eBcuO6WDivV4Fy47pYM8sJJcAwhgnxF9kqRKVT1D9n05eRvetj_yb3TIX62Gm&_nc_ohc=OPDXRNlWC9sAX8gPCVZ&_nc_ht=scontent.fotp3-1.fna&oh=00_AfC_wHAw0HYqnurzXiMpflSIMOT3GZSeXggz2GJm562ZKQ&oe=6492EFC6",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350538390_825176985138851_527835094089355819_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFfyD2wdk-ntMA9ltzrjsKD0mjnDTbqSBTSaOcNNupIFPxjWjZkp9vBoOdlzBq320BZVEO_TK-Qu0QWBo3hIgLK&_nc_ohc=1PeSg-V6VSgAX_DvEus&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDb1JI3VDRNVdpDOqCsgkZJKSnaE6JZFJ8KBJFZhWlv9Q&oe=64941BBA",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350695816_3498416853811453_941772397230249043_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFnn1YtriB1wyr3kpAMJsbK8yw9UD9yCJjzLD1QP3IImPiD1tgHZeArNzpcjk3Bq_QUE3ga4aZKW9muwbNiAFgt&_nc_ohc=tmqFd-autRMAX-GCQpo&_nc_ht=scontent.fotp3-2.fna&oh=00_AfATrInXZQRhOBDDw8V9b_7g2cTBySOZE0ifV4ZRA05yDA&oe=64947773",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350846527_640241418155817_2284500856665797618_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEqvaEeJF1pdxWIxvvlOIShir23lIInAvCKvbeUgicC8Pi_QhtXtafClEa1Pih6Ij-ywauK9bxQ4M70LEBAjAon&_nc_ohc=f6dG1n0Jhz0AX9SQCZE&_nc_ht=scontent.fotp3-2.fna&oh=00_AfD0BYuS-L029cVEjiDzyP_apBm1SgjimZraffXNo0vhEg&oe=6494433B",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/351140840_706589937971539_785072364920299885_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFS8FQjQDvMqt3pn4hZu2No-cxUaPW7B_z5zFRo9bsH_KjDKApuj_r3JPILSWoIMXBrOXPf5_JR4NRMQao2AKv-&_nc_ohc=QUZZZYL3FhwAX_OU5TR&_nc_oc=AQkhB_kL-og8IGeNtdXaqlO1LbAZV5MPA1qAIptWsFIFiJ3eunsMm7HmI1xb6HkKnWI&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDzjYpx5LAlfc6I1mJ_-9a9mzHavz8Mv6eT3SLUCH1YyA&oe=6493B576",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350849359_1251264832418682_5020413115137081255_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFqfr5q-gN8FRolhVid8lyEmJnYZL7FY0aYmdhkvsVjRthKNDWhHAZNfqwTfdJsUgxYVm-2feSJmHS2LLgOwNg8&_nc_ohc=-MWQm1Dj76oAX_Jlodl&_nc_ht=scontent.fotp3-3.fna&oh=00_AfBq2J4K5fBQvCzuz5852xDEWN51yZWDp1xQNYUS8e8wSg&oe=64949268",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350683391_657967519486365_5003656303216199701_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGVIX0CtGaVqhfmcUPRCjbJymPJxLwHnynKY8nEvAefKTBW5O_A-U7Gnmgb5MjJKHM62plarbVMSSyJhZa6nMR1&_nc_ohc=cXy-u29FlDkAX_Qv2Dc&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAdsuIYnvv12BOzNWieKG81_JRVau6WVciOre9YTTKcQw&oe=6492E815",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/351119917_965408544608877_6768482699672921802_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFmgGckDNIjj8VU80eo5Gi7yVvQZWh8ENbJW9BlaHwQ1leotzsgVmULw7t_B_kpfYQDlWvYcPYG_LcZyenea0xY&_nc_ohc=APEWAR-BP4QAX_rD7xR&_nc_ht=scontent.fotp3-4.fna&oh=00_AfC_Q-HU4zSx-yvqf8lkuymnrKzlqIay_7lHBcE5qd2UGQ&oe=64941A11",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350976998_625190506225569_145849547312654763_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHtHOwsF8TMSqia1NiO4fYiVI3J5SOuDWhUjcnlI64NaKTXbm8IQx2Hor-fanX2tVq4p18-uc4VzP9n7ZDmS9QP&_nc_ohc=xDhgynNxml4AX83xvuw&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCNTvQgUvdhVs6iILUwL3F8MIgygoprjyBzBifqd6nx8A&oe=6494ADD4",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350945239_267769275751703_275937399569686709_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH-Fa8jp1jhOM_enW5gld6NvWtsrvOmmUu9a2yu86aZS1dYeV2khON8r0j-RginE0p1wnnoxAk__d5kQObpRi2p&_nc_ohc=tuK1bsGcGxEAX8AI0tD&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCGMnDTAVkVWXplRnqFBCCV6UN84hKv_1FpdroMNTkL1Q&oe=64933555",
    ],
  },
  {
    model: "Volkswagen Golf VI",
    id: "134513451345",
    year: "10/2011",
    price: 6990,
    currency: "€",
    engine: { type: "2.0 TDI", horsepower: 140 },

    transmission: "Cutie Automata DSG",
    km: 268000,
    history: "Istoric",
    emissionStandard: "Euro 5",
    options: [
      "Revizii la zii",
      "Carte Service",
      "Km 100/100 Reali",
      "Fara probleme Volanta / Ambreiaj",
      "Garanție Motor + Cutie",
      "Se accepta orice Verificare",
      "Nr de Proba pt test al Autoturismului",
    ],
    imgUrl: [
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350768932_627810005898286_3481794739999428740_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGwC4C-RIiLjxA2DgGSxQuYWHzxMDsRqiBYfPEwOxGqIKDNQRj70D1ijzPFWYmaPYaAXBiFgATnn3OyM8o8L7pm&_nc_ohc=PWAtAqmU_kEAX_UPehw&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDW3hosiHMdPFEaFv5KuSduI-2EcddZJOXFM4bQMf2SXw&oe=649432CE",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350333539_1276919249625676_4132900837100634410_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEKfyN1TO1S6z7BZNTb2dDBfNEX29mR_3V80Rfb2ZH_dWdkac_cLBzLLkUjC_Vqs8zzVVEqcqVw7x5S6soRci4w&_nc_ohc=dY6f2utspOIAX9wDOKU&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCa6tei6BRDKdnp7g1leMQkI8vCLdyUJ14vByymeXROMw&oe=64938FFD",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350776033_111686635277637_4100678966830425132_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZJT40zJXWzg2jMqmCxhPMZFpvIrHEV6NkWm8iscRXo94Z6w4kvFh50L71FW_13opeV_MOVhpQt2rP8eQhMxa_&_nc_ohc=3tYNe_2iUWUAX-gG-Bn&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCR3p24dxkfKssrNQaVSOd6TFSpkF8V95WLwJoECfDpdA&oe=6493C072",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350536514_924560042144423_9031217020690873709_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHFM_7VnV1zJJLWO0H87Bfq14NrLmeMjjbXg2suZ4yONj9-x7SSY06zCSsJV02rQyvX9w2BSnVew9eqJjjgLJgo&_nc_ohc=VOZTyTKZhecAX_Hfvlh&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCn23_vlFYvXxIvy5gihgzoJCvIPzVnorKxfaxtXK7NGQ&oe=6493ED42",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350660885_984171622715959_4272306057791233555_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHkwXCXmekjSZEjkEUT9V381Vw4X0xLa-HVXDhfTEtr4QTzl3pHFO56ZaRVOvPNtwEOUFk_0pDQwJS8gvKF9gJx&_nc_ohc=PvP3vnMgLn4AX_ITao_&_nc_ht=scontent.fotp3-3.fna&oh=00_AfBU3pmyoOS6Cng895qTp0UETkuBjQn6Z97hAbhsG5ewkg&oe=6492E04F",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350472850_664856245656034_5346973410003820782_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeETxch1EMkAEmjEuY5x9jAdPSPj7MA26j49I-PswDbqPly-l8Gar6O-31BDJaJJalqPOM1ayikwBbQWXa94BylQ&_nc_ohc=eKq1o9lfALUAX_0--b_&_nc_ht=scontent.fotp3-1.fna&oh=00_AfA3rh_ZEhKvRJibUB80cuhBaXc3DqUDqPV-59KnqDvVWQ&oe=64946BA3",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350530455_259271926681632_8700854196819154670_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEooLF3-0DlQsHh_k1-lVXFL2uzORlS4aova7M5GVLhqj-BDGDsIi0pYAwM3KeYqwY_JK5YLRmOf_61cTKNoQXW&_nc_ohc=bcHNEKey6iAAX_RUgC4&_nc_ht=scontent.fotp3-2.fna&oh=00_AfC5jvAG_aHmimoDNPG8KjBZ-XKCHj1TCxuXhW1ubtJw4Q&oe=6492E077",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350829962_568774205382235_1100574696502941554_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF5urU1CeSZnij94ktdO8W0t8N590k_LEW3w3n3ST8sRWnckfqYqtLOCCQYA_aZEc1u5o4X9Mnmc7gikD1f_fga&_nc_ohc=UeFNkDdYjCAAX-IzYKX&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDMaGGSPddVDoADy8VjMuolYB5xxWvmdOsGA-XX0FSmeQ&oe=64947CD8",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350325089_237854368861914_8530780119855064743_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFFCspcQ6HTXJYJyRoCVo8x_gIVq4X6yn3-AhWrhfrKfUkBuwR0hPdM0lPaQTNvNNGCyRrACA6wHr_gt-MiaheA&_nc_ohc=y7zJKDUCnpcAX8uh6gU&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCPUVVRHbg6A6BkIonQ38xTwFJuUShwOA0Oa789xTjafA&oe=6493B466",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350503431_3492615534392508_3267900525020915275_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGpwDEi3OqLwhAhC7vuVec0weUlF0Apa-vB5SUXQClr6_RPuLmJRoQRc6Xxi6F4F4BRYMpnmuTdlFCi0tZuRSW-&_nc_ohc=U5VykBEFpk0AX_Ad2xW&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCmHyNJLqJrT2Hj0UR4HIY8udukYV3jsXO06n8ZcVPgLQ&oe=6493BFA1",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350492056_1465669957536307_5477762015648847585_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEo4K6Cav9dj4XhoOsijLc6y99kZu9H6ljL32Rm70fqWCYDl3HCcyX0RXsqsPs87b4s5p1ZREVv_S0gr0wpK0MC&_nc_ohc=_V4L-KlrKdwAX-kR-GW&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCXOq47LcBevbT6xnwoaXtRmscvsw4LxYh_lZd03KguWg&oe=649469C1",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350815301_1296101924334627_61264611575019839_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEtkUKwbRAbklrHBUQcSV0ABQzUdRMzvrgFDNR1EzO-uGzHRdgPmlFnvsxj73eV0_KyhQ1SW5QEMAV91tnysz1J&_nc_ohc=pTlCFduDMxoAX8zhm5F&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCY3_ThjNGh1HS48MgKcRktUFIUvhRevjzdXBYTF-DaXw&oe=649419B5",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350787761_208339605364390_8650342672949834302_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFybWCcRAFnd2mVkz4yI8lczNc3EfhGHdPM1zcR-EYd01o2Groj84Tithty-M4BEXYON0CttEoPLbpsssLyxk-F&_nc_ohc=GgjzNFNw0XEAX_qL7iu&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCqiEJ7F8kSNXPhbyZhin7UAPj-UNllxlxBoRyowjUo1w&oe=64946477",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350343445_921652212279142_2653857762290597893_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGdOlZ62zM7VZ0rO21UG5pSuFz9u7a5TO24XP27trlM7cYynF9BvB-vviMQTMYYmAsIQKoZufeqNQXJ2PzSMXCG&_nc_ohc=25fEUqwik1UAX8vVpck&_nc_oc=AQnSslWy39lhH5p4weO8PvvoE_jt6XwDBidcfLzghPPzUpBei87avuZLkaKcUG4a-3Y&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDwq_wuG5XmmWDA13QeczYn-_MYTybCsMm7t3qvl2OB3Q&oe=6493F222",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350648514_629445512430201_9178771697435767179_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEIueNAj0ucMVzQ26mvuICH8SrjZ5R2narxKuNnlHadqmD82Q2FDBixzD2G0xpU8vM5Os-kFAZ81uPqW_W4-vM2&_nc_ohc=Xx8kn3ZJi1AAX-EQMnm&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDZ2ZEHx5dKgG0JQprv8Wti93uhq8kN6XdBVXkzHwYsRw&oe=649332D1",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350917742_197036686173772_5022289377710128978_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHVMcj_1qCKmxebQakqbBTdyk3-w0Q9mh7KTf7DRD2aHg_1nPFUq5sg4acUJtCP6ATz-nhXW8Y3GYoYebgLBdUo&_nc_ohc=tvFhk-dmq5oAX8KNatK&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAmM6uOpvg4Ty-d5u60bAE6eeUiU4WueOrN0M3lEGESpg&oe=649361AA",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350780047_557300069901328_3246997232378531242_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE9BHquQYlueIujD7tZ24Nsyy0AT6pkR6DLLQBPqmRHoD0bUjQUh8spU3Cui-luaY6KsWlIrZdcTo26wdFbsAPi&_nc_ohc=f9THutd3tZIAX-Yo9xH&_nc_ht=scontent.fotp3-4.fna&oh=00_AfD8kxJ71VaEOhOuYN_Rml7xt5VN2JpIrJgkiN7nC7nT_A&oe=649460FD",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350306759_181346434893027_1127786930358643824_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFrGkiSSxalCde5VxOa5iG-5pS9AW81dQ_mlL0BbzV1D-eXwottrcd1LiesJ56ITjGJhZIH4rpWNyGO9oOWUzOd&_nc_ohc=sm1jR_UrfMcAX8_fK7r&_nc_ht=scontent.fotp3-4.fna&oh=00_AfD-py5lIQvk3ELwSaGV1TXNlm4PWjqs-7qZp86-ypgGAg&oe=64939B1A",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350495652_557107156584902_5718028009113349778_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEdTvXjSKNCByNiBxkNVEsbL2A79gUPh0ovYDv2BQ-HSs6-CDIaMeTo1dgREusl64oLF4k0SuD3gNpnPKpqJGe8&_nc_ohc=9ZKiYRUsKxAAX8nJ_3F&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAINwYti89Xg_g-VpU7ixF6jq1G91z41H9d8yxWd1DyEw&oe=6494228A",
    ],
  },
  {
    model: "Skoda Octavia II",
    id: "2435982765",

    year: "10/2007",
    price: 4190,
    currency: "€",
    km: 215000,
    engine: { type: "1.9 Diesel", horsepower: 105 },

    transmission: "Cutie Manuala 5+1",
    emissionStandard: "Euro 4",
    options: [
      "Revizii la zii",
      "Carte Service",
      "Km 100/100 Reali",
      "Fara probleme Volanta / Ambreiaj",
      "Garanție Motor + Cutie",
      "Se accepta orice Verificare",
      "Nr de Proba pt test al Autoturismului",
    ],
    imgUrl: [
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350490350_629770479037713_8090994438916391214_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMxR9vHjE8WrN1ASQKraO_H4u2qX6liZkfi7apfqWJmWYXoqrObL1K7MiHuBEXBgsBzfa3OqNo9OSgtb7WHbwD&_nc_ohc=t-TfKXFdvrIAX8LIkkG&_nc_ht=scontent.fotp3-1.fna&oh=00_AfB-r3xtK5ApHlD9xXSSnT0AP_GTOHUn34lsS_-eWdRbXA&oe=64935A42",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349989501_184578877888019_254842661018362264_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEl4c6whXv4FJWU1MCIwyzSwZqsXGXer2PBmqxcZd6vY5Zw_SWzznmK69E8TsF3bc3TeOoFNy6hWmPjM28s8yLI&_nc_ohc=VHMcfuNh3msAX-7LZrL&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDAeGcYJbtGyJOG1dEmmk3JXX41hRX3_aFwvUq82J1BWw&oe=64934D4D",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349163219_628662655802043_733604819309971227_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGceV-se7AaTLd2Sm1aQFmCbbDYysx0Q3BtsNjKzHRDcNV3bJdS_DYQUub2jaOnxK_7Sj6UFNVV7hKqEO3HBRmH&_nc_ohc=2T7teqH9YZkAX-tCpxS&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCw3aoJGAUQkLVV-lI_aUH0yeCPF8p1zsE5np2wefNxJA&oe=6493C10A",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349974936_808715304184393_5650575930977230445_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHGDbGUfnXsNO16AZS2ks3kWLYiZiIXMHdYtiJmIhcwdyyFjcuRyeew0_U_nUeu4ncm6sckOiYz99gscwX87mS0&_nc_ohc=NYcakngIbIsAX9-Bqnl&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAYCSOwPgFHRk7ceZx4W1JIVmvJrpJrTp0RVxiLmDAZRA&oe=64944DEF",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350653305_3294771687501084_7514321894021802857_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFH8-Q7t6ftxg5ekNTqMVXHbmNHDm0YJbduY0cObRglt_AKQ9NmyTA4vKk7Qe9JNR-hsKAvPGtaQn5CKfZiZBAE&_nc_ohc=tmzLwEqYRYEAX8mFKsE&_nc_ht=scontent.fotp3-4.fna&oh=00_AfD9NbEgOrdJpsW8QyqmCvEj5qPMH1kDqrEB8xxlfl-6Dg&oe=64931796",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348992812_1655623348213390_8028407813121721180_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGvvttqINIq21jeOhV_CS1d5gKoUVLIi4rmAqhRUsiLikjj3NKrAg0R6vCeftXuq2xHFd3fBofLqDeuQdonfF5H&_nc_ohc=gxydDgItMxgAX-VMHnX&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBQeVXhcExF53EDRDVASIhVfQtpFGj5y0ubg87X9_Dwog&oe=64933366",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350817033_1163708464296999_8669133720898891953_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHghS6J4MWZi8Nde4sJs3lhNh13kx718bs2HXeTHvXxuyTeD3LRzmC8WWzPZr1N3BRetfpHNQITWNi_qT1txF9a&_nc_ohc=fRdRGYSF2YIAX_vv6BS&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAmWjqaNIQB50XN2lAbTo16DhmArNlruCqCR4EFgrEm1w&oe=64938ED6",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350035629_6484090554975269_2425065420686679707_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHP5XRkqX_0wYvxr6DnnuHye1y4X5g9WjJ7XLhfmD1aMpeC9lzDRPhnGMtaNXZhnXOf9UhwTTEF60V-ICYHBSkU&_nc_ohc=ML0chS0Z_T8AX-Lqeh4&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAue0s39Bt2ooml93KAi46M_I_l0QEpySqDEFzIuc8LNA&oe=64942EF1",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350124493_1697513214023556_8099125508483670730_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGGRHVRWQSfcsWe5nvR8F2J4xfKcWleIqzjF8pxaV4irIL_bsG3Iowwl48aywQfzm2YFyhM_ul8UqB-TRCm7yly&_nc_ohc=LyEpgsgTOyoAX8dhQ-j&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAokz7fE4nWD7ECN8lpkxcO3yGaYXATYYIQcuCnrgItxg&oe=6492D30F",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350018821_501404155450985_6457769908655038431_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGqa1Bmydi78IltOirDi7IrJjKEls8jCm0mMoSWzyMKbdQBBl7-0IgwYaRjk0KFXC31aQE3ldCURhhnVRfmlSZf&_nc_ohc=tXn7dX1g2uMAX9ou60e&_nc_ht=scontent.fotp3-4.fna&oh=00_AfD4nekT-9AldSzqGoFlp-pnc-rlVJFhTcNMYS6Rnn5WfA&oe=6492FADE",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350290985_6587039004641126_3585718317594824974_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZTABIyW1c8HpiO8nln8i6hgpg63G-LCOGCmDrcb4sI5A8dfBIyVN7lVAV-q3hggdi8wQAuZ2AWTqGv_bcAz_a&_nc_ohc=EQfADkkAby4AX9DL7YM&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBGATwoKC31IXzLSBZY9Ze8_ad_9UHtgK_uHGbqSCFARA&oe=64935FE1",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350290985_6587039004641126_3585718317594824974_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZTABIyW1c8HpiO8nln8i6hgpg63G-LCOGCmDrcb4sI5A8dfBIyVN7lVAV-q3hggdi8wQAuZ2AWTqGv_bcAz_a&_nc_ohc=EQfADkkAby4AX9DL7YM&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBGATwoKC31IXzLSBZY9Ze8_ad_9UHtgK_uHGbqSCFARA&oe=64935FE1",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350065803_247602991206213_3008658720779499281_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG6Pv4POZcPFy7Y-cLL6Tv9KqWMfIkIQ3oqpYx8iQhDem2OQzXRKDmGToVyOKrzVWbew8Iy79gjQSVzc5W9zEEX&_nc_ohc=W5sWY2o-znAAX-4UgKT&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDHudJPW88qtth0o814DH8-orE3Pzw81DqbFY4nKNxiYA&oe=649312E6",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350682370_212009258315283_5744572318752021099_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFqeRj7gfweK5OuiH3Az52UTsUNVGJKokBOxQ1UYkqiQIqAzPMJ20lXx9aeizXrgqjIsVfHe-_FezRGoJece4Lc&_nc_ohc=3pvUyDtC3uYAX-c4Oei&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAfZZ9_xEncBK9ZPXZ9UuRt9x88MmyFaDJN64Yc28Lcww&oe=6493F319",
    ],
  },
  {
    model: "Volkswagen Up",
    id: "235775448",

    year: "10/2014",
    price: 5990,
    currency: "€",
    km: 56500,
    engine: { type: "1.0 Benzina (MPI)", horsepower: 75 },

    transmission: "Cutie Manuala 5+1",
    options: [
      "Revizii la zii",
      "Carte Service",
      "Km 100/100 Reali",
      "Fara probleme Volanta / Ambreiaj",
      "Garanție Motor + Cutie",
      "Se accepta orice Verificare",
      "Nr de Proba pt test al Autoturismului",
    ],
    imgUrl: [
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350682370_212009258315283_5744572318752021099_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFqeRj7gfweK5OuiH3Az52UTsUNVGJKokBOxQ1UYkqiQIqAzPMJ20lXx9aeizXrgqjIsVfHe-_FezRGoJece4Lc&_nc_ohc=3pvUyDtC3uYAX-c4Oei&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAfZZ9_xEncBK9ZPXZ9UuRt9x88MmyFaDJN64Yc28Lcww&oe=6493F319",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349970638_2406846626164003_220769347159032451_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFXqRcX5pN72M9GSz64ahlIhqPH9W4ZQGiGo8f1bhlAaOQbSBb3Xr_ylrTSLa1LClhIPif25v8MVDGK2ILvCVd5&_nc_ohc=hhxWW2FNSiMAX8eOWoX&_nc_ht=scontent.fotp3-3.fna&oh=00_AfC6JOhWvNHEtUMDZI9FEdf5mB96mP8seVmjTBuARoxWoA&oe=649417DB",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350650092_1010295293194670_8427259507063514217_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHCym0w5H8CIAyzkERjXDNT1JTB6Eaaqb7UlMHoRpqpvlGBfbnv7dS9A66VDv1w-xqRiExyI_SLxErVBC7kzc5L&_nc_ohc=eSDjNXwP8i0AX_XDooO&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCWghPAkBbS_oZsuF-wEzVk5hNNLhs-wfgyYi2-1SkxyA&oe=6492FC3F",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350650092_1010295293194670_8427259507063514217_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHCym0w5H8CIAyzkERjXDNT1JTB6Eaaqb7UlMHoRpqpvlGBfbnv7dS9A66VDv1w-xqRiExyI_SLxErVBC7kzc5L&_nc_ohc=eSDjNXwP8i0AX_XDooO&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCWghPAkBbS_oZsuF-wEzVk5hNNLhs-wfgyYi2-1SkxyA&oe=6492FC3F",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350644458_277605541399382_969447055684174096_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFFyOAOsQTCv-4xGMrUpgh2j-z11te_wvaP7PXW17_C9u65Bm3nRpRPjlHbFdwR_SsIY1BoX0Yef-kv7tpJ6xnv&_nc_ohc=QAw01XSySIEAX9stZRI&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBb0QAqpy66jofiR9FeddIDfAMzP0kBaCaxaAnIyHFN0w&oe=6494444F",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350099892_791520259016623_7343156607937185800_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEESe1t5OfzmDiDZ3joUm5yXyOwlX60FFpfI7CVfrQUWqiJk_687A6s040ihmVNEmJP7J3wV327C6_B5mb-xjaF&_nc_ohc=mDYcDnZrH38AX9y_DXa&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBUr_j2l7qk4x0wvTTRGmXOcquhdYaHEHfn2Z2qAx_luw&oe=6493B273",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350672793_222329523914497_5159633580383286976_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFDXZsNW00avSmjEeEPBqYP62UlVIKzbUnrZSVUgrNtSdw-g3DzzFSslkotA7WnrwIzenpwdO6v2d5-lDBIpqMx&_nc_ohc=JGYl3PtaOk0AX9ZVF9r&_nc_ht=scontent.fotp3-3.fna&oh=00_AfB5Z98NG4esNcdLYXMJ0jrt926pCjUYsrqAQT93tAYSgg&oe=64948B69",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350800245_590863359813513_3807463239872749655_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEJcXSmcLjdbbl3iBXkG07nwBO2JGn-vDfAE7Ykaf68N3bZ2ssh7aB-ZeCr29-qBvxq15ml49V-DlApwOCqW9dC&_nc_ohc=MPbPGFnJS6MAX-t_G9g&_nc_ht=scontent.fotp3-3.fna&oh=00_AfB-HaJmzHy4Eh4n-1zs3fFmnbQW8F9Yr1bLr7EgtqHnvQ&oe=64934202",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350803566_219578674191749_7206596611715667120_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFsIXuaDUI3zVrAta-eBiaqBGVEtxmS5igEZUS3GZLmKBTiwB0bzqq_8nOemncwXvrMFH5D7oL9KQedd-B8KQ_W&_nc_ohc=5VvmEkj1edwAX8fnF68&_nc_ht=scontent.fotp3-3.fna&oh=00_AfBJaYhhDnPqqHxDPRbXAf3Js59jUQY_mreBdt3hlSqw-g&oe=6494AEA6",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350331385_1289934865291862_1540223040902477470_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFW8KrqOhqBismLtLTRuK2UxN_rQvQ0vOvE3-tC9DS86wI5uIK8Kd3PWy8HkQmjrjcFPj9qOLPRDFxluM4uZY0H&_nc_ohc=hevQ0luuct4AX_KQTKI&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBiWr43nVxSL1TJkBUDgKMvV9NG7qwcF870ORT4bQBVWg&oe=64934A75",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350144229_235458949242365_8605760110042264253_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHmWbuUVLXLlEjFHPAG_PDw8xafHOVttPHzFp8c5W208eEeYWgHcN3vrj_THa2n661N9RSZTXw9x6Qo36n_Zqq4&_nc_ohc=3UzP-GUgwhIAX-bfzSF&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBP_1aPfVhTWwTDD_JxG1vrxqkNV60HtWLdtD26aFzxqQ&oe=64941129",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350513682_243350824973080_4705844675539176393_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGwoLSWzHroeCDbWBtw5RVbnqKLVh3wp6qeootWHfCnqlaxtU3AyfUEK1ukMaOF9WcCEBwKaicst7gxo9iOaKNb&_nc_ohc=qZv2-0jUsfoAX-pv5XU&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBNA1M2FyJYmPi-MdvR4vvtJ5z67b_NYM6k-oUu1ehd_w&oe=64948CBF",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350460621_176998405331205_4889700916226666169_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGE47HNrn1FV9oCGxTcfkv2Tg9EpHhym7ZOD0SkeHKbtkVI2aEzxE367hCPSkOIi-J53SyCbDmnFtkv--5G3zkh&_nc_ohc=ZkfhFCSRQVwAX_nMe-w&_nc_oc=AQnxkG6c6iQbFeHOMB0aEsDwsXVGyGzHD0NZBnkM55qdf7Uqy7f6NYmM7dxJzWBABj0&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDakQWjpCOl4YtTKLzyqKoQSWAxdHpZfdEaZvTutQ-oBw&oe=6493BC3D",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350669391_156103107439268_3575395662695399784_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE8lO3s-n012-VaGfpSfffdyzDccerea2LLMNxx6t5rYkjlRIh4CdlgFAzXTISgsvq40okDaMRJgL_a_yNLnUCz&_nc_ohc=fTFrdRcT-W4AX_5Q6y1&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCV8UNITnSrUdCIBgwt38dgLrlkVQ9OfRWO5NeSPsJpTQ&oe=6494B9A2",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350101577_260714569825354_3007127980930642663_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHcb1bOs7vKrTFgUhI28ciAr5d9hKAnlSCvl32EoCeVIEMigwRUk6nGbquNP7LCTKJp1kcaMZdHkvU4GqAm8wZS&_nc_ohc=hhuVk79FH34AX-wGytB&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBtfoe0my7urqq0mOWb5-8xspcsz6piICLooelnk5WHPQ&oe=64948D6C",
    ],
  },
  {
    model: "Ford C-Max",
    id: "35463457",

    year: "2004",
    price: 2490,
    currency: "€",
    km: 270000,
    engine: { type: "1.6 Benzina", horsepower: 116 },

    transmission: "Cutie Viteză Manuala 5+1",
    emissionStandard: "Euro 4",
    options: [
      "Revizii la zii",
      "Carte Service",
      "Km 100/100 Reali",
      "Fara probleme Volanta / Ambreiaj",
      "Garanție Motor + Cutie",
      "Se accepta orice Verificare",
      "Nr de Proba pt test al Autoturismului",
    ],
    imgUrl: [
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349702566_919555469338358_8904777887075556306_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF0IhhmS44nwXVG1F9r-u0Q_epSjZplstD96lKNmmWy0HADdl326V48QBeI26vOE7ZPdqID7sQMh30Mt5eGD1EA&_nc_ohc=Sw20doj9vWIAX_EUw7w&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAqgJiV8MnVd5tcQhP_rNlohAbTGrAxDiPz1J1QzpbanQ&oe=6492FCA2",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350048669_242711295027686_5269669280195569504_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHcmC6uKCUA4cumA0ZGo2-Lr0Ne8dtZc0GvQ17x21lzQYmiOfwmZ3M4yEwQIWJmi2JG2WKzjS0-nZoxCsepkATK&_nc_ohc=8JEpVdOFaVIAX8QszkC&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDAUoOwwuENCMFwJwEEeMtkJIgoIxBqRMxB1xKBzbezkQ&oe=64940104",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350095987_23987361120863495_2105904938590700152_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEbxh9st-nxgJUIT23t6tNAhqpCqNcs-cKGqkKo1yz5wofVWHaXwu9zuLeqeAdDs0Dj9bjUTi3joICODpuW3oG5&_nc_ohc=wSuWG2Ozn9UAX-mSJAM&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDt4B0bNxDaLgyeRqKJ4Ly6H4YgLhQmASeg_mGW_egorA&oe=64932DA7",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349955360_6216970601716019_7518833407400277377_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH2k3HluX7thueWfbZp44r1GFafFZKh4GsYVp8VkqHga_7VIiLrQtcIDsBtUq2Z3VaqJa4y9iefGDW18mb5ng5s&_nc_ohc=Ho_tRwvy40YAX-ytn5p&_nc_ht=scontent.fotp3-3.fna&oh=00_AfD6ETekrUwEG6M9jNHLONteMQc3k-dSeY_Ai2Qnt8cuTA&oe=64947561",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349728281_115139541591139_884238857890418177_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHdAyz2B7QwsEAY3NW965Qh_H--eHWWVXP8f754dZZVc0puKo-1ma5pWDY8wFFFSrUPfaZws9M--3cB4H7_r6S7&_nc_ohc=4E5gc8cc_5QAX_i9W1y&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDwNgpG1PY-kWAek-YuXPlaesEudMUqSoDVRwV6UM4nIw&oe=6493A3B0",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350101471_634927182020592_7138740351769727527_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFtWQjduk8xSbqU0h0-gqJkQcfnuiyn1XdBx-e6LKfVd3zoE5fQE-WOQBwIHiOSL7nkrB0tIH7vawOnG2TEPhYJ&_nc_ohc=2xbS_U1tdvkAX8LV4Xi&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAX-1osvdDIYSxqqU9ijTNVRlqrbJukNUDggjE_yjLSew&oe=6494B5D6",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350059677_514577080775193_5031515293841475482_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG3LYxIlhgvGQhzLtlD3Afg183VZYvmF-fXzdVli-YX5yTIUfVlH5rdbsz8elresV0KQNQrOYmgOgjYu1psn4y9&_nc_ohc=THDt1ETNHEgAX8XjwA9&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBZoxIHy4FZ3TBLUTnTopvtXJRsIx5KUB-q84uhse9O0g&oe=64932129",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350514636_266870765727472_2237167952306636004_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH4gVKa67_bXk32zdbvVDBb6tAdXTKIUqzq0B1dMohSrCdbOWLdTrhjStCQJBYuIJo2_i08RcJ3HGEVM79GrFXD&_nc_ohc=TY5rHlNkIEwAX8SAz2x&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDqb2jmj16XYFPyJ7u_cybgke2Jpv1Rjzs9hwVMS2Rx0g&oe=6493B7F8",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350520102_939878643954064_3433005296555280328_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFMx8WjR5h1oFiVbhPxjdCivw2pcJ2J0vy_DalwnYnS_E8wWZNk_qfcqbv5Jz3nFBlB-GjFnfby7p9DAeZn3eAl&_nc_ohc=r2G6Ndff-ysAX__7XYO&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDGbarjvmERY3SQeQ2zCzAp1lXLc7VBRmEICqQqAMqQMw&oe=64940D0A",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349768519_204606592501563_6126361054900035402_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHKkYKRZNJeJDu-NFd8NXNZT3Sz1T0cucJPdLPVPRy5wvg3drMZDWYU3e2bjK_TMeG25rKjJH2re-RtkqUXo4JV&_nc_ohc=HH_1uBwc3ScAX_Eik-I&_nc_ht=scontent.fotp3-3.fna&oh=00_AfA65Vt0RE_Yt9QqcqIeBNL_ADdzTG_Cb-91JHCVallzwQ&oe=6492E438",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349917473_1468536240558004_4754337248200218522_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFRF2T0U-SH90kB5Nm6u5Ot22hfgiOm6oXbaF-CI6bqhTh5Tf4TgJXzZtGbZnAmAF4-DD_n6N_ACMQiS_cA3Mv2&_nc_ohc=A5tBsV2x7PoAX82ZOm-&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDGNv9DK_1REW65rjnTgIDW-kiSnIMFTfkfr86qP00Ymw&oe=64931B38",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349931626_930560721505619_1116393892639885800_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEmi8tGMJmPsqq3I2KLmMw-r9tzfBzzeU2v23N8HPN5TRTBkCtesKtnOtdEvF6B-ap-daF215cyvAbd2QBDpAa9&_nc_ohc=vUq4kNe8YQEAX8UH9BR&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAJTKZvUFEh4RZJ7xpb0q4uOFLSpD6ZNpEjNdyz-2Ipvw&oe=64938CDB",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350116655_629651242376337_2773069009540354059_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFqhHhsg1r12qZNIPk9ljh9knV77489PZOSdXvvjz09k2CGyfbUWtUGMMwLv3fbv2GvOJAiwxKQNcS_3P2aXzeQ&_nc_ohc=AIQFvX0YGxsAX9nM_C0&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBFPC_kj7zld-6OcqXqaU6gDosWLa1fuZPOh0-RQTGlvg&oe=6493AEFB",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350124174_3453413211541027_2160811556396440080_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFz7RoPKfgEqyg-0ey5jCiN_NJ_ratfXuj80n-tq19e6LdES5xwE0IfivGxWOZQdgblCk_r5dtSoC1lheUOWb9Z&_nc_ohc=hdvfkXrvpBwAX9qbo5z&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAtLYrph3mGsK9BYvRqqgCPyEbdZAsd9YfwJ0-cB_PqpQ&oe=6493AE79",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350298980_982917209392185_4424410717510372520_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFTc16h9tkU3mJ0DR23-rzpsxETtJlUn_WzERO0mVSf9X5NHcpjeMvWACxcyXG6_vF0WWoyfaQCmylw07Wqg94u&_nc_ohc=ZZ7Pyl5fDhMAX-pyf2L&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCqIpP1pnxjxl9DAru8maO-9dAdwN1FLsquUv4m9-ubQw&oe=6494697A",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349958336_1304763293437389_4801418256914385772_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH-zeYksCfnXcvl_Q2hORrfn0tl4pkU1C-fS2XimRTUL7OBjd8GkaLph2AIgs3JSwd7fqwIjefBgWIBrwgCY9uo&_nc_ohc=YUET-QdRHeUAX8pn3MU&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD8X0mIiLVLg_3tfSmOJwlSYZSw47w4wupn8cshSTridQ&oe=6494A065",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349730481_970931640761127_6916605829326920003_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEiv0qbi4Ly901BOe2AkK0vAL5-2qKfC1gAvn7aop8LWD8liMWX6s63KUdPK_zlu-kWc4Mj3rJ0-y6sOZgQbcZO&_nc_ohc=PxfnXq1I2u0AX9Lk6ER&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCbTMzUAK7ttr3jFrAIsN_DhJM31An8NQP5QYb4doOD6Q&oe=64949662",
    ],
  },
  {
    model: "Volkswagen Polo",
    id: "32456345745",

    year: "2011",
    price: 4190,
    currency: "€",
    km: 179300,
    engine: { type: "1.2 Diesel", horsepower: 75 },
    transmission: "Cutie Manuală 5+1",
    emissionStandard: "Euro 5",
    options: [
      "Revizii la zii",
      "Carte Service la zii !",
      "Km 100/100 Reali Se poate oferi seria pt verificări",
      "Fara elemente revopsite!",
      "Fara probleme Volanta / Ambreiaj",
      "Garanție Motor + Cutie",
      "Se accepta orice Verificare",
      "Nr de Proba pt test al Autoturismului",
    ],
    imgUrl: [
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349194941_761953978743436_4776947729162986372_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEggJAhFXdp72hTY0SYpCd-WwsQDzftMAlbCxAPN-0wCQzepo5Ynornm_bzR1-aRepVxJsrSr84iEX_-TZ-EaTN&_nc_ohc=keDn4GUj9zIAX-5Io3g&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDKDKTBQWcPw9FVgNs6OfBTK1yNvp5RApsWB3vbZnKZWg&oe=64935B40",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349194941_761953978743436_4776947729162986372_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEggJAhFXdp72hTY0SYpCd-WwsQDzftMAlbCxAPN-0wCQzepo5Ynornm_bzR1-aRepVxJsrSr84iEX_-TZ-EaTN&_nc_ohc=keDn4GUj9zIAX-5Io3g&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDKDKTBQWcPw9FVgNs6OfBTK1yNvp5RApsWB3vbZnKZWg&oe=64935B40",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350319043_246467407987319_7266006260498684779_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHTp7sPoV5w3KOFSR3q_Fxefp6DDXK6qlt-noMNcrqqW89tw2equVKSBpJcSwYmpLEhWn3Us2E7wpuezvgjQn7K&_nc_ohc=hXfu8Rtz86oAX9-4BXV&_nc_ht=scontent.fotp3-4.fna&oh=00_AfB7iEzqf-A5tB-XSdU8fa7jaMUrvonTmhewmIQeqJKc8g&oe=649406D7",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350101500_3458636534378381_5594449859549884054_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE-_D0DZ2FXleqzd-zGF0xQ9yhgghmF7vf3KGCCGYXu94EMHALhwAi_i1w9iT2JsE5hn1wIIg3_FhH-u6wicejh&_nc_ohc=wAhcvp4m8_oAX-lfJg_&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDh4_9FseJesPyq-C1oGAlBUT9s5spIkcYNZ5RTE6gNxw&oe=64943F55",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350025710_615324293859162_3712937970534385543_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFy5i6_navLkZ9zzQgsOhZYUCauA3L_GdZQJq4Dcv8Z1i0obYdwAqZLLpaXmF5yFZ1-Qzz-homUJmahXtiHwzPd&_nc_ohc=WroVyu9TTNUAX8-Zp4I&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAa4k25tE9tJ60nN3MDUOeai98wHS2JtxthHnbMGnANag&oe=64944A19",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348969040_906032067166643_2410037466858027871_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEWSvixgMB4WuI05wetCYNuKbVuH4sReqcptW4fixF6p_sdBfPKKwy7qhj0yZC-2fMSaUHmvz5qU6EQMVb_F3C8&_nc_ohc=nyO_1FA0lagAX_QJGmH&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDqt-pK5KjN8BCInMZjW2T0EoT7iEHfGxYC1_gPxmBA6Q&oe=649406E0",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349948042_579746457370897_2702612294672478608_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGtayZvnnoN99axq7ZWZWOrdBnkRhB2PYx0GeRGEHY9jEYrDEK2P8nIMR8pTevKLLZ-wJ92dFktExsYI6a3Mb-X&_nc_ohc=jFFfXL10QrcAX8lJCYd&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCV--2bqyNorF_1lWjSlq-SmY8j5GAjbpO_0tHWMUkDLQ&oe=64941E96",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349184336_115334844905489_7699821339579565283_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGG0nWI3NSQ9xxeL6L1Gejbnzt0uMTHFrKfO3S4xMcWstEWgzfPn4agonSpKctdgxtj-ZiYYQKuAo-Mw1ZOscsv&_nc_ohc=7xESw4ZC8cEAX9VofQW&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAHaz7aqJqIDhHbYm8rzadT90GJbr-f03Cqzk1hfkCDTA&oe=649301A1",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350518165_1001245470865109_1028805827383735188_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEWcNA-06HHckVhpuyuX2gx9U6Ln6AZr0b1ToufoBmvRtQ5HzSFQRJqxR_F7UtzAtmoqCAj5V-MjMv1FBs0P4es&_nc_ohc=fpun3QF-uNIAX_6IIQu&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCmZgsxtz0Y9paA76p8xe7R6W25RgJ3RUg12ft3qBzuHg&oe=64941FB5",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350249912_836058431360744_5708750910889591560_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF98VgouuPkO-9z0W8dy_eaTeqy8mLPiX5N6rLyYs-Jfo6_r5rVtUsprLgSSUC6IvmJdB1aBzCBljHi9neD07F9&_nc_ohc=pjTotdkkB60AX9ArwgW&_nc_ht=scontent.fotp3-3.fna&oh=00_AfBPMZ_GTFXeGX6XF9-b68SXXpbOhCoggjH1oKrfvmmFeg&oe=649333A4",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349863099_761480975437725_76653186458385031_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGRVi_DmhSHDux-vUxvxwWY3D0YUr-2E6XcPRhSv7YTpbRaVdj24pvyJdFT4_xwm9gJ2rW6hph3Lle5xKaEG_Nj&_nc_ohc=Gco8uWcHaWcAX-3m2z0&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAajq9ftgVbXuwvxlLXPsJ_oNnmLfRrQ-ehZ4ODc_kLxw&oe=64933514",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349828335_1284540842415377_7411840297422059979_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHGjHyCfALzVIj0Pr_ftCGnMvjbF49YGQwy-NsXj1gZDGSu5PPlpcVjGRgSBAX9_y--MoGdHigO8_NwbNGz5t4w&_nc_ohc=Ocol-nK8EdEAX-l1O7M&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBGShV7ZhGX2ki4kLDFJmDiEvDISMpixDnkSUOY0hqRqA&oe=6493F60A",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349828335_1284540842415377_7411840297422059979_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHGjHyCfALzVIj0Pr_ftCGnMvjbF49YGQwy-NsXj1gZDGSu5PPlpcVjGRgSBAX9_y--MoGdHigO8_NwbNGz5t4w&_nc_ohc=Ocol-nK8EdEAX-l1O7M&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBGShV7ZhGX2ki4kLDFJmDiEvDISMpixDnkSUOY0hqRqA&oe=6493F60A",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350018853_646804956893723_8121055502840645618_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF64LSnB254UAM8O9XIcskXkP7VeAXCAJ2Q_tV4BcIAnS84FcgdfbWHhJrx5dukojtv48CPIRmDRU6K5zjUbI2y&_nc_ohc=6vNQTfIM9P0AX8EmzRG&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBovDy3pFhQA0WSkQb0O6oLLLnusD_uNDqPy0p912fi-A&oe=6494A791",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350130158_913726399688312_2740690852355571192_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG1rLaCgBcgzxXaYB1jo_u1lKaN-z2r8wGUpo37PavzAZVns1Vcbq1ToYGn4odznUwwnKDI6fJas0FkvwrDpfFE&_nc_ohc=jdYecKeh_oUAX8OeYTY&_nc_ht=scontent.fotp3-4.fna&oh=00_AfB6CMtPLMw3fKf57A_IpWjW7lulVclU57zcDhOInYCyFg&oe=64933E09",
    ],
  },
  {
    model: "Skoda Octavia Laurin&Klement",
    id: "865186534",
    year: "2017",
    price: 16890,
    currency: "€",
    km: 232800,
    engine: { type: "2.0 Diesel", horsepower: 150 },
    transmission: "Cutie Automata DSG 7+1",
    emissionStandard: "Euro 6",
    options: [
      "DRIVER ALERT - detectarea somnolenței",
      "DRIVING MODE SELECT și DCC-ADAPTIVE DRIVING CONTROL",
      "FRONT ASSIST cu ACC până la 210 km/h",
      "LIGHT ASSISTANT (COMMING HOME, LEAVING HOME, TUNNEL LIGHT, DAY LIGHT)",
      "Control automat al distanței (cu urmărire până la oprire) și limitator de viteză",
      "Asistență la pornirea în pantă",
      "Asistență frontală incl. City ANB pentru ACC mare",
      "Lane Assist cu ghidare adaptivă pe bandă + asistență în caz de urgență",
      "Sistem de reglare a înălțimii farurilor, automat/dinamic cu lumină de viraj (AFS 1)",
      "Cu recunoaștere a semnelor de circulație",
      "Monitorizarea presiunii în pneuri",
      "Control al intervalului de ștergere a ștergătoarelor de parbriz cu senzor de lumină/ploaie",
      "Asistență laterală",
      "SMART LINK (fără drahmă pentru Apple)",
      "SOUND SYSTEM CANTON",
      "2x USB față + 2x USB spate",
      "Business Columbus",
      "DAB - recepție radio digitală",
      "Telefonie de confort cu LTE și încărcare wireless",
      "Navi Columbus + Web radio",
      "Control vocal",
      "KESSY FULL, inclusiv sistemul SAFE",
      "KESSY FULL cu alarmă și sistem SAFE",
      "Aer condiționat pe 3 zone",
      "Conceptul gazelor de eșapament, EU6 AP",
      "Automat. Sistem retractabil de curățare a farurilor",
      "Oglinzi exterioare cu funcție de memorie, cu reglare automată a intensității luminoase pe partea șoferului, pliabile/reglabile electric, încălzite separat",
      "Climatronic (cu 3 zone) cu panou de control al climatizării spate",
      "Sistem de alarmă antifurt, monitorizare interioară, avertizare sonoră de rezervă și protecție la remorcare",
      "Airbag pentru genunchiul șoferului",
      "Ancoră de ancorare a scaunelor pentru copii pentru sistemul de scaune pentru copii ISO FIX",
      "Airbaguri pentru cap, inclusiv airbaguri laterale față și spate",
      "Faruri de ceață și lumini de viraj",
      "Sistem de apelare de urgență eCall+",
      "PDC + MANOEUVRE ASSIST - Senzori de parcare față și spate cu funcție de frânare automată",
      "Airbaguri laterale față și spate, cu airbag pentru cap",
      "Parasolar cu oglindă de machiaj și iluminare LED și scut airbag",
      "Sistem Start/Stop cu recuperare",
      "Lampă spate TOP LED",
      "Faruri full LED TOP cu funcție de fază lungă cu matrice, inclusiv efect de întâmpinare",
    ],
    imgUrl: [
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349793640_154489457484528_629633180104695415_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGJXdRy7Gt9yUXPaGdnASiHUYf_z7R8_oNRh__PtHz-g21rGFUtaIwLO-kuUfwCx5CaFWLzVdlE3yFH9f4B9V27&_nc_ohc=qFLEKcpLfeAAX9z_6GS&_nc_ht=scontent.fotp3-4.fna&oh=00_AfB1RPi2ZhzCdFlIL2gwjWZsVh243Sqa5isIt5BfbJjt1w&oe=64945C30",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350295012_629846059055592_4794492871997284531_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEBLl-TJgfkYy9l5o6T3l78w-tWtChKR_zD61a0KEpH_nypbm1GFnYt46szdM-UsKcgB50huuJQ6VYFLCWpV9K&_nc_ohc=4xU9SydacncAX8OfQg_&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAWhnThAjaxym6y05B3uRLxOiLN16X62B3qZlULMtB4tA&oe=6493A329",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350295012_629846059055592_4794492871997284531_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEBLl-TJgfkYy9l5o6T3l78w-tWtChKR_zD61a0KEpH_nypbm1GFnYt46szdM-UsKcgB50huuJQ6VYFLCWpV9K&_nc_ohc=4xU9SydacncAX8OfQg_&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAWhnThAjaxym6y05B3uRLxOiLN16X62B3qZlULMtB4tA&oe=6493A329",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350114083_797032511742837_8684319687911669854_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFqAWYIt8iAheIRaKniFi1eDBOWAHmWsbUME5YAeZaxtZHTjTrrU2S8xo7In6elmOPRQIUnTIhsiAJ2DQiOD9F4&_nc_ohc=nwpyKzjMj4YAX_HR_Ds&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAmirjCtM23XUzSfOJwuvCX4BYCJNG5V6Z0h7jgXtiWWQ&oe=649445CC",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349774608_759839632501333_7721254619400508960_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGlPgSrMdHvAoBYrAwg9hKgfUrwZ0rzKgt9SvBnSvMqC8ZPIO4EqoBPR9HinCuCtCJfmqxXbexgUsApH-IZDRfd&_nc_ohc=FW2-EBv3Xr4AX8RyEba&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBVhGYyphS8LWsdjK8_DagLIMYhJr-oJhZ_rIAE_QZ28A&oe=64947D4E",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349803943_3453401298231818_1637397932169760468_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHvN0-dIgv_bBunGNPfEiVcvvMISO0wlI6-8whI7TCUjmJbEt7tNoxx5Is6dxeF_4xBwy15abftcT-PkoRBCd5s&_nc_ohc=Xn1Vt6vqF0EAX8fFS-G&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAi20K9z9w2IfVEUDu0ZkxwDdbcWJ3GTn8X8fIMdGGFjw&oe=6493AAD7",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349958217_556079533364889_1220646632334953027_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEk0y53mR1u2SMOy36EzZs2yqRm5iBBFXfKpGbmIEEVd0iu_IuxR1pQR6Sk9j2WrO5By028ZeiPQmxJPn2ZKOPs&_nc_ohc=oKFXKBVbUNwAX_Soqa6&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCYCTuwAMxUNGostVjmSwm9D4nTkH0rLe9Pf-az5DaRdA&oe=64932F1B",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350135694_271260015289081_8119778747709574710_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeER68h2HPICb08e0qXfZ8hNxgP60X4AP5vGA_rRfgA_mxBKbDcQ77Ew4UlxIfOcrDVyybI0n0BDjsBN4FZcdlI4&_nc_ohc=MlbniF904D0AX_PI-4x&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDvS8KpDX8ZRwKZlOBSimpqjo41o_kln6tM6xVdXyb1ww&oe=649441C8",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349936831_1305130190384276_1564534779014474318_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEEX3zn7nbw3EAJHzjYgeT_HKzGJmpW56scrMYmalbnq36NB_clNSopQI2B224Dt2ktv_hFsRK94nHuBPAM4wOt&_nc_ohc=10-KunuO8DEAX-0MPu1&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDqYhavdPm5jcrB0wYCuzePKE9mFN2uJrvbXFP3URZ-nQ&oe=64947F34",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349936831_1305130190384276_1564534779014474318_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEEX3zn7nbw3EAJHzjYgeT_HKzGJmpW56scrMYmalbnq36NB_clNSopQI2B224Dt2ktv_hFsRK94nHuBPAM4wOt&_nc_ohc=10-KunuO8DEAX-0MPu1&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDqYhavdPm5jcrB0wYCuzePKE9mFN2uJrvbXFP3URZ-nQ&oe=64947F34",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349927234_759356862553943_9117264313787154838_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHwR2CrSNVWnwQZeybmMc9B6b6pDN2a8qnpvqkM3ZryqVGsiAuj9QTJzDWEq4wt_pAdf_MTTlfMrdBW7wBc4lAP&_nc_ohc=hlgVf0_y6iYAX_G6NiK&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCI13hAgKjAiv9zTr_arCT7sKE_aNkN-Sb1ig4n4apw_w&oe=6493E10A",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349943681_1401371577324205_6085955028010326581_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG2jmeqDa29TgdMLXHkUmsMl0r4V-Grv0iXSvhX4au_SEWtizovxcmF3c1C8Yf2aM7KYcMq1-EB7Tzx_Jb1NV8a&_nc_ohc=_JH1CXDt0oYAX8onDNt&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDeMZXf_aoJYdy67YLhrVbm1c20270cEcOVW5dpfoFI7w&oe=64932F60",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350137448_571537908426088_5502437640116863609_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFQDIEi-dLv3RG6erwhbOmqpo8gtoeITs2mjyC2h4hOzdOB335cEG4YMfeytdWkfmKeBf3gE0CBpwlhmECMHNL1&_nc_ohc=laeeuP2Agz0AX-jxS3n&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCrFwdYw644KFPJopJmUIeDKG13rv4XfRzVaLAHpbSvyg&oe=6493F910",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350137448_571537908426088_5502437640116863609_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFQDIEi-dLv3RG6erwhbOmqpo8gtoeITs2mjyC2h4hOzdOB335cEG4YMfeytdWkfmKeBf3gE0CBpwlhmECMHNL1&_nc_ohc=laeeuP2Agz0AX-jxS3n&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCrFwdYw644KFPJopJmUIeDKG13rv4XfRzVaLAHpbSvyg&oe=6493F910",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350125724_774137707699256_1531034974355355454_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEpyKQxWwNvbRtpkrqOCHKyoAjDTS7a6hWgCMNNLtrqFXVUTx2Ki48KPAeL7Lxh1WULP097H9u6xylEz2xVyXAP&_nc_ohc=aA-Ca4iP7B8AX-OvvVg&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAjWsYQmYNUw_6wi0QZLUC_3XXGG23EioPDiqt4ySCRPw&oe=6493C954",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349612318_497256579211929_4786425853064959805_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHBvqYx8kt2WFVODNeVZi8Xs2p0tiESeeCzanS2IRJ54G6LfpuV0DBRSwE6uKGtQkwjF8GoFp30elcUO-W61pvD&_nc_ohc=u1M1PsAPm04AX_4bKlX&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCP5yvQtrmG50f5TKsCfljuyhXEd-GoYt2frBogYYL6DA&oe=6492C8C3",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349612318_497256579211929_4786425853064959805_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHBvqYx8kt2WFVODNeVZi8Xs2p0tiESeeCzanS2IRJ54G6LfpuV0DBRSwE6uKGtQkwjF8GoFp30elcUO-W61pvD&_nc_ohc=u1M1PsAPm04AX_4bKlX&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCP5yvQtrmG50f5TKsCfljuyhXEd-GoYt2frBogYYL6DA&oe=6492C8C3",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350099528_3593811624278510_4331327099033522956_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGR-gSm0zn36I4pa4qjGGqIf1YcJOAyBBp_Vhwk4DIEGq0ulXLe98uJrk6q1IzhQErxlr9d68qpjlYg50r42lcU&_nc_ohc=DnvtLHiS0XYAX8YYNW7&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAJTOKcnPR2iuft4bmEvapMQ6mHnk_bmnMbLVw2mtPDMQ&oe=6494442B",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349110642_817016996515989_3072048666999138852_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHYMDPKzhZQonhVBVUkqY9rAVIRMT4kszMBUhExPiSzM04Ld3P_EKvA9xz5FISCe71rp-nPBS4_AsM8XE84uPiW&_nc_ohc=ALGAi8TEYnEAX_bC-5N&_nc_ht=scontent.fotp3-2.fna&oh=00_AfC39GytNkHNJAshcAWEkdAYt8ncoe_RC758d6jwEYdLag&oe=6492CA52",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350487672_614673377257118_7768008048655569014_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeERqa040K-i6Kto4LDUBbaRHdXNKyWtNkcd1c0rJa02Rxn4fXOPAKlntRpgi7f5Lf43gDY1n4kjZvakitw9b8aD&_nc_ohc=J7biCYsiOmYAX_g2jDp&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDg42Nd7gTXe4g9WZkRffK6kZUVB045UyAJKEk05jhI0Q&oe=6492EE24",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349866168_613681760731544_7224597210939858615_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGPsvrP4L8JVOp94aw16YWxEBeayBEmLuQQF5rIESYu5CkFeGdkp_c6hh-nvmtrltwqwqgaX9IWyR6qbg11Rfba&_nc_ohc=OZUBuZO6zSgAX8DS4uW&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCizPPb3MqI-EyCT_wu7AV-HZdsO3H2ZMHONqTKQCWukg&oe=649421F3",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350535480_262816179603083_6262987048776068319_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGgsjdCczI_Cd22S7eznOJnBT-EYmPQ-8QFP4RiY9D7xBYU8LSZcJF0hsHxn_naipilUxFepI_t6RHOIIwnlDIj&_nc_ohc=8XZZXwaoqhcAX9sLNF5&_nc_ht=scontent.fotp3-4.fna&oh=00_AfB4yuN1fCzemAlKKWoLzDh8EQSwrMTOe_4mHcmbYu1oLw&oe=64935798",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350535480_262816179603083_6262987048776068319_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGgsjdCczI_Cd22S7eznOJnBT-EYmPQ-8QFP4RiY9D7xBYU8LSZcJF0hsHxn_naipilUxFepI_t6RHOIIwnlDIj&_nc_ohc=8XZZXwaoqhcAX9sLNF5&_nc_ht=scontent.fotp3-4.fna&oh=00_AfB4yuN1fCzemAlKKWoLzDh8EQSwrMTOe_4mHcmbYu1oLw&oe=64935798",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350124967_188745180418783_692167072879381837_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFp9JiWM32JZ4XCjHECnBUfKilSYnWrLq0qKVJidasurUKcDf7rUy6f-B1vfsJRmtJL4KEo-VDDo2YThjw0iNW-&_nc_ohc=NCNo_MpJOHYAX9mPOXx&_nc_ht=scontent.fotp3-2.fna&oh=00_AfC2V1FNFP-ULYkehh-4h8RT2gh2wpb-KQY3XoNgjQjnNw&oe=64945CB2",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350327704_269962235506599_8032224562548276301_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHlPQRUbA0errR1k6uMVKMxfSEyAc0UFD59ITIBzRQUPhAvQZtVeqAxdqWylWAo5VRbPZUk_jwBL0pVj-yBZ0QB&_nc_ohc=kcM2PwBDAnUAX9HgOox&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCagPgyTO7w3br8jowsieYaIeB9j4FO0WMAMBQdIGwD8A&oe=6494AA75",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350115563_800334857962744_547913484529001896_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFizJlIywb4apXd7rHt5XpqydSHScI27LXJ1IdJwjbstdIh_eeby5o11r5HLWV7PPn02x5ovZKKY7NYSip9mC2_&_nc_ohc=dn1OBx1pXjQAX9-S8c2&_nc_ht=scontent.fotp3-2.fna&oh=00_AfA-tCjW2ovmO3Fj-G9_YOqJa-CmTtvpbGfGMZU4ijBmwA&oe=64941653",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350475048_1281079222822952_4000915667658908527_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFHRbT4igoEg-OWTHD_rV9npaj5uIeadsulqPm4h5p2y8DJf_Isdc_-5NF34KLKbh4FPUSOoI5uocIOkTVf8kPl&_nc_ohc=ZgJgJcLBV3IAX-UrL9-&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBukx7dWdLOZeeM3VtyVpGWlsB5X_IYuzonRg7xHR94Mg&oe=64933913",
    ],
  },
  {
    model: "Opel Zafira",
    id: "213452135",
    year: 2018,
    price: 12190,
    km: 222000,
    engine: { type: "Diesel 2.0", horsepower: 136 },

    transmission: "Manual",
    emissionStandard: "Euro 6",
    options: [
      "Pilot automat adaptiv",
      "Navigatie mare 950 Opel OnStar cu harta Ro + Europa in detaliu, actualizata",
      "Lumini de zi tip Led",
      "Senzori lumini",
      "Senzori de ploaie",
      "Lumini de citit in parasolarele fata",
      "Comenzi vocale",
      "Proiectoare ceata directionale",
      "Stopurile din spate LED fumurii",
      "Oglinzi electrice",
      "Scaune incalzite, piele partial + stofa",
      "Usi capitonate in piele Nappa + cusaturi in ata maro",
      "Barele pe acoperis argintii",
      "Geamuri electrice fata+spate, fumurii din fabrica",
      "Afișarea intervalelor de service",
      "Sistem de încălzire rapidă electric Quikheat",
      "Sistem de control al presiunii în anvelope",
      "Servodirecția adaptiva in functie de viteza",
      "Solar Protect geamuri cu protecție termică si fonica",
      "Bluetooth -transmiterea conținutului smartphone selectat, conectarea dispozitivelor mobile, streaming audio, funcție hands-free prin interfața",
      "Pachet crom exterior",
      "Pilot si asistență de parcare față și spate afisabil in bord",
      "Apple Carplay",
      "Android auto",
      "Volan cu comenzi incalzit electric, si reglabil pe inaltime si adancime",
      "Scaune incalzite electric pe 3 pozitii",
      "Sertare de depozitare sub scaunele fata",
      "Cotiere glisante fata-spate, cu suport de pahare",
      "Cotiera centrala cu spatiu de depozitare",
      "Lumini de frana adaptive",
      "Programul electronic de stabilitate (ESP Plus)",
      "Servodirectie care se adapteaza in functie de viteza",
      "Computer de la bord color cu sistem de verificare si control",
      "Airbag-uri frontale, laterale si cortina",
      "Senzori de parcare fata/spate",
      "Genti din aliaj usor cu anvelope de vara",
      "Sistemul de frânare antiblocare (ABS) cu control al frânării (CBC) și asistență la frânare (EBV)",
      "Sistem Start-Stop motor",
      "Asistenta faza lunga/scurta",
      "Camera care citeste indicatoarele rutiere",
    ],
    imgUrl: [
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349361160_203700282607004_2682968381651389728_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH1BHTcyuc0OKsdZRanj6t34Al6RQqbdX_gCXpFCpt1fwEldOgEvT9vZX7-a0ZVrXxUqHzcZsCOz0oPtQ0Rq2Lp&_nc_ohc=L_nOGbx0vYgAX-CVfmi&_nc_ht=scontent.fotp3-4.fna&oh=00_AfC3F5gINWpUha5fautRCC0GpyzBwEBiF-j6iTI_xF6TSg&oe=64934CC7",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350330899_897447101347309_6840258739906571865_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFLiLtuw2OZ96QOR6_0l8bBM2ZpLb_0zKszZmktv_TMq3U8QW4gWaR0zGGnIhMDOsDZF046F6E502bocc4w4549&_nc_ohc=17l9P9mwAYcAX_Mgzi_&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDxoEaWn4EcVfJr1PWHZKswiVGW3Wtw78iRiyfl4bciew&oe=64945629",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350302829_555746729968895_405299981746677352_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH6hY3ZKXuu9_jw7NAb4bUo0BSqTs3HKczQFKpOzccpzBxCaYMjEHpP8eG6LYlAm7zXzNgwsIuU6q45uDCLB9l9&_nc_ohc=y8t_r01uLhYAX9h4T-3&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDoxxOJwHI9vRrNY63M8iw7szuEJDgznkfLjX2fQitkUg&oe=649480F1",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349555296_1983338178707414_1484240261515777322_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeERe8HLjIt6wcctLuCTP-GDVXhnF-2rAR1VeGcX7asBHZdYndwyvqx7N-y19OE1ZehHuVrPVW_QwowtxAHbjxaR&_nc_ohc=5HU5ymuhi6cAX81wz9G&_nc_oc=AQnzT3vSebfM3x13jEKXN0iF4ENNf9CaGvSq7rbla99iOWf_K0elfi3lHluEBDk3nNQ&_nc_ht=scontent.fotp3-3.fna&oh=00_AfB6A3QKSH_zosIES2P_lNHRxenx-F3tMVqxEWgQLxGTOg&oe=649440E0",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350096720_1201709103870286_7784294905057409036_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHppL8_IySuC9cFoBPedwWpcaO0dFKAkGtxo7R0UoCQa2wz4FtUazR6KYMIwjdT9vbWA1dByasnm0LblHGzMZhh&_nc_ohc=AkqMjdUgGvgAX-4VzXg&_nc_ht=scontent.fotp3-3.fna&oh=00_AfB6bHev1qgiumPqV_-Fxs0-F0Bwuk-2hz85d6pPAVfXJw&oe=6493DB52",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350305222_644700670842253_1384443246337779718_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFYEgYGuEHQrjkK5uD6Y6QO5kZWBOWMZ_fmRlYE5Yxn95njbZrnNBHutaf_yxzae79fp6Lh1HR_NMugGzIo6eZq&_nc_ohc=lRedwyPvqXEAX_lFtPP&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCX0cQClGKXQa86CP59VwoC2HbXfVvjgMQ2qM68e39J8A&oe=6493D9B5",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349768537_1239934479977482_8647935763412072606_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGEBNtzNtNm7O09qnwxjmUnWzD-If3xNDZbMP4h_fE0NjEpKFQSwzmIeP3vzVY7P6F4sEqTQ5KiwWY8d2jJvr0q&_nc_ohc=s3Ji5wipZPoAX-zXyPq&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBw8jLSBjYcAm0eKW1KJqCuX2-jFv-Ml4xmb8EcmuQ3wQ&oe=6493F8DF",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350493911_842582750563109_2260637816556041119_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGTgYh9LBHx6WoirAzSbvmqCZACS7D8UqoJkAJLsPxSqmDik6kcWUIFfwnjkZ6nX4SP56wigUp_TTTeB-ue-He3&_nc_ohc=4wis2tqS9i8AX-nTpTW&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCVZf1c5XIT84VI9P_fgOxzyc1DImrBFRokLdsHQa6-yA&oe=64943CC7",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350493911_842582750563109_2260637816556041119_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGTgYh9LBHx6WoirAzSbvmqCZACS7D8UqoJkAJLsPxSqmDik6kcWUIFfwnjkZ6nX4SP56wigUp_TTTeB-ue-He3&_nc_ohc=4wis2tqS9i8AX-nTpTW&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCVZf1c5XIT84VI9P_fgOxzyc1DImrBFRokLdsHQa6-yA&oe=64943CC7",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349714484_1603386733487737_2762653607367879247_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEBHD6lOMmhtl7Iq1oplxwf45zXNOXmBovjnNc05eYGi9mHiqJKL-2VYQZ_Pt4_jIAaVLGzS5EOCM7ySjVTVkg9&_nc_ohc=c--QjpJ61-cAX9kwGl1&_nc_ht=scontent.fotp3-2.fna&oh=00_AfD-X3C5by_6AnHeBbmKyFv2PalDOS_eMTb9mqudXkHflw&oe=649496D2",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350527135_238525752139519_5426096715907575465_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHTzyYwzTV9jwqDaVWpVQhTL9SjkyHRBPsv1KOTIdEE-2PfO2_LxLbu8fb3xhL3tNh7lO78HPWaZF_QnsnpmCxm&_nc_ohc=m7gRMQyC8NIAX-a2wLb&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCrJtgSVI1EU8EyKZRXXDyJbLKRlnfCA0-LtFcMe-mQCg&oe=6493E3A6",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350495080_973210173812772_4954298077249707814_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHfnNg5-qHufH7rXc6IZgL8sPyNIBQz54iw_I0gFDPniJ-MpcWgsgv15pPa1cgLDY6rQVRHDC6hPqEkNUCysm9d&_nc_ohc=7u8XmO8xS1YAX-ukPT7&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBesbxNqJI-ZuGqan1NrgVkM8y8MEw7nPT100ZN4FS6hg&oe=64939512",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349781903_573777251458810_7041360965756915137_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFag63IG9xOCtR95CRD2if3TyjhbwPm_9hPKOFvA-b_2IGh71QeCF2kqfBebkjy0yXHRtdCu74JqfdMUV-l5T1H&_nc_ohc=4ksGchE2JvQAX9ocrMC&_nc_ht=scontent.fotp3-2.fna&oh=00_AfABZc64fE_Chf6FOwx9tp6XjZCi4tfgbQIZm4_Yknykiw&oe=64938B4F",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350266373_1824025818014498_7058275718929284580_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFX8eFAhloZ7eLrV_MmVb03cIKF_P6RAmVwgoX8_pECZUlLo4wO3Va9y7CSy_3vQQUGUgQe7Da6W0jzlY2TDpC8&_nc_ohc=_egsHJPBnr0AX-4e_MA&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAqZYJtynQK4rUoeyS3qR2iaCTBTAboEjIkucKMlg53xg&oe=64945A0F",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/347231866_633214485347523_1587659124100883719_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHFnhaSkaP7krYdcPw2ivSKBN039GhWOFsE3Tf0aFY4W6UqOdZtqmQjWNdOVqfoP7uzbGrEyftfArgmLmfG3VJN&_nc_ohc=qwpRl9K3OqUAX94Tww8&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAhDHktERWVpzE08O9ZnRx9IQU3eIKOuEmAmyutD3GqrA&oe=6493EA8E",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350143523_778853370564025_8921734887374680956_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGTDwfy7au_Y1W1B_RCkdx7KHylYQPSY80ofKVhA9JjzQYi9dZCLTaFAFvURCODxvcCZSQc0fekap679dtc0_8Q&_nc_ohc=j_Repp9LlwsAX-6P5sc&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDQ7ZMXudqT1mnxq1MqSqp6xcgpmhr437_zRZ3NkoE_9w&oe=6494A40D",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350262972_763320218688571_240233081014647996_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFrZpA__KRleaH5zdw-lPvZ55iyZm8fD7DnmLJmbx8PsOrQsxfPDcN1HWcildaW5LFVdT_9dnG5NgeiVKE6NeXl&_nc_ohc=kuqMqtYuaGAAX9xOCg0&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAzvK1jruQg9t5GMJWKtrA3pR19l-Yk1LQKk4vtb9QBGQ&oe=6493F293",
    ],
  },
  {
    model: "Volkswagen Tiguan",
    id: "2345324546",

    price: 7890,
    year: "10/2008",
    engine: {
      type: "Diese 2.0l",
      horsepower: 140,
    },
    km: 284400,
    transmission: "Manual",
    options: [
      "Senzori Parcare Spate",
      "Jante Aliaj / Anvelope Vara",
      "climatronic cu functie AUTO",
      "incalzire scaune fata",
      "proiectoare ceata cu functie CORNERING (se aprind la viraje pentru vizibilitate mai buna)",
      "faruri cu functie AUTO",
      "functie “Welcome home” + “Follow me home”",
      "lumini interioare LED",
      "frana de mana electrica + AUTOHOLD",
      "asistent plecare din rampa",
      "oglinzi heliomate electrice + incalzite",
      "oglinda interioara automata",
      "geamuri electrice fata+spate",
      "geamuri spate cu tenta fumurie din fabrica",
      "sistem isofix pentru scaunul de copii",
      "cotiera fata + cotiera spate cu suport de pahare",
      "torpedou refrigerat",
      "comenzi volan",
      "2x port SD",
      "port USB+AUX",
      "radio cd mp3",
      "Bluetooth",
      "computer bord multifunctional",
      "volan imbracat in piele",
      "PILOT AUTOMAT reglabil",
      "senzori lumina",
      "senzori ploaie + stergatoare automate",
    ],
    imgUrl: [
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349544185_646441834176412_5255974514729973572_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEhsLvGFt1AcUW_ltRjO_Jj1169NM7fD9vXXr00zt8P237KVABNEhHcE2KdC3pz_xRqI5cFs-SqE5JU7-poYeB8&_nc_ohc=ruxkNcq_xIQAX_bdgOH&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCLo-rgpHhcXpImSqVpItBVxlkDQhTi5f-5eS4M0Qx0DA&oe=64936B44",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349768520_205348118575213_5867277529507464462_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGTbwxLfOUfMjTFKdP_xNMaAsUSYxVcLiwCxRJjFVwuLAgNsXd41RXw7MruRyilhene60PZ6ductbzipautFDDp&_nc_ohc=r5cxptm4NiUAX8YGNJu&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDc2Lxjs73AYOBiTpNt2oKZOwQkvDYQUtmiO67FN92OjQ&oe=64930957",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349999205_1083940389308534_8968763986768727856_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE0x2iOvUuEp4BPORCIu2rJc7jeyyj6LaZzuN7LKPotpjDEE75hXEL7FwlCAS9hw7qzHfJ4tDTPjprJ46N1h4nE&_nc_ohc=vUDTTZhsn9cAX_sXYCU&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCAjRf0wZdFcslqNC26L_Wv5qmdoCy0Dnr2wFyIFvDNjg&oe=64948C2B",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349792843_243645648315106_4518609022551330543_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGUyy7Bgtb7KFF-zTjl4d0TiZb8UsqDHy6JlvxSyoMfLoSg2eZKPnRdB20bG1zBDYrKPhohijtSIaUe5MN_SIIc&_nc_ohc=2p2NqmNa_VUAX_Mjmwj&_nc_ht=scontent.fotp3-2.fna&oh=00_AfA2CEHrgAgyYAb6eWFVWovOqWdI-LSoQmP9AICZMejg6g&oe=64933AF9",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349511345_775988877340790_1054461879239194852_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH9vPnuh5E8ApB89X6Ccw8j0KsVU7XohxTQqxVTteiHFJw39eA8849SjAoNsefkAAq5io99eBwB87OP1RrfW1kp&_nc_ohc=eP2ZXCM0NPYAX9xgWTd&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCFAFZ9p9md73uYRfvN_PqCIugfZMusvsiB9pWOZwxL8w&oe=6492DA51",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350310464_206437312323312_8471340031315029313_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEplBNHglhXH1n4rdJq2Yw7o2TT96PU2PujZNP3o9TYz8eqyexEquolmIuwwMoQkZ78VeVvWQJraRPyvGRsony&_nc_ohc=Ugc4k5FprhkAX94bAKG&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDMTKnqqh7stLbt0j6N1dY1_pFvNFRuZWvq0KroM3LLCw&oe=649370E9",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349974967_630556952026738_3452059614782655898_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEkeTcCERyzzDgfEsUTfxDKlUTBB9pniSeVRMEH2meJJ_NwSr-dqdKmqXievps-mwUKB-0KVE3raNAt0M0oX3HE&_nc_ohc=Vr7ni5Qxcd8AX8_beVV&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCT5dp9kQ75aGXVxy9O27PH4i4ElRy4AnoID5tF5QaRhw&oe=64940E9A",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349974967_630556952026738_3452059614782655898_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEkeTcCERyzzDgfEsUTfxDKlUTBB9pniSeVRMEH2meJJ_NwSr-dqdKmqXievps-mwUKB-0KVE3raNAt0M0oX3HE&_nc_ohc=Vr7ni5Qxcd8AX8_beVV&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCT5dp9kQ75aGXVxy9O27PH4i4ElRy4AnoID5tF5QaRhw&oe=64940E9A",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349866554_977425736613864_8538096316248985262_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGwrYVxO1p7-ByJX1C8dEJtQrey67aZX6xCt7LrtplfrFV7swADmqUfSGu87VdSS9lcSOuQbj6NO04pEf71A6O1&_nc_ohc=eHqTU2OtTcwAX8Cx_Zb&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBeAeB05V4zhvFy692vupOYJAmePLxc1BStFLjeq3vo4g&oe=6492F893",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349931141_251328960834877_1926773891626946877_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFGrtdwQ3nDUR9xgvuT9PX-uwQscKXSnMC7BCxwpdKcwCEezDfVePTrRRH_tKqs0gtxOb-lJfc0qLb5qhisft5q&_nc_ohc=VJMHTMhdyvkAX_Q7xRQ&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCL3B4gl5H4ptWRH1pRBJbjXZjEh8jrgjR2d-FwCsWMiQ&oe=64931201",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349840593_707291947835295_3828168527898217289_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGa-xT4zLTi0smHmHtfadjC4rR7DSQ9mVbitHsNJD2ZVp80RdQdWv1bw6nOjp8FNNuPQ_XypakakKU2z3frWEJt&_nc_ohc=UpkOvjrVCFkAX8LPneb&_nc_ht=scontent.fotp3-2.fna&oh=00_AfA68vstUjw21sKYYx1nX4YgD56qDX1p66lg6OK0xyjC-Q&oe=6493ED82",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349734259_1047680896201995_5856748573089237230_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEbVyn73wKHres54opwEROw0ovltad7FlbSi-W1p3sWVrSxVyith_rUqDrMrjdeHcZbwH2WHvDM-DYte0I066JV&_nc_ohc=fvUnEm0XxgwAX91Thq3&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD64mIgEQUJlLP6wP-aSIPSSGOQWYnUkTMrAcE5ZeCM7w&oe=64949874",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349701310_1087501198873784_3964462177892979539_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGwqL0kQ_i9uNTkg_MaNArgSWmNMoF3jh9JaY0ygXeOHxVq-E50ELS4qKICBdwYZpyvMwd2ZAR8kqSE4ela2rGm&_nc_ohc=XCMpR7QC1U8AX_ZTpwZ&_nc_oc=AQnmrYAjEr9d8R10v472uWLomj3CLivJQ3OFmNtTcz2kCRdFczWegHYJKsv1O7gpbSE&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAatAkcjWAmEZvYsV0m7j1DvG2E6NaSAtPWb6KxcHS6ag&oe=649474F7",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350462386_213444257673104_8141863535039455767_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFCG-SyfhpCpilr_UYrXlvniuZXbpKqQGWK5ldukqpAZTcdarxFYopnOeoPNUNJ-XyoUjeUA_PtpTc1NjO9au6Y&_nc_ohc=MmKGQ_rAvCoAX_VnF9_&_nc_ht=scontent.fotp3-2.fna&oh=00_AfALNb1jpUrduk5cFZKr1oUBdSs6z_PhJ0HT3GCdmO8AMw&oe=64930E62",
    ],
  },
  {
    model: "Peugeot 508 SW",
    id: "326673544235",

    price: 5990,
    year: "11/2011",
    engine: {
      type: "Diese 2.0l",
      horsepower: 163,
    },
    km: 248000,
    transmission: "Manual",
    options: [
      "Panoramic",
      "Dublu Climatronic Functional",
      "Interior de piele Intretinut",
      "Oglinzi exterioare electrice",
      "Abs",
      "Esp",
      "Servo direcție",
      "Scaune Încălzite",
      "Senzor lumina",
      "Senzor ploaie",
      "Proiectoare ceata",
      "Jante aliaj originale R17",
      "Geamuri electrice",
      "Volan din piele cu comenzi",
      "Pilot automat",
      "Limitator viteza",
      "Computer de bord",
      "Start Stop",
      "Isofix",
    ],
    imgUrl: [
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349781331_265277419213772_7363178518581237607_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGvS9mWsX3PhfvhSZ-dRAB7NWr_B5KpDTY1av8HkqkNNvtD1lgKhADp-9FDQah5_GiM9V59bzWWi40ozz3RQWjO&_nc_ohc=1opFZqCRB2IAX922hPo&_nc_ht=scontent.fotp3-1.fna&oh=00_AfB5uw6XGCyK7ZUKR6rIit5z658nitzAhViHV70ZqbCPdg&oe=6493A4B4",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/350472190_1310917529800400_8945848035758607256_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGzhH7EvbGMo_p7p_gPu3ORlAiN7X10q0GUCI3tfXSrQTpJRxrHMvFmOZ13lfaoB_ne-dFlZ-U6fEiWXnKo4T4v&_nc_ohc=qU3hg7bZxIAAX9zNWxO&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBYeDYui7URoYaEW49-C9rKJboFSfG43FolUJKtsz7ZoA&oe=64945A00",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349914330_780778233674687_6671109693702406703_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFvQSah9xNTxbnqsfyAUDb5V44z-c8Y8chXjjP5zxjxyCGcxusXMZBZuEZmj8dH3S4EETtnWUgsXBTlbCVTJy0r&_nc_ohc=Ghrh7wGF8osAX__8wzd&_nc_oc=AQnBTKpwJKgkq9uSpDCODeXhBs-zOuDWJS5PAyQN9JF-kPwtJPkGCb8iq9L0XEYcess&_nc_ht=scontent.fotp3-3.fna&oh=00_AfClM0aWnxMqrp_vq7J5IDASwNGA4OT8ZTBipU0R_oi99A&oe=64932D1C",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349684326_3563056883941178_7106316499898785833_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG7kWbZNInivIyTdsyGn9dZKwOlxNomOQ4rA6XE2iY5DsEdZY5bjZaDY5jJWXir73HQcbQHbNTusCutnduecR3X&_nc_ohc=oT06amCLlIIAX_pjjiO&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBgVSEi0vsmBK9EHMjRaObP0pZLJVkrbZM1mQ7VuTdYzg&oe=6493994C",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/350345883_1817748198620107_6045675482490507934_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGJwGD3gqYLHzD_3RgYqtNsbR3qxqVsONFtHerGpWw40e5zK6uZ76Mm0g6nPloUmt_jYRY0FGN9pLRMUsAPoCeR&_nc_ohc=KNqClmIurt0AX_3c2DC&_nc_ht=scontent.fotp3-3.fna&oh=00_AfB5mIbcQlweqjfzu4vTVY2b6z8oJNn2WS9MIjrp1q3ViA&oe=6494A1A9",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349723532_3237427909737132_4266309927151677894_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEsTs4dkxoyuEE-JfAbgOXLmxp-7ScxLhCbGn7tJzEuEAXNsd7UijtUQYzb_oHj-KnEXbHobMuoiaO1QZryqWCk&_nc_ohc=_QNfV9IZsgsAX94Zfdp&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCEwbOvwdv8z6mQLglDjYKseoucgUVkU08fN57s8L4Yhg&oe=64934872",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350514443_2644576512357243_4433008844873639645_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGN0wRBJiAHDNrk1iSbFn2nFWLsr9D4YL0VYuyv0PhgvZev5f9kJBDTfRavWLq0gCuBUo5REHrSMmpNPJFyx3Hc&_nc_ohc=voWTg_hFd9oAX9FyGiL&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDtBEIDalfXTDsXWvZ_lGr83GHpQ9PSdEmtxqbz04H6SQ&oe=649378B8",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350531966_170287442423141_8128122015572146769_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH9NnfrNidacLvqjXYzR3lh_0INBTHtZM7_Qg0FMe1kzrX9d39--iTaINa433eDu5MMsRhZTXIaoo_k4peMAB3s&_nc_ohc=avIe_szKjK8AX-foQIO&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAXmltIx0kOWAT0_A3ajdZFBIHvLy2hZgIsmV-o3-yiIg&oe=64932DA8",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350531966_170287442423141_8128122015572146769_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH9NnfrNidacLvqjXYzR3lh_0INBTHtZM7_Qg0FMe1kzrX9d39--iTaINa433eDu5MMsRhZTXIaoo_k4peMAB3s&_nc_ohc=avIe_szKjK8AX-foQIO&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAXmltIx0kOWAT0_A3ajdZFBIHvLy2hZgIsmV-o3-yiIg&oe=64932DA8",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350531966_170287442423141_8128122015572146769_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH9NnfrNidacLvqjXYzR3lh_0INBTHtZM7_Qg0FMe1kzrX9d39--iTaINa433eDu5MMsRhZTXIaoo_k4peMAB3s&_nc_ohc=avIe_szKjK8AX-foQIO&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAXmltIx0kOWAT0_A3ajdZFBIHvLy2hZgIsmV-o3-yiIg&oe=64932DA8",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349561830_1005003650660150_8724372267176306150_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHFc2NL_11jGCyODsJ02-viFqNGlAj9KiwWo0aUCP0qLEU4puaCwA2SfTbeqZtiQFfDCon9vLEYWzacIhrG7uhC&_nc_ohc=FLinrL6Cv3QAX9kFhnu&_nc_ht=scontent.fotp3-3.fna&oh=00_AfALrR8rA-dhSS-my_uL84iPro6V-IATouXXLxScFi_7eg&oe=64935DDD",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349561830_1005003650660150_8724372267176306150_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHFc2NL_11jGCyODsJ02-viFqNGlAj9KiwWo0aUCP0qLEU4puaCwA2SfTbeqZtiQFfDCon9vLEYWzacIhrG7uhC&_nc_ohc=FLinrL6Cv3QAX9kFhnu&_nc_ht=scontent.fotp3-3.fna&oh=00_AfALrR8rA-dhSS-my_uL84iPro6V-IATouXXLxScFi_7eg&oe=64935DDD",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349561830_1005003650660150_8724372267176306150_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHFc2NL_11jGCyODsJ02-viFqNGlAj9KiwWo0aUCP0qLEU4puaCwA2SfTbeqZtiQFfDCon9vLEYWzacIhrG7uhC&_nc_ohc=FLinrL6Cv3QAX9kFhnu&_nc_ht=scontent.fotp3-3.fna&oh=00_AfALrR8rA-dhSS-my_uL84iPro6V-IATouXXLxScFi_7eg&oe=64935DDD",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349561830_1005003650660150_8724372267176306150_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHFc2NL_11jGCyODsJ02-viFqNGlAj9KiwWo0aUCP0qLEU4puaCwA2SfTbeqZtiQFfDCon9vLEYWzacIhrG7uhC&_nc_ohc=FLinrL6Cv3QAX9kFhnu&_nc_ht=scontent.fotp3-3.fna&oh=00_AfALrR8rA-dhSS-my_uL84iPro6V-IATouXXLxScFi_7eg&oe=64935DDD",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349561830_1005003650660150_8724372267176306150_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHFc2NL_11jGCyODsJ02-viFqNGlAj9KiwWo0aUCP0qLEU4puaCwA2SfTbeqZtiQFfDCon9vLEYWzacIhrG7uhC&_nc_ohc=FLinrL6Cv3QAX9kFhnu&_nc_ht=scontent.fotp3-3.fna&oh=00_AfALrR8rA-dhSS-my_uL84iPro6V-IATouXXLxScFi_7eg&oe=64935DDD",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350031641_1010470350304071_3401764407714488241_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF6HWR5MdBgNzymxryrXum4BkJhjXzHTIYGQmGNfMdMhrE2-S74bDPmQLWkO5Ew0HtNtCmN8QfdF1plRAJaC41G&_nc_ohc=gamR2m_BqLgAX9qVm1n&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCK1p19C5DCjLjgyDfyKGpWwh_jFwG85j5Y9F0ndg2y-A&oe=64948C39",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350119929_209347521948456_5193435248380554292_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHzI4AXlyKNAJir1_rRCHrrjNG5Gfvm8YyM0bkZ--bxjFuImJ9QZCCLxEEELWkW-pssU5c0uoGYC8d09P7pJ-4R&_nc_ohc=6_65yQh_hDYAX-SD-n3&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCgMzobfeCSzq9nUYEFZrH8Jx7WxdTJ0vjQk_7pjft-UQ&oe=649384E0",
    ],
  },
  {
    model: "VOLKSWAGEN Passat",
    id: "456764567567",

    price: 3790,
    year: "07/2008",
    engine: {
      type: "TDI 1.9",
      horsepower: 105,
    },
    km: 289982,
    transmission: "Manual",
    options: [
      "Dublu Climatronic",
      "Interior Textil",
      "Scaune Încălzite",
      "Oglinzi Încălzite",
      "Oglinzi Electrice",
      "Senzori Lumini",
      "Senzori Ploaie",
      "Pilot Automat",
      "Volan Piele",
      "2x Chei",
      "Anvelope Vara 2021",
      "Geamuri Electrice fata",
      "Faruri Automate",
      "Proiectoare Ceata",
      "Leave Home",
      "Coming Home",
      "Cornering",
      "Cârlig Remorcare Detașabil",
    ],
    imgUrl: [
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/350119929_209347521948456_5193435248380554292_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHzI4AXlyKNAJir1_rRCHrrjNG5Gfvm8YyM0bkZ--bxjFuImJ9QZCCLxEEELWkW-pssU5c0uoGYC8d09P7pJ-4R&_nc_ohc=6_65yQh_hDYAX-SD-n3&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCgMzobfeCSzq9nUYEFZrH8Jx7WxdTJ0vjQk_7pjft-UQ&oe=649384E0",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349306466_205511608979492_6479014286415508159_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZuGeNW8ShordWv0FVgveaI9yX_xQBrFMj3Jf_FAGsU8V9LPJL3tDgW16NGpt3qMY4tfd1qOxd3caBv7Mb0xO7&_nc_ohc=YM2nNondF9EAX9iICaO&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCa15iwDUrc9dBaiqnrZBptPkP89geZecEnQiLFuHEbZA&oe=649382A2",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349314428_283434150776432_3574530029747094520_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGQ2FAF-ZKsQAorLD4XuGiPg1SQtdFTicKDVJC10VOJwlO5OX4ewO06uguN72JDOW1T1poFXosJ5elJi2bAJCyH&_nc_ohc=iS-eO5yzgdwAX-dsNaX&_nc_ht=scontent.fotp3-3.fna&oh=00_AfClks9T7iczzem6kiVa4v62La5u5JNFwG3JoNeqgnGoeg&oe=64931D0B",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349314428_283434150776432_3574530029747094520_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGQ2FAF-ZKsQAorLD4XuGiPg1SQtdFTicKDVJC10VOJwlO5OX4ewO06uguN72JDOW1T1poFXosJ5elJi2bAJCyH&_nc_ohc=iS-eO5yzgdwAX-dsNaX&_nc_ht=scontent.fotp3-3.fna&oh=00_AfClks9T7iczzem6kiVa4v62La5u5JNFwG3JoNeqgnGoeg&oe=64931D0B",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349693492_615013677232172_1574313157321254152_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGtul_jkqEVAB1TeKVcwmlhD7fkXojM7BIPt-ReiMzsEkRiiZcDBIVX849Rm52rPbaR-fbgMEWI-4UskJ8KSdhv&_nc_ohc=Y_dEYzaoBggAX8P-KKu&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAKOh7R0LDN1hSIzo9VcU0ZZzXmf1FKX430LWV57FS-KQ&oe=6493B183",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349298516_640062830997376_8324522054597125973_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEcaccbJhCd51-NdVOgul4Lzs0B8_yAFRrOzQHz_IAVGlAgR7RXzr9pWINMENlCSZfFqsB2jK9996FL4zXQsg_R&_nc_ohc=diBTGqz3m0MAX8Ny1Mw&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDvuQPpHtbgs_VeAm1qgfduZnsj__9c4v0dQdPuerLAnQ&oe=64933658",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349191030_621842189864809_182639627517233005_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHL8rRV8XR-IVkUn2J9AmL477lv5Jt3tWjvuW_km3e1aFhGEwH0OBMlSiwjtTVS8PhuxRKcGb5I0B6F79yJN8iI&_nc_ohc=EgsCBHUKc-UAX-xEYQX&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDcsXUC-OAg8Y4DJ8h47bwc-voxVjIVqzZLRDJeHqkGOA&oe=649484FB",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349361911_991376278946803_6165780515827554010_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH9bQwJ04vOljuHYjQ8qtbycoeeGF9ZPF1yh54YX1k8XWzS-mQ74F2lm9khIyGr_5viXiusG_rjuxDcHDQ0QlL9&_nc_ohc=MlJpWOrcj7IAX92aha7&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBZ70kuINsUSnCJfWpfsC8kjFm1EFMHkoKCvzwpQUtECA&oe=64941E93",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349769146_1274483296505760_8044364314418705186_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeExpX2-8sQfLSv6Va9X-C6j-bk0wZ45YFX5uTTBnjlgVQKXa-otzadUvFpnMvvKrPpvMQ1nTUi9Xm6Y0Dn2WrD7&_nc_ohc=bfRF8hlZd1AAX_2snxx&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCwt5zhxy7iaVU5WOCoDtMUVr853pf1UAS6mY691M3lTA&oe=6494708F",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349540289_971703424032898_5842795341453237831_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHiAL83fVjUB2WAYMsmcIUR5HstZG7kh93key1kbuSH3cdLokTOvaTQ6LcMmsveJDMNobW3Jy19opipVB7jvo6G&_nc_ohc=PfbJGYhkaboAX_v_HjY&_nc_oc=AQnx8uIIAEsecVkfPv9jIDwy6nR91Lm5H319bX4qECog-7MLdyTUEtJEwi--rwNhAcA&_nc_ht=scontent.fotp3-3.fna&oh=00_AfD_NvR3Xir9AVLN9tGKBzO1h5mVZGpYFJTTPcxIirP4Jg&oe=6493C3C1",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349157512_991160718708295_9126591203251852863_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEa2gV5WfI_7APKVCH9QDcOjH4gZGcrhnOMfiBkZyuGczN6Q6UHByzadBKJMUL8BFYFQpJify3lQtaml2z4TaI1&_nc_ohc=QUvtQBBT4esAX89LTSa&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBsq9iCs4W2nIsJzsUg3PyQ6jKSk3AasLf0gSRO-c5EWw&oe=6494745C",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349146675_3439953292942780_6059664188268950210_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH4JV3bji8gMQgc6J-zVWY62ERwl6RxeYvYRHCXpHF5i-YAdCO0vKIuclDFFX5UzyTHmVptH6GGB67mo0fqZSEX&_nc_ohc=lutziJ8VPT4AX-HzqdM&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAFZ-mcxyb5IQlTzmp2NTVCZ6SriGTP0oX53M-1tLrung&oe=64940B05",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349150470_581487707302842_3091155902511960366_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeERZAfxvkM8ECdH9nekfEkN_tFzaIYmGAn-0XNohiYYCU61ikN2SelO5MwOq9ldILcd5IizEXIIMk5eV_TlHNQ9&_nc_ohc=Iwfnv80YASYAX9VrToF&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCIEXtNvi3pihRnZr7s74HJbZgtFcvMO8IV987kLedIZQ&oe=64949936",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349718001_229364546492789_1538938626851805746_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEO696yLpJX_y5fc7I0drS3eqGGX4Fux4h6oYZfgW7HiEDVaPB7Opt4hcn_9HGoifN3K70wF3hqmASm78NiK9bv&_nc_ohc=deSp7as582gAX_g4dNU&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDqr7qSuQKFEFuWJxLUtyAgV-qyBLjWrVv_dqiV5CGsKA&oe=64944B8C",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349721927_180815451603560_4206214520669979714_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG5qtPbXT2bdP_ecnQ6p21UkOBuftRbpgqQ4G5-1FumCtIl1buwcNDGk8yG7A5EfLxflTS-4q2-qFQcndy7Npeq&_nc_ohc=a_0WgET7AXwAX8Uy7bj&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAt3CrqTs9OJFljF_6d-EgvmzqVOmM2MFhG2xJ1UY0QMA&oe=6493DC00",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349322032_684863113402898_8544459651063254110_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEU0TeWEvTXMopcDsyZR5ryhScA_nkwzpCFJwD-eTDOkExOg5Y7E6T74fq-qRc0wtzOMN2a4FDrUOFmUEWprQri&_nc_ohc=xhRVzM4Z4ogAX8bOVKE&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDqYI2L09Lyh6VSv9tPB0ux861y1GRcgxxOiwv9aP_3lA&oe=64942E6B",
    ],
  },
  {
    model: "Ford Focus MK 3",
    id: "123454326",

    price: 6790,
    year: "05/2012",
    engine: {
      type: "Benzi 1.6na",
      horsepower: 105,
    },
    km: 212314,
    transmission: "Manuala",
    options: [
      "Scaune Fata Încălzite",
      "Parbriz Încălzit",
      "Bluetooth - Conectare telefon (comandă vocală), redare muzică",
      "Mufe USB și Auxiliar",
      "Volan multifuncțional din piele, reglabil",
      "Pilot automat, limitator de viteză",
      "Asistență la schimbarea treptelor de viteză pentru consum redus",
      "Controlul tracțiunii",
      "Computer de bord cu display mare",
      "Climatronic dublu",
      "Auto lumini, cornering lights",
      "Sistem airbag - frontale, laterale, perdea, genunchi șofer",
      "Senzori de ploaie",
      "Senzori de lumini",
      "Privacy Glass",
      "Oglinzi reglabile electric, încălzite",
      "Geamuri cu acționare electrică",
      "Sistem Isofix - fixare scaun copil",
      "Coming Home, Leaving Home",
      "Roata de rezervă",
      "Cotieră față și spate, cu suport pahare",
      "Scaun șofer reglabil",
      "Torpedo refrigerat",
      "Pachet crom interior și exterior",
      "Lumini ambientale interior",
    ],
    imgUrl: [
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349181073_270443515432494_5644236103997362560_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHnMpNkXVYJaUVnkLuKGjb1PUTmE_1thFc9ROYT_W2EVztVQUvhP4ipJwZ12qSDClvmXWr6NZT6DTj4PEFGk_5b&_nc_ohc=Cg8F2WOk0YcAX98o0p1&_nc_ht=scontent.fotp3-1.fna&oh=00_AfB7BAd21hhgfssTDBAvxih7uar9I__AkNo2xvy0EcZFhg&oe=6494B956",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349188666_6180913801975496_4499773993236314111_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHqiA6Q77xy3odsN9_JcvHJDmy2ygmE2-oObLbKCYTb6m2xrfU1P05MWtFv-Eh51DxFUDevz65yghHw3HCSc2xt&_nc_ohc=vZwVde4JYoEAX_9s03M&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDw2EIRDdKOa6MRueHeoPHzr67qbXkx8Aqv879kihNFlw&oe=6493060B",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349540310_253309267247484_3349312265285496472_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHCNLtd_-1uWK3ggZPUbd8Oeva9oD6GOfJ69r2gPoY58k38DoP-18WMCqND_xASceSvLwGvTgjSbeE94rywAjPF&_nc_ohc=2V19FFxzS_IAX-wNd_K&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAwJl9E751yUAfHp8dOF0QuKo_5g98a-6ev0G_XVvgDVQ&oe=6493CDBA",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349353246_277454008051002_2275967331118322446_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHXQRgl5PGjpGjsPkzpjJFV5X83_Y4M5Czlfzf9jgzkLFFWMVV8HsgRF3KrzZYK_QKKB4vlFyxMcN_x32YMf9QK&_nc_ohc=LCj6UprgzZAAX-LwFWV&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDxFPKoqPhC8co3-KRa4EFAvPREoXNUx7nf6aWYmE-SlA&oe=64938464",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349159263_1422183911848336_3465153013197936081_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeED4iiVH5hw5EzulMG3PvJM-8Kpp1TN7ur7wqmnVM3u6jZYe0eymRfl3O2TiLu1Ddd6Usm0y30jl-M91Ijsz454&_nc_ohc=1__m3loUyOIAX8kLFOI&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBTErtOk6SRbz75bndFcezZr_tSALGpSCMpbufdl-Q1Fw&oe=64938016",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/350010819_272691851873482_311747155558859917_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH0xHtWMNdHaiKF2UEw-jXNtzuKQBx8ABC3O4pAHHwAEAo7vdnB-68A-dmUQCjnJzBfllXLTpc3LpmQTosXJMBa&_nc_ohc=kPvKuwHFs4gAX9guNJm&_nc_oc=AQnnUsteYta01v91Jg7PKA6lMNqecRJzbpuZFNtr9y86b51zaVD7DUZcwE00iSEutpE&_nc_ht=scontent.fotp3-2.fna&oh=00_AfB9SlKj8kpuIvqvQSe0gJuw8zCMaMzWAj-d3WreTIOo8g&oe=64938AB8",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349175823_176556375067548_3623425854006341298_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFKwlauxckxqwzQ96wtYcpmyC7Ry8K56gHILtHLwrnqAfeQhl9k6dio2oQ9PvkLwS3uVXVIEkpWWULTH4Utxocq&_nc_ohc=ivd4NQgCWU0AX-jMEKH&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDVk_9-R-LSUCXLp4_cxtN_ELji38NK2wF1T3i4ZQklYA&oe=6493A89F",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349180786_259438379940976_3867820142846564372_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHWpzs7ks-ggJW473bpJrqbTOOoaxVsypVM46hrFWzKlZ8FGlMa5JgelKu6uma_ez1pnoQHoLpdjXVOHZGxQMlK&_nc_ohc=2lJFJwMDztUAX_7-F4P&_nc_ht=scontent.fotp3-1.fna&oh=00_AfA_Q29DG4xUGWtGj0ehEofLvToojq_rFWTtyKNj4ls2YQ&oe=6492D4F5",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349540256_256532543725145_133727430942484297_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHEKKIf-S7tAgXM0LOGWcHPyAdtrpcwSyLIB22ulzBLIruxbq21et1Xi6H6sDvmePNpLmXdsDOSzLMQzo1GbCs7&_nc_ohc=zbrO9Kfh0w8AX877ueD&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBgyGFz4nlL8v75YGZrZfcGSjpLbiiu2s9hzrETsSn1Lw&oe=6493D083",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349624625_973042027236525_2837990571799978909_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHy0vZ1SrNVnYZmmg9vSz9z4h3Fwdhxmh3iHcXB2HGaHZIqNhQTSDvsIflkie-B9wQKX6Q9dq0-rdS4tm8xUzwH&_nc_ohc=_YiWXDJDjckAX8wqrS3&_nc_ht=scontent.fotp3-3.fna&oh=00_AfD7pYx23gtEV5nRxPj1ePRipJniCijJzfrLBsKFe4PpGg&oe=64936020",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349321115_632735111764973_8973336431853165103_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF5vbpz4yQiKRllJN_wOIgJhajEwGnVWOiFqMTAadVY6G606AuBGCGnQFF5OEL9ja55XkFA2JqnCh4rfAWWlMmv&_nc_ohc=VRvU_zUDjkgAX_h71Bl&_nc_ht=scontent.fotp3-2.fna&oh=00_AfALZaz6biheBfJkfC0H5JwuTh0kYX4oPcMmcYszXL8GPg&oe=6493ED52",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349173773_224592626982741_5351670983257908208_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEOUUN-1AwuFvOZ-kn8_WNRUqufPPcfQMBSq5889x9AwJZFg3NohuOcY1K1jyTxpr2PrANXkmgxTYHr8XYms6Fo&_nc_ohc=V4z0ePtz5ScAX-Nn3tx&_nc_ht=scontent.fotp3-1.fna&oh=00_AfB6wv1-Sn_V1s-tOiWCVpJpyAJW1F4ScBbbApJdf9_mDQ&oe=6492CFE0",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349090407_1368587847037467_4284494823910148520_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPsZdRIciKox52ONrLM6J-uTLzCwp9G8q5MvMLCn0byqQquh_8vz2kqGr0WAC3HO1w_GC5UCYWiwDeJ55mRoil&_nc_ohc=CgtXoSx3pvMAX9JtMQE&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAetqSJg2xtdGhkN_wuWKHDxkwm7rD8VhDTqOE7aAcLDg&oe=64944CD2",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349090407_1368587847037467_4284494823910148520_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPsZdRIciKox52ONrLM6J-uTLzCwp9G8q5MvMLCn0byqQquh_8vz2kqGr0WAC3HO1w_GC5UCYWiwDeJ55mRoil&_nc_ohc=CgtXoSx3pvMAX9JtMQE&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAetqSJg2xtdGhkN_wuWKHDxkwm7rD8VhDTqOE7aAcLDg&oe=64944CD2",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349682742_1442718239867374_4199371933978653393_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHA9kgU5EX9_juPigqvoc5HXXjb85EFLvVdeNvzkQUu9edcz1fz15eRYdJoXgEcYnIzmnluvlurDQ0LlQM5OAeR&_nc_ohc=6g1bjw-3h_sAX88dIC8&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBDqvU6Hb1GGk0ero5woMGTCM2NnwsUcadXB6VApOZbGQ&oe=6493CAED",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349682742_1442718239867374_4199371933978653393_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHA9kgU5EX9_juPigqvoc5HXXjb85EFLvVdeNvzkQUu9edcz1fz15eRYdJoXgEcYnIzmnluvlurDQ0LlQM5OAeR&_nc_ohc=6g1bjw-3h_sAX88dIC8&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBDqvU6Hb1GGk0ero5woMGTCM2NnwsUcadXB6VApOZbGQ&oe=6493CAED",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349817494_670488974915101_8897383576036586628_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFUikCywzwVUSNswWz0Xumz12CygZZnazLXYLKBlmdrMrRL2eVQ_ahBDD2kh8h5L6-vgO_DIICYm1wNrSXlSdrl&_nc_ohc=-kcYHQRSWGsAX9MYYEp&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCeOiFXYqTSqduXO3iBvjh_0C4oB-W-OFBuHx2KNtM7Gw&oe=6494A381",
    ],
  },
  {
    model: "Renault Capture",
    id: "988564231234",

    price: 9490,
    year: "08/2016",
    engine: {
      type: "Benzi 0.9",
      horsepower: 90,
    },
    km: 192000,
    transmission: "Manuala",
    options: [
      "Scaune Încălzite Fata",
      "Lumini LED de Zi",
      "Sistem de monitorizare a puterii motorului, a consumului si economiei de carburant",
      "Sistem multimedia NOU: Sistem Bluetooth, USB",
      "Navigație mare cu touchscreen full Europa + Romania",
      "Buton ECO - Pentru consum redus de combustibil",
      "Keyless Go - Porneste fara cheie, trebuie doar să apeși pe butonul de pornire STAR",
      "Keyless Entry iti permite să încuie și să descuie mașina fara sa scoti cheia din buzunar sau din poseta - ideal pentru situatiile in care ai mainile ocupate",
      "Pornire – Oprire de la buton",
      "Servotronic asistat",
      "Jante aliaj originale",
      "Climatronic",
      "Computer de bord",
      "Volan multifuncțional din piele + comenzi",
      "Pilot automat (tempomat)",
      "Oglinzi electrice încălzite",
      "Geamuri electrice față și spate",
      "Faruri cu lumini automate",
      "Proiectoare ceață",
      "Geamuri atermice",
      "ABS",
      "ESP",
      "ASR",
      "Airbag-uri frontale, laterale și cortine",
    ],
    imgUrl: [
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349817494_670488974915101_8897383576036586628_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFUikCywzwVUSNswWz0Xumz12CygZZnazLXYLKBlmdrMrRL2eVQ_ahBDD2kh8h5L6-vgO_DIICYm1wNrSXlSdrl&_nc_ohc=-kcYHQRSWGsAX9MYYEp&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCeOiFXYqTSqduXO3iBvjh_0C4oB-W-OFBuHx2KNtM7Gw&oe=6494A381",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349984362_1291130178456417_3827169954264247117_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGLTG2hsqF7ZPp1ffz2OQ6_Okr7Cq5DoWE6SvsKrkOhYfOCETMZueikHfifnZ9EkJNiaSUicFcp2TW8QUQBtK2a&_nc_ohc=hK_dE0Q1LPIAX92E8kY&_nc_ht=scontent.fotp3-3.fna&oh=00_AfA9f7dG4t9lbYe59Wn-ZwlZTkWOh3OloTtD4CFtZRDRFQ&oe=64931DFD",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/348663580_260820456506142_7920560130697875513_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG0psbKpyEN36ZPU7FWhenLtSiO9P_j8zO1KI70_-PzM6c3nSj1gkqxdsI93gGHa67WliVCgeKT5U94CuAVVEBP&_nc_ohc=fNSWs1L827IAX8VIGK3&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCD4FqJowGFZP6uwd3o8Tpp2jYyzNMtvC6i3YovaV0-gQ&oe=649311C6",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/348903212_1041753223874682_3904614067183106962_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFt9HlL5RVasu_XS1v_NtdnswoVsRN_gvGzChWxE3-C8bh1CokDxjgzf0WehSRBYGe2ja9i47HtL8QKSBfnv9F0&_nc_ohc=OLl3fa3-uq4AX9af-K4&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDeHuI0u3_xfJb6R_0TPZDNiZuKnsJW1-ulFgJe4fZjLw&oe=64949454",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349128518_764905405170878_3582073686486380239_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE3YgaCx36jRX5AxwZSIh1DQElkCD3SvFhASWQIPdK8WE6x_zhc3J_fD1eawJlkuNYEA5k0asdUdbBv_Hv0jcxw&_nc_ohc=IMbSRqp9q8AAX9YNXSU&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBMkXqLD7kwwZMJb0ZKBFnfsuT66fYBuLGpJAKqINXSoA&oe=6492D364",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349128518_764905405170878_3582073686486380239_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE3YgaCx36jRX5AxwZSIh1DQElkCD3SvFhASWQIPdK8WE6x_zhc3J_fD1eawJlkuNYEA5k0asdUdbBv_Hv0jcxw&_nc_ohc=IMbSRqp9q8AAX9YNXSU&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBMkXqLD7kwwZMJb0ZKBFnfsuT66fYBuLGpJAKqINXSoA&oe=6492D364",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349128518_764905405170878_3582073686486380239_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE3YgaCx36jRX5AxwZSIh1DQElkCD3SvFhASWQIPdK8WE6x_zhc3J_fD1eawJlkuNYEA5k0asdUdbBv_Hv0jcxw&_nc_ohc=IMbSRqp9q8AAX9YNXSU&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBMkXqLD7kwwZMJb0ZKBFnfsuT66fYBuLGpJAKqINXSoA&oe=6492D364",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349128518_764905405170878_3582073686486380239_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE3YgaCx36jRX5AxwZSIh1DQElkCD3SvFhASWQIPdK8WE6x_zhc3J_fD1eawJlkuNYEA5k0asdUdbBv_Hv0jcxw&_nc_ohc=IMbSRqp9q8AAX9YNXSU&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBMkXqLD7kwwZMJb0ZKBFnfsuT66fYBuLGpJAKqINXSoA&oe=6492D364",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349147133_1006640313830320_4519830254006426177_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEQUPPho8ygP6sJr8qOegNeGApkkLgd4K8YCmSQuB3gr61WN--8fiVvGGam9t8LKTlIp23CZMO9Ydgv4ZA6wyAn&_nc_ohc=sLl2AUaFAX4AX_ObO1T&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDNYckuNODeW4mRvVAE6xtVM7FHchCTd89WTEI1jife0A&oe=64936C8E",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349147133_1006640313830320_4519830254006426177_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEQUPPho8ygP6sJr8qOegNeGApkkLgd4K8YCmSQuB3gr61WN--8fiVvGGam9t8LKTlIp23CZMO9Ydgv4ZA6wyAn&_nc_ohc=sLl2AUaFAX4AX_ObO1T&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDNYckuNODeW4mRvVAE6xtVM7FHchCTd89WTEI1jife0A&oe=64936C8E",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349147133_1006640313830320_4519830254006426177_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEQUPPho8ygP6sJr8qOegNeGApkkLgd4K8YCmSQuB3gr61WN--8fiVvGGam9t8LKTlIp23CZMO9Ydgv4ZA6wyAn&_nc_ohc=sLl2AUaFAX4AX_ObO1T&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDNYckuNODeW4mRvVAE6xtVM7FHchCTd89WTEI1jife0A&oe=64936C8E",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349186210_3311566959155274_633940116845850511_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFNLkMjbskRfMjUzSI69WYyosk5F3eRjhqiyTkXd5GOGu4EO-sY1L3o5ZljlXDH5XcKL09GsPyfI-FqOhkBNlcV&_nc_ohc=6zS6oaq4hOMAX9GknjQ&_nc_oc=AQmsT-iXot3ORb3H0mjXlAnnHPk79k5PT2jt6y-h2qm-UtbLpGyjNtXz0WG3yi4bkdk&_nc_ht=scontent.fotp3-3.fna&oh=00_AfC5uZGGBwEh3eUukg0gSe9Yqeo-dnUn0bOAXcxabC1Y7A&oe=64934B49",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349357716_261989989571305_6029816767425849312_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGHlymTa9W1yKNqErBkUCUBXE1u8OUgb31cTW7w5SBvfUVCL0slXPeMLjaXfgv7uyJdDTv7vE9htaY09yBIosiY&_nc_ohc=ijFcNH5lZ2kAX-Mi4K8&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAClyzhc-wzfnwayKR57iNpULlUeivcvvSUynaX45A3yg&oe=64931464",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349548223_603339894901538_2542064585680986434_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEI5wIisjr-HtpYmB4QnubaY85Fb3y37AxjzkVvfLfsDBxIChSFcNIa0834EmpQq64AI4n4q9ZI9K7hIQlEc5Kc&_nc_ohc=5lrY7gScOYgAX9BXYl3&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDyQ90Unbiazl6QvUfq8liryJrIJQ44Bp2VnxKj8S9Frw&oe=64948863",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349548223_603339894901538_2542064585680986434_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEI5wIisjr-HtpYmB4QnubaY85Fb3y37AxjzkVvfLfsDBxIChSFcNIa0834EmpQq64AI4n4q9ZI9K7hIQlEc5Kc&_nc_ohc=5lrY7gScOYgAX9BXYl3&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDyQ90Unbiazl6QvUfq8liryJrIJQ44Bp2VnxKj8S9Frw&oe=64948863",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349153520_649065350413002_7058325044125141396_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFS61kol_bZG3GvsJvEguDXWdboi58vR6lZ1uiLny9HqQFSQrTchenR07miPEFSLwGfS0wq7DpqhUd-L2B_n1r-&_nc_ohc=KOou-3ippjMAX9DzebM&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDfoomPse3gJkpR8Yo8qcCcKZM0nN8uiBSW-WWqT3a0ow&oe=64942CDC",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/349311449_1953378981678365_395344673992078899_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFMLJ6L8JteB58xUYtKlQYmRVykNnqzZVJFXKQ2erNlUpG2QBn8iYqiWy4Z5Sn3QdRTVh64AW7wcWFhPskiLAG7&_nc_ohc=8jlTA0MJlVMAX86lZzh&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCsvNNW2sVNuNZrKKZ54FVwm_0iXcVYK5fODs5S7p2C6w&oe=6492DFE0",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349779494_1095765071243901_23514113690788425_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFZkOt-0HxGkGBP9TOwCIHvYq8ASlRPBB9irwBKVE8EH9Lmhk1F-xqwqtfZlaZJwonIhasgGTLGpIgu5b-lBd97&_nc_ohc=Di259qTsANcAX9D2-Kf&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDb_v0kRLAbAaBG_XpPOAlDsqDjKyMaXwiFiO65HHf20A&oe=64946CA9",
    ],
  },
  {
    model: "VOLKSWAGEN Touareg Pachet RLine",
    id: "1238793456",

    price: 7990,
    year: "12/2007",
    engine: {
      type: "V6 3.0",
      horsepower: 225,
    },
    km: 283121,
    transmission: "Automata",
    options: [
      "Bi-Xenon",
      "Trapa",
      "Proiectoare Ceață",
      "Navigație",
      "Scaune Electrice",
      "SUSPENSIE PERNE",
      "Interior Piele",
      "ABS/ESP/ASC",
      "SRS Airbag-uri frontale, laterale, genunchi si cortina",
      "Servodirectie asistata electronic",
      "Geamuri electrice fata si spate",
      "Oglinzi electrice, incalzite si heliomate",
      "Senzor antiorbire in retrovizoare",
      "Inchidere centralizata din telecomanda",
      "Confort + Follow me home",
      "Climatronic pe doua zone functional",
      "Volan reglabil pe inaltime+adancime imbracat in piele",
      "Comenzi pe volan",
      "Pilot automat",
      "Limitator viteza",
      "Computer bord Maxidot",
      "Multimedia cu Mp3 + Aux + Bluetooth",
      "Scaune incalzite pe fata",
      "Faruri automate Bi-Xenon",
      "2 × Chei",
      "Torpedou refrigerat",
      "Cotiere fata",
      "Senzori ploaie",
      "Senzori presiune pneuri",
      "Proiectoare ceata",
      "Spalatoare faruri",
      "Etc",
    ],
    imgUrl: [
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349779494_1095765071243901_23514113690788425_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFZkOt-0HxGkGBP9TOwCIHvYq8ASlRPBB9irwBKVE8EH9Lmhk1F-xqwqtfZlaZJwonIhasgGTLGpIgu5b-lBd97&_nc_ohc=Di259qTsANcAX9D2-Kf&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDb_v0kRLAbAaBG_XpPOAlDsqDjKyMaXwiFiO65HHf20A&oe=64946CA9",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349779494_1095765071243901_23514113690788425_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFZkOt-0HxGkGBP9TOwCIHvYq8ASlRPBB9irwBKVE8EH9Lmhk1F-xqwqtfZlaZJwonIhasgGTLGpIgu5b-lBd97&_nc_ohc=Di259qTsANcAX9D2-Kf&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDb_v0kRLAbAaBG_XpPOAlDsqDjKyMaXwiFiO65HHf20A&oe=64946CA9",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349129941_570923008263376_6354017883776369022_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHU5eWbb9gp4YmAOj7lIFRWcYFFb4Et83pxgUVvgS3zeimgX7bASQMVtCccptonUnGgb6SILp24l-Xvz32zVsfb&_nc_ohc=v1SQAXLhKIgAX8Jav0F&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAwJ6sNKzOTKuSsM1fQyzrxnkUCm0vin5a8g_Z5QmIS8Q&oe=64940A71",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349129941_570923008263376_6354017883776369022_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHU5eWbb9gp4YmAOj7lIFRWcYFFb4Et83pxgUVvgS3zeimgX7bASQMVtCccptonUnGgb6SILp24l-Xvz32zVsfb&_nc_ohc=v1SQAXLhKIgAX8Jav0F&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAwJ6sNKzOTKuSsM1fQyzrxnkUCm0vin5a8g_Z5QmIS8Q&oe=64940A71",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349123720_954520475688072_8613800601367940100_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHVk0Tpvtp86WdMN9TfB16eX87W58Gj1kZfztbnwaPWRqs1dJX6ckPR8F0C5wChtYKVnRfYWsXk-zexScZ8HJ7t&_nc_ohc=zG-UCh4ttikAX8PAOaf&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAq3ILq2v4wrIjVnGDc4BlQxFJkshlIl6_XIvi-lbhw4w&oe=6493DAE0",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349101644_1035136570800234_7115886104338179219_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGU4LmciLYspt-6ymzg08oglVlSK3mPwlGVWVIreY_CUdu08RBcMKuc0dhvqLozZG1a36L20OgQhD_QD9oEtSj3&_nc_ohc=2u4TJyy8O7IAX9oePI9&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCDM7tEDh37PMmspkV6S_59JPvlivQRZ5qeQSoRes8gXw&oe=64947C29",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349101644_1035136570800234_7115886104338179219_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGU4LmciLYspt-6ymzg08oglVlSK3mPwlGVWVIreY_CUdu08RBcMKuc0dhvqLozZG1a36L20OgQhD_QD9oEtSj3&_nc_ohc=2u4TJyy8O7IAX9oePI9&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCDM7tEDh37PMmspkV6S_59JPvlivQRZ5qeQSoRes8gXw&oe=64947C29",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349100162_941908196859357_4713699535708186265_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEsle74xBsPdJliVWN-aodErdMtb6cLB72t0y1vpwsHvdW5C_-Du9rKkd95Jj9KwtLmxVS1VbmyVS2Tr6nWQ05g&_nc_ohc=56zdptLc6OMAX_ZZBDx&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDsY-nO6i009_LvPu2IBRyE6dx_TvPmGDfcmcOkpf0GRg&oe=6494530E",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349100162_941908196859357_4713699535708186265_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEsle74xBsPdJliVWN-aodErdMtb6cLB72t0y1vpwsHvdW5C_-Du9rKkd95Jj9KwtLmxVS1VbmyVS2Tr6nWQ05g&_nc_ohc=56zdptLc6OMAX_ZZBDx&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDsY-nO6i009_LvPu2IBRyE6dx_TvPmGDfcmcOkpf0GRg&oe=6494530E",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/349097611_1671741793239812_2881035554879129076_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHm_UGdQA1lyUB_f6bv-JZU7Vv_2enZ1zXtW__Z6dnXNVY5x_uVBMmY4fZJYy_ntaoeg8m9_qVfdqbkG3JGIZB8&_nc_ohc=4qgnlqYCq2gAX_z7KyV&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCI2yCG2FV3tyjRJ-Np5byn8OEcAPgRrVFeQdzClISxRQ&oe=64930520",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/348977082_1267848903822556_4027550221962476091_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZpghyVzvRhl8cMmtDhpS0i1YJSFwv9qiLVglIXC_2qAIX5QD3u7EkQqKe5nI4pMW7mE5N0E2jox_dUtS2qE5H&_nc_ohc=4dk7cMRaqRwAX8tqLLi&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBtzdPKYE-8oS2_DQ_a1ipjb2dh4U2XQ5orOVA9srOydg&oe=649435C0",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/348977082_1267848903822556_4027550221962476091_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZpghyVzvRhl8cMmtDhpS0i1YJSFwv9qiLVglIXC_2qAIX5QD3u7EkQqKe5nI4pMW7mE5N0E2jox_dUtS2qE5H&_nc_ohc=4dk7cMRaqRwAX8tqLLi&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBtzdPKYE-8oS2_DQ_a1ipjb2dh4U2XQ5orOVA9srOydg&oe=649435C0",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/348977082_1267848903822556_4027550221962476091_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZpghyVzvRhl8cMmtDhpS0i1YJSFwv9qiLVglIXC_2qAIX5QD3u7EkQqKe5nI4pMW7mE5N0E2jox_dUtS2qE5H&_nc_ohc=4dk7cMRaqRwAX8tqLLi&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBtzdPKYE-8oS2_DQ_a1ipjb2dh4U2XQ5orOVA9srOydg&oe=649435C0",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349132106_634904481987568_7192919810259783844_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGU3XCi8nWa_7U8T1Ue18BNSP5OJYxWo3dI_k4ljFajd0IwnSX-rtdXE97JzILRA9rz6Y7mM1RpoQDwvXeO7G6m&_nc_ohc=xVpPWgevMcsAX92_vXX&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBiYepPkDwSN_jXbnT_h8gDzHFiLF3IulMD8N-7g6bBlg&oe=6493CA8E",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349055721_789770612841955_4193629002307626726_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGfiO9sK4oFlvsTbbtOag_e_SLKLknV9BD9IsouSdX0EAKpsFVk48eCvGBHfsoHVGDUGY8Q58tXyIC5_V20APez&_nc_ohc=gi1Va_m2YEwAX-ZDHQL&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDDZsUhu96vUnl2wsRbKwqOhOGOTF9QE1lrNeisFpa-qg&oe=6494BE09",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/349003180_592636386266950_2706393528094810847_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFiZlzF5LxdWQjGjYyCvcOe86XLi53IUULzpcuLnchRQof-CzuB99dLWnqyWszSwA_B6HJuhbLSH7-OvDqox8db&_nc_ohc=HJ-hzw9pU1YAX9WdL1U&_nc_ht=scontent.fotp3-1.fna&oh=00_AfANXRgU_0_9sO-6Rv6p07mKUJ0tzb_uJiVFp2dsxV_-rg&oe=6494A911",
    ],
  },

  {
    model: "Audi A4",
    id: "123087456",

    price: 6790,
    engine: {
      type: "1.8 Benzina",
      horsepower: 160,
    },
    transmission: "manuala 6+1 trepte",
    year: "10/2008",
    km: 240000,
    options: [
      "Incalzire in scaune",
      "Volan multifunctional din piele cu comenzi",
      "Cruise Control (pilot automat) + Limitator de viteza",
      "Coming Home",
      "Interior Impecabil",
      "Leaving Home",
      "Proiectoare Ceata",
      "Conectivitate: Bluetooth / DVD - CD / USB / Aux-In / Card SD",
      "Climatronic",
      "4xGeamuri electrice",
      "Senzori parcare spate",
      "Oglinzi pliabile / incalzite / reglabile electric",
      "Senzori Lumina / Ploaie / Presiune Pneuri",
      "Start/Stop la Semafor",
      "Privacy Glass",
      "Comenzi Vocale",
      "Cotiere Fata/Spate",
      "Anvelope Vara",
    ],
    imgUrl: [
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348606299_1402918403800620_6576459129895547692_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG61PEr3UjqyFBEpXOxMfFO9efcxMTM9dr159zExMz12pwtW8DrqJZOqXUO3P2x2XGcyaGvswWM-3o3cDPTpFcf&_nc_ohc=BiVMAoulY5UAX-niNIp&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBTR0qUbDawJ9MQvvF9yqMNquIR8miblgb46JGmlMvggA&oe=64946286",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348606299_1402918403800620_6576459129895547692_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG61PEr3UjqyFBEpXOxMfFO9efcxMTM9dr159zExMz12pwtW8DrqJZOqXUO3P2x2XGcyaGvswWM-3o3cDPTpFcf&_nc_ohc=BiVMAoulY5UAX-niNIp&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBTR0qUbDawJ9MQvvF9yqMNquIR8miblgb46JGmlMvggA&oe=64946286",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348606299_1402918403800620_6576459129895547692_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG61PEr3UjqyFBEpXOxMfFO9efcxMTM9dr159zExMz12pwtW8DrqJZOqXUO3P2x2XGcyaGvswWM-3o3cDPTpFcf&_nc_ohc=BiVMAoulY5UAX-niNIp&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBTR0qUbDawJ9MQvvF9yqMNquIR8miblgb46JGmlMvggA&oe=64946286",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348606299_1402918403800620_6576459129895547692_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG61PEr3UjqyFBEpXOxMfFO9efcxMTM9dr159zExMz12pwtW8DrqJZOqXUO3P2x2XGcyaGvswWM-3o3cDPTpFcf&_nc_ohc=BiVMAoulY5UAX-niNIp&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBTR0qUbDawJ9MQvvF9yqMNquIR8miblgb46JGmlMvggA&oe=64946286",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348838273_266228442457334_218004993707289635_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHsMY7ziA39B6eRH6UQbYnLZpGsj_jixqVmkayP-OLGpaxbI6tpjEV9Ci_bPIbz0E_g-zCRW2unIwK4vD5HaW7e&_nc_ohc=ZHHJdHm7olcAX-F2tgm&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAljDxGjTmt_nEWPEYYZoOo2J24cnuJJHwmrm4TFWVVng&oe=64943156",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348830625_774103684171319_3499771411285115895_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGpHFo7PsrQWjVsNB_p6CZVZ6veShoADd9nq95KGgAN39dg306zCjTEw7NRHLy5XovOTRnuguk0f08cMEUywxDb&_nc_ohc=5B_tI5ewfekAX_YjyyS&_nc_ht=scontent.fotp3-2.fna&oh=00_AfAKsl7guTULUbIJ0O7EFwQkm_My1uZvCoo1RlFUORoacw&oe=64943C4B",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/348905006_805107537402829_2746759767898475290_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGy8yj_x7-9sKINOOybaGHO7kVsRiubFyDuRWxGK5sXIEeyJ_pV-M18W6DpD74wOYx_J-2qopeb1UsWMEOBB0bY&_nc_ohc=_gdiatlmuToAX-MO63n&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCVHUzLEwmxpBRR-AP0h7VxplyhHd39Ltr-LwocAWilrg&oe=64947414",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/348905006_805107537402829_2746759767898475290_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGy8yj_x7-9sKINOOybaGHO7kVsRiubFyDuRWxGK5sXIEeyJ_pV-M18W6DpD74wOYx_J-2qopeb1UsWMEOBB0bY&_nc_ohc=_gdiatlmuToAX-MO63n&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCVHUzLEwmxpBRR-AP0h7VxplyhHd39Ltr-LwocAWilrg&oe=64947414",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348901936_3083897501904926_8666953685734273767_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMTEw2FzKY9UjSZzAl1WAqMwgYZeyRBRIzCBhl7JEFEnGxcYgm-Y9LX-czeAKtwhySzU6I6cjYynHoiiIKkpd8&_nc_ohc=4RobYD_D2G8AX8lxXNV&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD9ImNXD2OSyJVdqoUsLgTUhQMDWgYWcopXtfMFVSqvKw&oe=6494B41F",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348901936_3083897501904926_8666953685734273767_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMTEw2FzKY9UjSZzAl1WAqMwgYZeyRBRIzCBhl7JEFEnGxcYgm-Y9LX-czeAKtwhySzU6I6cjYynHoiiIKkpd8&_nc_ohc=4RobYD_D2G8AX8lxXNV&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD9ImNXD2OSyJVdqoUsLgTUhQMDWgYWcopXtfMFVSqvKw&oe=6494B41F",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348901936_3083897501904926_8666953685734273767_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMTEw2FzKY9UjSZzAl1WAqMwgYZeyRBRIzCBhl7JEFEnGxcYgm-Y9LX-czeAKtwhySzU6I6cjYynHoiiIKkpd8&_nc_ohc=4RobYD_D2G8AX8lxXNV&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD9ImNXD2OSyJVdqoUsLgTUhQMDWgYWcopXtfMFVSqvKw&oe=6494B41F",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348901936_3083897501904926_8666953685734273767_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMTEw2FzKY9UjSZzAl1WAqMwgYZeyRBRIzCBhl7JEFEnGxcYgm-Y9LX-czeAKtwhySzU6I6cjYynHoiiIKkpd8&_nc_ohc=4RobYD_D2G8AX8lxXNV&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD9ImNXD2OSyJVdqoUsLgTUhQMDWgYWcopXtfMFVSqvKw&oe=6494B41F",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348901936_3083897501904926_8666953685734273767_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMTEw2FzKY9UjSZzAl1WAqMwgYZeyRBRIzCBhl7JEFEnGxcYgm-Y9LX-czeAKtwhySzU6I6cjYynHoiiIKkpd8&_nc_ohc=4RobYD_D2G8AX8lxXNV&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD9ImNXD2OSyJVdqoUsLgTUhQMDWgYWcopXtfMFVSqvKw&oe=6494B41F",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348901936_3083897501904926_8666953685734273767_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMTEw2FzKY9UjSZzAl1WAqMwgYZeyRBRIzCBhl7JEFEnGxcYgm-Y9LX-czeAKtwhySzU6I6cjYynHoiiIKkpd8&_nc_ohc=4RobYD_D2G8AX8lxXNV&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD9ImNXD2OSyJVdqoUsLgTUhQMDWgYWcopXtfMFVSqvKw&oe=6494B41F",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348901936_3083897501904926_8666953685734273767_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMTEw2FzKY9UjSZzAl1WAqMwgYZeyRBRIzCBhl7JEFEnGxcYgm-Y9LX-czeAKtwhySzU6I6cjYynHoiiIKkpd8&_nc_ohc=4RobYD_D2G8AX8lxXNV&_nc_ht=scontent.fotp3-1.fna&oh=00_AfD9ImNXD2OSyJVdqoUsLgTUhQMDWgYWcopXtfMFVSqvKw&oe=6494B41F",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/348655103_1662930957513378_1364373892951327366_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGKe-8lKKcz-DrDvik89uXhfw8fwMDnWWx_Dx_AwOdZbJCSZ4CIM5aZu9zPMiDictpFDNWxdQlkwxyapaz_mZjw&_nc_ohc=h_SvDT3nFnkAX9n5ZTO&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAk76nC3aga9E_PBtSx9tp-29mjpkY-JLdMUxY0gzl2pw&oe=649349D0",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348852586_117573291322726_503521754837794854_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHuoHdDO01FFJreowINRslJVKy8z_75ISxUrLzP_vkhLGPpnlsmWUO5bLODiqrXFa3X4n2HjYFMizMyGitj3cx4&_nc_ohc=HiCQV4Ql3DQAX96OvjD&_nc_ht=scontent.fotp3-2.fna&oh=00_AfCANH84RxKuf6izk_XcM4IjWqWgl-utX_ZsIdCtVdw44g&oe=649467A3",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348641590_664356605702358_6742299471642057977_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG3BiOIMRpbH9RNpCNZwKgr51BBGS0OofrnUEEZLQ6h-jX63jJUkxFaVsr8PPJgbXjMv6HdnJ-y4B_x7XYxOQXX&_nc_ohc=itFFxLx5Y2YAX8tKTL7&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCo8R11GUCRaw3y1O2ygFxWH5XLdz-bS8LJFd-oTBP-aA&oe=6493CAB6",
    ],
  },
  {
    model: "Dacia Duster",
    id: "112340987",

    price: 8490,
    engine: {
      type: "1.5 dCi",
      horsepower: 110,
    },
    transmission: "Manuala 6+1",
    year: "10/2014",
    km: 237500,
    options: [
      "Navigatie Originală",
      "Geamuri Electrice",
      "Bluetooth",
      "Interior Impecabil",
      "Scaune Încălzite Fata",
      "Aer Condiționat Funcțional",
      "Volan Piele",
      "Carlig Remorcare",
      "Jante Aliaj 16 Inch",
      "Jante originale Din Tablă cu Anvope Iarna 16 inch",
      "Lumini Zii",
      "ETC",
    ],
    imgUrl: [
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348825171_786818162857756_4730527256489622552_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEZV8sxwbDGfc98l7l1geYD3iBO-V5pDATeIE75XmkMBIaqBKYXsaMRi9DtRTBvQsoq0AH7KnVtLOX1H88lvYg5&_nc_ohc=GRIFw3YcIboAX9C00ka&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDA8wH-jymuC_CNoyfjcW3Hli9Ji7-cZ6cSy8vXtNWvwQ&oe=6492E6AA",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348825171_786818162857756_4730527256489622552_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEZV8sxwbDGfc98l7l1geYD3iBO-V5pDATeIE75XmkMBIaqBKYXsaMRi9DtRTBvQsoq0AH7KnVtLOX1H88lvYg5&_nc_ohc=GRIFw3YcIboAX9C00ka&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDA8wH-jymuC_CNoyfjcW3Hli9Ji7-cZ6cSy8vXtNWvwQ&oe=6492E6AA",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/348723565_282295557470252_3501499326579277117_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGv5prpSJ_vdrQVM1s25eHBjQFRRuV_lI-NAVFG5X-Uj6Vj9mbLjIU5d53JUe0_0xlmr1jX0dRUqzg9AuiRu3jr&_nc_ohc=N4OSnO97bmwAX-bk_wD&_nc_ht=scontent.fotp3-3.fna&oh=00_AfD0kZQfty8lqH0Np_bSqP4OZtVSaJFxc_yNvb0UZQy4pQ&oe=6492E42E",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/348599236_1680217412438324_1435237269673366034_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGkmKnIPfkUfsZAR1vYh9pHaDelXJ1_csNoN6VcnX9yw_BleGvpjFmrhvdXHCOQ72T76zZ1I3Kh2WE2fKyQ1BWw&_nc_ohc=WkxHUy-ncmEAX_lKdvX&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCMYVxrwu6tuDV68i8TfwwgjRUDvTkOSxwINRqwrkW7bA&oe=6493BE08",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348573318_793954568660396_7914581750774687343_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHp5KENXVFsmi4pTRfmrSRswDYEJ-xeabzANgQn7F5pvJq9117vKOTr9f27bBJKz90l82MwqT5mWjHZWvCXLhs9&_nc_ohc=A_9Oc8L87dsAX9AtHnw&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBilHk995RQlVjT5rY5KeblTEQuTelviN9kqca-utdfnA&oe=6492DA7F",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348573318_793954568660396_7914581750774687343_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHp5KENXVFsmi4pTRfmrSRswDYEJ-xeabzANgQn7F5pvJq9117vKOTr9f27bBJKz90l82MwqT5mWjHZWvCXLhs9&_nc_ohc=A_9Oc8L87dsAX9AtHnw&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBilHk995RQlVjT5rY5KeblTEQuTelviN9kqca-utdfnA&oe=6492DA7F",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/348573318_793954568660396_7914581750774687343_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHp5KENXVFsmi4pTRfmrSRswDYEJ-xeabzANgQn7F5pvJq9117vKOTr9f27bBJKz90l82MwqT5mWjHZWvCXLhs9&_nc_ohc=A_9Oc8L87dsAX9AtHnw&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBilHk995RQlVjT5rY5KeblTEQuTelviN9kqca-utdfnA&oe=6492DA7F",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348479974_222028517311113_3924686655964355386_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG57-Vx80x7R0sSDiAgUfySmHw9cKALBC6YfD1woAsELjWoEmuL7qL14E7ZkGmJ5vQnbPLe133OabLDla6j7PdS&_nc_ohc=OCUfDTQ1kJ4AX9MbMxz&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAYvOz2U0xoS4TvrTewUgxve6dwuXiwSYTPRasSfc_zKQ&oe=649438F1",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/348678071_610177857747652_1471428249308391762_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFREf59t7jlNb3jVJxRnnnp08AJTen8nHjTwAlN6fyceIXC5LTJXa2I9jjJ_6OaiP9ftwzsi5QTv1OTFw27tN92&_nc_ohc=m-5K7m-VAtsAX8ZdNf2&_nc_ht=scontent.fotp3-4.fna&oh=00_AfB-J5W1au41eYoJsv9aqNjhnex2gbdzwOCcXpz89VrzGg&oe=649385C1",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/348712643_574837124797213_7871434418845908360_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHr4X1JqtWsGmYxcIEU8w1ChhUrJdgFozOGFSsl2AWjMyRl6bd7uBT_G11Qz7i5Rv95U-EJayXNfohYnlGUjN24&_nc_ohc=dJyIZJ1GHoYAX-_2RUD&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAHyPoe1ksUqH6rGwCFdBjjD1rpE-2KNVmQnWb38VZyIQ&oe=64941CD5",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/348712643_574837124797213_7871434418845908360_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHr4X1JqtWsGmYxcIEU8w1ChhUrJdgFozOGFSsl2AWjMyRl6bd7uBT_G11Qz7i5Rv95U-EJayXNfohYnlGUjN24&_nc_ohc=dJyIZJ1GHoYAX-_2RUD&_nc_ht=scontent.fotp3-4.fna&oh=00_AfAHyPoe1ksUqH6rGwCFdBjjD1rpE-2KNVmQnWb38VZyIQ&oe=64941CD5",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/348440021_1373514253214329_8139501343447326144_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEgNHeFNdemOIYgDwsmPYhN92GzfcK0Z033YbN9wrRnTSdKK9NEsNULZFvb-Uwk9ZcDkTTodGRGD6Dvd_3fTbYu&_nc_ohc=ahEY_jB1oz8AX_C1H5F&_nc_ht=scontent.fotp3-1.fna&oh=00_AfA1NQXT40t2XSdWm0_c18k2LHWf8Nh_ZdRc2L9Pzp89rA&oe=6493BE11",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/348628388_788023839380521_4701072876508070532_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFXpIDbbzW-ojVdSUQwJsHomAMZx_KhIRWYAxnH8qEhFVG0HYGrNZR_JZXamSVTC-DEdh_yZud-XOFM2K5GeXoP&_nc_ohc=fMOn4Cn6VMUAX-m_FY_&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAcraH95SnUbMS7qCa_AjI84syRvEtBzGWcdYS3oiaAKQ&oe=64944D53",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/348628388_788023839380521_4701072876508070532_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFXpIDbbzW-ojVdSUQwJsHomAMZx_KhIRWYAxnH8qEhFVG0HYGrNZR_JZXamSVTC-DEdh_yZud-XOFM2K5GeXoP&_nc_ohc=fMOn4Cn6VMUAX-m_FY_&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAcraH95SnUbMS7qCa_AjI84syRvEtBzGWcdYS3oiaAKQ&oe=64944D53",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/348628388_788023839380521_4701072876508070532_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFXpIDbbzW-ojVdSUQwJsHomAMZx_KhIRWYAxnH8qEhFVG0HYGrNZR_JZXamSVTC-DEdh_yZud-XOFM2K5GeXoP&_nc_ohc=fMOn4Cn6VMUAX-m_FY_&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAcraH95SnUbMS7qCa_AjI84syRvEtBzGWcdYS3oiaAKQ&oe=64944D53",
    ],
  },
  {
    model: "Seat Leon Facelift",
    id: "1235460986545",

    price: 5990,
    engine: {
      type: "1.4 TSI",
      horsepower: 122,
    },
    transmission: "Manuala 6+1",
    year: "2010",
    km: 211485,
    options: [
      "Navigație",
      "Cruise Control",
      "Aer Climatic",
      "Scaune incalzite",
      "Radio CD",
      "Geamuri electrice fata-spate",
      "Oglinzi electrice|incalzite",
      "ABS/ESP",
      "Computer bord",
      "Interior textil fara deteriorari",
      "Daylight",
      "Jante Originale /Anvelope Vara",
    ],
    imgUrl: [
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/346295674_248831581147377_3582574136016158936_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPIoXDZgIi2ffsyWAkQ4A1b4QeA_xh6MFvhB4D_GHowdHCxaW82-usWXGINA5Xzpq1j5Ib0aFX2016tCn_wIl8&_nc_ohc=s8B__sul7_EAX8qNLEo&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBdDM4dS9kzAJ7zZsPmXbWeQkKepXV4FkKbcZqYz5YGGA&oe=6493B709",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/346295674_248831581147377_3582574136016158936_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPIoXDZgIi2ffsyWAkQ4A1b4QeA_xh6MFvhB4D_GHowdHCxaW82-usWXGINA5Xzpq1j5Ib0aFX2016tCn_wIl8&_nc_ohc=s8B__sul7_EAX8qNLEo&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBdDM4dS9kzAJ7zZsPmXbWeQkKepXV4FkKbcZqYz5YGGA&oe=6493B709",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/346481507_617619130430786_3420985995997818232_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMzPWtoH0RF-15Vc8k7pvH47t69YReH7fju3r1hF4ft6IOzWncIbTuFNLO00dL27qrtcksUJpKQSBNsjr7YR1O&_nc_ohc=amGWMx88OgkAX_c9vKW&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCmTkP1nzyLtOP9nZEzu5yjEjszmAkeONkOENClDbm2yQ&oe=64940079",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/346476624_273045915064037_4394715674686400300_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFx9tK_wU__YK_d_gdjKFreVAPNP-cE-etUA80_5wT566Zs-rG0nFr6rLbbBRMOu4bDmYsegV7nSgaka0Xy1rLA&_nc_ohc=kbwt9_Ma82UAX-0cieH&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBryXY-TZ-EUB-QlkTdd84bBbOefC6eJMk2JCKmwPUiZw&oe=649391B0",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/346476624_273045915064037_4394715674686400300_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFx9tK_wU__YK_d_gdjKFreVAPNP-cE-etUA80_5wT566Zs-rG0nFr6rLbbBRMOu4bDmYsegV7nSgaka0Xy1rLA&_nc_ohc=kbwt9_Ma82UAX-0cieH&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBryXY-TZ-EUB-QlkTdd84bBbOefC6eJMk2JCKmwPUiZw&oe=649391B0",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/346305920_696297022254348_7834177301366253368_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHjDK5eT4j2u86z2hEQ_mcxaZMID1ZqyClpkwgPVmrIKeN3jW5Nr5vWXMlWyRVJDy_ZBbRU-Hn4s7TgqEGDJ-Tg&_nc_ohc=agF17sPc0XAAX_ph71a&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCsniuNBjntUHfXtvIkVHelVcnvW9vFnjmyGyKJ_AAyYg&oe=6494590F",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/346468411_140723885652534_3908090094270025987_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE9zcA3rYUw-o-_kLcDdvGWelEfb9z9mld6UR9v3P2aV7audcEVWlqTXVQwI3Bh49EwK4_XNKICmQgVlArY1o1D&_nc_ohc=0Hm8t9HiLScAX-cX9Oi&_nc_oc=AQk67fyNpmhKB5bi9VpKfLKYJFbX7KXT7zYXQn9wU-8Mkd43BrgyD08wn2J5B3dB7aU&_nc_ht=scontent.fotp3-2.fna&oh=00_AfBrSiVI-fvYgAQRK2hgISoKIoZp5JhuHL1gYuI_bE6uSA&oe=6492F42A",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/346281048_2123803411146614_2621149901300519682_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGylES7cgPKIrXsdlGMhzxrPFVzsxTZq9I8VXOzFNmr0kHqSh9_pwqNoKki4SUB5TuPDePOZFT1dDY0UoAqlhde&_nc_ohc=rYbPvysC_qYAX-RBdKa&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDWGvJm0O9Qp6QkcWgbrHnnPazQeh8NEa6rZyvR3QNylw&oe=6492DEF2",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/346600801_201053322856577_2036036233322713188_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGjUC8oKvjS7IP-Jiiaqke-d3z-YYC8mFN3fP5hgLyYU6g9HQXcwfdzVFlXnZXE9Eo6WgZYO0LYReJJlMV1d9fh&_nc_ohc=35AkjrdDFu4AX9bwJTZ&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBphgxW1RfPGx-LlK4vjidEwvzeqnD1PXNAerXK8a54fg&oe=649464C0",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/346615221_788068832982620_3432078156595003762_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFyiQjPgY9LQtsS4eVIDJO-_gyR7VpPT3b-DJHtWk9PdjuEJ3oSsOKw-S04S3hMEVqWvG6GnN2YFl25GTPy6rpK&_nc_ohc=jQCjBQOY80YAX92Fxjo&_nc_ht=scontent.fotp3-1.fna&oh=00_AfA_j1gIS9P_jOpM8yKft05E3eME0XB9QMZ-E8lfx1Rykw&oe=649323D7",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/346261925_1638842089910761_2452941493806229200_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGTKHHg0hiTlagg26PAEotII0H7bO0ItZwjQfts7Qi1nDhd2yZwFbKU5XB8TFSpd8cLSKC26Q6UWvbMxjZgzQPM&_nc_ohc=Mej9eae25WAAX9nmNB-&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBEADKXtz-93EK2HP99_dcFPhC8Yyzv_tlBxCX1tqBwzg&oe=6494134F",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/346645700_1486988058774386_2787216329217977703_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHSussig3XERJw8oj03C80J6IzA_mzhUffojMD-bOFR9078w8lb9ODRsaXYkFdVOcVea3ClBO7rW5_bST_ynx8f&_nc_ohc=b9IsMVuQ-n8AX_9aUtq&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDwH9iBc5PkKFvNTMiDNSwZh_HQpTE-EmGA46keYjE-rQ&oe=64941D63",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/346645700_1486988058774386_2787216329217977703_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHSussig3XERJw8oj03C80J6IzA_mzhUffojMD-bOFR9078w8lb9ODRsaXYkFdVOcVea3ClBO7rW5_bST_ynx8f&_nc_ohc=b9IsMVuQ-n8AX_9aUtq&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDwH9iBc5PkKFvNTMiDNSwZh_HQpTE-EmGA46keYjE-rQ&oe=64941D63",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/346329365_108336062263308_5847353345175264625_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFdK4zm6vFO5Lc5DFWYPGXIDYOKpeDqopkNg4ql4OqimRYS3vy7t3gnt2_tGZhfoikJ3_713AYSQ0Zv60SkadwM&_nc_ohc=EY09qYrCDz0AX_ThtMk&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCpbjEq5903jjZGDkEuInFnGMIcHDFzI8nzG04Crw-Nyg&oe=6494108F",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/346329365_108336062263308_5847353345175264625_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFdK4zm6vFO5Lc5DFWYPGXIDYOKpeDqopkNg4ql4OqimRYS3vy7t3gnt2_tGZhfoikJ3_713AYSQ0Zv60SkadwM&_nc_ohc=EY09qYrCDz0AX_ThtMk&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCpbjEq5903jjZGDkEuInFnGMIcHDFzI8nzG04Crw-Nyg&oe=6494108F",
      "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/346781795_3367401716858679_7302666466346858942_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHGVE1POdBgSb12K9ApbDgZc8Y9ss1zRcFzxj2yzXNFwcSSCpcK9BLQaCrVJP15jFsuSj42wT8SUmuNOcZwB7ko&_nc_ohc=nIImRtAzWF0AX9EhvsC&_nc_ht=scontent.fotp3-2.fna&oh=00_AfC4MmKQ2VoP0rHv-uKpgCQ6TKdM6WHFUlk88_YhlfHOjg&oe=649407AC",
    ],
  },
  {
    id: "12312365432",

    model: "Audi Q7 Autoutilitara",
    price: 8690,
    year: "2007",
    engine: {
      type: "3.0 V6 Diesel",
      horsepower: 240,
    },
    transmission: "Cutie Automata 6+1",
    km: 252767,
    options: [
      "Padele Volan",
      "Bi-Xenon",
      "Camera Mansalier",
      "Interior Alcantara + Piele",
      "Webasto",
      "ABS/ESP/ASC",
      "SRS Airbag-uri frontale, laterale, genunchi si cortina",
      "Servodirectie asistata electronic",
      "Geamuri electrice fata si spate",
      "Oglinzi electrice, incalzite si heliomate",
      "Senzor antiorbire in retrovizoare",
      "Inchidere centralizata din telecomanda",
      "Confort + Follow me home",
      "Climatronic pe doua zone functional",
      "Volan reglabil pe inaltime+adancime imbracat in piele",
      "Comenzi pe volan",
      "Pilot automat",
      "Limitator viteza",
      "Computer bord Maxidot",
      "Multimedia cu Mp3 + Aux + Bluetooth",
      "Interior semi piele si velur",
      "Scaune incalzite pe fata",
      "Faruri automate",
      "2 × Chei",
      "Torpedou refrigerat",
      "Cotiere fata si spate",
      "Senzori ploaie",
      "Senzori presiune pneuri",
      "Proiectoare ceata",
      "Spalatoare faruri",
    ],
    imgUrl: [
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/344562745_1423185515121185_3963379154578046455_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHTPxeKN_bQdHPJ_oAw-JGzuXCIwAEGoRu5cIjAAQahG86Q1lLuEPF_Ld3WIUDINtsevmksBG-ZxbPvOdXwIKRy&_nc_ohc=9wdTF9xo1t8AX8gB9tO&_nc_ht=scontent.fotp3-4.fna&oh=00_AfBCmqP9mVzTgeqnnoXmLUsiX7VJHb3RJuu04cSaotXJrA&oe=649454B2",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344589454_249703320882083_1488082432249788489_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHzEb01u0toE1ypfq8UK9phD3DMKXw6bd0PcMwpfDpt3WUgqQNcXd5uvApLirEFTmO9ncfuhBjNV0Nf-v26mxzQ&_nc_ohc=wfvKq75JRKMAX_sXvzH&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDCqoVXXoNRQXkU8GKGYTj_hjZZguo5shj8LHYWWjnKAg&oe=649465D3",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344589454_249703320882083_1488082432249788489_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHzEb01u0toE1ypfq8UK9phD3DMKXw6bd0PcMwpfDpt3WUgqQNcXd5uvApLirEFTmO9ncfuhBjNV0Nf-v26mxzQ&_nc_ohc=wfvKq75JRKMAX_sXvzH&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDCqoVXXoNRQXkU8GKGYTj_hjZZguo5shj8LHYWWjnKAg&oe=649465D3",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344177851_1394693384625437_2888955210055993717_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGnd8WGlFwy-SMzJDXHhraYLb5mI4f36PktvmYjh_fo-aGtVVQbmjKOxwYSdyo8rXq2Gmhtz7i2qw3D4Zmlq8Ai&_nc_ohc=zrN2mmcS30IAX9_81St&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDSdk3I7gNg4nWT35DgF57t-02lJbVyGoUd8qF5RQ6QbQ&oe=649439A0",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344177851_1394693384625437_2888955210055993717_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGnd8WGlFwy-SMzJDXHhraYLb5mI4f36PktvmYjh_fo-aGtVVQbmjKOxwYSdyo8rXq2Gmhtz7i2qw3D4Zmlq8Ai&_nc_ohc=zrN2mmcS30IAX9_81St&_nc_ht=scontent.fotp3-1.fna&oh=00_AfDSdk3I7gNg4nWT35DgF57t-02lJbVyGoUd8qF5RQ6QbQ&oe=649439A0",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344733680_563332585789002_1085482684679304259_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE3hmlxqfMuZ_BKZXwL2WymTTXcV0Kiu6NNNdxXQqK7o9t9CaUW0qcafzcMmU8CLUxE3w219cO12H6knb114Kh_&_nc_ohc=kbD2rYa8smYAX_5sa-j&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAt6_CfWl6uy9cOWNcXDg83T8vLNVIqyj1mS28OdcggfQ&oe=649441BF",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344733680_563332585789002_1085482684679304259_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE3hmlxqfMuZ_BKZXwL2WymTTXcV0Kiu6NNNdxXQqK7o9t9CaUW0qcafzcMmU8CLUxE3w219cO12H6knb114Kh_&_nc_ohc=kbD2rYa8smYAX_5sa-j&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAt6_CfWl6uy9cOWNcXDg83T8vLNVIqyj1mS28OdcggfQ&oe=649441BF",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344733680_563332585789002_1085482684679304259_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE3hmlxqfMuZ_BKZXwL2WymTTXcV0Kiu6NNNdxXQqK7o9t9CaUW0qcafzcMmU8CLUxE3w219cO12H6knb114Kh_&_nc_ohc=kbD2rYa8smYAX_5sa-j&_nc_ht=scontent.fotp3-1.fna&oh=00_AfAt6_CfWl6uy9cOWNcXDg83T8vLNVIqyj1mS28OdcggfQ&oe=649441BF",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/344795765_854996516136215_2444058461233039120_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH1TEKgYqVZ5pfKNRp8l2UMuISxqnZMqHy4hLGqdkyofJYJyGgaZhkyR8oE1QxUxln_ZnHX2ROn8lamrq7aWGPG&_nc_ohc=QyVf8IEs7gIAX-k8uz0&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDCxoWSTQ_FPoQw5GXldDTPDLLRlT55LVKXBr-bI3dhqA&oe=64939E3F",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/344795765_854996516136215_2444058461233039120_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH1TEKgYqVZ5pfKNRp8l2UMuISxqnZMqHy4hLGqdkyofJYJyGgaZhkyR8oE1QxUxln_ZnHX2ROn8lamrq7aWGPG&_nc_ohc=QyVf8IEs7gIAX-k8uz0&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDCxoWSTQ_FPoQw5GXldDTPDLLRlT55LVKXBr-bI3dhqA&oe=64939E3F",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/344259574_239164595361031_4914062999329102209_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeETblgUnQonOCpSUqTgknftmZOqrbqp9taZk6qtuqn21i11CUrRRnFch81d6rexDVnMpCiQDP8lnRr9xuAm5Phe&_nc_ohc=HzARQxIUtKAAX89KZwa&_nc_ht=scontent.fotp3-4.fna&oh=00_AfB0Zz4h6tes1CgfADcacDYIVDRACkLF4LppOsNd_uJoMQ&oe=6494B2F8",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344769877_192695440298322_8334141026265525254_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeERKRxpaJIqyerm1JEu_r7Mz03vKbj_N03PTe8puP83TXE6JfxaFqy3zV1hUK_3HSPybie_yLEDadOuKyulg7ze&_nc_ohc=__BjdD3KCLYAX8_fDEh&_nc_ht=scontent.fotp3-1.fna&oh=00_AfB1uFbvih72DxzKD5dnQeOAjfhUEBcHKIUQ696wcm3Mzg&oe=64943E55",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/344552615_206387245483782_1654012042732547702_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG33Goo4fe-O_9Pv-liQpnb2WZNxPrhNc_ZZk3E-uE1z5sAV32KIn3T74o_F1xTlp7uBxstnpqo3FNxCVj30giO&_nc_ohc=NY911CGDDgIAX-ODrBP&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAYJJoSB3eGMF9l_5ry_Orkndz7BRIUp7pz1YJNCiKllA&oe=649355CD",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344628789_960557754982533_5986088998306328225_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEj8sRcaOhFf7Yvs4VC47Oy2I9IKTZRKd7Yj0gpNlEp3t14Wp2arlYSoKxhMRPBE_1LBsAAL0VuatSRJJmRdPUR&_nc_ohc=FCEm-Mv06VEAX9n5aUe&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBEGkGkmnAK4FiOd59tUG3MP6BLonEXMe2I9BXs4U8Dgw&oe=649474F8",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/344335415_173578315645787_2737518883627408250_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGGCHIqVkPrstOVteO87sIz-QifPzj43mP5CJ8_OPjeY4tgIETHRNz35eLI6cA2Yj2GaFYbKV5-9OzFCYnNb-iA&_nc_ohc=Lb-ey7EUP08AX_atrAw&_nc_oc=AQmnIqqQmVfAtCBJHNltmpm9iIIHvjoaP7W0dJ_s6EkUVKwf0QhqkyCFruSgA2ToDEo&_nc_ht=scontent.fotp3-3.fna&oh=00_AfBgMNNyhN7zcWpeAA8BJvivqJAnzM-0WnQhd98T5_0jmg&oe=64947F5D",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/344184784_951767532636649_4834364163415854906_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFcoQrm71VzHEq87fHu2RjYgzrf47aDE_-DOt_jtoMT_wq3BeXkRh9FzF3FhuneIP_fmD0ZcxnXTEPt4s_Ro_PF&_nc_ohc=sL8dXAJIVXkAX_jMBXW&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDeNgq3ByoLsD7cbqXQqkrdnHrrJzNBFUKZO2XmVK53bA&oe=6492F757",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/344184784_951767532636649_4834364163415854906_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFcoQrm71VzHEq87fHu2RjYgzrf47aDE_-DOt_jtoMT_wq3BeXkRh9FzF3FhuneIP_fmD0ZcxnXTEPt4s_Ro_PF&_nc_ohc=sL8dXAJIVXkAX_jMBXW&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDeNgq3ByoLsD7cbqXQqkrdnHrrJzNBFUKZO2XmVK53bA&oe=6492F757",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/344184784_951767532636649_4834364163415854906_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFcoQrm71VzHEq87fHu2RjYgzrf47aDE_-DOt_jtoMT_wq3BeXkRh9FzF3FhuneIP_fmD0ZcxnXTEPt4s_Ro_PF&_nc_ohc=sL8dXAJIVXkAX_jMBXW&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDeNgq3ByoLsD7cbqXQqkrdnHrrJzNBFUKZO2XmVK53bA&oe=6492F757",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/344184784_951767532636649_4834364163415854906_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFcoQrm71VzHEq87fHu2RjYgzrf47aDE_-DOt_jtoMT_wq3BeXkRh9FzF3FhuneIP_fmD0ZcxnXTEPt4s_Ro_PF&_nc_ohc=sL8dXAJIVXkAX_jMBXW&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDeNgq3ByoLsD7cbqXQqkrdnHrrJzNBFUKZO2XmVK53bA&oe=6492F757",
      "https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/344184784_951767532636649_4834364163415854906_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFcoQrm71VzHEq87fHu2RjYgzrf47aDE_-DOt_jtoMT_wq3BeXkRh9FzF3FhuneIP_fmD0ZcxnXTEPt4s_Ro_PF&_nc_ohc=sL8dXAJIVXkAX_jMBXW&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDeNgq3ByoLsD7cbqXQqkrdnHrrJzNBFUKZO2XmVK53bA&oe=6492F757",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/343999177_770791957986751_8323141223015383685_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGs_RRDHJtBEONW14hTjNluMPVtrWJ28B4w9W2tYnbwHij685Td-n9mm4YbHuXNOIYn50z2zx3OFCQBMGgEj7K4&_nc_ohc=7MKsPooNlVoAX_-YiNK&_nc_ht=scontent.fotp3-1.fna&oh=00_AfATJpKWkBWJC3I6Qsqk1CXM-Ka4hDj2sThXN4hFtVbyDA&oe=6492D121",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/343999177_770791957986751_8323141223015383685_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGs_RRDHJtBEONW14hTjNluMPVtrWJ28B4w9W2tYnbwHij685Td-n9mm4YbHuXNOIYn50z2zx3OFCQBMGgEj7K4&_nc_ohc=7MKsPooNlVoAX_-YiNK&_nc_ht=scontent.fotp3-1.fna&oh=00_AfATJpKWkBWJC3I6Qsqk1CXM-Ka4hDj2sThXN4hFtVbyDA&oe=6492D121",
      "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/344374360_755407909568249_6479967065246899824_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGSjqZCLGpPvaF4oLOIhfiBnL9k6r5YcOycv2Tqvlhw7NBLYMT0en-T0-z2gQWvCTSB4CDwFc5Gi9AYyFHO-ZA3&_nc_ohc=L3kqEhSWM6sAX-BmVUK&_nc_ht=scontent.fotp3-1.fna&oh=00_AfBGSz30osd0BHF6tHjjIoHwKczehTrv0ALwydUaF6O-HA&oe=649455B5",
      "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/344231325_561080149444983_3899270491875126340_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH8SH5Ra4NZSd5TFk53_5ybnvAGao7QLMqe8AZqjtAsyrr42GfDkir5QHc0NbTjPg5g9_j2ZZ_XoGqTgHmksz9u&_nc_ohc=R9Q6nMNW3skAX87MRdR&_nc_oc=AQlLsjdW0SBvQsiwGF0tnT0ShOjDIYX_wpJo5zsAx4dER2UmkWtidVqhPVOTOjnUlMw&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDV1jb9I4S9mf3rkYl_3jrgSPPiRf4hdPVG81BXusOTDQ&oe=64941678",
    ],
  },
];
const CarDetails = () => {
  const { slug } = useParams();

  const [carsData, setCarsData] = useState([]);
  const [singleCarItem, setSingleCarItem] = useState({})
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('https://auto-backend-node-production.up.railway.app/cars');
      if (response.ok) {
        const data = await response.json();

        setCarsData(data);
      } else {
        console.error('Failed to fetch cars:', response.status);
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };
  // const singleCarItem = carMock.find((item) => item.id === `${slug}`);


  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(carsData)
    carsData.forEach(element => {

      if (`${element.id}` === `${slug}`) {
        setSingleCarItem(element)

      }
    });
  }, [carsData]);


  return (
    <Helmet title={singleCarItem.carName}>
      {singleCarItem && <section>
        <Container>
          <Row>
            <Col lg="6">
              <Carousel showArrows={true} dynamicHeight={true} infiniteLoop={true}>
                {singleCarItem?.images?.map((url, index) => (
                  <div key={index}>
                    <img src={url} alt={`Car Image ${index + 1}`} style={{ maxHeight: '500px', objectFit: "contain" }} />
                  </div>
                ))}
              </Carousel>
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.model} - {singleCarItem.year}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {parseInt(singleCarItem?.price, 10).toLocaleString('de-DE')}€
                  </h6>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem?.engine?.type}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem?.transmission}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem?.engine?.horsepower} hp
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem?.km} Km
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem?.emissionStandard}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem?.model}
                  </span>
                </div>

              </div>
            </Col>
            <Container >
              <Row>
                <Col xs="12" md="6" className="mt-5" >
                  <div className="booking-info mt-5">
                    <h5 className="mb-4 fw-bold ">Descriere</h5>
                    <p> Numar Telefon:  0737090340</p>
                    <p>* Y G G Automobile *</p>
                    <p>*Posibilitate achizitionare cash si prin finantare(rate), cu sau fara avans. Aveti nevoie doar de buletin !</p>
                    <p>*Aprobare si finantare direct la sediul nostru sau totul online in maxim 1 ora!</p>
                    <p>*Pentru rate se accepta firme, persoane fizice si persoane care au mici probleme in biroul de credite, inclusiv pensionari !</p>
                    <p>* Finantare si pentru persoanele cu probleme in Biroul de Credit cu avans minim 10%!</p>
                    <p>* Finantare si pentru persoanele care lucreaza in afara tarii cu avans 0!</p>
                    <p>*Acceptam si masini in sistemul de buy-back, respectiv masina Dvs. cea veche o puteti da ca avans pentru una de la noi.</p>
                    <p>*Actele le perfectam pe loc la biroul nostru din incinta parcului!</p>
                    <p>*Vi se eliberează factura fiscala!</p>
                    <p>*Punem la dispozitia clientului toate documentele necesare inmatricularii autovehiculului sau transcrierii acestuia.</p>
                    <p>*Putem intermedia tot procesul de inmatriculare(RAR, Politie, etc.), doar la cererea clientului.</p>
                    <p>Masini in rate doar cu avans 0</p>
                    <p>Verificare/simulare online</p>
                    <p>Devii direct proprietarul autoturismului</p>
                    <p>Nu esti obligat la asigurare Casco</p>
                    <p>Rate fixe/Posibilitate achitare anticipat</p>
                    <p>Se accepta Soferi cu diurna / pensionari</p>
                    <p>Posibilitate finanțare doar cu buletinul</p>
                    <p>Aprobare online</p>
                    <p>Aprobare credit in maxim 2h</p>
                    <p>Avans ZERO</p>
                    <p>Dobânda de la 1% pe luna</p>
                    <p>Vârstă între 21 de ani și maxim 75 de ani</p>
                  </div>
                </Col>
                <Col xs="12" md="6" className="mt-5">
                  <div className="booking-info mt-5">
                    <h5 className="mb-4 fw-bold ">Optiuni</h5>
                    {singleCarItem?.options?.map((option, index) => {
                      return <p key={index}>{option}</p>
                    })}
                  </div>
                </Col>
              </Row>
            </Container>



          </Row>
        </Container>
      </section>}
    </Helmet>
  );
};

export default CarDetails;
