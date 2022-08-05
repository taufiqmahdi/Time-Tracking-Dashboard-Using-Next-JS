import { Avatar, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import UserProfile from "./UserProfile";
import data from "../data.json";
import Trackers from "./Trackers";

const Content = () => {
  // const datas = data
  // console.log(data[0].title)

  // data.forEach(element => {
  //   console.log(element)
  // });

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
        gap="20px"
      >
        <UserProfile />

        <Flex id="categories" w="730px">
          <Flex w="100%">
            <Flex
              id="workandexercise"
              align="center"
              justify="center"
              w="225px"
              direction="column"
              h="400px"
              wrap="wrap"
            >
              <Trackers data={data} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Content;
