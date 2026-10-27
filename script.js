const B =
  "Onion|3|nos;Tomato|2|nos;Curd|0.5|cup;Ginger-garlic paste|2|tbsp;Biriyani masala|2|tbsp;Ghee|3|tbsp;Mint & coriander|1|cup;Salt|1.5|tsp;Water|3.5|cup";
const SB = "Basmati rice|2|cup;";
const RB = "Rice 70% cooked: 7 min, then dum 20 min";
const D = [
  [
    "Idli",
    "South Indian",
    "🍚",
    "Soft, fluffy steamed rice-lentil cakes, the favourite Tamil breakfast. Best with sambar and coconut chutney.",
    "8 hr + 12 min",
    "Soak 5 hrs, ferment 8 hrs, steam 12 min",
    "No veggies. Serve with sambar",
    "Idli batter|2|cup;Water|2|cup;Oil|1|tbsp",
  ],
  [
    "Crispy Dosa",
    "South Indian",
    "🥞",
    "Golden paper-thin crepe with a crunchy edge.",
    "8 hr + 2 min",
    "Ferment 8 hrs; cook 2 min per side",
    "Potato masala: boil 15 min, tadka 5 min",
    "Dosa batter|2|cup;Salt|1|tsp;Oil|3|tbsp;",
  ],
  [
    "Sambar",
    "South Indian",
    "🍲",
    "Tangy lentil stew loaded with vegetables and freshly ground sambar spices.",
    "45 min",
    "Toor dal: 4 whistles (15 min)",
    "Veggies: 10 min; simmer sambar 8 min",
    "Toor dal|1|cup;Mixed vegetables|2|cup;Shallots|10|nos;Tamarind|20|g;Sambar powder|2|tbsp;Mustard & curry leaves|1|tbsp;Water|4|cup",
  ],
  [
    "Ven Pongal",
    "South Indian",
    "🥣",
    "Creamy rice and moong dal porridge tempered with pepper, cumin, cashew and ghee.",
    "30 min",
    "Pressure cook 4 whistles (15 min)",
    "Ghee tadka: 2 min",
    "Raw rice|1|cup;Moong dal|0.5|cup;Ghee|3|tbsp;Pepper & cumin|1|tsp;Cashews|10|nos;Ginger|1|tsp;Water|5|cup",
  ],
  [
    "Lemon Rice",
    "Rice Varieties",
    "🍋",
    "Zesty, light and quick yellow rice with peanuts and curry leaves.",
    "30 min",
    "Rice: 15 min, cool 10 min",
    "Tempering: 3 min",
    "Rice|1.5|cup;Lemon|2|nos;Peanuts|2|tbsp;Green chilli|2|nos;Turmeric|0.5|tsp;Oil|2|tbsp;Curry leaves|1|tbsp",
  ],
  [
    "Tomato Rasam",
    "Curries",
    "🥘",
    "Peppery, spicy-sour soup that is comfort in a bowl.",
    "25 min",
    "Dal: 3 whistles (10 min)",
    "Tomato 5 min; rasam 5 min, do not over boil",
    "Tomato|3|nos;Tamarind|15|g;Toor dal|3|tbsp;Rasam powder|1|tbsp;Garlic|5|nos;Ghee|1|tsp;Water|3|cup",
  ],
  [
    "Medu Vada",
    "Snacks",
    "🍩",
    "Crispy outside, fluffy inside doughnut shaped urad dal fritters.",
    "3 hr + 20 min",
    "Soak dal 3 hrs; deep fry 5 min",
    "Fry on medium heat till golden",
    "Urad dal|1|cup;Onion|1|nos;Green chilli|2|nos;Pepper|1|tsp;Curry leaves|1|tbsp;Salt|1|tsp;Oil for frying|300|ml",
  ],
  [
    "Masala Vadai",
    "Snacks",
    "🧆",
    "Crunchy chana dal fritters with onion, fennel and spice. Tea time hero.",
    "3 hr + 20 min",
    "Soak dal 3 hrs; fry 5 min",
    "Mix onion and spice, fry 4 to 5 min",
    "Chana dal|1|cup;Onion|1|nos;Fennel seeds|1|tsp;Dry red chilli|3|nos;Ginger|1|tsp;Curry leaves|1|tbsp;Oil for frying|300|ml",
  ],
  [
    "Milagai Bajji",
    "Snacks",
    "🌶️",
    "Big green chillies coated in spiced besan batter and fried crisp.",
    "25 min",
    "Fry 3 to 4 min per batch",
    "Slit chillies, no pre-cooking needed",
    "Bajji chilli|8|nos;Besan|1|cup;Rice flour|2|tbsp;Ajwain|0.5|tsp;Chilli powder|1|tsp;Salt|1|tsp;Oil for frying|300|ml",
  ],
  [
    "Murukku",
    "Snacks",
    "🥨",
    "Crunchy spiral snack made from rice flour, a Diwali special.",
    "40 min",
    "Fry 5 to 6 min till bubbles stop",
    "Knead soft dough; no veggies",
    "Rice flour|2|cup;Urad flour|0.25|cup;Butter|2|tbsp;Cumin & sesame|1|tbsp;Salt|1|tsp;Oil for frying|300|ml",
  ],
  [
    "Sundal",
    "Snacks",
    "🥜",
    "Healthy temple-style chickpea stir fry with coconut and curry leaves.",
    "8 hr + 30 min",
    "Soak overnight; cook 5 whistles (20 min)",
    "Tadka and coconut: 3 min",
    "Chickpeas|1|cup;Coconut grated|3|tbsp;Mustard seeds|1|tsp;Green chilli|2|nos;Curry leaves|1|tbsp;Oil|1|tbsp;Salt|1|tsp",
  ],
  [
    "Rava Kesari",
    "Sweets",
    "🍮",
    "Golden, ghee rich semolina sweet scented with cardamom.",
    "25 min",
    "Roast rava 5 min; cook in water 8 min",
    "Add sugar; stir 5 min",
    "Rava|1|cup;Sugar|1|cup;Ghee|0.5|cup;Water|2|cup;Cashews|10|nos;Cardamom powder|0.5|tsp;Saffron colour|1|pinch",
  ],
  [
    "Semiya Payasam",
    "Sweets",
    "🥛",
    "Silky vermicelli milk pudding with roasted cashews and raisins.",
    "30 min",
    "Roast semiya 3 min; boil in milk 10 min",
    "Simmer with sugar 8 min",
    "Vermicelli|0.5|cup;Milk|1|l;Sugar|0.5|cup;Ghee|2|tbsp;Cashews & raisins|2|tbsp;Cardamom powder|0.5|tsp",
  ],
  [
    "Mysore Pak",
    "Sweets",
    "🟨",
    "Melt in mouth besan fudge, rich with pure ghee.",
    "35 min",
    "Sugar syrup: 1 string consistency, 6 min",
    "Add besan and ghee; stir 15 min",
    "Besan|1|cup;Sugar|2|cup;Ghee|1.5|cup;Water|0.75|cup",
  ],
  [
    "Gulab Jamun",
    "Sweets",
    "🍡",
    "Soft milk dough balls soaked in rose cardamom syrup.",
    "45 min",
    "Fry on low heat 8 to 10 min",
    "Syrup: simmer 8 min, soak 2 hrs",
    "Milk powder|1|cup;Maida|0.25|cup;Milk|4|tbsp;Sugar|1.5|cup;Water|1.5|cup;Cardamom powder|0.5|tsp;Oil for frying|300|ml",
  ],
  [
    "Adhirasam",
    "Sweets",
    "🍪",
    "Traditional jaggery and rice flour sweet, crisp edge and soft centre.",
    "1 hr + rest",
    "Dough rests 1 day; fry 2 min per side",
    "Jaggery syrup: 8 min to soft ball",
    "Raw rice|2|cup;Jaggery|1.25|cup;Cardamom powder|1|tsp;Dry ginger powder|0.5|tsp;Oil for frying|250|ml",
  ],
  [
    "Chicken Biriyani",
    "Biriyani",
    "🍗",
    "Classic fragrant basmati layered with spicy chicken masala and cooked on dum.",
    "1 hr 15 min",
    RB,
    "Chicken masala: 20 min",
    SB + "Chicken|500|g;" + B,
  ],
  [
    "Mutton Biriyani",
    "Biriyani",
    "🍖",
    "Rich, slow cooked mutton with long grain rice, a festive favourite.",
    "1 hr 45 min",
    RB,
    "Mutton: 6 whistles + 10 min masala",
    SB + "Mutton|750|g;" + B,
  ],
  [
    "Veg Biriyani",
    "Biriyani",
    "🥕",
    "Aromatic vegetable biriyani with paneer, beans, carrot and peas.",
    "1 hr",
    RB,
    "Veggies: 12 min in masala",
    SB + "Mixed vegetables|2|cup;Paneer|100|g;" + B,
  ],
  [
    "Egg Biriyani",
    "Biriyani",
    "🥚",
    "Spiced boiled eggs tucked into masala rice, quick and loved by everyone.",
    "50 min",
    RB,
    "Eggs boil 10 min; masala 12 min",
    SB + "Eggs|6|nos;" + B,
  ],
  [
    "Dindigul Biriyani",
    "Biriyani",
    "🍛",
    "Thalappakatti style with small seeraga samba rice, pepper and a tangy lemony punch.",
    "1 hr 20 min",
    "Seeraga samba: 10 min boil; dum 25 min",
    "Chicken: 15 min with pepper masala",
    "Seeraga samba rice|2|cup;Chicken|500|g;Shallots|15|nos;Pepper|1|tbsp;Lemon|1|nos;" +
      B,
  ],
  [
    "Rava Upma",
    "South Indian",
    "🥘",
    "Soft, savoury semolina breakfast with veggies and cashews.",
    "20 min",
    "Roast rava 4 min; cook 5 min",
    "Veggies sauté: 5 min",
    "Rava|1|cup;Onion|1|nos;Carrot & beans|0.5|cup;Green chilli|2|nos;Mustard & curry leaves|1|tsp;Ghee|2|tbsp;Water|2.5|cup",
  ],
  [
    "Onion Uttapam",
    "South Indian",
    "🫓",
    "Thick dosa batter pancake topped with onion, tomato and chilli.",
    "10 min + batter",
    "Cook 3 min each side",
    "Toppings cook with the uttapam",
    "Dosa batter|3|cup;Onion|2|nos;Tomato|1|nos;Green chilli|2|nos;Coriander|2|tbsp;Oil|3|tbsp",
  ],
  [
    "Banana Chips",
    "Snacks",
    "🍌",
    "Crispy raw banana chips fried in coconut oil.",
    "30 min",
    "Fry 6 min till crisp",
    "Slice thin, no pre-cooking",
    "Raw banana|3|nos;Turmeric|0.25|tsp;Salt|1|tsp;Coconut oil for frying|400|ml",
  ],
  [
    "Curd Rice",
    "Rice Varieties",
    "🍚",
    "Cooling, creamy rice with curd and mustard tempering.",
    "25 min",
    "Rice: 15 min, mash soft",
    "Tempering: 2 min",
    "Rice|1|cup;Curd|1.5|cup;Milk|0.5|cup;Green chilli|1|nos;Ginger|1|tsp;Mustard & curry leaves|1|tsp;Salt|1|tsp",
  ],
  [
    "Puliyodharai",
    "Rice Varieties",
    "🟤",
    "Temple style tamarind rice with peanuts and sesame.",
    "40 min",
    "Rice: 15 min, cool 10 min",
    "Pulikachal paste: 12 min",
    "Rice|1.5|cup;Tamarind|40|g;Peanuts|3|tbsp;Sesame oil|4|tbsp;Dry red chilli|4|nos;Mustard & curry leaves|1|tbsp;Jaggery|1|tsp",
  ],
  [
    "Coconut Rice",
    "Rice Varieties",
    "🥥",
    "Fragrant rice tossed with fresh coconut, cashew and curry leaves.",
    "30 min",
    "Rice: 15 min",
    "Coconut tadka: 4 min",
    "Rice|1.5|cup;Grated coconut|1|cup;Cashews|10|nos;Green chilli|2|nos;Ghee|2|tbsp;Mustard & curry leaves|1|tsp",
  ],
  [
    "Tomato Rice",
    "Rice Varieties",
    "🍅",
    "Tangy, spicy one pot tomato rice, a lunch box favourite.",
    "30 min",
    "Pressure cook 2 whistles (12 min)",
    "Tomato masala: 8 min",
    "Rice|1.5|cup;Tomato|4|nos;Onion|2|nos;Green chilli|2|nos;Biriyani masala|1|tbsp;Oil|3|tbsp;Water|3|cup",
  ],
  [
    "Vatha Kuzhambu",
    "Curries",
    "🍛",
    "Tangy tamarind gravy with brinjal and shallots.",
    "40 min",
    "Simmer gravy 15 min",
    "Veggies sauté: 5 min",
    "Tamarind|40|g;Brinjal|4|nos;Shallots|10|nos;Sambar powder|2|tbsp;Sesame oil|3|tbsp;Jaggery|1|tsp;Water|3|cup",
  ],
  [
    "Potato Poriyal",
    "Curries",
    "🥔",
    "Dry potato stir fry with mustard and curry leaves.",
    "25 min",
    "Boil potato 12 min",
    "Stir fry 8 min",
    "Potato|4|nos;Onion|1|nos;Turmeric|0.25|tsp;Chilli powder|1|tsp;Oil|2|tbsp;Mustard & curry leaves|1|tsp",
  ],
  [
    "Veg Kurma",
    "Curries",
    "🥣",
    "Creamy coconut mixed vegetable kurma, perfect with parotta.",
    "35 min",
    "Pressure cook veggies 12 min",
    "Kurma simmer 10 min",
    "Mixed vegetables|2|cup;Coconut|0.5|cup;Fennel|1|tsp;Onion|2|nos;Tomato|1|nos;Ginger-garlic paste|1|tbsp;Oil|2|tbsp",
  ],
  [
    "Keerai Kootu",
    "Curries",
    "🥬",
    "Healthy spinach and moong dal kootu with coconut.",
    "25 min",
    "Dal: 3 whistles (10 min)",
    "Keerai: 6 min",
    "Spinach|2|cup;Moong dal|0.5|cup;Coconut|3|tbsp;Cumin|1|tsp;Green chilli|2|nos;Mustard & curry leaves|1|tsp",
  ],
  [
    "Chicken Chettinad",
    "Non-Veg",
    "🍗",
    "Fiery, aromatic chicken with freshly ground Chettinad spices.",
    "50 min",
    "Chicken cook 20 min",
    "Masala sauté: 12 min",
    "Chicken|500|g;Onion|2|nos;Tomato|2|nos;Coconut|3|tbsp;Pepper|1|tbsp;Fennel|1|tsp;Ginger-garlic paste|1|tbsp;Oil|3|tbsp",
  ],
  [
    "Pepper Chicken",
    "Non-Veg",
    "🌶️",
    "Dry, peppery chicken fry from Tamil homes.",
    "35 min",
    "Chicken fry 15 min",
    "Masala: 8 min",
    "Chicken|500|g;Pepper powder|2|tsp;Shallots|10|nos;Ginger-garlic paste|1|tbsp;Curry leaves|1|tbsp;Oil|3|tbsp;Salt|1|tsp",
  ],
  [
    "Meen Kuzhambu",
    "Non-Veg",
    "🐟",
    "Tangy tamarind fish curry, Tamil coastal style.",
    "40 min",
    "Fish simmer 8 min",
    "Gravy: 15 min",
    "Fish|500|g;Tamarind|30|g;Shallots|10|nos;Tomato|2|nos;Chilli powder|2|tbsp;Sesame oil|3|tbsp;Fenugreek seeds|0.5|tsp",
  ],
  [
    "Mutton Chukka",
    "Non-Veg",
    "🥩",
    "Dry roasted spicy mutton, a Madurai special.",
    "1 hr",
    "Pressure cook mutton 6 whistles (25 min)",
    "Roast masala: 15 min",
    "Mutton|500|g;Onion|2|nos;Pepper & fennel|1|tbsp;Chilli powder|1|tbsp;Ginger-garlic paste|1|tbsp;Oil|3|tbsp;Curry leaves|1|tbsp",
  ],
  [
    "Egg Curry",
    "Non-Veg",
    "🍳",
    "Boiled eggs in rich onion tomato masala gravy.",
    "30 min",
    "Boil eggs 10 min",
    "Gravy: 12 min",
    "Eggs|6|nos;Onion|2|nos;Tomato|2|nos;Coconut|2|tbsp;Chilli powder|1|tbsp;Oil|2|tbsp;Salt|1|tsp",
  ],
  [
    "Coconut Chutney",
    "Chutneys",
    "🥥",
    "Classic white chutney for idli and dosa.",
    "10 min",
    "Grind 3 min",
    "Tempering: 1 min",
    "Coconut|1|cup;Roasted gram|2|tbsp;Green chilli|2|nos;Ginger|1|tsp;Salt|0.5|tsp;Mustard & curry leaves|1|tsp",
  ],
  [
    "Tomato Chutney",
    "Chutneys",
    "🍅",
    "Spicy red chutney, tangy and bold.",
    "15 min",
    "Grind 2 min",
    "Sauté tomato 8 min",
    "Tomato|4|nos;Onion|1|nos;Dry red chilli|4|nos;Garlic|3|nos;Oil|2|tbsp;Salt|1|tsp",
  ],
  [
    "Idli Podi",
    "Chutneys",
    "🌰",
    "Gunpowder spice mix, mix with gingelly oil for idli and dosa.",
    "15 min",
    "Roast and grind 5 min",
    "Roast dals: 8 min",
    "Urad dal|0.25|cup;Chana dal|0.25|cup;Dry red chilli|10|nos;Sesame seeds|2|tbsp;Salt|1|tsp;Asafoetida|0.25|tsp",
  ],
  [
    "Coriander Chutney",
    "Chutneys",
    "🌿",
    "Fresh green chutney with coconut and green chilli.",
    "10 min",
    "Grind 3 min",
    "No cooking",
    "Coriander|1|cup;Coconut|0.5|cup;Green chilli|3|nos;Tamarind|5|g;Salt|0.5|tsp",
  ],
  [
    "Filter Coffee",
    "Beverages",
    "☕",
    "Strong decoction coffee with frothy milk, South Indian style.",
    "15 min",
    "Decoction drip 10 min",
    "No veggies",
    "Coffee powder|4|tbsp;Milk|2|cup;Sugar|4|tsp;Hot water|1|cup",
  ],
  [
    "Masala Tea",
    "Beverages",
    "🍵",
    "Spiced milk tea with ginger and cardamom.",
    "10 min",
    "Boil 5 min",
    "No veggies",
    "Water|1|cup;Milk|1.5|cup;Tea powder|3|tsp;Ginger|1|tsp;Cardamom|2|nos;Sugar|3|tsp",
  ],
  [
    "Neer Mor",
    "Beverages",
    "🥛",
    "Spiced buttermilk, the best summer cooler.",
    "5 min",
    "Churn 2 min",
    "No veggies",
    "Curd|1|cup;Water|3|cup;Ginger|1|tsp;Green chilli|1|nos;Curry leaves|1|tbsp;Salt|1|tsp;Asafoetida|0.25|tsp",
  ],
  [
    "Badam Milk",
    "Beverages",
    "🥜",
    "Rich almond milk with saffron and cardamom.",
    "20 min",
    "Simmer 12 min",
    "No veggies",
    "Milk|1|l;Almonds|15|nos;Sugar|4|tbsp;Saffron|1|pinch;Cardamom powder|0.5|tsp",
  ],
  [
    "Kothu Parotta",
    "Street Food",
    "🥘",
    "Shredded parotta stir fried on tawa with egg and salna.",
    "30 min",
    "Tawa fry 8 min",
    "Egg and onion masala: 8 min",
    "Parotta|4|nos;Eggs|2|nos;Onion|2|nos;Tomato|1|nos;Salna|1|cup;Chilli powder|1|tsp;Oil|3|tbsp",
  ],
  [
    "Pani Puri",
    "Street Food",
    "🫧",
    "Crispy puris filled with spicy mint water and potato.",
    "45 min",
    "Boil potato 12 min",
    "Mint water: chill, no cooking",
    "Puri|20|nos;Potato|2|nos;Mint & coriander|1|cup;Tamarind|20|g;Chaat masala|1|tsp;Chickpeas|0.5|cup;Water|3|cup",
  ],
  [
    "Masala Pori",
    "Street Food",
    "🍿",
    "Beach style puffed rice with onion, tomato, mango and spice.",
    "10 min",
    "Mix 3 min",
    "No cooking",
    "Puffed rice|4|cup;Onion|1|nos;Tomato|1|nos;Raw mango|0.5|nos;Chilli powder|0.5|tsp;Lemon|1|nos;Oil|1|tbsp",
  ],
  [
    "Veg Cutlet",
    "Street Food",
    "🥕",
    "Crispy mixed veg patties, a tea stall classic.",
    "40 min",
    "Shallow fry 6 min",
    "Boil veggies: 12 min",
    "Potato|2|nos;Mixed vegetables|1|cup;Breadcrumbs|0.5|cup;Chilli powder|1|tsp;Garam masala|0.5|tsp;Oil|4|tbsp",
  ],
];
const OP = {
  Idli: ["Fenugreek seeds", "Oil"],
  "Crispy Dosa": ["Poha", "Potato", "Onion"],
  Sambar: ["Mixed vegetables", "Mustard & curry leaves"],
  "Ven Pongal": ["Cashews", "Ginger"],
  "Lemon Rice": ["Peanuts", "Green chilli", "Curry leaves"],
  "Tomato Rasam": ["Toor dal", "Garlic", "Ghee"],
  "Medu Vada": ["Onion", "Green chilli", "Curry leaves"],
  "Masala Vadai": ["Onion", "Fennel seeds", "Ginger", "Curry leaves"],
  "Milagai Bajji": ["Ajwain"],
  Murukku: ["Urad flour", "Butter"],
  Sundal: ["Coconut grated", "Green chilli", "Curry leaves"],
  "Rava Kesari": ["Cashews", "Saffron colour"],
  "Semiya Payasam": ["Cashews & raisins", "Cardamom powder"],
  "Gulab Jamun": ["Cardamom powder"],
  Adhirasam: ["Cardamom powder", "Dry ginger powder"],
  "Chicken Biriyani": ["Mint & coriander"],
  "Mutton Biriyani": ["Mint & coriander"],
  "Veg Biriyani": ["Paneer", "Mint & coriander"],
  "Egg Biriyani": ["Mint & coriander"],
  "Dindigul Biriyani": ["Lemon", "Mint & coriander"],
  "Rava Upma": ["Carrot & beans", "Onion"],
  "Onion Uttapam": ["Tomato", "Green chilli", "Coriander"],
  "Banana Chips": ["Turmeric"],
  "Curd Rice": ["Milk", "Green chilli", "Ginger", "Mustard & curry leaves"],
  Puliyodharai: ["Peanuts", "Jaggery"],
  "Coconut Rice": ["Cashews", "Green chilli"],
  "Tomato Rice": ["Green chilli", "Onion"],
  "Vatha Kuzhambu": ["Brinjal", "Jaggery"],
  "Potato Poriyal": ["Onion"],
  "Veg Kurma": ["Tomato", "Fennel"],
  "Keerai Kootu": ["Cumin", "Green chilli", "Mustard & curry leaves"],
  "Chicken Chettinad": ["Coconut", "Fennel"],
  "Pepper Chicken": ["Shallots", "Curry leaves"],
  "Meen Kuzhambu": ["Tomato", "Fenugreek seeds"],
  "Mutton Chukka": ["Curry leaves"],
  "Egg Curry": ["Coconut", "Tomato"],
  "Coconut Chutney": ["Roasted gram", "Ginger", "Mustard & curry leaves"],
  "Tomato Chutney": ["Onion", "Garlic"],
  "Idli Podi": ["Sesame seeds", "Asafoetida"],
  "Coriander Chutney": ["Tamarind"],
  "Filter Coffee": ["Sugar"],
  "Neer Mor": ["Ginger", "Green chilli", "Curry leaves", "Asafoetida"],
  "Badam Milk": ["Saffron", "Cardamom powder"],
  "Kothu Parotta": ["Eggs", "Tomato"],
  "Pani Puri": ["Chickpeas", "Chaat masala"],
  "Masala Pori": ["Raw mango", "Tomato", "Lemon", "Oil"],
  "Veg Cutlet": ["Breadcrumbs", "Garam masala"],
};
const T = [
  [12, 15],
  [2, 15],
  [15, 10],
  [15, 2],
  [15, 3],
  [10, 5],
  [5, 0],
  [5, 0],
  [4, 0],
  [6, 0],
  [20, 3],
  [8, 5],
  [10, 8],
  [6, 15],
  [10, 8],
  [2, 8],
  [7, 20],
  [7, 40],
  [7, 12],
  [7, 12],
  [10, 15],
  [9, 5],
  [6, 0],
  [6, 0],
  [15, 2],
  [15, 12],
  [15, 4],
  [12, 8],
  [15, 5],
  [12, 8],
  [12, 10],
  [10, 6],
  [20, 12],
  [15, 8],
  [8, 15],
  [25, 15],
  [10, 12],
  [3, 1],
  [2, 8],
  [5, 8],
  [3, 0],
  [10, 0],
  [5, 0],
  [2, 0],
  [12, 0],
  [8, 8],
  [12, 0],
  [3, 0],
  [6, 12],
];
const CT = [
    "South Indian",
    "Snacks",
    "Sweets",
    "Biriyani",
    "Rice Varieties",
    "Curries",
    "Non-Veg",
    "Chutneys",
    "Beverages",
    "Street Food",
  ],
  $ = (s) => document.querySelector(s);
const CI = {
  "South Indian": [
    "🍛",
    "Idli, dosa, sambar, pongal and everyday classics from Tamil homes.",
  ],
  Snacks: ["🥨", "Crispy vadais, bajjis and murukku for tea time."],
  Sweets: ["🍮", "Kesari, payasam, Mysore Pak and festival sweets."],
  Biriyani: [
    "🍗",
    "Chicken, mutton, veg, egg and Dindigul style dum biriyani.",
  ],
  "Rice Varieties": [
    "🍚",
    "Lemon, curd, tamarind, coconut and tomato rice for lunch boxes.",
  ],
  Curries: ["🍲", "Kuzhambu, kurma, rasam and poriyal to go with hot rice."],
  "Non-Veg": [
    "🍗",
    "Chettinad chicken, pepper fry, fish curry and mutton chukka.",
  ],
  Chutneys: ["🥥", "Chutneys and podi that make idli and dosa special."],
  Beverages: ["☕", "Filter coffee, chai, buttermilk and badam milk."],
  "Street Food": ["🌯", "Kothu parotta, pani puri, masala pori and cutlets."],
};
const F = [
  [
    "⏱",
    "Live Cooking Timers",
    "Separate timers for rice and veggies, with a beep when done.",
  ],
  [
    "⚖️",
    "Smart Serving Scaler",
    "Change servings and every ingredient quantity updates.",
  ],
  [
    "🔍",
    "Search Anything",
    "Find a dish by name or by an ingredient you have at home.",
  ],
  [
    "🌿",
    "Homestyle Recipes",
    "Authentic South Indian flavours, simple and easy to cook.",
  ],
];
let view = "home",
  prev = "home",
  q = "",
  cur = 0,
  sv = 4,
  TM = [],
  iv = 0;
$("#dr").innerHTML =
  "<h4>Menu</h4>" +
  ["home", ...CT]
    .map(
      (c) =>
        `<button class="mi" data-c="${c}">${c == "home" ? "🏠 Home" : CI[c][0] + " " + c}<span>${c == "home" ? "" : D.filter((d) => d[1] == c).length}</span></button>`,
    )
    .join("");
const mn = (o) => {
  $("#dr").classList.toggle("open", o);
  $("#sc").classList.toggle("show", o);
  $("#ham").classList.toggle("on", o);
};
$("#ham").onclick = () => mn(!$("#dr").classList.contains("open"));
$("#sc").onclick = () => mn(0);
$("#dr").onclick = (e) => {
  const b = e.target.closest(".mi");
  if (b) {
    go(b.dataset.c);
    mn(0);
  }
};
$("#q").oninput = (e) => {
  q = e.target.value.trim().toLowerCase();
  if (q) {
    stop();
    if (view == "home" || view == "detail") view = "All";
  } else if (view == "All") view = "home";
  render();
};
const stop = () => {
  clearInterval(iv);
  TM = [];
};
function go(v) {
  stop();
  q = "";
  $("#q").value = "";
  view = v;
  render();
  scrollTo(0, 0);
}
const home =
  () => `<header class="hero"><small>Authentic · Homestyle · Premium</small><h1>Chef<span>Mate</span></h1><p>Your South Indian cooking companion. Pick a dish, see the ingredients, scale the quantity and cook with built-in timers 🍛</p><button class="btn inl" onclick="go('South Indian')">Explore Recipes →</button></header>
<section class="sec"><h2 class="ttl">About ChefMate</h2><p class="ab">We bring ${D.length} loved recipes across 10 sections, from tiffin and biriyani to street food and drinks. Every dish shows exact ingredients for your servings and tells you how long the rice and the veggies should cook.</p></section>
<section class="sec"><h2 class="ttl">Types of Dishes</h2><div class="grid" style="margin:24px 0;padding:0">${CT.map((c, k) => `<article class="card" style="--i:${k}" onclick="go('${c}')"><div class="pic ld">${CI[c][0]}${cimg(c)}</div><div class="in"><span class="tag">${D.filter((d) => d[1] == c).length} recipes</span><h3>${c}</h3><p>${CI[c][1]}</p></div></article>`).join("")}</div></section>
<section class="sec"><h2 class="ttl">Our Speciality</h2><div class="fg">${F.map((f) => `<div class="feat"><span>${f[0]}</span><h4>${f[1]}</h4><p>${f[2]}</p></div>`).join("")}</div></section>`;

const CIMG = {};
const cimg = (c) =>
  `<img src="${CIMG[c] || "images/categories/" + c.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".jpg"}" alt="${c}" loading="lazy" onload="this.parentNode.classList.remove('ld')" onerror="var p=this.parentNode;this.remove();p.classList.remove('ld')">`;
const IMG = {};
const img = (i) => {
  const n = D[i][0];
  return `<img src="${
    IMG[n] ||
    "images/" +
      n
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") +
      ".jpg"
  }" alt="${n}" loading="lazy" onload="this.parentNode.classList.remove('ld')" onerror="var p=this.parentNode;this.remove();p.classList.remove('ld')">`;
};
const card = ([d, i], k) =>
  `<article class="card" style="--i:${k % 8}" onclick="openD(${i})"><div class="pic ld">${d[2]}${img(i)}</div><div class="in"><span class="tag">${d[1]}</span><h3>${d[0]}</h3><p>⏱ ${d[4]}</p></div></article>`;
function render() {
  document
    .querySelectorAll(".mi")
    .forEach((b) => b.classList.toggle("on", b.dataset.c == view));
  const a = $("#app");
  if (view == "home") return (a.innerHTML = home());
  if (view == "detail") return (a.innerHTML = detail());
  const l = D.map((d, i) => [d, i]).filter(
    ([d]) =>
      (view == "All" || d[1] == view) &&
      (d[0] + d[1] + d[7]).toLowerCase().includes(q),
  );
  a.innerHTML = `<div class="sec" style="margin-top:24px"><button class="back" onclick="go('home')">← Back to Home</button><h2 class="ttl" style="margin-top:18px">${view == "All" ? "Search Results" : view}</h2></div><div class="grid">${l.map(card).join("") || '<p class="none">No dishes found 😅 Try another word</p>'}</div>`;
}
const fm = (s) =>
  String(Math.floor(s / 60)).padStart(2, "0") +
  ":" +
  String(s % 60).padStart(2, "0");
const FL = [
  ["🔥 Low", 1.5],
  ["🔥🔥 Medium", 1],
  ["🔥🔥🔥 High", 0.7],
];
const flr = (k) =>
  `<div class="fl">${FL.map((x, i) => `<button class="${i == 1 ? "on" : ""}" id="f${k}_${i}" onclick="fl(${k},${i})">${x[0]}</button>`).join("")}</div><small class="fh">Base time is for medium flame. Low takes about 50% longer, High is about 30% faster.</small>`;
function fl(k, i) {
  const o = TM[k],
    nt = Math.max(60, Math.round(o.b * FL[i][1]) * 60);
  o.l = o.run ? Math.max(1, Math.round((o.l * nt) / o.t)) : nt;
  o.t = nt;
  o.f = i;
  [0, 1, 2].forEach((j) =>
    $("#f" + k + "_" + j).classList.toggle("on", j == i),
  );
  upd(k);
}
function mk(k, lab, m, note) {
  TM[k] = { t: m * 60, l: m * 60, run: 0, b: m, f: 1 };
  return `<div class="tc"><em>${lab}</em><div class="clk" id="c${k}">${fm(m * 60)}</div><div class="bar"><i id="p${k}"></i></div>${flr(k)}<div class="tb"><button class="go" id="b${k}" onclick="tg(${k})">▶ Start</button><button onclick="rs(${k})">↺ Reset</button><button onclick="ad(${k},-1)">−1 min</button><button onclick="ad(${k},1)">+1 min</button></div><small>${note}</small></div>`;
}
const TWO_TIMERS = ["Sambar", "Ven Pongal"];
const ONE_TIMER_SECTIONS = ["Snacks", "Sweets", "Chutneys", "Beverages", "Street Food"];
const oneTimer = (d) => ONE_TIMER_SECTIONS.includes(d[1]) || (d[1] == "South Indian" && !TWO_TIMERS.includes(d[0]));
function detail() {
  const d = D[cur],
    t = T[cur];
  TM = [];
  return `<div class="dp"><button class="back" onclick="back()">← Back to ${prev == "All" ? "results" : prev}</button><div class="big dimg ld">${d[2]}${img(cur)}</div><span class="tag">${d[1]}</span><h2>${d[0]}</h2><p class="desc">${d[3]}</p><div class="meta"><span>⏱ ${d[4]}</span><span>🍽 Base serves 4</span></div>
<h3 class="sh">⏲ Cooking Timers</h3><div class="tgrid">${mk(0, ["South Indian", "Biriyani", "Rice Varieties"].includes(d[1]) ? "🍚 Rice / Main cook" : "🍳 Main cooking time", t[0], d[5])}${t[1] && !oneTimer(d) ? mk(1, "🥕 Veggies / Masala", t[1], d[6]) : ""}</div>
<button class="btn" id="tg" onclick="tgI()">Show Ingredients</button><div class="panel" id="pn"></div><button class="btn btn2" id="tm" onclick="tgM()">How to Make</button><div class="panel" id="pm"></div></div>`;
}
function openD(i) {
  stop();
  prev = view;
  cur = i;
  sv = 4;
  view = "detail";
  render();
  iv = setInterval(tick, 1000);
  scrollTo(0, 0);
}
function back() {
  stop();
  view = prev;
  render();
  scrollTo(0, 0);
}
// How to make: step by step method for each dish (steps are separated by |). Key = dish name.
const HOW = {
  "Idli": "Soak idli rice and urad dal (with fenugreek) separately for 5 hours.|Grind the dal fluffy and the rice slightly coarse, then mix both with salt.|Ferment the batter for 8 hours until it doubles.|Grease the idli plates, pour the batter and steam for 12 minutes.|Rest for 2 minutes, remove and serve hot with sambar and chutney.",
  "Crispy Dosa": "Use fermented dosa batter (soak rice and urad dal, grind, rest 8 hours) and mix in salt.|Heat a tawa and grease it lightly with oil.|Pour a ladle of batter and spread it thin in a circle.|Drizzle oil and cook about 2 minutes per side till golden and crisp.|Serve hot with chutney and sambar.",
  "Sambar": "Pressure cook toor dal for 4 whistles (about 15 minutes) and mash well.|Soak tamarind in warm water and extract the juice.|Cook the chopped vegetables and shallots in the tamarind water for 10 minutes.|Add sambar powder, salt and the mashed dal, then simmer 8 minutes.|Temper mustard and curry leaves in oil and pour over.",
  "Ven Pongal": "Dry roast the moong dal for 2 minutes, then wash it with the rice.|Pressure cook rice and dal with 5 cups water for 4 whistles (15 minutes).|Mash lightly while hot.|Heat ghee and fry pepper, cumin, ginger and cashews for 2 minutes.|Mix the tadka into the pongal and serve hot.",
  "Lemon Rice": "Cook the rice for 15 minutes, spread it out and cool for 10 minutes.|Heat oil, fry peanuts, green chilli and curry leaves.|Add turmeric and salt, then switch off the flame.|Mix in the rice and lemon juice gently.|Rest 5 minutes before serving.",
  "Tomato Rasam": "Pressure cook toor dal for 3 whistles (10 minutes) and mash with water.|Boil tamarind water with crushed tomato and rasam powder for 5 minutes.|Add the dal water and heat until it froths. Do not over boil.|Temper ghee with crushed garlic and pour over. Serve hot.",
  "Medu Vada": "Soak urad dal for 3 hours and grind thick and fluffy with very little water.|Mix in onion, green chilli, pepper, curry leaves and salt.|Wet your hands and shape a ring with a hole in the middle.|Deep fry on medium heat for 5 minutes till golden and crisp.|Drain and serve with chutney and sambar.",
  "Masala Vadai": "Soak chana dal for 3 hours, drain and grind coarsely.|Mix in onion, fennel, red chilli, ginger, curry leaves and salt.|Shape into flat patties.|Fry on medium heat for 4 to 5 minutes till crisp.|Drain on paper and serve hot.",
  "Milagai Bajji": "Wash the bajji chillies, slit lengthwise and remove the seeds.|Mix besan, rice flour, ajwain, chilli powder and salt with water into a thick batter.|Dip each chilli in the batter.|Fry in hot oil for 3 to 4 minutes per batch till golden.|Serve hot.",
  "Murukku": "Mix rice flour, urad flour, butter, cumin, sesame and salt.|Add water slowly and knead a soft dough.|Fill the murukku press and press spirals onto a greased plate.|Fry in hot oil for 5 to 6 minutes till the bubbles stop.|Cool and store airtight.",
  "Sundal": "Soak the chickpeas overnight.|Pressure cook with salt for 5 whistles (20 minutes) and drain.|Heat oil, splutter mustard, add green chilli and curry leaves.|Add the chickpeas, toss for 3 minutes and finish with grated coconut.",
  "Rava Kesari": "Roast the rava in ghee for 5 minutes and keep aside. Fry the cashews in ghee.|Boil 2 cups water with the saffron colour.|Add rava slowly while stirring to avoid lumps and cook 8 minutes.|Add sugar and stir for 5 minutes till it leaves the sides.|Add cardamom, cashews and the remaining ghee.",
  "Semiya Payasam": "Fry cashews and raisins in ghee and keep aside.|Roast the vermicelli in ghee for 3 minutes till golden.|Boil it in milk for 10 minutes till soft.|Add sugar and simmer for 8 minutes.|Add cardamom, cashews and raisins. Serve warm or chilled.",
  "Mysore Pak": "Sieve the besan and mix with a little melted ghee.|Boil sugar and water to a one string consistency, about 6 minutes.|Add the besan slowly while stirring continuously.|Add hot ghee a little at a time and stir about 15 minutes till it froths and leaves the pan.|Pour into a greased tray and cut after 5 minutes.",
  "Gulab Jamun": "Mix milk powder, maida and milk into a soft dough. Do not over knead.|Make smooth, crack free balls.|Boil sugar, water and cardamom for 8 minutes to make the syrup.|Fry the balls on low heat for 8 to 10 minutes till deep golden.|Soak in warm syrup for 2 hours.",
  "Adhirasam": "Soak rice, dry it and grind to a fine flour. Sieve it.|Boil jaggery with a little water to soft ball stage, about 8 minutes.|Add flour, cardamom and dry ginger and mix to a soft dough.|Rest the dough for one day.|Flatten into discs and fry on medium heat for 2 minutes per side.",
  "Chicken Biriyani": "Marinate chicken with curd, ginger-garlic paste, salt and half the masala for 30 minutes.|Boil rice with salt till 70% cooked, about 7 minutes, and drain.|Fry onion in ghee till golden, add tomato and the remaining masala, then the chicken. Cook 20 minutes.|Layer the rice over the chicken and top with mint and coriander.|Seal and cook on dum for 20 minutes. Rest 10 minutes, mix gently and serve.",
  "Mutton Biriyani": "Marinate mutton with curd, ginger-garlic paste, salt and masala for 1 hour.|Pressure cook the mutton for 6 whistles.|Fry onion in ghee till golden, add tomato, masala and the mutton and cook 10 minutes.|Boil rice 7 minutes (70% cooked) and drain.|Layer, seal and cook on dum for 20 minutes. Rest 10 minutes.",
  "Veg Biriyani": "Fry onion in ghee till golden, add tomato, ginger-garlic paste and masala.|Add the vegetables, paneer and curd and cook for 12 minutes.|Boil basmati rice 7 minutes (70% cooked) and drain.|Layer the rice over the masala with mint and coriander.|Cook on dum for 20 minutes on low heat and rest 10 minutes.",
  "Egg Biriyani": "Boil eggs for 10 minutes, peel and make small slits.|Fry onion in ghee till golden, add tomato, ginger-garlic paste, masala and curd. Cook 12 minutes.|Add the eggs and coat well.|Boil rice 7 minutes (70% cooked), drain and layer over the masala with mint and coriander.|Cook on dum for 20 minutes.",
  "Dindigul Biriyani": "Marinate chicken with curd, ginger-garlic paste, pepper and salt for 30 minutes.|Fry shallots in ghee, add tomato and masala, then the chicken. Cook 15 minutes.|Add washed seeraga samba rice, water and lemon juice.|Boil for 10 minutes, then cover tightly.|Cook on dum for 25 minutes on low heat. Rest 10 minutes and mix gently.",
  "Rava Upma": "Dry roast the rava for 4 minutes and keep aside.|Heat ghee, splutter mustard and curry leaves, fry green chilli and onion.|Add carrot and beans and saute for 5 minutes.|Add 2.5 cups hot water and salt and bring to a boil.|Add the rava slowly while stirring and cook covered for 5 minutes.",
  "Onion Uttapam": "Heat a tawa and grease it with oil.|Pour a thick ladle of batter and do not spread too much.|Sprinkle onion, tomato, green chilli and coriander and press lightly.|Drizzle oil and cook 3 minutes, then flip and cook 3 minutes more.",
  "Banana Chips": "Peel the raw bananas and slice thin into water with turmeric and salt.|Pat the slices dry.|Heat coconut oil and fry in small batches for 6 minutes till crisp.|Drain, sprinkle salt and cool before storing.",
  "Curd Rice": "Cook the rice for 15 minutes until very soft and mash lightly.|Cool, then mix in milk, curd and salt.|Heat a little oil, splutter mustard, add green chilli, ginger and curry leaves (2 minutes).|Pour the tempering over the rice and mix. Chill before serving.",
  "Puliyodharai": "Cook the rice for 15 minutes, spread it, add a little sesame oil and cool for 10 minutes.|Soak tamarind and extract thick juice.|Roast peanuts, red chilli, mustard and curry leaves in sesame oil, then add tamarind, jaggery and salt.|Cook the paste for 12 minutes till oil separates.|Mix the paste with the rice and rest 30 minutes.",
  "Coconut Rice": "Cook the rice for 15 minutes, spread and cool.|Heat ghee and fry cashews, mustard, green chilli and curry leaves.|Add grated coconut and saute for 4 minutes.|Add the rice and salt and mix gently.",
  "Tomato Rice": "Heat oil and saute onion and green chilli, then add tomato and cook 8 minutes till mushy.|Add biriyani masala and salt.|Add washed rice and 3 cups water.|Pressure cook for 2 whistles (12 minutes).|Rest, open and fluff with a fork.",
  "Vatha Kuzhambu": "Soak tamarind and extract the juice.|Heat sesame oil and fry shallots and brinjal for 5 minutes.|Add sambar powder, tamarind water, salt and jaggery.|Simmer for 15 minutes until oil floats and the gravy thickens.",
  "Potato Poriyal": "Boil the potatoes for 12 minutes, peel and cube.|Heat oil, splutter mustard and curry leaves, fry the onion.|Add turmeric, chilli powder and potato.|Stir fry for 8 minutes till the edges turn crisp.",
  "Veg Kurma": "Pressure cook the mixed vegetables for 12 minutes.|Grind coconut with fennel into a smooth paste.|Saute onion, tomato and ginger-garlic paste in oil.|Add the vegetables and coconut paste and simmer 10 minutes.",
  "Keerai Kootu": "Pressure cook moong dal for 3 whistles (10 minutes).|Cook the chopped spinach with green chilli for 6 minutes.|Grind coconut with cumin and add to the spinach along with the dal.|Simmer 2 minutes and temper with mustard and curry leaves.",
  "Chicken Chettinad": "Dry roast pepper, fennel and coconut and grind to a powder.|Saute onion, ginger-garlic paste and tomato in oil for 12 minutes.|Add the chicken and the ground masala.|Cook covered for 20 minutes till the chicken is tender.",
  "Pepper Chicken": "Marinate the chicken with ginger-garlic paste, salt and pepper for 15 minutes.|Fry shallots and curry leaves in oil for 8 minutes.|Add the chicken and cook for 15 minutes on medium heat till dry and well coated.",
  "Meen Kuzhambu": "Soak tamarind and extract the juice.|Heat sesame oil, splutter fenugreek, fry shallots and tomato with chilli powder for 8 minutes.|Add tamarind water and simmer for 15 minutes.|Add the fish and cook for 8 minutes. Do not stir too much.",
  "Mutton Chukka": "Pressure cook the mutton with salt for 6 whistles (25 minutes).|Saute onion, ginger-garlic paste and curry leaves in oil.|Add chilli powder, pepper and fennel.|Add the mutton and roast for 15 minutes till dry.",
  "Egg Curry": "Boil the eggs for 10 minutes, peel and slit lightly.|Saute onion and tomato with chilli powder in oil for 12 minutes.|Add coconut and a little water.|Add the eggs and simmer for 5 minutes.",
  "Coconut Chutney": "Grind coconut, roasted gram, green chilli, ginger and salt with water for 3 minutes.|Temper mustard and curry leaves in oil for 1 minute and pour on top.",
  "Tomato Chutney": "Heat oil and fry red chilli and garlic, then add onion.|Add tomato and salt and saute for 8 minutes till mushy.|Cool and grind coarsely for 2 minutes.",
  "Idli Podi": "Dry roast urad dal and chana dal for 8 minutes till golden.|Roast red chilli and sesame for 2 minutes.|Cool, add salt and asafoetida and grind coarsely (5 minutes).|Mix with gingelly oil and serve with idli or dosa.",
  "Coriander Chutney": "Wash the coriander well.|Grind with coconut, green chilli, tamarind and salt for 3 minutes.|Serve fresh.",
  "Filter Coffee": "Add coffee powder to the filter and pour hot water. Let it drip for 10 minutes.|Boil the milk and add sugar.|Mix a little decoction with the milk.|Pour between two tumblers to make it frothy.",
  "Masala Tea": "Boil water with crushed ginger and cardamom for 2 minutes.|Add tea powder and boil for 1 minute.|Add milk and sugar and boil 2 minutes.|Strain and serve hot.",
  "Neer Mor": "Whisk the curd with water until smooth.|Crush ginger, green chilli and curry leaves and add with salt and asafoetida.|Churn for 2 minutes and serve chilled.",
  "Badam Milk": "Soak the almonds, peel and grind to a paste with a little milk.|Boil the milk for 12 minutes and add the almond paste and sugar.|Add saffron and cardamom and simmer a little.|Serve hot or chilled.",
  "Kothu Parotta": "Shred the parotta into small pieces.|Heat oil on a tawa, fry onion and tomato with chilli powder for 8 minutes.|Scramble the eggs into the masala.|Add salna and parotta and chop with spatulas for 8 minutes.",
  "Pani Puri": "Boil the potatoes for 12 minutes and mash with chaat masala and salt.|Grind mint, coriander, tamarind, chaat masala and cold water. Strain and chill.|Crack the top of each puri and fill with potato and boiled chickpeas.|Pour the pani and eat immediately.",
  "Masala Pori": "Chop the onion, tomato and raw mango.|Mix them with chilli powder, salt and a little oil.|Add the puffed rice just before serving and toss for 3 minutes.|Squeeze lemon and serve.",
  "Veg Cutlet": "Boil the potatoes and vegetables for 12 minutes and mash well.|Mix in chilli powder, garam masala and salt.|Shape into patties and roll in breadcrumbs.|Shallow fry for 6 minutes, turning once, till golden.",
};
function tgM() {
  const p = $("#pm"), s = p.classList.toggle("show");
  $("#tm").textContent = s ? "Hide Method" : "How to Make";
  if (s) p.innerHTML = HOW[D[cur][0]] ? `<div class="mth">${HOW[D[cur][0]].split("|").map((t, i) => `<div class="ms"><span>${i + 1}</span><p>${t}</p></div>`).join("")}</div>` : '<p class="desc">Method coming soon.</p>';
}
function tgI() {
  const s = $("#pn").classList.toggle("show");
  $("#tg").textContent = s ? "Hide Ingredients" : "Show Ingredients";
  if (s) list();
}
const TH = {
  "Urad dal": "Ulutham Paruppu",
  "Fenugreek seeds": "Venthayam",
  Poha: "Aval",
  "Toor dal": "Thuvaram Paruppu",
  Shallots: "Sambar Vengayam",
  "Mustard & curry leaves": "Kadugu & Karuveppilai",
  "Moong dal": "Paasi Paruppu",
  "Pepper & cumin": "Milagu & Jeeragam",
  "Chana dal": "Kadalai Paruppu",
  "Fennel seeds": "Soambu",
  Besan: "Kadalai Maavu",
  Ajwain: "Omam",
  "Urad flour": "Ulutham Maavu",
  "Cumin & sesame": "Jeeragam & Ellu",
  Chickpeas: "Kondai Kadalai",
  "Coconut grated": "Thengai Thuruval",
  "Mustard seeds": "Kadugu",
  "Saffron colour": "Kesari Colour",
  "Cardamom powder": "Elakkai Thool",
  Vermicelli: "Semiya",
  "Cashews & raisins": "Mundhiri & Ularndha Thiratchai",
  "Dry ginger powder": "Sukku Podi",
  "Mint & coriander": "Pudhina & Kothamalli",
  Coriander: "Kothamalli",
  "Sesame oil": "Nallennai",
  Spinach: "Keerai",
  Coconut: "Thengai",
  Cumin: "Jeeragam",
  "Roasted gram": "Pottukadalai",
  "Sesame seeds": "Ellu",
  Asafoetida: "Perungayam",
  Cardamom: "Elakkai",
  Almonds: "Badam",
  Saffron: "Kungumapoo",
  "Puffed rice": "Pori",
  "Grated coconut": "Thengai Thuruval",
  Fennel: "Soambu",
  "Pepper & fennel": "Milagu & Sombu",
};
const SUB = {
  "Sambar powder": [
    ["Coriander powder (Malli Thool)", 0.6],
    ["Chilli powder ", 0.3],
    ["Turmeric powder ", 0.1],
    ["Cumin powder (Jeeragam Thool)", 0.1],
  ],
  "Rasam powder": [
    ["Pepper powder ", 0.25],
    ["Cumin powder (Jeeragam Thool)", 0.25],
    ["Coriander powder (Malli Thool)", 0.35],
    ["Chilli powder ", 0.15],
  ],
  "Biriyani masala": [
    ["Garam masala", 0.5],
    ["Chilli powder ", 0.25],
    ["Coriander powder (Malli Thool)", 0.25],
    ["Turmeric powder ", 0.1],
  ],
  "Garam masala": [
    ["Cinnamon powder (Pattai Thool)", 0.4],
    ["Cardamom powder (Elakkai Thool)", 0.3],
    ["Clove powder (Kirambu Thool)", 0.15],
    ["Pepper powder", 0.15],
  ],
  "Chilli powder": [
    [
      "Dry red chilli, crushed, or Green chilli",
      1.5,
      "nos",
    ],
  ],
  "Pepper powder": [["Whole pepper (Milagu), crushed fresh", 0.7]],
  "Chaat masala": [
    ["Cumin powder (Jeeragam Thool)", 0.4],
    ["Chilli powder", 0.2],
    ["Lemon juice", 0.5],
    ["Salt", 0.1],
  ],
  "Cardamom powder": [["Cardamom pods (Elakkai), crushed", 4, "nos"]],
  "Dry ginger powder": [["Fresh ginger, grated", 1.5]],
};
const q4 = (x) => Math.round(x * 4) / 4;
const tsq = (x) =>
  x < 0.2 ? "a pinch of" : x >= 3 ? q4(x / 3) + " tbsp" : q4(x) + " tsp";
function list() {
  const d = D[cur],
    f = sv / 4,
    n = (x) => +(x * f).toFixed(2);
  const rows = d[7].split(";").filter(Boolean).map((s) => {
    const [a, b, c] = s.split("|");
    const opt = (OP[d[0]] || []).includes(a)
      ? '<small class="opt"> (optional)</small>'
      : "";
    const same = TH[a] && TH[a].toLowerCase() == a.toLowerCase();
    const nm = TH[a] && !same ? `${a} <small class="th">(${TH[a]})</small>` : a;
    let alt = "";
    if (SUB[a] && (c == "tsp" || c == "tbsp")) {
      const t = b * f * (c == "tbsp" ? 3 : 1);
      const use = SUB[a]
        .map(
          ([x, q, u]) =>
            (u == "nos"
              ? Math.max(1, Math.round(q * t)) + " "
              : tsq(q * t) + " ") + x,
        )
        .join(" + ");
      alt = `<div class="alt">💡 No ${a}${TH[a] && !same ? " (" + TH[a] + ")" : ""} at home? Use instead: ${use}</div>`;
    }
    return `<li><span>${nm}${opt}</span><b>${n(+b)} ${c == "cup" ? "cup (" + n(b * 250) + " ml)" : c}</b>${alt}</li>`;
  });
  $("#pn").innerHTML =
    `<div class="serv"><b>Servings</b><div class="step"><button onclick="ch(-1)">−</button><b>${sv}</b><button onclick="ch(1)">+</button></div></div><ul>${rows.join("")}</ul><p class="cupn">📏 1 cup = 250 ml · 1 tbsp = 15 ml · 1 tsp = 5 ml<br>(optional) = you can skip this, the dish will still turn out well</p>`;
}
function ch(x) {
  sv = Math.min(12, Math.max(1, sv + x));
  list();
}
function upd(k) {
  const o = TM[k];
  $("#c" + k).textContent = o.l ? fm(o.l) : "DONE ✅";
  $("#c" + k).classList.toggle("done", !o.l);
  $("#p" + k).style.width = 100 - (o.l / o.t) * 100 + "%";
  $("#b" + k).textContent = o.run ? "⏸ Pause" : "▶ Start";
}
function tick() {
  TM.forEach((o, k) => {
    if (o.run && o.l > 0) {
      o.l--;
      if (!o.l) {
        o.run = 0;
        beep();
      }
      upd(k);
    }
  });
}
function tg(k) {
  const o = TM[k];
  if (!o.l) o.l = o.t;
  o.run = !o.run;
  upd(k);
}
function rs(k) {
  const o = TM[k];
  o.run = 0;
  o.l = o.t;
  upd(k);
}
function ad(k, d) {
  const o = TM[k];
  o.t = Math.max(60, o.t + d * 60);
  o.b = o.t / 60 / FL[o.f][1];
  o.l = o.run ? Math.max(1, Math.min(o.t, o.l + d * 60)) : o.t;
  upd(k);
}
function beep() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.35, 0.7].forEach((t) => {
      const o = c.createOscillator(),
        g = c.createGain();
      o.connect(g);
      g.connect(c.destination);
      o.frequency.value = 880;
      g.gain.value = 0.15;
      o.start(c.currentTime + t);
      o.stop(c.currentTime + t + 0.2);
    });
  } catch (e) {}
}
render();
