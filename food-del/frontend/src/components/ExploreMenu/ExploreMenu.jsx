import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <motion.div
      className="explore-menu"
      id="explore-menu"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
            className="explore-menu-list-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={item.menu_image}
              className={category === item.menu_name ? "active" : ""}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            />
            <p>{item.menu_name}</p>
          </motion.div>
        ))}
      </div>

      <hr />
    </motion.div>
  );
};

export default ExploreMenu;
