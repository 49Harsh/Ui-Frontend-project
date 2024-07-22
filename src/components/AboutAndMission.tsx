import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import image1 from '@/components/image/slider 1.jpg'
import image2 from '@/components/image/slider 2.jpg'
import image3 from '@/components/image/slider 3.jpg'


const AboutAndMission: React.FC = () => {
  const aboutRef = useRef(null)
  const missionRef = useRef(null)
  const teamRef = useRef(null)
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 })

  const teamMembers = [
    { name: 'John Doe', role: 'CEO', image: image1 },
    { name: 'Jane Smith', role: 'CTO', image: image2 },
    { name: 'Mike Johnson', role: 'Lead Designer', image: image3 },
    { name: 'Sarah Brown', role: 'Senior Developer', image: image1 },
  ]

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
      {/* About Us Section */}
      <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and innovators dedicated to creating cutting-edge digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isAboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Image
                src={image1}
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Our Story</h3>
              <p className="text-gray-300 mb-6">
                Founded in 2010, our company has grown from a small startup to a leading digital agency. We've helped hundreds of businesses transform their online presence and achieve their goals.
              </p>
              <p className="text-gray-300 mb-6">
                Our team combines creativity with technical expertise to deliver innovative solutions that drive results. We're committed to staying at the forefront of technology and design trends.
              </p>
              <Button className="bg-white text-purple-900 hover:bg-gray-200">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To empower businesses with innovative digital solutions that drive growth and success in the ever-evolving digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isMissionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {['Innovation', 'Quality', 'Customer Success'].map((value, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-white">{value}</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the talented individuals who make our mission possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isTeamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutAndMission