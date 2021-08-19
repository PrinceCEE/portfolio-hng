/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { 
  Box, 
  Flex, 
  Text, 
  Tag, 
  TagLabel,
  List,
  ListItem,
  Link,
  Icon,
  Heading,
  Progress,
  HStack,
  Input,
  FormControl,
  Button,
  FormErrorMessage,
  Image
} from '@chakra-ui/react'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'
import { Formik, Field } from 'formik'
import axios from 'axios'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chimezie Edeh</title>
      </Head>
      <Box className={styles.header}>
        <Box>
          <Text>Chimezie Edeh</Text>
        </Box>
        <Box className={styles.headerBg}></Box>
      </Box>
      <Box className={styles.content} mt="200px">
        <Box className={styles.container}>
          <Box bgColor="#fff">
            <Flex flexDirection="column">
              <Box
                bgColor="#fff"
                boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
                p="0"
              >
                <Flex flexDir="column">
                  <Box
                    pt={{lg: "14"}}
                    px={{lg: "12"}}
                    pb={{lg: "8"}}
                  >
                    <Box justify="space-between" display={{ md: "flex" }}>
                      <Box mr="4" w={{base: "100%", lg: "35%"}} flexShrink={0}>
                        <Image
                          w="100%"
                          src="/images/mypic.jpg"
                          alt="Chimezie's picture"
                        />
                      </Box>
                      <Box pl="8">
                        <Flex flexDir="column">
                          <Tag
                            size="lg"
                            backgroundColor="#07cb79"
                            borderRadius="3px"
                            boxSize="max-content"
                            mb="2"
                            mt={{base: "2"}}
                          >
                            <TagLabel color="#fff" fontWeight="bold">Hello</TagLabel>
                          </Tag>
                          <Box pb="4" borderBottom="solid 1px #dedede">
                            <Text
                              fontSize="36px"
                              lineHeight="1.1"
                              fontWeight="700"
                              mb="2"
                            >
                              <span className={styles.textProfile}>I'm</span> Chimezie Edeh
                            </Text>
                            <Text fontSize="18px" fontWeight="400" lineHeight="1.1">Software Developer</Text>
                          </Box>
                          <List mt="4" spacing={{base: "3", lg: "6"}}>
                            <ListItem>
                              <Box display={{lg: "flex"}}>
                                <Text fontWeight="700" fontSize="12px" width="120px" textTransform="uppercase">Address</Text>
                                <Text fontSize="15px" fontWeight="400" color="#9da0a7" lineHeight="20px">University of Ibadan, Ibadan, Oyo State, Nigeria</Text>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box display={{lg: "flex"}}>
                                <Text fontWeight="700" fontSize="12px" width="120px" textTransform="uppercase">Email</Text>
                                <Text fontSize="15px" fontWeight="400" color="#9da0a7" lineHeight="20px">princecee15@gmail.com</Text>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box display={{lg: "flex"}}>
                                <Text fontWeight="700" fontSize="12px" width="120px" textTransform="uppercase">Phone</Text>
                                <Text fontSize="15px" fontWeight="400" color="#9da0a7" lineHeight="20px">(+234) 8034030414</Text>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box display={{lg: "flex"}}>
                                <Text fontWeight="700" fontSize="12px" width="120px" textTransform="uppercase">Education</Text>
                                <Text fontSize="15px" fontWeight="400" color="#9da0a7" lineHeight="20px">Computer Science, University of Ibadan</Text>
                              </Box>
                            </ListItem>
                          </List>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  <Box bgColor="#07cb79" mt={{base: "4"}}>
                    <Flex alignItems="center" justify="space-evenly" px="10" py="6">
                      <Link href="https://www.github.com/princecee">
                        <Icon as={AiOutlineGithub} color="#fff" h={6} w={6}></Icon>
                      </Link>
                      <Link href="https://www.linkedin/in/chimezie-edeh">
                        <Icon as={AiOutlineLinkedin} color="#fff" h={6} w={6}></Icon>
                      </Link>
                      <Link href="https://www.twitter.com/princecee">
                        <Icon as={AiOutlineTwitter} color="#fff" h={6} w={6}></Icon>
                      </Link>
                      <Link href="https://instagram.com/princecee1">
                        <Icon as={AiOutlineInstagram} color="#fff" h={6} w={6}></Icon>
                      </Link>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box
                color="#757575"
                fontSize="20px"
                fontWeight="300"
                lineHeight="1.8"
                textAlign="center"
                marginTop="30px"
                paddingLeft="5%"
                paddingRight="5%"
                mt="20"
              >
                <Box>
                  <Text textAlign="center">
                    Hello! I'm Chimezie Edeh, a software developer based in Nigeria. With experience in web development and mobile application development. Well versed in many programming languages including JavaScript, Typescript, Dart, Python, Golang,  C, C++ and open to lay my hands on many other languages depending on the project at hand. I also have experience working with some frameworks like NestJs, ExpressJs and Flutter.
                  </Text>
                </Box>
              </Box>
              <Box mt="20" mb="20">
                <Heading textAlign="center" mb="4">Professional Skills</Heading>
                <Box
                  bgColor="#fff"
                  boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
                  p="12"
                >
                  <List spacing={8}>
                    <ListItem>
                      <HStack spacing="24px">
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>Javascript & Typescript</Text>
                            <Text>80%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={85} />
                        </Box>
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>Html & CSS</Text>
                            <Text>70%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={70} />
                        </Box>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack spacing="24px">
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>Dart</Text>
                            <Text>70%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={70} />
                        </Box>
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>C/C++</Text>
                            <Text>50%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={50} />
                        </Box>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack spacing="24px">
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>ReactJs</Text>
                            <Text>60%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={60} />
                        </Box>
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>Golang</Text>
                            <Text>40%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={40} />
                        </Box>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack spacing="24px">
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>NodeJs</Text>
                            <Text>85%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={85} />
                        </Box>
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>Flutter</Text>
                            <Text>70%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={70} />
                        </Box>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack spacing="24px">
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>MongoDB</Text>
                            <Text>75%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={70} />
                        </Box>
                        <Box w="50%">
                         <Flex justify="space-between">
                            <Text>PostgreSQL</Text>
                            <Text>40%</Text>
                          </Flex>
                          <Progress colorScheme="greenModified" size="xs" value={40} />
                        </Box>
                      </HStack>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box mb="20">
                <Heading textAlign="center" mb="4">Work Experience</Heading>
                <Box
                  bgColor="#fff"
                  position="relative"
                  mt="8"
                >
                  <Box
                    top="80px"
                    h="666px"
                    bgColor="greenModified.100"
                    w={{lg:"4px"}}
                    opacity="0.2"
                    ml="-2px"
                    position="absolute"
                    left="50%"
                  ></Box>
                  <Box justify="space-between" display={{lg: "flex"}}>
                    <Box w={{lg:"45%"}}>
                      <Box
                        boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
                        borderTop="5px solid #07cb79"
                        textAlign="center"
                        p="8"
                        mb="8"
                      >
                        <Text
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="1"
                          mb="15px"
                          color="greenModified.100"
                        >April, 2020 - May, 2020</Text>
                        <Text
                          fontFamily="Open Sans"
                          fontSize="22px"
                          color="##414141"
                          fontWeight="400"
                          lineHeight="1.1"
                          marginBottom="20px"
                          textTransform="uppercase"
                        >DestinClothing</Text>
                        <Text
                          color="#878787"
                          fontSize="13px"
                          fontWeight="400"
                          lineHeight="1.1"
                          textTransform="uppercase"
                          marginBottom="30px"
                        >Full stack developer</Text>
                        <Text
                          color="#757575"
                          lineHeight="1.5"
                          mb="25px"
                          fontSize="100%"
                          verticalAlign="baseline"
                        >
                          Designed and built an e-commerce website for the clothing line. Conducted the requirements and design of the Company's website and laid out the project architecture and implemented it
                        </Text>
                      </Box>
                      <Box
                        boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
                        borderTop="5px solid #07cb79"
                        textAlign="center"
                        p="8"
                      >
                        <Text
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="1"
                          mb="15px"
                          color="greenModified.100"
                        >Nov, 2020 - Mar, 2021</Text>
                        <Text
                          fontFamily="Open Sans"
                          fontSize="22px"
                          color="##414141"
                          fontWeight="400"
                          lineHeight="1.1"
                          marginBottom="20px"
                          textTransform="uppercase"
                        >Skytrade NG</Text>
                        <Text
                          color="#878787"
                          fontSize="13px"
                          fontWeight="400"
                          lineHeight="1.1"
                          textTransform="uppercase"
                          marginBottom="30px"
                        >Full stack mobile app developer</Text>
                        <Text
                          color="#757575"
                          lineHeight="1.5"
                          mb="25px"
                          fontSize="100%"
                          verticalAlign="baseline"
                        >
                          Developed the API for the company’s mobile app, developed the users' mobile app for the company and also developed the admin’s mobile app for the company
                        </Text>
                      </Box>
                    </Box>
                    <Box
                      w={{lg:"45%"}}
                      pt={{lg:"16", base: "8"}}
                      ml={{lg: "10%"}}
                    >
                      <Box
                        boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
                        borderTop="5px solid #07cb79"
                        textAlign="center"
                        p="8"
                        mb="8"
                      >
                        <Text
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="1"
                          mb="15px"
                          color="greenModified.100"
                        >May, 2020 - June, 2020</Text>
                        <Text
                          fontFamily="Open Sans"
                          fontSize="22px"
                          color="##414141"
                          fontWeight="400"
                          lineHeight="1.1"
                          marginBottom="20px"
                          textTransform="uppercase"
                        >Teelhair</Text>
                        <Text
                          color="#878787"
                          fontSize="13px"
                          fontWeight="400"
                          lineHeight="1.1"
                          textTransform="uppercase"
                          marginBottom="30px"
                        >Full stack developer</Text>
                        <Text
                          color="#757575"
                          lineHeight="1.5"
                          mb="25px"
                          fontSize="100%"
                          verticalAlign="baseline"
                        >
                          Designed and built an e-commerce website for the clothing line. Conducted the requirements and design of the Company's website and laid out the project architecture and implemented it
                        </Text>
                      </Box>
                      <Box
                        boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
                        borderTop="5px solid #07cb79"
                        textAlign="center"
                        p="8"
                      >
                        <Text
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="1"
                          mb="15px"
                          color="greenModified.100"
                        >Sept, 2020 - Aug, 2021</Text>
                        <Text
                          fontFamily="Open Sans"
                          fontSize="22px"
                          color="##414141"
                          fontWeight="400"
                          lineHeight="1.1"
                          marginBottom="20px"
                          textTransform="uppercase"
                        >Convre Media</Text>
                        <Text
                          color="#878787"
                          fontSize="13px"
                          fontWeight="400"
                          lineHeight="1.1"
                          textTransform="uppercase"
                          marginBottom="30px"
                        >Backend Developer</Text>
                        <Text
                          color="#757575"
                          lineHeight="1.5"
                          mb="25px"
                          fontSize="100%"
                          verticalAlign="baseline"
                        >
                          Conducted the requirements and design of the Convre Media APIs. Laid out the project architecture and implemented it while being in a team of wonderful people. Managed the team, dividing up roles to enable a smooth development phase. Used languages like Javascript and Typescript, with Nodejs to implement the API, while I used Mongodb as the primary database and Redis as the cache memory.
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mb="20">
                <Heading textAlign="center" mb="4">Contact Me</Heading>
                <Box
                  boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
                  bgColor="#fff"
                  p="8"
                >
                  <Text
                    fontSize="24px"
                    fontFamily="Open Sans"
                    fontWeight="400"
                    lineHeight="1.1"
                  >Feel free to contact me</Text>
                  <Box w={{lg:"70%"}}>
                    <Formik
                      validate={(values) => {
                        const errors: {
                          name?: string;
                          email?: string;
                          subject?: string;
                          message?: string;
                        } = {};

                        if(!values.name) errors.name = "Name can't be empty"
                        if(values.name) {
                          if(values.name.length < 2) errors.name = "Name is too short"
                        }

                        if(!values.subject) errors.subject = "Subject can't be empty"
                        if(values.subject) {
                          if(values.subject.length < 2) errors.subject = "Subject is too short"
                        }

                        if(!values.message) errors.message = "Message can't be empty"
                        if(values.message) {
                          if(values.message.length < 2) errors.message = "Message is too short"
                        }

                        if(!values.email) errors.email = "Email can't be empty"
                        if(values.email) {
                          if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                            errors.email = "Invalid email";
                        }

                        return errors;
                      }}
                      initialValues={{
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                      }}
                      onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                          const response = await axios.post("http://localhost:3002/contact", {...values});
                          alert(response.data.data);
                        } catch(err) {
                          let errMessage: string;
                          if(err.response) {
                            errMessage = err.response.data.data;
                          } else {
                            errMessage = err.message;
                          }
                          alert(errMessage);
                        }  
                        setSubmitting(false);
                        resetForm()                   
                      }}
                    >
                      {({ handleSubmit, isSubmitting }) => (
                        <Box mt="8" w="100%">
                          <form onSubmit={handleSubmit}>
                            <Box mb="2">
                              <Field name="name">
                                {({field, form}) => (
                                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <Input type="text" {...field} placeholder="Name" variant="flushed" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>
                            </Box>
                            <Box mb="2">
                              <Field name="email">
                                {({field, form}) => (
                                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <Input type="email" {...field} placeholder="Email" variant="flushed" />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>
                            </Box>
                            <Box mb="2">
                              <Field name="subject">
                                {({field, form}) => (
                                  <FormControl isInvalid={form.errors.subject && form.touched.subject}>
                                    <Input type="text" {...field} placeholder="Subject" variant="flushed" />
                                    <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>
                            </Box>
                            <Box mb="2">
                              <Field name="message">
                                {({field, form}) => (
                                  <FormControl isInvalid={form.errors.message && form.touched.message}>
                                    <Input type="text" {...field} placeholder="Message" variant="flushed" />
                                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>
                            </Box>
                            <Button
                              mt="4"
                              colorScheme="greenModified"
                              type="submit"
                              isLoading={isSubmitting}
                            >
                              Submit
                            </Button>
                        </form>
                        </Box>
                      )}
                    </Formik>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
