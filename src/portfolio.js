const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Lv.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Leovander Aditama Syahputra',
  role: 'Android Mobile Developer',

  description:
    'Strengths include a strong enthusiasm for learning new things, critical and creative thinking, and great attention to detail. On the other hand, I’m still gaining professional experience, can be quite stubborn at times, and tend to be more introverted by nature.',
  social: {
    linkedin: 'https://www.linkedin.com/in/aditamasy/',
    github: 'https://github.com/Leovdr',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  {
    name: 'Project 1 - Vehicle License Plate Detection Using the PCA (Principal Component Analysis) Method',
    description:
      'A mobile application for Automatic Number Plate Recognition (ANPR) that detects and recognizes vehicle license plate characters. This application uses YOLO to detect the license plate location in real-time and the Principal Component Analysis (PCA) method to extract features and recognize characters on the plate.',
    stack: ['Kotlin', 'Python', 'Machine Learning', 'YOLO', 'Computer Vision'],
    sourceCode: 'https://github.com/Leovdr/ANPRPCA',
    image: 'anprpca.png',
  },
  {
    name: 'Project 2 - E-Form A',
    description:
      'The E-Form A application was developed to digitize the Batu City Elections Supervisory Agency (Bawaslu) Form A creation process, the primary document for election supervision. This solution facilitates field officers in inputting, storing, and managing election violation report data quickly and accurately.',
    stack: ['Kotlin', 'Firebase'],
    sourceCode: 'https://github.com/Leovdr/Form-A',
    image: 'eforma1.png',
  },
  {
    name: 'Project 3 - StockWise (Warehouse Management System)',
    description:
      'StockWise is a Kotlin-based Android mobile application designed to simplify warehouse inventory management. The app allows users to record and monitor inventory in real time, updating incoming and outgoing quantities. With its intuitive interface, users are expected to improve warehouse operational efficiency.',
    stack: ['Kotlin', 'Firebase', 'Version Control'],
    sourceCode: 'https://github.com/Dev-Hisaki/stockwise-app',
    image: 'stockwise.jpeg',
  },
  {
    name: 'Project 4 - Owari Mobile Apps (Marketplace)',
    description:
      'E-commerce application for apparel sales in Sidoarjo',
    stack: ['Flutter', 'MySQL', 'Firebase'],
    sourceCode: 'https://github.com/Dwkyyrz/owari-mobile',
    image: 'Owari.png',
  },
  {
    name: 'Project 5 - Hand Tracking Voice Recognition',
    description:
      'These technologies employ the OpenCV, Mediapipe, PyAudio, and Speech Recognition libraries to recognize hand gestures and voice commands in real-time. The system is developed using a Raspberry Pi connected to a webcam and microphone as input devices, and a relay to control electronic appliances.',
    stack: ['Python', 'Computer Vision', 'Machine Learning'],
    sourceCode: 'https://github.com/Leovdr/Hand-Tracking-Voice-Recognition',
    image: 'tracking.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Kotlin',
  'Python',
  'Flutter',
  'Dart',
  'Java',
  'Machine Learning',
  'Computer Vision',
  'Firebase',
  'MySQL',
  'Git',
  'Version Control',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'leovanderadds@gmail.com',
}

export { header, about, projects, skills, contact }
