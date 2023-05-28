import Pagination from 'react-bootstrap/Pagination';



function Piedepagina() {
  return (
    <Pagination className='container d-flex p-1 justify-content-center align-items-cente'>
      
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
   

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item disabled>{5}</Pagination.Item>

   
      <Pagination.Item disabled>{6}</Pagination.Item>
      <Pagination.Next />
     
    </Pagination>
  );
}

export default Piedepagina;