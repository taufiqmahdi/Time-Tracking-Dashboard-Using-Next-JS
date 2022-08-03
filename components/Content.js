import { Avatar, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import UserProfile from './UserProfile'
import data from "../data.json";
import Tracker from "./Tracker";

const Content = () => {
  const datas = data
  console.log(datas[0].title)

  return (
    <Flex
      h="100vh"
      fontFamily="Rubik"
      bgColor="neutral.veryDarkBlue"
      color="white"
      align="center"
      justify="center"
    >
      <Flex
        id="container"
        w="1000px"
        h="400px"
        align="center"
        justify="center"
        bgColor="neutral.veryDarkBlue"
        gap='20px'
      >
        <UserProfile />
        
        <Flex id='categories' w='730px' border='2px'>
          <Tracker />
        </Flex>

      </Flex>
    </Flex>
  );
};

export default Content;
