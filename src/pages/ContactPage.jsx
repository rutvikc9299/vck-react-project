import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
        <div>
            <Header/>
            
            <div class="content">
          <div class="paragraph">
            <h1  id="heading">Contact Us</h1>

            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <div>
            <h1>General Enquiries</h1>

            <p><b>Vivekanand College Main Campus</b></p>
            <p>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]India</p>
            <p>Phone:<b> +91 12345 67890</b></p>
            <p>Email:<b> info@vivekanandcollege.edu</b></p>
            <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
            </div>
            <div>
            <h1>Admissions Office</h1>

            <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: admissions@vivekanandcollege.edu</p>

            </div>
            <h1>Student Support Services</h1>
            <p>For current student support, academic advising, or general assistance:</p>
            <p>Phone: +91 87654 32109</p>
            <p>Email: studentsupport@vivekanandcollege.edu</p>

            <h1>Find Us on the Map</h1>

            <p><a href="https://www.google.com/maps/search/Vivekanand+College/">visit vivekanandcollege.com!</a></p>

            <h1>Send Us a Message</h1>
            <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
          
             <footer class="footer">
          <p> 2025 Vivekanand College. All rights reserved.</p>
        </footer>
            </div>
          </div>
          
       </div>
    )
}
export default ContactPage;