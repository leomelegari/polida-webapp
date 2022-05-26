import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import PolidaLogo from "./../../assets/logo.svg";
import { motion } from "framer-motion";

const Landingpage = () => {
  return (
    <Container>
      <Link to="/login">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <img src={PolidaLogo} className="Polida-logo" alt="logo" />
        </motion.div>
      </Link>
    </Container>
  );
};

export default Landingpage;
