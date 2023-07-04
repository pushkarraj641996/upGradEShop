import { React, useState } from "react";

import Card from "../Card/Card";
import Filter from "../ToggleButton/ToggleButton";
import Sorter from "../../common/DropDownMenu/DropDownMenu";

import "./Home.css";

const FilterTypes = {
  ALL: "0",
  APAREL: "1",
  ELECTRONICS: "2",
  FOOTWEAR: "3",
  PERSONAL_CARE: "4",
};

const SortingMenu = [
  "Default",
  "Price: High to Low",
  "Price: Low to high",
  "Newest",
];

const items = [
  {
    id: 2001,
    name: "Iphone14",
    price: 120000,
    imageURL:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png/mxw_2256,f_auto",
    Description: "A brand new Apple product",
    type: FilterTypes.ELECTRONICS,
  },
  {
    id: 2002,
    name: "RRR Logo Tshirt",
    price: 300,
    imageURL:
      "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
    Description: "Cotton Funky Tshirt",
    type: FilterTypes.APAREL,
  },
  {
    id: 2003,
    name: "Polo Ralph Lauren",
    price: 19500,
    imageURL:
      "https://imagescdn.thecollective.in/img/app/product/8/875671-10462443.jpg?w=100",
    Description: "Men Blue Parkside Active Stretch Jean",
    type: FilterTypes.APAREL,
  },
  {
    id: 2004,
    name: "SAMSUNG Galaxy S23 Ultra 5G",
    price: 124000,
    imageURL:
      "https://www.91-cdn.com/hub/wp-content/uploads/2022/09/20220929_173949_0000.png",
    Description:
      "Get a smartphone for yourself that can detect your moods and react appropriately",
    type: FilterTypes.ELECTRONICS,
  },
  {
    id: 2005,
    name: "Bruton Running Shoes for Men",
    price: 349,
    imageURL:
      "https://www.jiomart.com/images/product/500x630/rvnezaqnsd/bruton-running-shoes-for-men-product-images-rvnezaqnsd-0-202206141815.jpg",
    Description: "Shoes that keep you go. Lightweight",
    type: FilterTypes.FOOTWEAR,
  },
  {
    id: 2006,
    name: "AirPods (3rd generation)",
    price: 20900,
    imageURL:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
    Description:
      "AirPods are lightweight and offer a contoured design. They sit at just the right angle for comfort and to better direct audio to your ear",
    type: FilterTypes.ELECTRONICS,
  },
  {
    id: 2007,
    name: "Himalaya Natural Glow Kesar Face Wash",
    price: 156,
    imageURL: "https://m.media-amazon.com/images/I/51CXZHh+UxL.jpg",
    Description:
      "Himalaya’s Natural Glow Kesar Face Wash is a soap-free, formulation that brightens and rejuvenates your skin, giving it a healthy, natural glow.",
    type: FilterTypes.PERSONAL_CARE,
  },
  {
    id: 2008,
    name: "L'Oreal Paris Shampoo",
    price: 549,
    imageURL: "https://m.media-amazon.com/images/I/31th5NMMyNL.jpg",
    Description:
      "Total Repair 5 shampoo for damaged, dry, lifeless, dull, or weak hair, Fights against the five visible signs of damaged hair: hair fall, dryness, roughness, dullness, and split ends",
    type: FilterTypes.PERSONAL_CARE,
  },
];

let newItemsList = [...items];

const Home = (props) => {
  const [filter, setFilter] = useState(FilterTypes.ALL);
  const [sort, setSort] = useState(0);

  const filterSelectHandler = (event, itemCategory) => {
    setFilter(itemCategory);
  };

  const buyClickHandler = (id) => {
    props.buyClickHandle(id);
  };

  const sortSelectHandler = (event) => {
    if (event.target.value === 1) {
      newItemsList.sort((item1, item2) => {
        return item2.price - item1.price;
      });
    } else if (event.target.value === 2) {
      newItemsList.sort((item1, item2) => {
        return item1.price - item2.price;
      });
    } else {
      newItemsList = [...items];
    }
    setSort(event.target.value);
  };
  return (
    <div id="OuterLayout">
      <div id="Filter">
        <Filter value={filter} clickHandler={filterSelectHandler} />
      </div>
      <div id="Sort">
        <Sorter
          list={SortingMenu}
          clickHandler={sortSelectHandler}
          value={sort}
        />
      </div>
      <div id="Catalog">
        {newItemsList.map((item) =>
          item.type === filter || filter === FilterTypes.ALL ? (
            <Card
              key={item.id}
              id={item.id}
              data={item}
              clickHandler={buyClickHandler}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Home;
