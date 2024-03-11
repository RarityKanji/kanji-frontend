import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

const teamMembers = [
  {
    name: "Irvin Moore",
    role: "Full-Stack Developer",
    bio: "Irvin is a full-stack developer who blends art and science to craft intuitive user experiences backed by robust backend systems. With a commitment to excellence and a keen eye for detail, he champions minimalistic design and clean, maintainable code. Irvin thrives on solving complex challenges and continuously pushes the boundaries of technology to create digital solutions that exceed expectations. His portfolio showcases a range of projects that demonstrate his ability to translate client needs into seamless, user-centric applications.",
    linkedInUrl: "https://linkedin.com/in/irvinmoore",
    githubUrl: "https://github.com/irvinmoore",
    email: "irvin.moore7@gmail.com",
    imageName: "IrvinMoore.jpg",
  },
  {
    name: "Yoshihiro 'Hiro' Yamada",
    role: "Full-Stack Developer",
    bio: "As a full-stack developer, Hiro specializes in developing scalable and secure web applications that address real-world problems. His approach combines a solid foundation in web development principles with a zest for continuous learning. Hiro is adept at navigating the full web development lifecycle and employs the latest technologies to enhance application performance and security. His commitment to quality and innovation is evident in his contributions to web solutions that are not only effective but also forward-thinking.",
    linkedInUrl: "https://www.linkedin.com/in/yoshihiroyamada/",
    githubUrl: "https://github.com/yoshihiroyamada23",
    email: "yoshihiro.yamada1995@gmail.com",
    imageName: "hiro.jpg",
  },
  {
    name: "Jeremie Joseph",
    role: "Full-Stack Developer",
    bio: "Jeremie excels in full-stack development, with a particular passion for creating responsive and visually engaging user interfaces. His work is driven by the belief that every application should not only function flawlessly but also captivate and delight its users. By leveraging modern frameworks and a deep understanding of user behavior, Jeremie crafts applications that offer immersive digital experiences. His dedication to professional growth and his proactive approach to problem-solving make him a valuable asset to any development team.",
    linkedInUrl: "https://linkedin.com/in/jeremiejoseph",
    githubUrl: "https://github.com/aimforexcellenceinall",
    email: "aimforexcellenceinall@gmail.com",
    imageName: "JeremieJoseph.jpg",
  },
]

const ContactUs = () => {
  return (
    <div className="contact-team-container">
      {teamMembers.map((member, index) => (
        <Card key={index} className="contact-team-card">
          <CardImg 
            top
            width="100%"
            src={`${process.env.PUBLIC_URL}/images/${member.imageName}`}
            alt={member.name}
            className="contact-card-img"
            />
          <CardBody className="contact-card-body">
            <CardTitle className="contact-card-title" tag="h5">{member.name}</CardTitle>
            <CardText className="contact-card-text">{member.bio}</CardText>
            <div className="contact-card-links">
              <button className="contact-link-button-linkedIn" onClick={() => window.open(member.linkedInUrl, '_blank')}>LinkedIn</button>
              <button className="contact-link-button-github" onClick={() => window.open(member.githubUrl, '_blank')}>GitHub</button>
              <button className="contact-link-button-email" onClick={() => window.location.href = `mailto:${member.email}`}>Email</button>
            </div>


          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default ContactUs