import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "../components/style.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto max-w-3xl">
        <div className="flex py-10">
          <div className="self-center flex-1">
            <h1 className="text-6xl font-black uppercase tracking-wider">
              Dan Wood
            </h1>
            <div className="uppercase tracking-wide">Fullstack developer</div>
          </div>
          <Img
            className="w-56 h-56 rounded-full shadow-2xl"
            fluid={data.profile.childImageSharp.fluid}
          />
        </div>
        <div>
          I am a passionate developer with a focus on creating quality,
          functional and maintainable code. I have a love for UI / UX and
          design.
        </div>
        <h2 className="text-lg font-bold uppercase tracking-widest text-indigo-200">
          Specializations
        </h2>
        <ul className="list-disc list-inside">
          <li>Modern Javascript</li>
          <li>React & Typescript</li>
          <li>NodeJS</li>
          <li>C# & .NET framework</li>
          <li>SQL & RDBMS</li>
          <li>AWS & GCP</li>
        </ul>
        <h2>Work Experience</h2>
        <div>Qwilr</div>
        <div>Fullstack Developer</div>
        <div>August 2019 - November 2019</div>
        <ul className="list-disc list-inside">
          <li>Redesigned app dashboard with React JS & Typescript</li>
          <li>Implemented new search using ElasticSearch</li>
          <li>Started organising team Health Checks across company</li>
        </ul>
        <div>Tofi & Plutora</div>
        <div>Fullstack Developer</div>
        <div>February 2017 - August 2019</div>
        <ul className="list-disc list-inside">
          <li>Developed large enterprise SPA for dev teams</li>
          <li>Maintained and developed large legacy codebase</li>
          <li>Started successful knowledge-sharing sessions</li>
          <li>Worked across front and back end</li>
        </ul>
        <h2>Education</h2>
        <div>University of Technology, Sydney</div>
        <div>Bachelor of Mechanical and Mechatronics Engineering</div>
        <div>2011 - 2017</div>
        <ul className="list-disc list-inside">
          <li>
            Worked on creating and programming robots and microcontrollers
          </li>
          <li>Studied control theory and advanced mathematics</li>
        </ul>
        <div>Programming Certifications</div>
        <div>2018 - 2019</div>
        <ul className="list-disc list-inside">
          <li>Microsoft 70-483 - Programming in C#</li>
          <li>Microsoft 70-486 - Developing ASP.NET MVC Web Applications</li>
          <li>Tyler McGinnis - React</li>
          <li>Tyler McGinnis - React Hooks</li>
        </ul>
        <h2>Contact Information</h2>
        <ul>
          <li>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 10-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            6 Place Jules Edouard Couturier 78380 Bougival, France
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 01-.9 0L4 9.62V18h16V9.62z" />
            </svg>
            daniel4wood@icloud.com
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M13.04 14.69l1.07-2.14a1 1 0 011.2-.5l6 2A1 1 0 0122 15v5a2 2 0 01-2 2h-2A16 16 0 012 6V4c0-1.1.9-2 2-2h5a1 1 0 01.95.68l2 6a1 1 0 01-.5 1.21L9.3 10.96a10.05 10.05 0 003.73 3.73zM8.28 4H4v2a14 14 0 0014 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 01-1.3.46 12.04 12.04 0 01-6.02-6.01 1 1 0 01.46-1.3l2.26-1.14L8.28 4z" />
            </svg>
            +33 7 87 55 94 86
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M19.48 13.03A4 4 0 0116 19h-4a4 4 0 110-8h1a1 1 0 000-2h-1a6 6 0 100 12h4a6 6 0 005.21-8.98L21.2 12a1 1 0 10-1.72 1.03zM4.52 10.97A4 4 0 018 5h4a4 4 0 110 8h-1a1 1 0 000 2h1a6 6 0 100-12H8a6 6 0 00-5.21 8.98l.01.02a1 1 0 101.72-1.03z" />
            </svg>
            Github: <a href="http://github.com/valtism/">@valtism</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IndexPage
