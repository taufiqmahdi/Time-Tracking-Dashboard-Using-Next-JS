import { Flex, Avatar, Heading, Text } from "@chakra-ui/react";

const UserProfile = () => {
  return (
    <Flex
      id="userprofilelayout"
      w="250px"
      h="400px"
      bgColor="neutral.veryDarkBlue"
      align="center"
      justify="flex-start"
      direction="column"
    >
      <Flex
        w="80%"
        h="100%"
        align="center"
        justify="flex-start"
        direction="column"
        bgColor="neutral.darkBlue"
        borderRadius="15px"
      >
        <Flex
          id="userprofile"
          align="flex-start"
          justify="center"
          h="65%"
          w="100%"
          direction="column"
          bgColor="primary.blue"
          borderRadius="15px"
          p="20px"
        >
          <Flex id="avatar" align="center" justify="center" mb="50px">
            <Avatar name="Jeremy Robson" src="image-jeremy.png" />
          </Flex>
          <Text fontWeight="300">Report for</Text>
          <Flex id="username">
            <Heading fontWeight="300">Jeremy Robson</Heading>
          </Flex>
        </Flex>
        <Flex
          id="timecategory"
          align="flex-start"
          justify="center"
          direction="column"
          w="100%"
          h="35%"
          p="20px"
          gap="10px"
          fontWeight="300"
          color="neutral.desaturatedBlue"
        >
          <Flex id="dailycategory">Daily</Flex>
          <Flex id="weeklycategory" color="white">
            Weekly
          </Flex>
          <Flex id="monthlycategory">Monthly</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserProfile