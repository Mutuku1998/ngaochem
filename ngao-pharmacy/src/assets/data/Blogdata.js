import fruits from '../img/fruits.jpg'
import prostate from '../img/prostate.jpg'
import ringworms from '../img/ringworm.jpg'
const Blogdata = [
    {
        id: 1,
        title: "Nutrition",
        author: "Harvard",
        date: "17 June, 2023",
        time: "9pm",
        imgUrl: fruits,
        description:
          'Are some fruits healtheir than others.Most people have heard the nutritional recommendation to eat five servings of fruit per day',
        quote:
          "Most people have heard the nutritional recommendation to eat five servings of fruit per day",
      },
      {
        id: 2,
        title: "Child and Teen Health",
        author: "Dr Eric",
        date: "10 June, 2022",
        time: "8am",
        imgUrl: ringworms,
        description:
          'Ringworm: what to know and do ?Ringworm is a common, contagious skin infection caused by a fungus',
        quote:
          "Ringworm is a common, contagious skin infection caused by a fungus. Children can get it from other people who have it or from an infected animal. While it can be itchy and unpleasant, ringworm is usually harmless.",
      },
      {
      id: 3,
      title: "HealthCare Disparities",
      author: "Harvad ",
      date: "12 June, 2023",
      time: "7pm",
      imgUrl: prostate,
      description:
        'Prostate cancer. Prostate cancer is generally viewed as a disease of older men, yet about 10% of new diagnoses occur in men age 55 or younger',
      quote:
        "Prostate cancer is generally viewed as a disease of older men, yet about 10% of new diagnoses occur in men age 55 or younger",
    }
]
export default Blogdata;