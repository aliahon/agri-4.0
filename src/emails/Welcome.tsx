import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  firstName: string;
}

export const WelcomeEmail = ({ firstName = "User" }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          // TODO: Replace with your logo
          src={`http://localhost:4000/Vector.png`}
          width="170"
          height="50"
          alt="Agri4.0"
          style={logo}
        />
        <Text style={paragraph}>Hi {firstName},</Text>
        <Text style={paragraph}>
          Welcome to agri4.0, where agriculture meets technology. We are excited
          to have you on board!
        </Text>
        <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href="https://agri40.ma/s">
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          agri4.0 team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>CITE RIAD SALAM, Agadir 80000</Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#27ae60",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
