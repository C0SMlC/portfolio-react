import { Box, Img, Text, useBreakpointValue } from "@chakra-ui/react";
import JavascriptIcon from "../icons/JavaScriptIcon.jsx";
import styles from "./OverviewPage.module.css";
import HtmlIcon from "../icons/HtmlIcon.jsx";
import CppIcon from "../icons/CppIcon.jsx";
import CSSIcon from "../icons/CssIcon.jsx";
import ReactIcon from "../icons/ReactIcon.jsx";
import NodeJsIcon from "../icons/NodeJsIcon.jsx";
import MongodbIcon from "../icons/MongodbIcon.jsx";
import Image from "../assets/HomeScreenIcon-1.png";

function OverviewPage() {
  const fontSize = useBreakpointValue({ base: "xl", md: "2xl", lg: "3xl" });

  const responsiveStyles = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <section className="container">
      <h1 className="title">
        Overview<p className="reddot">.</p>
      </h1>
      {/* <Img
        src={Image}
        alt="Home Screen Icon"
        width={"350px"}
        height={"350px"}
        className={styles.homeScreenImage}
      /> */}

      <JavascriptIcon className={`${styles.icon} ${styles.js}`} />
      <HtmlIcon className={`${styles.icon} ${styles.html}`} />
      <CSSIcon className={`${styles.icon} ${styles.css}`} />
      <CppIcon className={`${styles.icon} ${styles.cpp}`} />

      <div className={styles.bottom_icons}>
        <ReactIcon className={`${styles.icon} ${styles.react}`} />
        <MongodbIcon className={`${styles.icon} ${styles.mongodb}`} />
        <NodeJsIcon className={`${styles.icon} ${styles.nodejs}`} />
      </div>

      <Box
        maxW="3xl"
        maxH={"3xl"}
        borderWidth="2px"
        rounded="xl"
        shadow="lg"
        py={16}
        px={10}
        overflow="hidden"
        color={"#442104"}
        bg={"#BBDEFB"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={5}
        {...responsiveStyles}
      >
        <Text
          className={styles.text}
          fontSize={fontSize}
          fontWeight="bold"
          display={"flex"}
          alignItems={"center"}
          letterSpacing={"widest"}
        >
          <p className={styles.number}>01</p> &lt; Hi, I&apos;m Pratik Pendurkar
          &gt;
        </Text>

        <Text
          className={styles.text}
          fontSize={fontSize}
          fontWeight="bold"
          display={"flex"}
          letterSpacing={"widest"}
        >
          <p className={styles.number}>02</p> &lt; I Design & Build Web &gt;
        </Text>

        <Text
          className={styles.text}
          fontSize={fontSize}
          fontWeight="bold"
          display={"flex"}
          letterSpacing={"widest"}
        >
          <p className={styles.number}>03</p> &lt; Applications &gt;
        </Text>
      </Box>
    </section>
  );
}

export default OverviewPage;
