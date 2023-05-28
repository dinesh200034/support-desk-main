import { Link } from 'react-router-dom'
import { FaTicketAlt, FaUpload } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Check Your Marks</h1>
        <p>Check choose an option below</p>
      </section>

      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaUpload /> Upload Files
      </Link>

      <Link to='/tickets' className='btn btn-block'>
        <FaTicketAlt />View Documents 
      </Link>
    </>
  )
}

export default Home
