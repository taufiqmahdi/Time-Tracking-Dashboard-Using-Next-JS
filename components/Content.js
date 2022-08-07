import { Avatar, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import UserProfile from "./UserProfile";
import data from "../data.json";
import Trackers from "./Trackers";
import { useState } from "react";

const Content = () => {
  // const datas = data
  // console.log(data[0].title)

  // data.forEach(element => {
  //   console.log(element)
  // });

  const [timeCategory, setTimeCategory] = useState("weekly");

  return (
    <Flex
      id='background'
      h="100vh"
      fontFamily="Rubik"
      bgColor="neutral.veryDarkBlue"
      color="white"
      align="center"
      justify="center"
    >
      <Flex
        id="container"
        w="780px"
        h="380px"
        align="center"
        justify="space-between"
        bgColor="neutral.veryDarkBlue"
      >
        <UserProfile setTimeCategory={timeCategory} />

        <Flex id="categories" w="580px" h="380px" wrap="wrap" justify='space-between'>
          {/* <Flex 
          // w="100%" 
          id="workandexercise"
              align="center"
              justify="center"
              w="225px"
              direction="column"
              h="400px"
              wrap="wrap"> */}
            {/* <Flex
              id="workandexercise"
              align="center"
              justify="center"
              w="225px"
              direction="column"
              h="400px"
              wrap="wrap"
            > */}
              <Trackers data={data} />
            {/* </Flex> */}
          {/* </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Content;
