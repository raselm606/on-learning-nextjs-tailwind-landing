import Benefit from "@/components/Benefit"
import CourseCategory from "@/components/CourseCategory"
import Courses from "@/components/Courses"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProductSlider from "@/components/ProductSlider"
import Training from "@/components/Training"
import WhyYou from "@/components/WhyYou"
const Landing = () => {
  return (
    <>
    <Header />
    <HeroSection /> 
    <Courses />
    <CourseCategory />
    <Benefit />
    <Training />
    <WhyYou />
    <ProductSlider />
    <Footer />

    </>
  )
}

export default Landing