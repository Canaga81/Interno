import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import Navigation from "../../Components/Navigation";
import WorkPlanCards from "../../Components/WorkPlanCards";
import { motion } from "framer-motion";
import Stylishly from "../../Components/Stylishly";

const HomePage = () => {

  return (

    <motion.div initial={{ opacity: 0 }}
      transition={{ duration: '1' }}
      whileInView={{ opacity: 1 }}>
      
      <Helmet>

        <title>Interno</title>
        
      </Helmet>

      <Navigation />
      <Banner />
      <WorkPlanCards />
      <Stylishly />

    </motion.div>

  );

};

export default HomePage;