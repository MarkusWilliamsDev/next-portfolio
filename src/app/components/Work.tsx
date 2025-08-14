import Image from 'next/image';
import gifGuesserLogo from '../assets/emoji.png';
import saborLogo from '../assets/SABOR_Logo.webp';
import doeLogo from '../assets/DOE_Logo.png';
import healingPathsLogo from '../assets/Healing_Paths_Logo.png';
import nacuboLogo from '../assets/NACUBO Logo.jpg';
import ngcLogo from '../assets/Northrop Grumman_idtXx9V4ch_1.png';
import { GrReactjs as ReactJS, GrGithub as Github } from 'react-icons/gr';
import {
  SiJavascript as JS,
  SiTailwindcss as Tailwind,
  SiCsharp as CSharp,
  SiFirebase as Firebase,
  SiNodedotjs as NodeJS,
} from 'react-icons/si';
import { TbBrandNextjs as NextJS, TbBrandTypescript as TS } from 'react-icons/tb';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';
import SitecoreLogo from '../assets/logos/SitecoreLogo';
import SitecoreSearchLogo from '../assets/logos/SitecoreSearchLogo';
import SitecoreXMCLogo from '../assets/logos/SitecoreXMCLogo';

const allProjects = [
  {
    name: 'Northrop Grumman',
    link: 'https://www.northropgrumman.com/',
    about:
      'Played key roles in developing core site features, building custom components, integrating APIs, and ensuring site reliability. Contributed to deployment processes and ongoing performance optimization.',
    logo: ngcLogo,
    techUsed: [NextJS, CSharp, SitecoreLogo, SitecoreSearchLogo],
  },
  {
    name: 'Department of Energy Office of Science',
    link: 'https://science.osti.gov',
    about:
      'Built and maintained site components, and developed data visualization tools for thousands of datasets, supporting researchers and government users.',
    logo: doeLogo,
    techUsed: [SitecoreLogo, CSharp, NodeJS],
  },
  {
    name: 'NACUBO',
    link: 'https://www.nacubo.org/',
    about:
      'Refactored the site from a legacy .NET codebase to Next.js, executing a lift-and-shift migration while building new components and maintaining site functionality. Utilized Sitecore Search and React to display over 7,000 pages on the website.',
    logo: nacuboLogo,
    techUsed: [NextJS, TS, SitecoreLogo, SitecoreXMCLogo, SitecoreSearchLogo],
  },
  {
    name: 'San Antonio Board of Realtors',
    link: 'https://sabor.com',
    about:
      'Integrated multiple real estate APIs to aggregate thousands of realtor profiles and property listings, enhancing site functionality and user experience.',
    logo: saborLogo,
    techUsed: [JS, SitecoreLogo, CSharp],
  },

  {
    name: 'Healing Paths',
    link: '',
    about:
      'Developed a progressive web app to support Native American teens in addiction recovery, featuring progress tracking and interactive tools.',
    logo: healingPathsLogo,
    techUsed: [ReactJS, JS, CSharp],
  },
  {
    name: 'Gif Guesser',
    github: 'https://github.com/MarkusWilliamsDev/Gif-Guesser',
    link: 'https://gifguesser.com/',
    about: 'A personal web game built with React utilizing the Giphy API.',
    logo: gifGuesserLogo,
    techUsed: [ReactJS, Tailwind, Firebase],
  },
];

export default function Work() {
  return (
    <div id="work" className="relative bg-gray-50">
      <div className="mx-auto pb-24 px-4 max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-indigo-900 text-center font-semibold text-4xl mb-8">My Work</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-shrink-0 p-6 pr-0 flex justify-center sm:justify-start w-full sm:w-1/3">
                  <Image
                    className="object-contain h-32 w-full"
                    src={project.logo}
                    alt={`${project.name} logo`}
                  />
                </div>
                <div className="flex-1 p-6 pt-0 sm:pt-6 w-full sm:w-2/3 flex flex-col">
                  <p className="text-gray-500 mb-4 flex-1">{project.about}</p>
                  <div className="mt-auto">
                    {project.techUsed && (
                      <div className="flex items-center text-gray-600 mb-4">
                        <p className="pr-2 text-sm">Powered by</p>
                        {project.techUsed.map((TechLogo, techIndex) => (
                          <div key={techIndex} className="w-5 mx-1">
                            <TechLogo className="w-full h-full hover:text-purple-800 duration-300" />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center bg-gray-200 space-x-2 rounded-lg shadow-sm p-2 text-center hover:outline outline-purple-800 text-slate-600 hover:text-purple-800 fill-slate-600 hover:fill-purple-800 hover:bg-gray-300 hover:shadow-md transition-all duration-200"
                        >
                          <Github />
                          <p className="text-sm">View Code</p>
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center bg-gray-200 space-x-2 rounded-lg shadow-sm p-2 text-center hover:outline outline-purple-800 text-slate-600 hover:text-purple-800 fill-slate-600 hover:fill-purple-800 hover:bg-gray-300 hover:shadow-md transition-all duration-200"
                        >
                          <p className="text-sm">Visit Site</p>
                          <LinkIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
