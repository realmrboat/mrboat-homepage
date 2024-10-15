import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Center,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Fief Survival">
    <Container>
      <Title>
        Fief Survival <Badge>2022-2023</Badge>
      </Title>
      <Center my={6}>
      <Box borderRadius="lg" overflow="hidden">
        <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
          <source src="/images/works/fiefsurvivalvideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Box>
      </Center>
      <P>
        A third person wave surviving action game for Windows.

        My role in this development was mixed, leading a small group of 3D artist while supporting
        the project needs as a Technical Artist.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Management of a team composed by four 3D artists</ListItem>
        <ListItem>3D asset pipeline design and maintenance based on the project needs</ListItem>
        <ListItem>
          Development of inner art guides to speed up development and ensure a correct optimization.
        </ListItem>
        <ListItem>
          Creation of inner tooling to speed up the optimization, cleaning and rigging of poly-converted voxel models.
        </ListItem>
      </UnorderedList>


      <List ml={4} my={4}>
        <ListItem>
          <Meta>Engine</Meta>
          <span>Unity</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C# / Python / PyMEL</span>
        </ListItem>
      </List>
      <Center my={6}>
      <Box borderRadius="lg" overflow="hidden">
        <video controls width="100%" style={{ maxWidth: '640px' }} autoPlay loop>
          <source src="/images/works/fiefsurvival2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      </Center>
      <WorkImage src="/images/works/fiefsurvival1.png" alt="Website" />
      <WorkImage src="/images/works/fiefsurvival2.png" alt="Website" />
      <WorkImage src="/images/works/fiefsurvival3.png" alt="Website" />
      <WorkImage src="/images/works/fieftraining_eyecatch.png" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
