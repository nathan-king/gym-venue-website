import Head from 'next/head'
import Layout from '../components/Layout'
import Favicon from '../components/Favicon'
import styles from './styles/contact-us.module.scss'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';


export default function Contact() {

    return (
        <div className={styles.main}>
            <Head>
                <title>Sydney Sauna | Contact Us</title>
                <Favicon />
            </Head>
            <Layout>

            <Form className={styles.form}>
                <FormGroup className={styles.formGroup}>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Name" />
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="enquiryType">Subject of Enquiry</Label>
                    <Input type="select" name="select" id="enquiryType">
                        <option>General Enquiry</option>
                        <option>Lost Item</option>
                        <option>Job Application</option>
                    </Input>
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                    <Label for="text">Message</Label>
                    <Input type="textarea" name="text" id="text" rows="5"/>
                </FormGroup>
                <FormGroup>
                    <Label for="cv">CV/Resume (Job applications only)</Label>
                    <Input type="file" name="file" id="cv" />
                </FormGroup>
                <div className={styles.buttonContainer}>
                    <Button color="danger">Submit</Button>
                </div>
            </Form>

                {/* <Jumbotron className={styles.content}>


                    <submit>
                        <div  className={styles.submitField}>
                            <h2>Contact Us</h2>
                            <input type="text" placeholder="Name" className={styles.input} />
                            <input type="email" placeholder="Email" className={styles.input} />
                            <textarea placeholder="Message" className={styles.input} rows="5"></textarea>
                            <Button color="danger" className={styles.button}>Submit</Button>
                        </div>
                    </submit>
                </Jumbotron> */}
            </Layout>
        </div>
    )
}