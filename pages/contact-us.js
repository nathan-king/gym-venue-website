import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Favicon from "../components/Favicon";
import styles from "./styles/contact-us.module.scss";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Jumbotron,
} from "reactstrap";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("General Enquiry");
  const [message, setMessage] = useState("");

  const state = {
    name,
    email,
    enquiryType,
    message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    var service_id = "default_service";
    var template_id = "message_template";
    var user_id = "user_GoXzo0iR6wJ3KqB1148aq";
    emailjs.send(service_id, template_id, state, user_id);
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>Sydney Sauna | Contact Us</title>
        <Favicon />
      </Head>
      <Layout>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <FormGroup className={styles.formGroup}>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.formInput}
            />
          </FormGroup>

          <FormGroup className={styles.formGroup}>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.formInput}
            />
          </FormGroup>

          <FormGroup>
            <Label for="enquiryType">Subject of Enquiry</Label>
            <Input
              type="select"
              name="enquiryType"
              id="enquiryType"
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
              className={styles.formInput}
            >
              <option value="General Enquiry" className={styles.formOption}>
                General Enquiry
              </option>
              <option value="Lost Item" className={styles.formOption}>
                Lost Item
              </option>
            </Input>
          </FormGroup>

          <FormGroup className={styles.formGroup}>
            <Label for="text">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="text"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.formInput}
            />
          </FormGroup>

          <div className={styles.buttonContainer}>
            <Button color="danger" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Layout>
    </div>
  );
}
