import classnames from 'classnames';
import SubjectBox from './SubjectBox';
import {Link} from 'react-router-dom';
function Subjects({clicked,data}) {
  const classes = classnames('sidebar static max-sm:ml-16');
  const subjects = data.map((subject,index)=>{
    return <Link key={index} to={"/subject/"+subject.id}><SubjectBox key={index} subjectName={subject.name}/></Link>
  })

  return (
    <div className={`${classes} ${clicked === 'outer' ? 'ml-16 outer' : 'ml-52 inner'}`}>
      <div className='flex justify-center items-center sidebar'>
          <div className='h-custom-95% w-11/12'>
            <div className='flex flex-row items-center justify-between px-10 h-10 mb-4'>
                <p className='bg-black/20 p-2 rounded rounded-lg'>Acdemic year</p>
                <p className='bg-black/20 p-2 rounded rounded-lg'>Grade</p>
            </div>
            
            <div className='h-custom-94% py-2 flex flex-wrap overflow-auto'>
              {subjects}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Subjects
