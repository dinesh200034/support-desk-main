function SubjectBox({subjectName,subjectCode,year}) {
  return (
    <div className='h-28 w-56 mr-6 mb-8 rounded-lg'>
      <div className='h-14 rounded-t-lg bg-[#4457FF]'></div>
      <div className= 'w-56 text-sm p-2 bg-[#D9D9D9] rounded-b-lg'>
      {subjectCode}-{subjectName}-{year}
      </div>
    </div>
  )
}

export default SubjectBox
