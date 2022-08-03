import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const Tracker = () => {
  return (
    <Flex w='100%'>
      <Flex
        id="workandexercise"
        align="center"
        justify="center"
        w="225px"
        direction="column"
        h="400px"
        gap="20px"
      >
        <Flex id="work" align="center" justify="center" h="50%" w="100%">
          <Flex
            bgColor="primary.lightRed.work"
            w="80%"
            h="190px"
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
                <Flex>Work</Flex>
                <Flex>
                  <Image
                    src="icon-ellipsis.svg"
                    alt="icon-ellipsis"
                    fit="contain"
                  />
                </Flex>
              </Flex>
              <Flex pt="30px">
                <Heading fontWeight="300">32hrs</Heading>
              </Flex>
              <Flex>
                <Text fontWeight="300">Last Week - 36hrs</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          id="exercise"
          align="center"
          justify="center"
          border="2px"
          h="50%"
          w="100%"
          direction="column"
        >
          <Flex h="20%" border="2px" w="80%">
            Work Image
          </Flex>
          <Flex h="80%" border="2px" w="80%">
            Work
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="playandsocial"
        align="center"
        justify="center"
        w="25%"
        direction="column"
        border="2px"
        h="100%"
      >
        <Flex
          id="play"
          align="center"
          justify="center"
          border="2px"
          h="50%"
          w="100%"
          direction="column"
        >
          <Flex h="20%" border="2px" w="80%">
            Work Image
          </Flex>
          <Flex h="80%" border="2px" w="80%">
            Work
          </Flex>
        </Flex>
        <Flex
          id="social"
          align="center"
          justify="center"
          border="2px"
          h="50%"
          w="100%"
          direction="column"
        >
          <Flex h="20%" border="2px" w="80%">
            Work Image
          </Flex>
          <Flex h="80%" border="2px" w="80%">
            Work
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="studyandselfcare"
        align="center"
        justify="center"
        w="25%"
        direction="column"
        border="2px"
        h="100%"
      >
        <Flex
          id="study"
          align="center"
          justify="center"
          border="2px"
          h="50%"
          w="100%"
          direction="column"
        >
          <Flex h="20%" border="2px" w="80%">
            Work Image
          </Flex>
          <Flex h="80%" border="2px" w="80%">
            Work
          </Flex>
        </Flex>
        <Flex
          id="selfcare"
          align="center"
          justify="center"
          border="2px"
          h="50%"
          w="100%"
          direction="column"
        >
          <Flex h="20%" border="2px" w="80%">
            Work Image
          </Flex>
          <Flex h="80%" border="2px" w="80%">
            Work
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Tracker;
