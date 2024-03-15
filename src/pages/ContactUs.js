import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

const teamMembers = [
  {
    name: "Irvin Moore",
    role: "Project and Product Manager",
    bio: "Irvin merges minimalism with tech to lead projects toward intuitive, robust solutions. Dedicated to clean, maintainable code and adept at overcoming complex challenges, his focus on network security underpins his commitment to superior digital experiences.",
    linkedInUrl: "https://linkedin.com/in/irvinmoore",
    githubUrl: "https://github.com/irvinmoore",
    email: "irvin.moore7@gmail.com",
    imageName: "IrvinMoore.jpg",
  },
  {
    name: "Yoshihiro 'Hiro' Yamada",
    role: "Tech Anchor",
    bio: "Hiro specializes in crafting secure, scalable web applications that address pressing issues. Grounded in solid web development with a dedication to continuous learning, Hiro integrates the latest technologies to advance app performance. His work is inspired by Japanese efficiency, signifying his commitment to excellence and innovation.",
    linkedInUrl: "https://www.linkedin.com/in/yoshihiroyamada/",
    githubUrl: "https://github.com/yoshihiroyamada23",
    email: "yoshihiro.yamada1995@gmail.com",
    imageName: "hiro.jpg",
  },
  {
    name: "Jeremie Joseph",
    role: "Design Lead",
    bio: "Jeremie champions engaging, responsive design to enchant and facilitate user experiences. Leveraging modern design frameworks and insights into user behavior, Jeremie creates immersive digital environments. His commitment to professional growth and inspiration from the outdoors enrich his creative solutions.",
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
            <CardText className="contact-card-role">{member.role}</CardText>
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