'use client';

function About() {
    const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <>
      <div className="text-2xl items-center min-h-screen font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white 100vh:flex mt-10 md:mt-20">
        About Me
      <div className="mt-20 max-w-4xl mx-auto text-center text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 px-4">
        <p className="mb-4">
          Hello! I'm Akshat Agarwal, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to build seamless user experiences that are both functional and visually appealing.
        </p>
        <p className="mb-4">
          My journey in web development began several years ago, and since then, I've honed my skills in various programming languages and frameworks. I enjoy tackling complex problems and turning ideas into reality through code.
        </p>
        <p>
          When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or indulging in my love for photography and travel.
        </p>
        <a href="/resume">
          <button className="bg-blue-500 p-3 mt-20 rounded-3xl px-6">View Resume</button>
        </a>
        </div>
      </div>
    </>
  );
}

export default About;