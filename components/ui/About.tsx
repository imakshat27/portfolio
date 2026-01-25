'use client';

function About() {
    const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <>
      <div className="text-2xl font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white">
        About Me
      </div>
    </>
  );
}

export default About;