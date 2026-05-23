import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">

      <section id="Home" className="snap-start min-h-screen">
        <Navbar />

        <Header />
      </section>

     
        
      
      <section id="About" className="snap-start min-h-screen">
        <Profile
          photo="/images/profileImage.jpg"
          name="Maryam Hamrah"
          role="Front-end Developer"
          location="Afghanistan"
          email="Maryam@gmail.com"
          status="Available"
          projects={7}
          bio="Life is a restless river, flowing beyond what
          the eyes can see. Those who fear its waves remain strangers to its
          beauty, but those who dare to dive into its depth uncover treasures
          hidden beneath the surface. And only in those deep waters do we truly
          learn the value of life and quiet wonder of existence."
        />
      
        <About />
      </section>

      <section id="Projects" className="snap-start min-h-screen">
        <Projects />
      </section>
       
      <section id="Contact" className="snap-start">
        <Footer />
      </section>
    </body>
  );
}

export default App;
