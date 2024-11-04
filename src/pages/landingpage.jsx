import {
  Pane,
  Text,
  Button,
  Heading,
  Card,
  Icon,
  majorScale,
} from "evergreen-ui";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const LandingPage = () => {

  return (
    <Pane>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <Pane
        id="inicio"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center" // Center vertically
        paddingY={majorScale(6)}
        height="100vh"
        textAlign="center"
      >
        <Heading size={900} color="white" marginBottom={majorScale(2)}>
          Welcome to Our Solution
        </Heading>
        <Text size={500} color="white" marginBottom={majorScale(4)}>
          Discover a seamless experience to boost your business potential.
        </Text>
        <Button appearance="primary" size="large" color="white">
          Get Started
        </Button>
      </Pane>

      {/* About Us Section */}
      <Pane
        id="nosotros"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        height="100vh"
        paddingY={majorScale(6)}
      >
        <Card
          background="white"
          padding={majorScale(4)}
          elevation={1}
          borderRadius={8}
          textAlign="center"
        >
          <Icon
            icon="star"
            color="primary"
            size={40}
            marginBottom={majorScale(2)}
          />
          <Heading size={600} color="textDark" marginBottom={majorScale(1)}>
            Feature One
          </Heading>
          <Text size={400} color="muted">
            Enhance your productivity with our top-notch feature designed just
            for you.
          </Text>
        </Card>

        <Card
          background="white"
          padding={majorScale(4)}
          elevation={1}
          borderRadius={8}
          textAlign="center"
        >
          <Icon
            icon="timeline-bar-chart"
            color="primary"
            size={40}
            marginBottom={majorScale(2)}
          />
          <Heading size={600} color="textDark" marginBottom={majorScale(1)}>
            Feature Two
          </Heading>
          <Text size={400} color="muted">
            Analyze data effortlessly with real-time insights and reports.
          </Text>
        </Card>

        <Card
          background="white"
          padding={majorScale(4)}
          elevation={1}
          borderRadius={8}
          textAlign="center"
        >
          <Icon
            icon="cog"
            color="primary"
            size={40}
            marginBottom={majorScale(2)}
          />
          <Heading size={600} color="textDark" marginBottom={majorScale(1)}>
            Feature Three
          </Heading>
          <Text size={400} color="muted">
            Customize your experience with flexible settings and options.
          </Text>
        </Card>
      </Pane>

      {/* Call to Action */}
      {/* <Pane
        background="backgroundDark"
        paddingY={majorScale(6)}
        textAlign="center"
      >
        <Heading
          size={800}
          color="backgroundLight"
          marginBottom={majorScale(2)}
        >
          Ready to Get Started?
        </Heading>
        <Button appearance="primary" size="large" color="white">
          Join Now
        </Button>
      </Pane> */}

      {/* Footer */}
      <Footer />
    </Pane>
  );
};

export default LandingPage;
