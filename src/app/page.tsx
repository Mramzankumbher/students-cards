import React from 'react'
import StudentCard from '../app/components/card'
interface Student {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
}

const Home = () => {
  const students: Student[] = [
    {
      name: 'Muhammad Ramzan', age: 23, rollNumber: '383648' , className: 'IT'
    },
    {
      name: 'Ayaz', age: 26, rollNumber: '20560' , className: 'M.ed'
    },
    {
      name: 'Irfan', age: 16, rollNumber: '19874' , className: '10th'
    },
  ]
  return (
    
    <div className=' flex md:flex-row flex-col justify-center items-center min-h-screen bg-green-800 px-4'>
      
      {students.map((student , index) => (
        <StudentCard 
        key={index}
        name={student.name}
        age={student.age}
        rollNumber={student.rollNumber}
        className={student.className}
        />

      ))}
     

</div>
    
    
    
  )
}

export default Home