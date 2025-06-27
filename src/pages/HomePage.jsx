import Header from "../components/Header/Header"; 
import { Link } from "react-router-dom";
const HomePage = () =>{
    return(
        <div>
           <Header/>
           
            <div class="content">
          <div class="paragraph">
            <div class="hero-section">
              <img alt="Vivekanand College Camous" class="hero-banner-image" src="images\college-banner-Cz0xylpt.png"></img>
              <div class="hero-overlay-text">
              <h1  id="t">Welcome to Vivekanand College!</h1>
              <p>Your Journey to excellence starts here.</p>
                <Link to="/admissions" className="btn hero-btn">
            Apply Now!
          </Link>{" "}
            </div>
          </div>
            <p>
              <b>Vivekanand College</b> is a premier educational institution
              dedicated to fostering academic excellence, innovation, and
              holistic development. Established in [Year of Establishment, e.g.,
              1980], we have proudly served generations of students, empowering
              them to achieve their full potential.
            </p>
            <p>
              At Vivekanand College, we believe in a vibrant learning
              environment that extends beyond textbooks. Our state-of-the-art
              facilities, experienced faculty, and diverse student community
              create a unique ecosystem where curiosity thrives and future
              leaders are shaped.
            </p>
            <h1>Why Choose Vivekanand College?</h1>
            <ul>
              
              <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
              <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
              <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
              <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
              <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
            </ul>

            <h1>Campus Life & Facilities</h1>
            <div class="im">
            <img src="./images/campus-life-Crkero7B.jpg"></img>
            <img src="./images/students-studying-DbLGuwF_.jpeg" height={200}></img>
            </div>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            
            <div class="o">
            <p >Ready to explore our courses?</p>
            </div>
            <div class="call-to-action">
              <a class="button" href="/admission" >
                Explore Courses
              </a>
            </div>
              <footer class="footer">
          <p> 2025 Vivekanand College. All rights reserved.</p>
        </footer>
            
            
          

          </div>
        </div>
        </div>

    )
}
export default HomePage;