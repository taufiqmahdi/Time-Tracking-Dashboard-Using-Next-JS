import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const Tracker = ({ data }) => {
    // console.log(data)

  return (
    <Flex id="work" align="center" justify="center" h="50%" w="225px" pb="20px">
      <Flex
        bgColor="primary.lightRed.work"
        w="80%"
        h="180px"
        direction="column"
        borderRadius="15px"
      >
        <Flex h="15%" w="100%" justify="right" pr="10px">
          <Image src="icon-work.svg" alt="icon-work" fit="cover" w="25%" />
        </Flex>
        <Flex
          h="95%"
          w="100%"
          bgColor="neutral.darkBlue"
          borderRadius="15px"
          p="20px"
          direction="column"
          justify="space-between"
        >
          <Flex w="100%" justify="space-between" align="center">
            <Flex>{data.title}</Flex>
            <Flex>
              <Image
                src="icon-ellipsis.svg"
                alt="icon-ellipsis"
                fit="contain"
              />
            </Flex>
          </Flex>
          <Flex pt="30px">
            <Heading fontWeight="300">{data.timeframes.weekly.current}</Heading>
          </Flex>
          <Flex>
            <Text fontWeight="300">Last Week - {data.timeframes.weekly.previous}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Tracker;
