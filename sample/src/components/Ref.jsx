import { useParams } from 'react-router-dom'

const Ref = () => {
    const {id} = useParams();
  return (
    <div>
      <h1>{id}hello</h1>
    </div>
  )
}

export default Ref
