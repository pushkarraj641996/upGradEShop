import { React, useState } from "react";

import Card from "../Card/Card";
import Filter from "../ToggleButton/ToggleButton";
import Sorter from "../../common/DropDownMenu/DropDownMenu";

import "./Home.css";
import AlertDialog from "../../common/Dialog/AlertDialog/AlertDialog";

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
    AvailableQty: 20,
    price: 120000,
    imageURL:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png/mxw_2256,f_auto",
    Description: "A brand new Apple product",
    type: FilterTypes.ELECTRONICS,
  },
  {
    id: 2002,
    name: "RRR Logo Tshirt",
    AvailableQty: 450,
    price: 300,
    imageURL:
      "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
    Description: "Cotton Funky Tshirt",
    type: FilterTypes.APAREL,
  },
  {
    id: 2003,
    name: "Polo Ralph Lauren",
    AvailableQty: 150,
    price: 19500,
    imageURL:
      "https://imagescdn.thecollective.in/img/app/product/7/795145-9342418.jpg",
    Description: "Men Blue Parkside Active Stretch Jean",
    type: FilterTypes.APAREL,
  },
  {
    id: 2004,
    name: "SAMSUNG Galaxy S23 Ultra 5G",
    AvailableQty: 50,
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
    AvailableQty: 10,
    price: 349,
    imageURL:
      "https://www.jiomart.com/images/product/500x630/rvnezaqnsd/bruton-running-shoes-for-men-product-images-rvnezaqnsd-0-202206141815.jpg",
    Description: "Shoes that keep you go. Lightweight",
    type: FilterTypes.FOOTWEAR,
  },
  {
    id: 2006,
    name: "AirPods (3rd generation)",
    AvailableQty: 6,
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
    AvailableQty: 200,
    price: 156,
    imageURL: "https://m.media-amazon.com/images/I/51CXZHh+UxL.jpg",
    Description:
      "Himalaya’s Natural Glow Kesar Face Wash is a soap-free, formulation that brightens and rejuvenates your skin, giving it a healthy, natural glow.",
    type: FilterTypes.PERSONAL_CARE,
  },
  {
    id: 2008,
    name: "L'Oreal Paris Shampoo",
    AvailableQty: 60,
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
  const [displayAlertData, setDisplayAlertData] = useState({
    display: false,
    id: "",
  });

  const filterSelectHandler = (event, itemCategory) => {
    setFilter(itemCategory);
  };

  const buyClickHandler = (id) => {
    items.forEach((item) =>
      item.id === id ? props.buyClickHandle(item) : null
    );
  };

  const confirmDeleteHandler = (id) => {
    newItemsList.forEach((item, index) => {
      if (item.id === id) {
        newItemsList.splice(index, 1);
      }
    });
    setDisplayAlertData({
      display: false,
      id: "",
    });
  };

  const cancelDeleteHandler = () => {
    setDisplayAlertData({
      display: false,
      id: "",
    });
  };

  const deleteHandler = (id) => {
    setDisplayAlertData({
      display: true,
      id: id,
    });
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
    <div id="HomePageLayout">
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
        {newItemsList.map((item) => {
          if (
            (item.type === filter || filter === FilterTypes.ALL) &&
            (item.name.toLowerCase().search(props.searchStr.toLowerCase()) ===
              0 ||
              item.name.toLowerCase().search(props.searchStr.toLowerCase()) !==
                -1)
          ) {
            return (
              <Card
                key={item.id}
                id={item.id}
                data={item}
                clickHandler={buyClickHandler}
                delete={deleteHandler}
              />
            );
          }
        })}
      </div>
      {displayAlertData.display ? (
        <AlertDialog
          id={displayAlertData.id}
          display={displayAlertData.display}
          confirm={confirmDeleteHandler}
          cancel={cancelDeleteHandler}
        />
      ) : null}
    </div>
  );
};

export default Home;
