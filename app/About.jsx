import React from 'react'

const About = () => {
  return (
    <div  name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-max'>
            <div className='pb-8 mt-44 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
            </div>
            <p className='text-xl mt-20 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente pariatur expedita eaque quo minus aut est quod soluta modi asperiores ullam odio libero dignissimos, dolores vero molestias quas eveniet fuga iusto reprehenderit amet accusantium maiores. Commodi sed illo soluta. Nisi porro odio culpa aperiam fugit delectus rerum qui voluptates est.</p>
    <br/>
    <a href="https://drive.google.com/file/d/11eunLAxwjec0gJUzVx9W5Ld51iBMP5c0/view?usp=drivesdk" className=' text-white w-fit px-1 py-2 my-8 mx-auto hover:scale-110 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500  '> DownLoad Resume</a>
  
    </div>
    </div>
  )
}

export default About