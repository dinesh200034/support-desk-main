import classnames from 'classnames';
import SubjectBox from './SubjectBox';
function Subjects({clicked}) {
  const classes = classnames('sidebar border border-red-900 static max-sm:ml-16');
  console.log(typeof(clicked))
  return (
    <div className={`${classes} ${clicked === 'outer' ? 'ml-16 outer' : 'ml-52 inner'}`}>
      <div className='flex justify-center items-center sidebar'>
          <div className='h-custom-95% w-11/12'>
            <div className='flex flex-row items-center justify-between px-10 h-10 mb-4'>
                <p className='bg-black/20 p-2 rounded rounded-lg'>Acdemic year</p>
                <p className='bg-black/20 p-2 rounded rounded-lg'>Grade</p>
            </div>
            <div className='h-custom-94% py-2 flex flex-wrap overflow-auto'>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
                <SubjectBox subjectName='SCS2203-Data Structures and Algorithms 2023'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Subjects
