import CoveyIngame from '../../assets/cs_project_screenshots/covey_ingame.png';
import MemedbInteract from '../../assets/cs_project_screenshots/memedb_interact.png';
import maze_player from '../../assets/cs_project_screenshots/maze_player.png';
import image_gui from '../../assets/cs_project_screenshots/image_gui.png';

import SiddharthaBlue from '../../assets/design_project_screenshots/siddhartha_blue.jpg';
import MinionPro from '../../assets/design_project_screenshots/minion_pro.jpg';
import Ramen from '../../assets/design_project_screenshots/ramen.jpg';
import Proposal from '../../assets/design_project_screenshots/project_proposal_1.jpg';

export const CSProjects = [
  {
    name: 'Covey Town Auth',
    desc: 'Extenstions to existing game - Covey Town, with user authentication and profile management',
    hero: CoveyIngame,
    tech: ['Typescript', 'React', 'MobgoDB', 'Auth0', 'Markdown UI'],
  },
  {
    name: 'OMemeDB',
    desc: 'Web app where users can browse, save, like, comment and interact on top memes',
    hero: MemedbInteract,
    tech: ['ReactJS', 'NodeJS', 'Redux', 'MongoDB', 'ImgFlip'],
  },
  {
    name: 'Image Proccessor',
    desc: 'Image manipulation tool with GUI to reformat, and apply filters and effects to images',
    hero: image_gui,
    tech: ['Java', 'Swing'],
  },
  {
    name: 'Maze Mania',
    desc: 'Interactive maze game with randomly generated mazes with algorithmic pathfinding',
    hero: maze_player,
    tech: ['Java'],
  },
];

export const DesignProjects = [
  {
    name: 'Siddhartha Cover',
    desc: 'Redesigned minimalistic covers for the book - Siddhartha: An Indian novel',
    hero: SiddharthaBlue,
    tech: ['Adobe Indesign'],
  },
  {
    name: 'Font Posters',
    desc: 'Series of posters to showcase influencial fonts and their unique characteristics',
    hero: MinionPro,
    tech: ['Adobe Indesign'],
  },
  {
    name: 'Illustrator Experimentation',
    desc: 'Experimentation with creating assets in different styles and shading techniques',
    hero: Ramen,
    tech: ['Adobe Illustrator'],
  },
  {
    name: 'Project Proposal',
    desc: 'Utilized stock background images and custom designed assets to create a mock project proposal',
    hero: Proposal,
    tech: ['Adobe Illustrator'],
  },
];
