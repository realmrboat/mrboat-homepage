import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Fiefverse Hex Land">
    <Container>
      <Title>
        Fiefverse Hex Land <Badge>2023</Badge>
      </Title>
      <Center my={6}>
      <Box borderRadius="lg" overflow="hidden">
        <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
          <source src="/images/works/WorldBuilder.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Box>
      </Center>
      <P>
        Fiefverse Hex Land is a web based X4 game which mixes the strategy, tower defense and city building genres.
        <br /><br />
        I contributed to this project as the main developer.
        <br />
        My main duties being:
        
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Development of game logic in javascript for PlayCanvas. </ListItem>
        <ListItem>Creation of inner use world building tooling.</ListItem>
        <ListItem>
          Design and implementation of web3 compatible game systems.
        </ListItem>
        <ListItem>
          3D animation video creation for promotional purposes. 
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>
            PlayCanvas
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            JavaScript / PyMEL
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://medium.com/@forgedincrypto/taking-another-look-at-the-fiefverse-cf4b3ae6e975">
            <Badge mr={2}>Forged in Crypto</Badge>
            Taking another look at the Fiefverse
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <Center my={6}>
      <Box borderRadius="lg" overflow="hidden">
        <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
          <source src="/images/works/fiefhex3.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Box>
      </Center>
      <WorkImage src="/images/works/fiefhex4.png" alt="Website" />
      <Center my={6}>
      <Box borderRadius="lg" overflow="hidden">
        <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
          <source src="/images/works/fiefhexland.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      </Center>
      <WorkImage src="/images/works/fiefhex2.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
